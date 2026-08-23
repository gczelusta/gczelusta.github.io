/* ============================================================
   WPISY BLOGA — lista (manifest).
   ------------------------------------------------------------
   ŻEBY DODAĆ NOWY WPIS:
     1. Utwórz dwa pliki Markdown w folderze  wpisy/ :
            wpisy/MOJ-WPIS.pl.md   (treść po polsku)
            wpisy/MOJ-WPIS.en.md   (treść po angielsku)
        Nazwa pliku przed kropką to "slug" — wpisz ją niżej jako "slug".
     2. Dopisz jeden obiekt na POCZĄTKU tablicy poniżej (najnowsze u góry).

   POLE  typ  steruje etykietą i kolorem karty. Dozwolone wartości:
        "artykul"    → ARTYKUŁ        (neutralna)
        "tutorial"   → INTERAKTYWNY   (błękit)
        "mini-kurs"  → MINI-KURS      (zielony)
        "wideo"      → WIDEO          (błękit, z przyciskiem ▶)

   POLE  wyrozniony: true  → duży kafelek na górze (tylko jeden wpis).
   POLE  interaktywny: true → w wyróżnionym kafelku pokaże się mini-widget kubitów.
   POLE  wideoUrl / kursCzesci / okladka — opcjonalne (patrz przykłady).
   ============================================================ */

window.WPISY = [
  // {
  //   slug: "zbuduj-rejestr-kwantowy",
  //   typ: "tutorial",
  //   wyrozniony: true,
  //   interaktywny: true,
  //   data: "2026-06-18",
  //   czas: { pl: "tutorial", en: "tutorial" },
  //   tytul: { pl: "Zbuduj swój pierwszy rejestr kwantowy",
  //            en: "Build your first quantum register" },
  //   opis:  { pl: "Przełączaj kubity i obserwuj, jak wartość binarna zmienia się na żywo. 30-sekundowa próbka pełnej lekcji.",
  //            en: "Flip the qubits and watch the binary value update live. A 30-second taste of the full lesson." }
  // },
  // {
  //   slug: "mechanika-kwantowa-w-5-wieczorow",
  //   typ: "mini-kurs",
  //   kursCzesci: 5,
  //   data: "2026-06-05",
  //   czas: { pl: "5 części · z ćwiczeniami", en: "5 parts · with exercises" },
  //   tytul: { pl: "Mechanika kwantowa w 5 wieczorów",
  //            en: "Quantum mechanics in 5 evenings" },
  //   opis:  { pl: "Od funkcji falowej po pomiar, wieczór po wieczorze — z ćwiczeniami.",
  //            en: "From wavefunction to measurement, one evening at a time — with exercises." }
  // },
  {
    slug: "extra-dimensions",
    typ: "artykul",
    wyrozniony: true,
    data: "2026-06-15",
    czas: { pl: "5 min", en: "5 min" },
    tytul: { pl: "Dodatkowe wymiary",
             en: "Extra dimensions" },
    opis:  { pl: "Żyjemy we Wszechświecie z trzema wymiarami przestrzennymi i jednym czasowym. Jednak niektóre nowe teorie fizyczne sugerują istnienie dodatkowych wymiarów. Na przykład, zgodnie z teorią strun, istnieje dziewięć wymiarów przestrzennych i jeden czasowy. Nie widzimy jednak tych dodatkowych wymiarów. Dlaczego?",
             en: "We live in a universe with three spatial dimensions and one temporal dimension. However, some new physical theories suggest the existence of additional dimensions. For example, according to string theory, there are nine spatial dimensions and one temporal dimension. However, we do not observe these additional dimensions. Why?" }
  },
  {
    slug: "extra-dimensions-video",
    typ: "wideo",
    wideoUrl: "https://www.youtube.com/watch?v=T8TjPArIwIk",
    data: "2024-07-02",
    czas: { pl: "5 min", en: "5 min" },
    tytul: { pl: "Czy zastanawiałeś się kiedyś nad ukrytymi dodatkowymi wymiarami?",
             en: "Have you ever wondered about hidden extra dimensions?" },
    opis:  { pl: "Niektóre teorie fizyczne przewidują istnienie dodatkowych wymiarów przestrzeni, w której żyjemy. Czy jest możliwe, że istnieją, mimo że ich nie obserwujemy?",
             en: "Some physical theories predict the existence of extra dimensions of the space in which we live. Is it possible that they exist even though we do not observe them?" }
  },
  {
    slug: "quantum-computing-video",
    typ: "wideo",
    wideoUrl: "https://www.youtube.com/watch?v=MbEVbHTPH8I",
    data: "2024-01-21",
    czas: { pl: "5 min", en: "5 min" },
    tytul: { pl: "Elementy obliczeń kwantowych",
             en: "Elements of quantum computing" },
    opis:  { pl: "Podstawowe intuicje dotyczące obliczeń kwantowych.",
             en: "Basic insights into quantum computing." }
  },
];
