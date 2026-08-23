/* ============================================================
   WYSTĄPIENIA — wygłoszone referaty, seminaria i wykłady.
   ------------------------------------------------------------
   Zasady te same co w dane/badania.js i dane/dydaktyka.js:
     · każdy element to obiekt { ... } oddzielony przecinkiem,
     · pola { pl, en } mają wersję polską i angielską (można też
       wpisać zwykły tekst, jeśli w obu językach brzmi tak samo),
     · pole  nagranie  — "#" albo puste znaczy „brak adresu":
       zostaje sama etykieta, bez martwego linku,
     · w pierwszej linii wyświetla się  wydarzenie  (konferencja,
       seminarium) — pole  tytul  jest opcjonalne i trafia do drugiej
       linii, kursywą, obok  rodzaj  i  miejsce.

   Pusta tablica chowa całą sekcję, więc można uzupełniać
   stronę po kawałku.

   UWAGA: sekcja „Nagrania" NIE jest tutaj — bierze dane z
   dane/badania.js (tablica wyklady), żeby te same filmy nie były
   wpisane w dwóch plikach. Nowe nagranie dodajesz tam.
   ============================================================ */

window.WYSTAPIENIA = {

  /* ---- WYGŁOSZONE (lista jak publikacje: rok · wydarzenie · odnośniki) ---- */
  wyglaszone: [
    {
      rok:        "2026",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      { pl: "Kwantowo-informacyjna struktura sieci spinowych",
                    en: "Quantum information structure of spin networks" },
      wydarzenie: "Loops'26 International Conference on Quantum Gravity",
      miejsce:    { pl: "Hangzhou, Chiny", en: "Hangzhou, China" },
      nagranie: "#"
    },
    {
      rok:        "2026",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      { pl: "",
                    en: "" },
      wydarzenie: { pl: "Warsaw Quantum Computing Group, Epizod LXXVII, 2026", en: "Warsaw Quantum Computing Group, Episode LXXVII, 2026" },
      miejsce:    { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
      nagranie: "https://www.youtube.com/watch?v=DnQQmL8C8lA"
    },
    {
      rok:        "2026",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      { pl: "",
                    en: "" },
      wydarzenie: "The Machine Learning and Spatial Analysis with Free Open Source Software Conference",
      miejsce:    { pl: "Kraków, Polska", en: "Cracow, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2025",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      { pl: "",
                    en: "" },
      wydarzenie: "Quantum computing for space applications 2025",
      miejsce:    { pl: "Kraków, Polska", en: "Cracow, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2025",
      rodzaj:     { pl: "Plakat", en: "Poster" },
      tytul:      { pl: "",
                    en: "" },
      wydarzenie: "Geometry of classical and quantum space-times, Jerzy Lewandowski Memorial Conference",
      miejsce:    { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2025",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "Quantum Gravity 2025",
      miejsce:    { pl: "PennState, USA", en: "PennState, USA" },
      nagranie: "#"
    },
    {
      rok:        "2025",
      rodzaj:     { pl: "Plakat + krótki referat", en: "Poster + short talk" },
      tytul:      "",
      wydarzenie: "15th annual conference on Relativistic Quantum Information",
      miejsce:    { pl: "Neapol, Włochy", en: "Naples, Italy" },
      nagranie: "#"
    },
    {
      rok:        "2025",
      rodzaj:     { pl: "Plakat", en: "Poster" },
      tytul:      "",
      wydarzenie: "Solstice of Foundations 2025",
      miejsce:    { pl: "Zurych, Szwajcaria", en: "Zurich, Switzerland" },
      nagranie: "#"
    },
    {
      rok:        "2025",
      rodzaj:     { pl: "Plakat", en: "Poster" },
      tytul:      "",
      wydarzenie: "QISS 2025",
      miejsce:    { pl: "Wiedeń, Austria", en: "Vienna, Austria" },
      nagranie: "#"
    },
    {
      rok:        "2024",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "High Performance and Disruptive Computing in Remote Sensing School",
      miejsce:    { pl: "Santiago de Compostela, Hiszpania", en: "Santiago de Compostela, Spain" },
      nagranie: "https://www.youtube.com/watch?v=5MljGWyViW4"
    },
    {
      rok:        "2024",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "Quantum Machine Learning Conference 2024, QAIF",
      miejsce:    { pl: "on-line", en: "on-line" },
      nagranie: "#"
    },
    {
      rok:        "2023",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "The 9th Conference of the Polish Society on Relativity",
      miejsce:    { pl: "Kraków, Polska", en: "Cracow, Poland" },
      nagranie: "https://www.youtube.com/watch?v=lJj4LQ4Imd8"
    },
    {
      rok:        "2023",
      rodzaj:     { pl: "Plakat", en: "Poster" },
      tytul:      "",
      wydarzenie: "Machine Learning in Mathematics & Theoretical Physics",
      miejsce:    { pl: "Oxford, Wielka Brytania", en: "Oxford, Great Britain" },
      nagranie: "#"
    },
    {
      rok:        "2023",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "Quantum Gravity 2023",
      miejsce:    { pl: "Nijmegen, Holandia", en: "Nijmegen, Netherlands" },
      nagranie: "https://www.youtube.com/watch?v=-sV8H-vvmFo"
    },
    {
      rok:        "2023",
      rodzaj:     { pl: "Plakat", en: "Poster" },
      tytul:      "",
      wydarzenie: "EQAI 2023, 2nd European Summer School on Quantum AI",
      miejsce:    { pl: "Udine, Włochy", en: "Udine, Italy" },
      nagranie: "#"
    },
    {
      rok:        "2023",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "59. Winter School of Theoretical Physics third COST Action CA18108 Training School",
      miejsce:    { pl: "Wojanów, Polska", en: "Wojanów, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2022",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "The 8th Conference of the Polish Society on Relativity",
      miejsce:    { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2022",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "Symposium of Young Physicists 2022",
      miejsce:    { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2022",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "International Workshop on Machine Learning and Quantum Computing Applications in Medicine and Physics",
      miejsce:    { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2022",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "LOOPS'22",
      miejsce:    { pl: "Lyon, Francja", en: "Lyon, France" },
      nagranie: "#"
    },
    {
      rok:        "2022",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "IFJ PAN PPSS Alumni Conference",
      miejsce:    { pl: "Kraków, Polska", en: "Cracow, Poland" },
      nagranie: "#"
    },
    {
      rok:        "2022",
      rodzaj:     { pl: "Referat", en: "Talk" },
      tytul:      "",
      wydarzenie: "9th Tux Workshop on Quantum Gravity",
      miejsce:    { pl: "Tux, Austria", en: "Tux, Austria" },
      nagranie: "#"
    },
    {
      rok:        "2021",
      rodzaj:     { pl: "Plakat", en: "Poster" },
      tytul:      "",
      wydarzenie: "CTP Quantum Information Days 2020(+1)",
      miejsce:    { pl: "Warszawa, Polska", en: "Warsaw, Poland" },
      nagranie: "#"
    },
  ]
};