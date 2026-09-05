/* ============================================================
   PROFIL — Twoje dane osobowe i treść strony głównej.
   Każde pole tekstowe ma wersję { pl: "...", en: "..." }.
   Edytuj wartości po prawej stronie dwukropka. Nie ruszaj nazw pól.
   ============================================================ */

window.PROFIL = {
  // Imię i nazwisko (krótka forma w nawigacji + pełna w stopce)
  nazwiskoKrotkie: "G. Czelusta",
  nazwiskoPelne: "Grzegorz Czelusta",

  /* Adres, pod którym strona stoi w sieci — ze slashem na końcu.
     Używany do budowania adresów wpisów dla wyszukiwarek (strona-wpis.js).
     Po przeniesieniu strony pod inny adres zmień go TU, a dodatkowo w
     nagłówkach plików .html (canonical / og:url), w robots.txt i sitemap.xml. */
  adres: "https://gczelusta.github.io/",

  afiliacja: {
    pl: "Instytut Fizyki Teoretycznej · Uniwersytet Jagielloński",
    en: "Institute of Theoretical Physics · Jagiellonian University"
  },

  // Sekcja powitalna na stronie głównej
  hero: {
    kicker: "quantum gravity · quantum computing · numerical computations",
    tytul: {
      pl: "Fizyka. Prosta złożoność.",
      en: "Physics. Simple complexity."
    },
    opis: {
      pl: "Badacz na Uniwersytecie Jagiellońskim i autor bloga popularnonaukowego. Badania i dydaktyka są tu równie ważnymi aspektami.",
      en: "Researcher at the Jagiellonian University and author of a popular-science blog. Research and teaching are equally important aspects here."
    }
  },

  // Tagi tematyczne pod opisem
  tagi: [
    { pl: "Kwantowa grawitacja", en: "Quantum gravity" },
    { pl: "Obliczenia kwantowe", en: "Quantum computing" },
    { pl: "Obliczenia numeryczne", en: "Numerical Computations" }
  ],

  // Linki w stopce. Ustaw prawdziwe adresy (lub usuń niepotrzebne wpisy).
  linki: [
    { etykieta: "orcid",   url: "https://orcid.org/0000-0002-8624-6284" },
    { etykieta: "scholar", url: "https://scholar.google.com/citations?user=rl3bqKQAAAAJ&hl=pl&oi=ao" },
    { etykieta: "github",  url: "https://github.com/gczelusta" },
    { etykieta: "youtube", url: "https://www.youtube.com/@Fizyka.Prostazlozonosc" }
  ]
};
