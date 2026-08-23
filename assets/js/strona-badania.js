/* ============================================================
   STRONA BADANIA — projekty, publikacje, wykłady online.
   Czyta dane z dane/badania.js.
   ============================================================ */

(function () {
  var U = I18N.UI;

  function statusTag(status) {
    if (status === "zakonczony")
      return '<span class="tag violet lg">' + I18N.t(U.statusZak) + "</span>";
    return '<span class="tag teal lg">' + I18N.t(U.statusWtoku) + "</span>";
  }

  function render() {
    var B = window.BADANIA;

    /* HERO */
    document.querySelector("[data-hero]").innerHTML =
      '<div class="lattice"></div><div class="hero-inner">' +
        '<div class="kicker sm">' + I18N.t(U.czymSieZajmuje) + "</div>" +
        "<h1>" + (I18N.lang === "pl"
          ? "Projekty, publikacje i wykłady."
          : "Projects, papers and talks.") + "</h1>" +
        "<p>" + (I18N.lang === "pl"
          ? "Moja praca leży na styku kwantowej grawitacji, obliczeń i symulacji kwantowych. Poniżej projekty, które prowadzę lub w których biorę udział, wybrane publikacje oraz nagrania wystąpień dostępne online."
          : "My work sits at the intersection of quantum gravity, quantum computing and simulation. Below the projects I lead or take part in, selected publications, and recorded talks available online.") +
        "</p></div>";

    /* PROJEKTY */
    var pw = B.projektWiodacy;
    /* Kafelek projektu wiodącego jest klikalny tak samo jak mniejsze
       .project-card — ale tylko wtedy, gdy w danych jest prawdziwy adres.
       Przy url: "#" zostaje zwykły <div>, żeby nie udawał linku. */
    var pwUrl = adres(pw.url);
    var pwTresc =
        '<div class="visual grid-bg"><span class="tag solid lg badge">' + I18N.t(U.projektWiodacy) + "</span></div>" +
        '<div class="info">' +
          '<div class="tag-row" style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:14px">' +
            statusTag(pw.status) +
            '<span class="tag outline lg">' + I18N.t(pw.rola) + "</span>" +
          "</div>" +
          "<h2>" + I18N.t(pw.tytul) + "</h2>" +
          '<p class="lead">' + I18N.t(pw.opis) + "</p>" +
          '<div class="meta-list">' +
            mrow(U.etFinansowanie, pw.finansowanie) +
            mrow(U.etZespol, I18N.t(pw.zespol)) +
            mrow(U.etPartnerzy, pw.partnerzy) +
          "</div>" +
        "</div>";
    var pwHtml = pwUrl
      ? '<a class="project-feat hover" href="' + pwUrl + '">' + pwTresc + "</a>"
      : '<div class="project-feat">' + pwTresc + "</div>";

    // jak wyżej: linkiem tylko te projekty, które mają prawdziwy adres
    var cards = B.projekty.map(function (p) {
      var u = adres(p.url);
      var tresc =
        '<div class="tag-row" style="display:flex;flex-wrap:wrap;gap:7px;margin-bottom:13px">' +
          statusTag(p.status) +
          '<span class="tag outline lg">' + I18N.t(p.rola) + "</span>" +
        "</div>" +
        "<h3>" + I18N.t(p.tytul) + "</h3>" +
        "<p>" + I18N.t(p.opis) + "</p>" +
        '<div class="fund">' + p.finansowanie + "</div>";
      return u
        ? '<a class="project-card hover" href="' + u + '">' + tresc + "</a>"
        : '<div class="project-card">' + tresc + "</div>";
    }).join("");

    document.querySelector("[data-projekty]").innerHTML =
      sectionHead("sq", "research", U.projekty) +
      pwHtml + '<div class="project-grid">' + cards + "</div>";

    /* PUBLIKACJE */
    /* UWAGA: wiersz publikacji NIE może być elementem <a>.
       Zagnieżdżone linki (<a> w <a>) są nieprawidłowym HTML-em — parser
       przeglądarki zamyka zewnętrzny <a> razem ze <span class="links">,
       przez co linki PDF/arXiv lądują POZA nim i tracą wszystkie style
       (odstęp, ramka, font). Dlatego wiersz to <div>, a linkiem jest
       sam tytuł. */
    var pubs = B.publikacje.map(function (p) {
      var tytul = I18N.t(p.tytul);
      var glowny = adres(p.arxiv) || adres(p.pdf);
      return '<div class="pub">' +
        '<span class="year">' + p.rok + "</span>" +
        "<span>" +
          (glowny
            ? '<a class="ptitle" href="' + glowny + '" target="_blank" rel="noopener">' + tytul + "</a>"
            : '<span class="ptitle">' + tytul + "</span>") +
          '<span class="pcite" style="display:block">' + p.autorzy + " · <em>" + p.czasopismo + "</em> " + p.szczegoly + "</span></span>" +
        '<span class="links">' + linkPub(p.pdf, I18N.t(U.etPdf)) + linkPub(p.arxiv, "arXiv") + "</span>" +
      "</div>";
    }).join("");

    document.querySelector("[data-publikacje]").innerHTML =
      '<div class="section-head"><div class="feed-title research"><span class="sq"></span>' +
        '<span class="label">' + I18N.t(U.publikacje) + "</span></div>" +
        '<span class="see-all">' +
          profilLink("orcid", "ORCID") + " · " + profilLink("scholar", "Scholar") + " →" +
        "</span></div>" +
      pubs;

    /* WYKŁADY ONLINE */
    var talks = B.wyklady.map(function (w) {
      var u = adres(w.url);
      // nagrania są zewnętrzne (YouTube) — otwieramy w nowej karcie
      return '<a class="talk" href="' + (u || "#") + '"' +
          (u ? ' target="_blank" rel="noopener"' : "") + ">" +
        '<div class="vthumb">' + okladkaYT(w.url) + '<span class="play"></span>' +
          '<span class="dur">' + w.dlugosc + "</span></div>" +
        '<div class="tbody"><div class="tven">' + I18N.t(w.miejsce) + "</div>" +
          '<div class="ttitle">' + I18N.t(w.tytul) + "</div></div>" +
      "</a>";
    }).join("");

    document.querySelector("[data-wyklady]").innerHTML =
      '<div class="feed-title blog" style="margin-bottom:8px"><span class="ci"></span>' +
        '<span class="label">' + I18N.t(U.wykladyOnline) + "</span></div>" +
      '<p class="section-sub">' + I18N.t(U.wykladyOpis) + "</p>" +
      '<div class="talks">' + talks + "</div>";
  }

  // "#" i pusty string traktujemy jak brak adresu
  function adres(url) {
    return url && url !== "#" ? url : "";
  }

  // miniatura YouTube — wspólny pomocnik z assets/js/wspolne.js
  var okladkaYT = window.__okladkaYT;

  /* Odnośnik do profilu zewnętrznego (ORCID / Scholar) — adres bierzemy
     z PROFIL.linki, żeby nie dublować go w dwóch miejscach. Gdy danego
     wpisu tam nie ma, zostaje sama etykieta (bez martwego linku). */
  function profilLink(etykieta, tekst) {
    var l = ((window.PROFIL && window.PROFIL.linki) || []).filter(function (x) {
      return x.etykieta === etykieta;
    })[0];
    var u = l ? adres(l.url) : "";
    return u
      ? '<a href="' + u + '" target="_blank" rel="noopener">' + tekst + "</a>"
      : tekst;
  }

  // etykieta PDF / arXiv — klikalna tylko wtedy, gdy adres jest prawdziwy
  function linkPub(url, etykieta) {
    var u = adres(url);
    return u
      ? '<a href="' + u + '" target="_blank" rel="noopener">' + etykieta + "</a>"
      : '<span class="brak">' + etykieta + "</span>";
  }

  function mrow(key, val) {
    return '<div class="mrow"><span class="mkey">' + I18N.t(key) + "</span><span>" + val + "</span></div>";
  }
  function sectionHead(icon, kind, label) {
    return '<div class="feed-title ' + kind + '" style="margin-bottom:26px">' +
      '<span class="' + icon + '"></span><span class="label">' + I18N.t(label) + "</span></div>";
  }

  I18N.onChange(render);
  document.addEventListener("DOMContentLoaded", render);
})();
