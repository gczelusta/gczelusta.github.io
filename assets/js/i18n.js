/* ============================================================
   i18n — przełączanie języka PL / EN.
   Zwykle nie trzeba tu nic zmieniać.
   Wybór języka zapisuje się w przeglądarce (localStorage).
   ============================================================ */

window.I18N = (function () {
  var KEY = "preferowany-jezyk";
  var lang = localStorage.getItem(KEY) || "pl";
  var callbacks = [];

  // Statyczne napisy interfejsu (nie pochodzące z danych)
  var UI = {
    nav: {
      badania:    { pl: "badania",     en: "research" },
      blog:       { pl: "blog",        en: "blog" },
      dydaktyka:  { pl: "dydaktyka",   en: "teaching" },
      wystapienia:{ pl: "wystąpienia", en: "talks" }
    },
    domowa:        { pl: "strona główna", en: "home" },
    wszystkie:     { pl: "wszystkie →",   en: "all →" },
    czymSieZajmuje:{ pl: "Badania",  en: "Research" },
    blogNaglowek:  { pl: "Blog",     en: "Blog" },
    powrot:        { pl: "← wszystkie wpisy", en: "← all posts" },
    klikKubit:     { pl: "↑ kliknij kubit, aby zmienić jego stan",
                     en: "↑ click a qubit to flip its state" },
    filtry: {
      all:         { pl: "wszystkie",  en: "all" },
      artykul:     { pl: "artykuły",   en: "articles" },
      tutorial:    { pl: "tutoriale",  en: "tutorials" },
      "mini-kurs": { pl: "mini-kursy", en: "mini-courses" },
      wideo:       { pl: "wideo",      en: "video" }
    },
    typEtykieta: {
      artykul:    { pl: "ARTYKUŁ",            en: "ARTICLE" },
      tutorial:   { pl: "◆ INTERAKTYWNY",     en: "◆ INTERACTIVE" },
      "mini-kurs":{ pl: "◇ MINI-KURS",        en: "◇ MINI-COURSE" },
      wideo:      { pl: "▶ WIDEO",            en: "▶ VIDEO" }
    },
    brakWpisow:    { pl: "Brak wpisów tego typu — na razie.",
                     en: "No posts of this type yet." },
    projekty:      { pl: "Projekty",       en: "Projects" },
    publikacje:    { pl: "Publikacje",     en: "Publications" },
    wykladyOnline: { pl: "Wykłady online", en: "Online talks" },
    wykladyOpis:   { pl: "Nagrania wystąpień konferencyjnych i seminariów.",
                     en: "Recorded conference talks and seminars." },
    projektWiodacy:{ pl: "PROJEKT WIODĄCY", en: "LEAD PROJECT" },
    statusWtoku:   { pl: "● W TOKU",        en: "● ONGOING" },
    statusZak:     { pl: "✓ ZAKOŃCZONY",    en: "✓ COMPLETED" },
    /* --- Dydaktyka --- */
    dydaktyka:     { pl: "Dydaktyka",       en: "Teaching" },
    kursy:         { pl: "Zajęcia",         en: "Courses" },
    materialy:     { pl: "Materiały",       en: "Materials" },
    prace:         { pl: "Prace dyplomowe", en: "Theses" },
    materialyOpis: { pl: "Skrypty, zestawy zadań i notatniki.",
                     en: "Lecture notes, problem sets and notebooks." },
    praceOpis:     { pl: "Tematy do wzięcia.",
                     en: "Topics available." },
    wPrzygotowaniu:{ pl: "Ta strona jest w przygotowaniu — treść pojawi się wkrótce.",
                     en: "This page is under construction — content coming soon." },
    etKod:         { pl: "Kod", en: "Code" },
    /* --- Wystąpienia --- */
    wystapienia:   { pl: "Wystąpienia",  en: "Talks" },
    wyglaszone:    { pl: "Wygłoszone",   en: "Past talks" },
    nagrania:      { pl: "Nagrania",     en: "Recordings" },
    wyglaszoneOpis:{ pl: "Referaty konferencyjne, seminaria i wykłady popularnonaukowe.",
                     en: "Conference talks, seminars and outreach lectures." },
    etNagranie:    { pl: "Nagranie", en: "Video" },

    etFinansowanie:{ pl: "Finansowanie", en: "Funding" },
    etZespol:      { pl: "Zespół",       en: "Team" },
    etPartnerzy:   { pl: "Partnerzy",    en: "Partners" },
    // etykieta odnośnika do pliku PDF publikacji (obok "arXiv")
    etPdf:         { pl: "Artykuł",      en: "Paper" }
  };

  function t(obj) {
    if (obj == null) return "";
    if (typeof obj === "string") return obj;
    return obj[lang] != null ? obj[lang] : (obj.pl != null ? obj.pl : "");
  }

  function notify() {
    document.documentElement.lang = lang;
    callbacks.forEach(function (cb) { try { cb(lang); } catch (e) { console.error(e); } });
  }

  function set(next) {
    lang = next;
    localStorage.setItem(KEY, lang);
    notify();
  }

  function toggle() { set(lang === "pl" ? "en" : "pl"); }

  function onChange(cb) { callbacks.push(cb); }

  function init() { notify(); }

  return {
    get lang() { return lang; },
    UI: UI, t: t, set: set, toggle: toggle, onChange: onChange, init: init,
    // etykieta przycisku: pokazuje język, NA KTÓRY przełączymy
    przyciskLabel: function () { return lang === "pl" ? "EN" : "PL"; }
  };
})();
