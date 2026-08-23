/* ============================================================
   STRONA BLOG — siatka wpisów + filtrowanie po typie treści.
   Czyta dane z dane/wpisy.js.
   ============================================================ */

(function () {
  var U = I18N.UI;
  var aktywnyFiltr = "all";
  var qubits = [0, 0, 0];

  function fmt(iso) {
    var p = (iso || "").split("-");
    return p.length === 3 ? p[2] + "." + p[1] + "." + p[0] : iso;
  }

  function tagClass(typ) {
    return { artykul: "outline", tutorial: "blue", "mini-kurs": "teal", wideo: "blue" }[typ] || "outline";
  }

  function thumbClass(typ) {
    return { artykul: "hatch", tutorial: "dots-blue", "mini-kurs": "teal", wideo: "dark center" }[typ] || "hatch";
  }

  function buildQubitWidget() {
    var wrap = document.createElement("div");
    wrap.className = "widget";
    function paint() {
      var dec = parseInt(qubits.join("") || "0", 2);
      wrap.innerHTML =
        '<div class="qubits"><div class="qubit-row"></div>' +
        '<div class="qubit-val">= ' + dec + " / 7</div></div>" +
        '<div class="widget-hint">' + I18N.t(U.klikKubit) + "</div>";
      var rowEl = wrap.querySelector(".qubit-row");
      qubits.forEach(function (b, i) {
        var btn = document.createElement("button");
        btn.className = "qubit" + (b ? " on" : "");
        btn.type = "button";
        btn.textContent = "|" + b + "\u27E9";
        btn.addEventListener("click", function () { qubits[i] = b ? 0 : 1; paint(); });
        rowEl.appendChild(btn);
      });
    }
    paint();
    return wrap;
  }

  function postCard(w) {
    var typLabel = I18N.t(U.typEtykieta[w.typ]);
    var thumb;
    if (w.typ === "wideo") {
      // miniatura prosto z YouTube (pole wideoUrl); bez adresu zostaje siatka
      thumb = '<div class="pthumb dark center">' + window.__okladkaYT(w.wideoUrl) +
        '<span class="play"></span>' +
        '<span class="tag blue lg pbadge" style="position:absolute;left:12px;top:12px">' + typLabel + "</span></div>";
    } else if (w.typ === "mini-kurs") {
      var czesci = w.kursCzesci ? " · " + w.kursCzesci + (I18N.lang === "pl" ? " CZĘŚCI" : " PARTS") : "";
      thumb = '<div class="pthumb teal"><span class="tag teal lg pbadge">' + typLabel + czesci + "</span></div>";
    } else if (w.typ === "tutorial") {
      thumb = '<div class="pthumb dots-blue"><span class="tag blue lg pbadge">' + typLabel + "</span></div>";
    } else {
      thumb = '<div class="pthumb hatch"><span class="tag outline lg">' + typLabel + "</span></div>";
    }
    var meta = (w.typ === "mini-kurs" || w.typ === "tutorial") ? "" :
      '<div class="pmeta">' + fmt(w.data) + " · " + I18N.t(w.czas) + "</div>";
    return '<a class="post-card t-' + w.typ + '" data-type="' + w.typ + '" href="wpis.html?w=' + w.slug + '">' +
      thumb +
      '<div class="pbody">' + meta +
        "<h3>" + I18N.t(w.tytul) + "</h3>" +
        "<p>" + I18N.t(w.opis) + "</p>" +
      "</div></a>";
  }

  /* Wyróżniony kafelek — klikalny w całości.
     UWAGA: gdy wpis ma widget z kubitami, całość NIE może być <a> —
     przyciski wewnątrz linku to nieprawidłowy HTML, a klik w kubit
     nawigowałby do wpisu. Wtedy linkami są: część tekstowa i prawa
     grafika, a widget zostaje poza nimi. */
  function featuredCard(w) {
    var adresWpisu = "wpis.html?w=" + w.slug;
    var tresc =
      '<div class="tag-row" style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:13px">' +
        '<span class="tag blue lg">' + I18N.t(U.typEtykieta[w.typ]) + "</span></div>" +
      "<h2>" + I18N.t(w.tytul) + "</h2>" +
      '<p class="lead">' + I18N.t(w.opis) + "</p>";

    if (w.interaktywny) {
      return '<div class="post-card featured t-' + w.typ + '" data-type="' + w.typ + '">' +
        '<div class="split"><div class="left">' +
          '<a class="feat-txt" href="' + adresWpisu + '">' + tresc + "</a>" +
          "<div data-widget-slot></div>" +
        "</div>" +
        '<a class="right grid-bg" href="' + adresWpisu + '"></a>' +
      "</div></div>";
    }
    return '<a class="post-card featured t-' + w.typ + '" data-type="' + w.typ + '" href="' + adresWpisu + '">' +
      '<div class="split"><div class="left">' + tresc + "</div>" +
      '<div class="right grid-bg"></div>' +
      "</div></a>";
  }

  function render() {
    var W = window.WPISY;

    /* HERO */
    document.querySelector("[data-hero]").innerHTML =
      '<div class="lattice"></div><div class="hero-inner">' +
        '<div class="kicker sm">' + I18N.t(U.blogNaglowek) + "</div>" +
        "<h1>" + (I18N.lang === "pl"
          ? "Fizyka dla każdego — czytaj, oglądaj, klikaj."
          : "Physics for everyone — read, watch, play.") + "</h1>" +
        "<p>" + (I18N.lang === "pl"
          ? "Artykuły, wytłumaczenia wideo, mini-kursy i interaktywne tutoriale, które uruchomisz wprost w przeglądarce."
          : "Articles, video explainers, mini-courses and interactive tutorials you can run right in your browser.") +
        "</p></div>";

    /* FILTRY */
    var keys = ["all", "artykul", "tutorial", "mini-kurs", "wideo"];
    var filtry = keys.map(function (k) {
      return '<button class="tab' + (aktywnyFiltr === k ? " active" : "") +
        '" type="button" data-filtr="' + k + '">' + I18N.t(U.filtry[k]) + "</button>";
    }).join("");
    var fbar = document.querySelector("[data-filtry]");
    fbar.innerHTML = filtry;
    fbar.querySelectorAll("[data-filtr]").forEach(function (b) {
      b.addEventListener("click", function () { aktywnyFiltr = b.getAttribute("data-filtr"); render(); });
    });

    /* SIATKA */
    var featured = W.filter(function (w) { return w.wyrozniony; })[0];
    var grid = document.querySelector("[data-posts]");
    var html = "";
    if (featured) html += featuredCard(featured);
    W.forEach(function (w) { if (w !== featured) html += postCard(w); });
    grid.innerHTML = html;

    // widget w wyróżnionym kafelku
    var slot = grid.querySelector("[data-widget-slot]");
    if (slot && featured && featured.interaktywny) slot.appendChild(buildQubitWidget());

    // zastosuj filtr (ukryj/pokaż)
    var visible = 0;
    grid.querySelectorAll("[data-type]").forEach(function (card) {
      var show = aktywnyFiltr === "all" || card.getAttribute("data-type") === aktywnyFiltr;
      card.classList.toggle("hidden", !show);
      if (show) visible++;
    });
    document.querySelector("[data-empty]").style.display = visible === 0 ? "block" : "none";
  }

  I18N.onChange(render);
  document.addEventListener("DOMContentLoaded", render);
})();
