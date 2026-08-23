/* ============================================================
   STRONA DYDAKTYKA — zajęcia, materiały, prace dyplomowe.
   Czyta dane z dane/dydaktyka.js.

   Sekcja z pustą tablicą jest ukrywana (nie zostawia pustego miejsca),
   a gdy nie ma jeszcze niczego — zostaje sama notka „w przygotowaniu".
   Dzięki temu strona wygląda sensownie na każdym etapie uzupełniania.
   ============================================================ */

(function () {
  var U = I18N.UI;

  // "#" i pusty string traktujemy jak brak adresu (jak na stronie Badania)
  function adres(url) {
    return url && url !== "#" ? url : "";
  }

  function statusTag(status) {
    if (!status) return "";
    if (status === "zakonczony")
      return '<span class="tag violet lg">' + I18N.t(U.statusZak) + "</span>";
    return '<span class="tag teal lg">' + I18N.t(U.statusWtoku) + "</span>";
  }

  /* Kafelek zajęć / tematu pracy — klikalny tylko wtedy, gdy w danych
     jest prawdziwy adres (inaczej zwykły <div>, bez martwego linku). */
  function karta(p, stopka) {
    var u = adres(p.url);
    var tresc =
      '<div class="tag-row" style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:13px">' +
        statusTag(p.status) +
        (p.poziom ? '<span class="tag outline lg">' + I18N.t(p.poziom) + "</span>" : "") +
        (p.rola ? '<span class="tag outline lg">' + I18N.t(p.rola) + "</span>" : "") +
      "</div>" +
      "<h3>" + I18N.t(p.tytul) + "</h3>" +
      "<p>" + I18N.t(p.opis) + "</p>" +
      (stopka ? '<div class="fund">' + stopka + "</div>" : "");
    return u
      ? '<a class="project-card hover" href="' + u + '">' + tresc + "</a>"
      : '<div class="project-card">' + tresc + "</div>";
  }

  // etykieta PDF / Kod — klikalna tylko przy prawdziwym adresie
  function linkMat(url, etykieta) {
    var u = adres(url);
    return u
      ? '<a href="' + u + '" target="_blank" rel="noopener">' + etykieta + "</a>"
      : '<span class="brak">' + etykieta + "</span>";
  }

  // wstawia treść i chowa sekcję, gdy nic w niej nie ma
  function pokaz(sel, html) {
    var host = document.querySelector(sel);
    if (!host) return false;
    host.innerHTML = html || "";
    host.style.display = html ? "" : "none";
    return !!html;
  }

  function render() {
    var D = window.DYDAKTYKA || {};
    var kursy = D.kursy || [], materialy = D.materialy || [], prace = D.prace || [];

    /* HERO */
    document.querySelector("[data-hero]").innerHTML =
      '<div class="lattice"></div><div class="hero-inner">' +
        '<div class="kicker sm">' + I18N.t(U.dydaktyka) + "</div>" +
        "<h1>" + (I18N.lang === "pl"
          ? "Uczyć tak, żeby dało się zrozumieć."
          : "Teaching meant to be understood.") + "</h1>" +
        "<p>" + (I18N.lang === "pl"
          ? "Zajęcia, które prowadzę na Uniwersytecie Jagiellońskim oraz materiały do pobrania."
          : "Courses I teach at the Jagiellonian University and materials to download.") +
        "</p></div>";

    /* ZAJĘCIA */
    var kursyHtml = kursy.length
      ? '<div class="feed-title research" style="margin-bottom:26px"><span class="sq"></span>' +
          '<span class="label">' + I18N.t(U.kursy) + "</span></div>" +
        '<div class="project-grid">' +
          kursy.map(function (k) { return karta(k, k.okres || ""); }).join("") +
        "</div>"
      : "";

    /* MATERIAŁY */
    var matHtml = materialy.length
      ? '<div class="feed-title research" style="margin-bottom:8px"><span class="sq"></span>' +
          '<span class="label">' + I18N.t(U.materialy) + "</span></div>" +
        '<p class="section-sub">' + I18N.t(U.materialyOpis) + "</p>" +
        materialy.map(function (m) {
          return '<div class="pub">' +
            '<span class="year">' + (m.rok || "") + "</span>" +
            '<span><span class="ptitle">' + I18N.t(m.tytul) + "</span>" +
              '<span class="pcite" style="display:block">' + I18N.t(m.opis) + "</span></span>" +
            '<span class="links">' + linkMat(m.pdf, "PDF") +
              linkMat(m.kod, I18N.t(U.etKod)) + "</span>" +
          "</div>";
        }).join("")
      : "";

    /* PRACE DYPLOMOWE */
    var praceHtml = prace.length
      ? '<div class="feed-title blog" style="margin-bottom:8px"><span class="ci"></span>' +
          '<span class="label">' + I18N.t(U.prace) + "</span></div>" +
        '<p class="section-sub">' + I18N.t(U.praceOpis) + "</p>" +
        '<div class="project-grid">' +
          prace.map(function (p) { return karta(p, ""); }).join("") +
        "</div>"
      : "";

    var maKursy = pokaz("[data-kursy]", kursyHtml);
    var maMat   = pokaz("[data-materialy]", matHtml);
    var maPrace = pokaz("[data-prace]", praceHtml);

    /* ZAKŁADKI — tylko dla sekcji, które mają treść (i tylko gdy jest
       więcej niż jedna, bo do jednej sekcji nie ma po co skakać) */
    var zakladki = [];
    if (maKursy) zakladki.push(["#kursy", U.kursy]);
    if (maMat)   zakladki.push(["#materialy", U.materialy]);
    if (maPrace) zakladki.push(["#prace", U.prace]);
    pokaz("[data-tabs]", zakladki.length > 1
      ? zakladki.map(function (z) {
          return '<a class="tab" href="' + z[0] + '">' + I18N.t(z[1]) + "</a>";
        }).join("")
      : "");

    /* nic jeszcze nie ma — jedna notka zamiast pustej strony */
    pokaz("[data-pusto]", (maKursy || maMat || maPrace) ? ""
      : '<p class="section-sub">' + I18N.t(U.wPrzygotowaniu) + "</p>");
  }

  I18N.onChange(render);
  document.addEventListener("DOMContentLoaded", render);
})();
