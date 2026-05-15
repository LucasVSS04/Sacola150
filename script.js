/* ============================================================
   SACOLA 150 – script.js
   Dados dos decks e renderização dinâmica das categorias.
   Para adicionar, remover ou editar decks, edite apenas o
   array `decks` abaixo.
   ============================================================ */

const decks = [
  {
    categoria: "Aggro",
    listas: [
      {
        nome: "Deck Aggro 01",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10029555"
      },
      {
        nome: "Deck Aggro 02",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10000204"
      }
    ]
  },
  {
    categoria: "Combo",
    listas: [
      {
        nome: "Deck Combo 01",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9995249"
      }
    ]
  },
  {
    categoria: "Control",
    listas: [
      {
        nome: "Deck Control 01",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9970353"
      }
    ]
  },
  {
    categoria: "Midrange",
    listas: [
      {
        nome: "Deck Midrange 01",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9932637"
      }
    ]
  },
];

/* ── Renderização ─────────────────────────────────────────── */
function renderDecks() {
  const container = document.getElementById("decks-container");
  if (!container) return;

  const fragment = document.createDocumentFragment();

  decks.forEach(function (group) {
    // Category block wrapper
    const block = document.createElement("div");
    block.className = "category-block";

    // Category header
    const header = document.createElement("div");
    header.className = "category-header";

    const icon = document.createElement("span");
    icon.className = "category-icon";
    icon.textContent = group.icon || "▸";

    const name = document.createElement("span");
    name.className = "category-name";
    name.textContent = group.categoria;

    header.appendChild(icon);
    header.appendChild(name);
    block.appendChild(header);

    // Deck list
    const ul = document.createElement("ul");
    ul.className = "deck-list";

    group.listas.forEach(function (deck) {
      const li = document.createElement("li");
      li.className = "deck-item";

      const link = document.createElement("a");
      link.className = "deck-link";
      link.href = deck.url;
      link.textContent = deck.nome;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const badge = document.createElement("span");
      badge.className = "ext-badge";
      badge.textContent = "LigaMagic";

      li.appendChild(link);
      li.appendChild(badge);
      ul.appendChild(li);
    });

    block.appendChild(ul);
    fragment.appendChild(block);
  });

  container.appendChild(fragment);
}

/* ── Mobile nav toggle ────────────────────────────────────── */
function initNavToggle() {
  const toggle = document.getElementById("nav-toggle");
  const list   = document.getElementById("nav-list");
  if (!toggle || !list) return;

  toggle.addEventListener("click", function () {
    list.classList.toggle("is-open");
  });

  // Close menu when a link is clicked
  list.querySelectorAll(".nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      list.classList.remove("is-open");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !list.contains(e.target)) {
      list.classList.remove("is-open");
    }
  });
}

/* ── Init ─────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", function () {
  renderDecks();
  initNavToggle();
});