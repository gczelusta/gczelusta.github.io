/* ============================================================
   STRONA WYSTĄPIENIA — wygłoszone referaty + nagrania.
   Czyta dane z dane/wystapienia.js oraz — dla sekcji „Nagrania" —
   z dane/badania.js (tablica wyklady), żeby filmy były opisane
   tylko w jednym miejscu.

   Sekcja z pustą tablicą jest ukrywana (nie zostawia pustego miejsca),
   a gdy nie ma jeszcze niczego — zostaje sama notka „w przygotowaniu".
   ============================================================ */

(function () {
  var U = I18N.UI;

  // "#" i pusty string traktujemy jak brak adresu (jak na stronie Badania)
  function adres(url) {
    return url && url !== "#" ? url : "";
  }

  // etykieta „Nagranie" — klikalna tylko przy prawdziwym adresie
  function link(url, etykieta) {
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

  /* Wiersz wygłoszonego wystąpienia. Pierwsza linia to WYDARZENIE i
     MIEJSCE — oba tą samą czcionką i wielkością, bo tu niosą najwięcej
     informacji. Tytuł referatu jest opcjonalny i idzie do drugiej linii,
     kursywą, razem z rodzajem wystąpienia.

     Jak w publikacjach: cały wiersz NIE może być <a>, bo zagnieżdżony
     link (Nagranie) zostałby przez parser wyrzucony poza kafelek.
     Linkiem jest sama nazwa wydarzenia — miejsce zostaje obok, poza
     odnośnikiem, ale w tej samej linii. */
  function wiersz(w) {
    var wydarzenie = I18N.t(w.wydarzenie);
    var miejsce = I18N.t(w.miejsce);
    var tytul = I18N.t(w.tytul);
    var nagranie = adres(w.nagranie);
    var naglowek = (nagranie
      ? '<a href="' + nagranie + '" target="_blank" rel="noopener">' + wydarzenie + "</a>"
      : wydarzenie) + (miejsce ? " · " + miejsce : "");
    var opis = [I18N.t(w.rodzaj), tytul ? "<em>" + tytul + "</em>" : ""]
      .filter(function (x) { return x; })
      .join(" · ");
    return '<div class="pub">' +
      '<span class="year">' + (w.rok || "") + "</span>" +
      "<span>" +
        '<span class="ptitle">' + naglowek + "</span>" +
        (opis ? '<span class="pcite" style="display:block">' + opis + "</span>" : "") + "</span>" +
      '<span class="links">' + link(w.nagranie, I18N.t(U.etNagranie)) + "</span>" +
    "</div>";
  }

  // kafelek nagrania — taki sam jak w sekcji „Wykłady online" na Badaniach
  function kafelekNagrania(w) {
    var u = adres(w.url);
    return '<a class="talk" href="' + (u || "#") + '"' +
        (u ? ' target="_blank" rel="noopener"' : "") + ">" +
      '<div class="vthumb">' + window.__okladkaYT(w.url) + '<span class="play"></span>' +
        '<span class="dur">' + w.dlugosc + "</span></div>" +
      '<div class="tbody"><div class="tven">' + I18N.t(w.miejsce) + "</div>" +
        '<div class="ttitle">' + I18N.t(w.tytul) + "</div></div>" +
    "</a>";
  }

  function render() {
    var W = window.WYSTAPIENIA || {};
    var wyglaszone = W.wyglaszone || [];
    var nagrania = (window.BADANIA && window.BADANIA.wyklady) || [];

    /* HERO */
    document.querySelector("[data-hero]").innerHTML =
      '<div class="lattice"></div><div class="hero-inner">' +
        '<div class="kicker sm">' + I18N.t(U.wystapienia) + "</div>" +
        "<h1>" + (I18N.lang === "pl"
          ? "Referaty, plakaty, nagrania."
          : "Talks, posters, recordings.") + "</h1>" +
        "<p>" + (I18N.lang === "pl"
          ? "Referaty konferencyjne, seminaria i wykłady popularnonaukowe — poniżej lista wystąpień oraz nagrania tych, które są dostępne online."
          : "Conference talks, seminars and outreach lectures — below is the list of my talks and the recordings of those available online.") +
        "</p></div>";

    /* WYGŁOSZONE */
    var wygHtml = wyglaszone.length
      ? '<div class="feed-title research" style="margin-bottom:8px"><span class="sq"></span>' +
          '<span class="label">' + I18N.t(U.wyglaszone) + "</span></div>" +
        '<p class="section-sub">' + I18N.t(U.wyglaszoneOpis) + "</p>" +
        wyglaszone.map(wiersz).join("")
      : "";

    /* NAGRANIA */
    var nagrHtml = nagrania.length
      ? '<div class="feed-title blog" style="margin-bottom:8px"><span class="ci"></span>' +
          '<span class="label">' + I18N.t(U.nagrania) + "</span></div>" +
        '<p class="section-sub">' + I18N.t(U.wykladyOpis) + "</p>" +
        '<div class="talks">' + nagrania.map(kafelekNagrania).join("") + "</div>"
      : "";

    var maWyg  = pokaz("[data-wyglaszone]", wygHtml);
    var maNagr = pokaz("[data-nagrania]", nagrHtml);

    /* ZAKŁADKI — tylko gdy jest do czego skakać (więcej niż jedna sekcja) */
    var zakladki = [];
    if (maWyg)  zakladki.push(["#wyglaszone", U.wyglaszone]);
    if (maNagr) zakladki.push(["#nagrania", U.nagrania]);
    pokaz("[data-tabs]", zakladki.length > 1
      ? zakladki.map(function (z) {
          return '<a class="tab" href="' + z[0] + '">' + I18N.t(z[1]) + "</a>";
        }).join("")
      : "");

    /* nic jeszcze nie ma — jedna notka zamiast pustej strony */
    pokaz("[data-pusto]", (maWyg || maNagr) ? ""
      : '<p class="section-sub">' + I18N.t(U.wPrzygotowaniu) + "</p>");
  }

  I18N.onChange(render);
  document.addEventListener("DOMContentLoaded", render);
})();
