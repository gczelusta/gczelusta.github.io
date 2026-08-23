/* ============================================================
   STRONA GŁÓWNA — buduje hero oraz dwa równoległe strumienie
   (Badania / Blog). Czyta dane z profil.js, badania.js, wpisy.js.
   ============================================================ */

(function () {
  var U = I18N.UI;
  var qubits = [0, 0, 0];

  function tagFor(typ) {
    var map = { artykul: "outline", tutorial: "blue", "mini-kurs": "teal", wideo: "blue" };
    return map[typ] || "outline";
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

  function render() {
    var P = window.PROFIL, B = window.BADANIA, W = window.WPISY;

    /* HERO */
    var hero = document.querySelector("[data-hero]");
    var chips = (P.tagi || []).map(function (tg) {
      return '<span class="chip">' + I18N.t(tg) + "</span>";
    }).join("");
    hero.innerHTML =
      '<div class="lattice"></div>' +
      '<div class="hero-inner">' +
        '<div class="kicker">' + P.hero.kicker + "</div>" +
        "<h1>" + I18N.t(P.hero.tytul) + "</h1>" +
        "<p>" + I18N.t(P.hero.opis) + "</p>" +
        '<div class="chips">' + chips + "</div>" +
      "</div>";

    /* LEWY STRUMIEŃ — BADANIA */
    var left = document.querySelector("[data-feed-research]");
    var pw = B.projektWiodacy;
    var rows = "";
    // 1) projekt wiodący jako pierwszy wiersz-lista
    B.projekty.slice(0, 1).forEach(function () {});
    // pokaż: 2 publikacje + 1 projekt + 1 wykład (różnorodność)
    var feedItems = [
      { typ: "projekt",    tytul: B.projekty[0].tytul, meta: B.projekty[0].finansowanie, etk: U.filtry, label: { pl:"PROJEKT", en:"PROJECT" }, cls:"outline" },
      { typ: "publikacja", tytul: B.publikacje[0].tytul, meta: B.publikacje[0].czasopismo + " · " + B.publikacje[0].rok, label: { pl:"PUBLIKACJA", en:"PAPER" }, cls:"outline" },
      { typ: "wyklad",     tytul: B.wyklady[0].tytul, meta: I18N.t(B.wyklady[0].miejsce), label: { pl:"▶ WYKŁAD ONLINE", en:"▶ ONLINE TALK" }, cls:"teal" },
      { typ: "publikacja", tytul: B.publikacje[1].tytul, meta: B.publikacje[1].czasopismo + " · " + B.publikacje[1].rok, label: { pl:"PUBLIKACJA", en:"PAPER" }, cls:"outline" }
    ];
    feedItems.forEach(function (it) {
      rows +=
        '<a class="row" href="badania.html">' +
          '<span class="tag ' + it.cls + '">' + I18N.t(it.label) + "</span>" +
          "<span><span class=\"row-title\">" + I18N.t(it.tytul) + "</span>" +
          '<span class="row-meta" style="display:block">' + it.meta + "</span></span>" +
        "</a>";
    });
    left.innerHTML =
      '<div class="feed-head">' +
        '<div class="feed-title research"><span class="sq"></span><span class="label">' + I18N.t(U.czymSieZajmuje) + "</span></div>" +
        '<a class="see-all" href="badania.html">' + I18N.t(U.wszystkie) + "</a>" +
      "</div>" +
      // wyróżniony projekt
      '<a class="card hover" href="badania.html" style="display:block;margin-bottom:22px">' +
        '<div class="thumb grid-bg"><span class="tag solid lg" style="position:absolute;left:18px;top:16px">' +
          (I18N.lang === "pl" ? "PROJEKT" : "PROJECT") + "</span></div>" +
        '<div class="body">' +
          '<div class="tag-row">' +
            '<span class="tag teal lg">' + I18N.t(pw.status === "w-toku" ? U.statusWtoku : U.statusZak) + "</span>" +
            '<span class="tag outline lg">' + I18N.t(pw.rola) + "</span>" +
            '<span class="tag outline lg">' + pw.finansowanie + "</span>" +
          "</div>" +
          "<h3>" + I18N.t(pw.tytul) + "</h3>" +
          "<p>" + I18N.t(pw.opis) + "</p>" +
        "</div>" +
      "</a>" +
      rows;

    /* PRAWY STRUMIEŃ — BLOG */
    var right = document.querySelector("[data-feed-blog]");
    var featured = W.filter(function (w) { return w.wyrozniony; })[0] || W[0];
    var rest = W.filter(function (w) { return w !== featured; }).slice(0, 4);
    var blogRows = "";
    rest.forEach(function (w) {
      blogRows +=
        '<a class="row" href="wpis.html?w=' + w.slug + '">' +
          '<span class="tag ' + tagFor(w.typ) + '">' + I18N.t(U.typEtykieta[w.typ]) + "</span>" +
          "<span><span class=\"row-title\">" + I18N.t(w.tytul) + "</span>" +
          '<span class="row-meta" style="display:block">' + formatData(w.data) + " · " + I18N.t(w.czas) + "</span></span>" +
        "</a>";
    });

    /* Wyróżniony wpis — kafelek prowadzi do wpisu (tak jak kafelek
       projektu w lewym strumieniu).
       UWAGA: gdy wpis ma widget z kubitami, kafelek NIE może być <a> —
       przyciski wewnątrz linku to nieprawidłowy HTML, a klik w kubit
       nawigowałby do wpisu. Wtedy linkiem jest sama część tekstowa. */
    var adresWpisu = "wpis.html?w=" + featured.slug;
    var stylKafelka = "border-color:#DCE6F2;margin-bottom:22px";
    var trescWpisu =
      '<div class="tag-row"><span class="tag blue lg">' + I18N.t(U.typEtykieta[featured.typ]) + "</span></div>" +
      "<h3>" + I18N.t(featured.tytul) + "</h3>" +
      '<p style="margin-bottom:' + (featured.interaktywny ? "18px" : "0") + '">' + I18N.t(featured.opis) + "</p>";

    right.innerHTML =
      '<div class="feed-head">' +
        '<div class="feed-title blog"><span class="ci"></span><span class="label">' + I18N.t(U.blogNaglowek) + "</span></div>" +
        '<a class="see-all" href="blog.html">' + I18N.t(U.wszystkie) + "</a>" +
      "</div>" +
      (featured.interaktywny
        ? '<div class="card" data-featured style="' + stylKafelka + '">' +
            '<div class="body" data-body><a href="' + adresWpisu + '">' + trescWpisu + "</a></div>" +
          "</div>"
        : '<a class="card hover" data-featured href="' + adresWpisu + '" style="display:block;' + stylKafelka + '">' +
            '<div class="body">' + trescWpisu + "</div>" +
          "</a>") +
      blogRows;

    // widget kubitów — świadomie POZA linkiem (patrz uwaga wyżej)
    if (featured.interaktywny) {
      right.querySelector("[data-featured] [data-body]").appendChild(buildQubitWidget());
    }
  }

  function formatData(iso) {
    var p = (iso || "").split("-");
    return p.length === 3 ? p[2] + "." + p[1] + "." + p[0] : iso;
  }
  window.__formatData = formatData;

  I18N.onChange(render);
  document.addEventListener("DOMContentLoaded", render);
})();
