/* ============================================================
   DYDAKTYKA — zajęcia, materiały.
   ------------------------------------------------------------
   Wszystko działa tak samo jak w dane/badania.js:
     · każdy element to obiekt { ... } oddzielony przecinkiem,
     · pola { pl, en } mają wersję polską i angielską,
     · pole  status  steruje kolorem etykiety:
           "w-toku"     → zielony
           "zakonczony" → fioletowy
     · pole  url  — jeśli zostawisz "#" albo puste, kafelek NIE będzie
       linkiem (zamiast martwego odnośnika zostaje zwykły tekst).

   Sekcja, której tablica jest pusta, pokazuje notkę „w przygotowaniu".
   Poniżej w komentarzach są gotowe wzory — odkomentuj i podmień treść.
   ============================================================ */

window.DYDAKTYKA = {

  /* ---- ZAJĘCIA (kafelki jak projekty na stronie Badania) ---- */
  kursy: [
    {
      status: "zakonczony",
      poziom: { pl: "Studia I stopnia", en: "Bachelor's" },
      rola:   { pl: "Ćwiczenia",        en: "Tutorials" },
      tytul:  { pl: "Matematyka dyskretna", en: "Discrete mathematics" },
      opis:   { pl: "Ćwiczenia rachunkowe do wykładu.",
                en: "Problem sessions accompanying the lecture." },
      okres:  "2022/2023 · semestr letni",
      url: "#"
    },
    {
      status: "zakonczony",
      poziom: { pl: "Studia II stopnia", en: "Master's" },
      rola:   { pl: "Ćwiczenia",        en: "Tutorials" },
      tytul:  { pl: "Kryptografia", en: "Cryptography" },
      opis:   { pl: "Ćwiczenia rachunkowe i programistyczne do wykładu.",
                en: "Problem and code sessions accompanying the lecture." },
      okres:  "2022/2023 · semestr zimowy",
      url: "#"
    },
    {
      status: "zakonczony",
      poziom: { pl: "Studia II stopnia", en: "Master's" },
      rola:   { pl: "Ćwiczenia",        en: "Tutorials" },
      tytul:  { pl: "Kryptografia", en: "Cryptography" },
      opis:   { pl: "Ćwiczenia rachunkowe i programistyczne do wykładu.",
                en: "Problem and code sessions accompanying the lecture." },
      okres:  "2021/2022 · semestr zimowy",
      url: "#"
    },
    {
      status: "zakonczony",
      poziom: { pl: "Studia II stopnia", en: "Master's" },
      rola:   { pl: "Ćwiczenia",        en: "Tutorials" },
      tytul:  { pl: "Kryptografia", en: "Cryptography" },
      opis:   { pl: "Ćwiczenia rachunkowe i programistyczne do wykładu.",
                en: "Problem and code sessions accompanying the lecture." },
      okres:  "2020/2021 · semestr zimowy",
      url: "#"
    },
    {
      status: "zakonczony",
      poziom: { pl: "Studia I stopnia", en: "Bachelor's" },
      rola:   { pl: "Ćwiczenia",        en: "Tutorials" },
      tytul:  { pl: "Matematyka dyskretna", en: "Discrete mathematics" },
      opis:   { pl: "Ćwiczenia rachunkowe do wykładu.",
                en: "Problem sessions accompanying the lecture." },
      okres:  "2020/2021 · semestr letni",
      url: "#"
    },
    {
      status: "zakonczony",
      poziom: { pl: "Studia I stopnia", en: "Bachelor's" },
      rola:   { pl: "Laboratorium",        en: "Laboratory" },
      tytul:  { pl: "Pracownia fizyczna", en: "Physics laboratory" },
      opis:   { pl: "Eksperymenty w laboratorium fizycznym.",
                en: "Experiments in physics laboratory." },
      okres:  "2020/2021 · semestr letni",
      url: "#"
    },
  ],

  /* ---- MATERIAŁY (lista jak publikacje: rok · tytuł · odnośniki) ---- */
  materialy: [
    // {
    //   rok: "2025",
    //   tytul: { pl: "Skrypt do ćwiczeń z mechaniki kwantowej",
    //            en: "Problem set notes for Quantum Mechanics" },
    //   opis:  { pl: "Zadania z rozwiązaniami, 60 stron.",
    //            en: "Problems with solutions, 60 pages." },
    //   pdf: "#",
    //   kod: "#"          // repozytorium / notatnik — opcjonalnie
    // },
  ],

  /* ---- TEMATY PRAC DYPLOMOWYCH ---- */
  prace: [
    // {
    //   status: "w-toku",
    //   poziom: { pl: "Praca magisterska", en: "Master's thesis" },
    //   tytul:  { pl: "Symulacje sieci spinowych na komputerze kwantowym",
    //             en: "Simulating spin networks on a quantum computer" },
    //   opis:   { pl: "Temat wolny — wymagana znajomość Pythona.",
    //             en: "Topic available — Python required." },
    //   url: "#"
    // },
  ]
};