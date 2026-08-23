/* ============================================================
   POJEDYNCZY WPIS (wpis.html?w=slug)
   Wczytuje treść z pliku  wpisy/<slug>.<jezyk>.md  i renderuje Markdown.
   Metadane bierze z dane/wpisy.js.
   ============================================================ */

(function () {
  var U = I18N.UI;

  function fmt(iso) {
    var p = (iso || "").split("-");
    return p.length === 3 ? p[2] + "." + p[1] + "." + p[0] : iso;
  }

  function param(name) {
    return new URLSearchParams(window.location.search).get(name);
  }

  function findPost(slug) {
    return (window.WPISY || []).filter(function (w) { return w.slug === slug; })[0];
  }

  /* ------------------------------------------------------------
     Markdown + LaTeX.
     Wzory WYCINAMY PRZED parsowaniem Markdownu i podmieniamy na
     znaczniki @@WZOR0@@ — inaczej marked potraktowałby np. _ albo *
     wewnątrz LaTeX-a jako kursywę i rozbiłby wzór. Po sparsowaniu
     wstawiamy w to miejsce gotowy HTML z KaTeX-a.
        $$...$$  → wzór blokowy (wyśrodkowany, osobny akapit)
        $...$    → wzór w linii
     ------------------------------------------------------------ */
  function renderujTresc(md) {
    var wzory = [];

    function schowaj(tex, blokowy) {
      wzory.push({ tex: tex, blokowy: blokowy });
      return "@@WZOR" + (wzory.length - 1) + "@@";
    }

    md = md
      .replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) { return schowaj(tex, true); })
      .replace(/\$(?!\s)([^$\n]*?[^\s$])\$/g, function (_, tex) { return schowaj(tex, false); });

    var html = window.marked ? window.marked.parse(md) : md;

    return html.replace(/@@WZOR(\d+)@@/g, function (caly, i) {
      var w = wzory[+i];
      if (!w) return caly;
      // gdy KaTeX się nie wczytał — pokaż surowy wzór zamiast znacznika
      if (!window.katex) {
        var d = w.blokowy ? "$$" : "$";
        return "<code>" + d + w.tex + d + "</code>";
      }
      return window.katex.renderToString(w.tex, {
        displayMode: w.blokowy,
        throwOnError: false
      });
    });
  }

  function render() {
    var slug = param("w");
    var post = findPost(slug);
    var host = document.querySelector("[data-article]");
    document.querySelector("[data-empty]").style.display = "none";

    if (!post) {
      host.innerHTML =
        '<a class="back" href="blog.html">' + I18N.t(U.powrot) + "</a>" +
        "<h1>" + (I18N.lang === "pl" ? "Nie znaleziono wpisu" : "Post not found") + "</h1>" +
        '<p class="lede">' + (I18N.lang === "pl"
          ? "Sprawdź adres lub wróć do listy wpisów."
          : "Check the address or return to the blog.") + "</p>";
      return;
    }

    document.title = I18N.t(post.tytul) + " · " + window.PROFIL.nazwiskoPelne;

    var typLabel = I18N.t(U.typEtykieta[post.typ]);
    var cls = { artykul: "outline", tutorial: "blue", "mini-kurs": "teal", wideo: "blue" }[post.typ] || "outline";

    host.innerHTML =
      '<a class="back" href="blog.html">' + I18N.t(U.powrot) + "</a>" +
      '<div class="article-tags"><span class="tag ' + cls + ' lg">' + typLabel + "</span></div>" +
      '<div class="a-meta">' + fmt(post.data) + " · " + I18N.t(post.czas) + "</div>" +
      "<h1>" + I18N.t(post.tytul) + "</h1>" +
      '<p class="lede">' + I18N.t(post.opis) + "</p>" +
      '<div class="article-body" data-body><p style="color:#8C9AAD;font-family:var(--mono);font-size:14px">' +
        (I18N.lang === "pl" ? "Wczytywanie…" : "Loading…") + "</p></div>";

    var bodyEl = host.querySelector("[data-body]");
    var sciezka = "wpisy/" + post.slug + "." + I18N.lang + ".md";

    fetch(sciezka)
      .then(function (r) {
        if (!r.ok) throw new Error("brak pliku");
        return r.text();
      })
      .then(function (md) {
        // usuń pierwszy nagłówek H1 (tytuł pokazujemy już wyżej z manifestu)
        md = md.replace(/^\uFEFF?\s*#[^\n]*\n+/, "");
        bodyEl.innerHTML = renderujTresc(md);
      })
      .catch(function () {
        bodyEl.innerHTML =
          '<p style="color:#8C9AAD;font-family:var(--mono);font-size:14px;line-height:1.7">' +
          (I18N.lang === "pl"
            ? "Nie udało się wczytać treści (" + sciezka + ").<br>Na komputerze otwórz stronę przez lokalny serwer, np.:<br><code>python -m http.server</code><br>a potem wejdź na <code>http://localhost:8000</code>. Po wgraniu na GitHub Pages działa bez tego."
            : "Could not load the content (" + sciezka + ").<br>Locally, serve the site, e.g.:<br><code>python -m http.server</code><br>then open <code>http://localhost:8000</code>. On GitHub Pages it works out of the box.") +
          "</p>";
      });
  }

  I18N.onChange(render);
  document.addEventListener("DOMContentLoaded", render);
})();
