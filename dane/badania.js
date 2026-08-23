/* ============================================================
   BADANIA — projekty, publikacje i wykłady online.
   Dodaj / usuń / zmień elementy w tablicach poniżej.
   Pola { pl, en } mają wersję polską i angielską.
   Pola "status" / "rola" sterują kolorem etykiety:
     status:  "w-toku" (zielony) · "zakonczony" (fioletowy)
     typ (na stronie głównej):  "projekt" · "publikacja" · "wyklad"
   ============================================================ */

window.BADANIA = {

  /* ---- PROJEKT WIODĄCY (duży kafelek u góry strony Badania) ---- */
  projektWiodacy: {
    status: "w-toku",
    rola:        { pl: "Rola: kierownik", en: "Role: Principal Investigator" },
    tytul:       { pl: "Kwantowo informacyjne właściwości sieci spinowych",
                   en: "Quantum information properties of spin networks" },
    opis:        { pl: "Jakie właściwości kwantowe mają sieci spinowe, które modelują geometrię przestrzeni w teorii pętlowej grawitacji? Jakie są ich implikacje dla emergentnej geometrii?",
                   en: "What quantum properties do spin networks have that model the geometry of space in loop quantum gravity? What are their implications for emergent geometry?" },
    finansowanie: "NCN PRELUDIUM · 2024–2027",
    zespol:      {  },
    partnerzy:   "",
    url: "#"
  },

  /* ---- POZOSTAŁE PROJEKTY ---- */
  projekty: [
    {
      status: "w-toku",
      rola:  { pl: "Rola: wykonawca", en: "Role: Participant" },
      tytul: { pl: "Gaussian Boson Sampling dla obserwacji Ziemi",
               en: "Gaussian Boson Sampling for Earth Observations" },
      opis:  { pl: "Badamy zastosowanie komputerów kwantowych do przetwarzania danych satelitarnych.",
               en: "We are investigating the application of quantum computers for processing satellite data." },
      finansowanie: "ESA · 2025-2026",
      url: "#"
    },
    {
      status: "zakonczony",
      rola:  { pl: "Rola: wykonawca", en: "Role: Participant" },
      tytul: { pl: "Wykrywanie chmur z multi- i hiperspektralnych obrazów satelitarnych za pomocą algorytmów kwantowych",
               en: "Cloud detection from multi- and hyperspectral satellite images using quantum algorithms" },
      opis:  { pl: "Badania nad zastosowaniem algorytmów kwantowych do wykrywania chmur na obrazach satelitarnych.",
               en: "Research on the application of quantum algorithms for cloud detection in satellite images." },
      finansowanie: "ESA · 2021–2023",
      url: "#"
    },
    {
      status: "zakonczony",
      rola:  { pl: "Rola: kierownik", en: "Role: Principal Investigator" },
      tytul: { pl: "Rozwiązywanie problemu więzów za pomocą komputerów kwantowych",
               en: "Solving problem of constraints using quantum computers" },
      opis:  { pl: "Badania nad zastosowaniem algorytmów kwantowych do rozwiązywania problemu więzów w fizyce teoretycznej.",
               en: "Research on the application of quantum algorithms for solving constraint problems in theoretical physics." },
      finansowanie: "UJ · 2021",
      url: "#"
    },
    {
      status: "zakonczony",
      rola:  { pl: "Rola: kierownik", en: "Role: Principal Investigator" },
      tytul: { pl: "Grawitacja kwantowa i kryptografia kwantowa",
               en: "Quantum gravity and quantum cryptography" },
      opis:  { pl: "Badania nad związkami między grawitacją kwantową a kryptografią kwantową.",
               en: "Research on the connections between quantum gravity and quantum cryptography." },
      finansowanie: "UJ · 2020",
      url: "#"
    },
  ],

  /* ---- PUBLIKACJE ---- */
  publikacje: [
    {
      rok: "2025",
      tytul: { pl: "Od holonomii SU(2) do dualności holograficznej poprzez sieci tensorowe",
               en: "From SU(2) holonomies to holographic duality via tensor networks" },
      autorzy: "G. Czelusta, J. Mielczarek",
      czasopismo: "Physical Review D",
      szczegoly: "111(6), 066012",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2410.18812"
    },
    {
      rok: "2024",
      tytul: { pl: "Algorytm Grovera na dwukierunkowym komputerze kwantowym",
               en: "Grover's algorithm on two-way quantum computer" },
      autorzy: "G. Czelusta, D.R. Verma, G. Wanjalkar",
      czasopismo: "arXiv preprint",
      szczegoly: "arXiv:2406.09450",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2406.09450"
    },
    {
      rok: "2023",
      tytul: { pl: "Kwantowe obwody dla sieci spinowych Isinga",
               en: "Quantum circuits for the Ising spin networks" },
      autorzy: "G. Czelusta, J. Mielczarek",
      czasopismo: "Physical Review D",
      szczegoly: "108(8), 086027",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2003.13124"
    },
    {
      rok: "2023",
      tytul: { pl: "Wykrywanie chmur w wielospektralnych obrazach satelitarnych za pomocą maszyn wektorów nośnych z jądrami kwantowymi",
               en: "Cloud Detection in Multispectral Satellite Images Using Support Vector Machines With Quantum Kernels" },
      autorzy: "A. Miroszewski, J. Mielczarek, F. Szczepanek, G. Czelusta, B. Grabowski, B.L. Saux, J. Nalepa",
      czasopismo: "IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium",
      szczegoly: "796-799",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2307.07281"
    },
    {
      rok: "2023",
      tytul: { pl: "Optymalizacja dopasowania jądra do celu w wykrywaniu chmur w wielospektralnych obrazach satelitarnych",
               en: "Optimizing Kernel-Target Alignment for cloud detection in multispectral satellite images" },
      autorzy: "A. Miroszewski, J. Mielczarek, F. Szczepanek, G. Czelusta, B. Grabowski, B.L. Saux, J. Nalepa",
      czasopismo: "IGARSS 2023-2023 IEEE International Geoscience and Remote Sensing Symposium",
      szczegoly: "792-795",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2306.14515"
    },
    {
      rok: "2023",
      tytul: { pl: "Wykrywanie chmur w wielospektralnych obrazach satelitarnych za pomocą maszyn wektorów nośnych z jądrami kwantowymi",
               en: "Detecting Clouds in Multispectral Satellite Images Using Quantum-Kernel Support Vector Machines" },
      autorzy: "A. Miroszewski, J. Mielczarek, F. Szczepanek, G. Czelusta, B. Grabowski, B.L. Saux, J. Nalepa",
      czasopismo: "IEEE Journal of Selected Topics in Applied Earth Observations and Remote Sensing",
      szczegoly: "16, 7601-7613",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2307.07281"
    },
    {
      rok: "2022",
      tytul: { pl: "Kwantowe obliczenia w pętlowej grawitacji kwantowej",
               en: "Quantum computations in loop quantum gravity" },
      autorzy: "G. Czelusta",
      czasopismo: "Particle Physics Summer Student Alumni Conference 2022",
      szczegoly: "45",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2210.13539#page=49"
    },
    {
      rok: "2022",
      tytul: { pl: "Kwantowe wariacyjne rozwiązywanie równania Wheeler-DeWitta",
               en: "Quantum variational solving of the Wheeler-DeWitt equation" },
      autorzy: "G. Czelusta, J. Mielczarek",
      czasopismo: "Physical Review D",
      szczegoly: "105(12), 126005",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2111.03038"
    },
    {
      rok: "2021",
      tytul: { pl: "Kwantowe symulacje kubitu przestrzeni",
               en: "Quantum simulations of a qubit of space" },
      autorzy: "G. Czelusta, J. Mielczarek",
      czasopismo: "Physical Review D",
      szczegoly: "103(4), 046001",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2003.13124"
    },
    {
      rok: "2021",
      tytul: { pl: "Bezpieczna komunikacja kwantowa przez tunel czasoprzestrzenny",
               en: "Secure quantum communication through a wormhole" },
      autorzy: "G. Czelusta, J. Mielczarek",
      czasopismo: "arxiv preprint",
      szczegoly: "arXiv:2103.14996",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2103.14996"
    },
    {
      rok: "2020",
      tytul: { pl: "Przejście fazowe wyższego rzędu w toroidalnej CDT",
               en: "The higher-order phase transition in toroidal CDT" },
      autorzy: "J. Ambjørn, G. Czelusta, J. Gizbert-Studnicki, A. Görlich, J. Jurkiewicz, D. Németh",
      czasopismo: "Journal of High Energy Physics",
      szczegoly: "2020(2002.01051), 1-18",
      pdf: "#",
      arxiv: "https://arxiv.org/pdf/2002.01051"
    },
  ],

  /* ---- WYKŁADY ONLINE (nagrania) ---- */
  wyklady: [
    {
      miejsce: { pl: "Spotkanie WQCG, Epizod 77, Fundacja Quantum AI · 2026", en: "WQCG meetup, Episode 77, Quantum AI Foundation · 2026" },
      tytul:   { pl: "Kwantowe obliczenia dla grawitacji kwantowej", en: "Quantum Computing for Quantum Gravity" },
      dlugosc: "54:36",
      url: "https://www.youtube.com/watch?v=DnQQmL8C8lA"
    },
    {
      miejsce: { pl: "Quantum Gravity · 2023 · Nijmegen, Holandia", en: "Quantum Gravity · 2023 · Nijmegen, Netherlands" },
      tytul:   { pl: "QG2023: Obliczenia kwantowe w pętlowej grawitacji kwantowej", en: "QG2023: Quantum Computations in Loop Quantum Gravity" },
      dlugosc: "16:24",
      url: "https://www.youtube.com/watch?v=-sV8H-vvmFo"
    },
    {
      miejsce: { pl: "Polskie Towarzystwo Relatywistyczne · 2023 · Kraków, Polska", en: "The Polish Society of Relativity · 2023 · Kraków, Poland" },
      tytul:   { pl: "POTOR: Obliczenia kwantowe w pętlowej grawitacji kwantowej", en: "POTOR: Quantum computations in Loop Quantum Gravity" },
      dlugosc: "28:36",
      url: "https://www.youtube.com/watch?v=lJj4LQ4Imd8"
    },
    {
      miejsce: { pl: "Szkoła HDCRS · 2024 · Santiago de Compostela, Hiszpania", en: "HDCRS School · 2024 · Santiago de Compostela, Spain" },
      tytul:   { pl: "Szkoła IEEE GRSS HDCRS 2024 · Dzień 4", en: "IEEE GRSS HDCRS School 2024 · Day 4" },
      dlugosc: "2:57:03",
      url: "https://www.youtube.com/watch?v=5MljGWyViW4"
    },
  ]
};
