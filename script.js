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
        nome: "Red Burn",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9879114"
      },
      {
        nome: "Grixis Affinity",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9882514"
      },
      {
        nome: "Elves",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9898315"
      },
      {
        nome: "Goblins Kuldotha",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012430"
      },
      {
        nome: "MonoBlue Affinity",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012433"
      },
      {
        nome: "GW Auras",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10023000"
      },
      {
        nome: "Simic Clues",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10023004"
      }
    ]
  },
  {
    categoria: "Combo",
    listas: [
      {
        nome: "Restore Balance",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9874485"
      },
      {
        nome: "Simic Neomorph",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012441"
      },
      {
        nome: "Yorion 4C",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10023104"
      },
      {
        nome: "Dredge",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9872841"
      },
      {
        nome: "Mill",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9804988"
      },
      {
        nome: "Abzan Reanimate",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9804743"
      }
    ]
  },
  {
    categoria: "Control",
    listas: [
      {
        nome: "8 Rack",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9904270"
      },
      {
        nome: "Izzet Control",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012435"
      },
      {
        nome: "Azorius Judgement",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012438"
      },
      {
        nome: "MonoU Control",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10022996"
      },
      {
        nome: "Dimir Control",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9823062"
      }
    ]
  },
  {
    categoria: "Midrange",
    listas: [
      {
        nome: "Selesnya Enchantment",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9879508"
      },
      {
        nome: "Eldrazi",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9919356"
      },
      {
        nome: "Rakdos Midrange",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012425"
      },
      {
        nome: "Esper Artifact",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10012431"
      },
      {
        nome: "Spirits UW",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=10023002"
      },
      {
        nome: "Simic Madness",
        url: "https://www.ligamagic.com.br/?view=dks/deck&id=9829573"
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
  const list = document.getElementById("nav-list");
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

/* ── Botão PEDRIN ────────────────────────────────────────── */

const pedrinAudio = new Audio(
  "PEDRIN.mp3"
);

document.addEventListener("DOMContentLoaded", function () {

  const pedrinBtn =
    document.getElementById("pedrin-btn");

  if (pedrinBtn) {

    pedrinBtn.addEventListener("click", function () {

      // Reinicia o áudio
      pedrinAudio.currentTime = 0;

      // Toca o áudio
      pedrinAudio.play();

    });

  }

});