/* ============================================================
   WSPÓLNE — buduje nawigację i stopkę na każdej stronie,
   podpina przełącznik języka. Czyta dane z dane/profil.js.
   ============================================================ */

(function () {
  var U = I18N.UI;

  function el(tag, attrs, html) {
    var n = document.createElement(tag);
    if (attrs) for (var k in attrs) {
      if (k === "class") n.className = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    if (html != null) n.innerHTML = html;
    return n;
  }

  /* ---- Nawigacja ---- */
  function renderNav() {
    var host = document.querySelector("[data-nav]");
    if (!host) return;
    var page = document.body.getAttribute("data-page"); // domowa | badania | blog | wpis
    var P = window.PROFIL;

    function navLink(key, href) {
      var active = (key === "domowa" && (page === "domowa")) ||
                   (key === "badania" && (page === "badania")) ||
                   (key === "blog" && (page === "blog" || page === "wpis")) ||
                   (key === "dydaktyka" && (page === "dydaktyka")) ||
                   (key === "wystapienia" && (page === "wystapienia"));
      return '<a href="' + href + '" class="' + (active ? "active" : "") +
             '" data-i="nav.' + key + '">' + I18N.t(U.nav[key]) + "</a>";
    }

    host.className = "nav";
    host.innerHTML =
      '<a class="brand" href="index.html">' +
        '<span class="dot"></span>' +
        '<span class="name">' + P.nazwiskoPelne + "</span>" +
      "</a>" +
      '<div class="nav-links">' +
        navLink("domowa", "index.html") +
        navLink("badania", "badania.html") +
        navLink("blog", "blog.html") +
        navLink("dydaktyka", "dydaktyka.html") +
        navLink("wystapienia", "wystapienia.html") +
        '<button class="lang-btn" type="button">' + I18N.przyciskLabel() + "</button>" +
      "</div>";

    host.querySelector(".lang-btn").addEventListener("click", I18N.toggle);
  }

  /* ---- Stopka ---- */
  function renderFooter() {
    var host = document.querySelector("[data-footer]");
    if (!host) return;
    var P = window.PROFIL;
    var tall = host.hasAttribute("data-tall");
    host.className = "footer" + (tall ? " tall" : "");

    var links = '<a href="index.html" data-i="domowa">' + I18N.t(U.domowa) + "</a>";
    (P.linki || []).forEach(function (l) {
      links += '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.etykieta + "</a>";
    });

    host.innerHTML =
      "<span>" + I18N.t(P.afiliacja) + "</span>" +
      '<span class="footer-links">' + links + "</span>";
  }

  /* ---- Dane strukturalne (schema.org) ----
     Wizytówka autora w formacie, który rozumieją wyszukiwarki — dzięki niej
     Google może pokazać powiązanie z UJ, ORCID-em i kanałem YouTube.
     Budujemy ją z dane/profil.js, żeby nazwisko, afiliacja i linki
     pozostały opisane w jednym miejscu. Pojedynczy wpis bloga dokłada
     do tego własny znacznik (patrz strona-wpis.js). */
  function renderDaneStrukturalne() {
    var P = window.PROFIL;
    if (!P || !P.adres) return;
    var baza = P.adres;

    var el = document.getElementById("ld-profil");
    if (!el) {
      el = document.createElement("script");
      el.type = "application/ld+json";
      el.id = "ld-profil";
      document.head.appendChild(el);
    }

    var orcid = (P.linki || []).filter(function (l) {
      return l.etykieta === "orcid";
    })[0];

    el.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Person",
          "@id": baza + "#osoba",
          name: P.nazwiskoPelne,
          url: baza,
          jobTitle: I18N.t({ pl: "Badacz", en: "Researcher" }),
          affiliation: { "@type": "CollegeOrUniversity", name: I18N.t(P.afiliacja) },
          knowsAbout: (P.tagi || []).map(function (t) { return I18N.t(t); }),
          sameAs: (P.linki || []).map(function (l) { return l.url; }),
          identifier: orcid
            ? { "@type": "PropertyValue", propertyID: "ORCID", value: orcid.url }
            : undefined
        },
        {
          "@type": "WebSite",
          "@id": baza + "#strona",
          url: baza,
          name: P.nazwiskoPelne,
          inLanguage: I18N.lang === "pl" ? "pl-PL" : "en",
          publisher: { "@id": baza + "#osoba" }
        }
      ]
    });
  }

  function renderChrome() { renderNav(); renderFooter(); renderDaneStrukturalne(); }

  I18N.onChange(renderChrome);
  document.addEventListener("DOMContentLoaded", function () {
    renderChrome();
    I18N.init();
  });

  /* ---- Miniatury YouTube (używane na Badaniach i na Blogu) ---- */

  /* ID filmu z adresu — obsługuje watch?v=…, youtu.be/…, /embed/…,
     /shorts/… oraz /live/…  (ID zawsze ma 11 znaków). */
  function youtubeId(url) {
    var m = /(?:youtu\.be\/|[?&]v=|\/embed\/|\/shorts\/|\/live\/)([A-Za-z0-9_-]{11})/.exec(url || "");
    return m ? m[1] : "";
  }

  /* Miniatura filmu. YouTube udostępnia ją pod stałym adresem — nie trzeba
     klucza API ani osadzania odtwarzacza (brak ciasteczek YT na stronie).
       maxresdefault.jpg — 1280×720, ale NIE istnieje dla każdego filmu
       hqdefault.jpg     — 480×360, zawsze dostępna → awaryjnie przez onerror
     Gdy w adresie nie ma ID (np. film spoza YT) zwracamy dotychczasową
     siatkę, żeby kafelek nie został pusty. */
  function okladkaYT(url) {
    var id = youtubeId(url);
    if (!id) return '<div class="grid"></div>';
    var baza = "https://img.youtube.com/vi/" + id + "/";
    return '<img class="vshot" src="' + baza + 'maxresdefault.jpg" alt="" loading="lazy" ' +
           "onerror=\"this.onerror=null;this.src='" + baza + "hqdefault.jpg'\">";
  }

  // udostępnij pomocników innym skryptom
  window.__el = el;
  window.__youtubeId = youtubeId;
  window.__okladkaYT = okladkaYT;
})();
