# Strona osobista — Grzegorz Czelusta

Statyczna strona (fizyka + blog popularnonaukowy), gotowa do hostowania na **GitHub Pages**.
Nie wymaga żadnego „budowania" ani instalowania narzędzi — to czyste pliki HTML, CSS i JS.

---

## 1. Jak to jest zbudowane (w skrócie)

**Najważniejsza zasada: treść jest oddzielona od kodu.** W codziennym użyciu edytujesz
tylko pliki w folderze `dane/` oraz `wpisy/`. Reszty (`assets/`, pliki `.html`) nie musisz dotykać.

```
site/
├── index.html              ← strona główna
├── badania.html            ← Badania (projekty / publikacje / wykłady)
├── blog.html               ← Blog (z filtrowaniem po typie)
├── wpis.html               ← widok pojedynczego wpisu
│
├── dane/                   ←  ✏️  TU EDYTUJESZ TREŚĆ
│   ├── profil.js           ← imię, afiliacja, tekst powitalny, linki
│   ├── badania.js          ← projekty, publikacje, wykłady online
│   └── wpisy.js            ← lista wpisów bloga (manifest)
│
├── wpisy/                  ←  ✏️  TU PISZESZ WPISY (pliki Markdown)
│   ├── czy-czas-naprawde-plynie.pl.md
│   ├── czy-czas-naprawde-plynie.en.md
│   └── ...
│
└── assets/                 ← wygląd i logika (zwykle bez zmian)
    ├── css/style.css
    └── js/...
```

Strona jest **dwujęzyczna (PL/EN)**. Przełącznik języka jest w prawym górnym rogu.

---

## 2. Jak podmienić swoje dane

Otwórz `dane/profil.js` w dowolnym edytorze tekstu. Zmień wartości po prawej stronie
dwukropka. Pola z dwiema wersjami wyglądają tak:

```js
tytul: {
  pl: "Czytam wszechświat po jednym kubicie.",
  en: "Reading the universe one qubit at a time."
}
```

Wpisz własny tekst między cudzysłowami. **Nie zmieniaj** nazw pól (`tytul`, `pl`, `en` itd.)
ani przecinków i nawiasów.

Tak samo działają `dane/badania.js` (projekty, publikacje, wykłady) — każdy element to
obiekt w `{ ... }`, oddzielony przecinkiem. Aby dodać publikację, skopiuj jeden blok
i wklej go w to samo miejsce.

---

## 3. Jak dodać nowy wpis na bloga

**Krok 1.** Utwórz dwa pliki w folderze `wpisy/` (polski i angielski):

```
wpisy/moj-nowy-wpis.pl.md
wpisy/moj-nowy-wpis.en.md
```

Nazwa przed pierwszą kropką (`moj-nowy-wpis`) to **slug** — używaj małych liter,
myślników zamiast spacji, bez polskich znaków. W środku pisz zwykłym **Markdownem**
(nagłówki `##`, listy `-`, pogrubienia `**...**`, linki `[tekst](adres)`).

**Krok 2.** Otwórz `dane/wpisy.js` i dopisz **na początku** listy jeden blok:

```js
{
  slug: "moj-nowy-wpis",
  typ: "artykul",            // artykul | tutorial | mini-kurs | wideo
  data: "2026-07-01",        // RRRR-MM-DD
  czas: { pl: "6 min", en: "6 min" },
  tytul: { pl: "Tytuł po polsku", en: "Title in English" },
  opis:  { pl: "Krótki zajawka.", en: "Short teaser." }
},
```

Gotowe — wpis pojawi się na blogu i na stronie głównej.

### Typy wpisów i ich etykiety
| `typ`        | etykieta na karcie | kolor   |
|--------------|--------------------|---------|
| `artykul`    | ARTYKUŁ            | neutral |
| `tutorial`   | ◆ INTERAKTYWNY     | błękit  |
| `mini-kurs`  | ◇ MINI-KURS        | zielony |
| `wideo`      | ▶ WIDEO            | błękit  |

Dodatkowe (opcjonalne) pola: `wyrozniony: true` (duży kafelek na górze — tylko jeden wpis),
`interaktywny: true` (pokazuje mini-widget kubitów w wyróżnionym kafelku),
`kursCzesci: 5` (liczba części mini-kursu), `wideoUrl: "..."`.

### Wstawianie filmu z YouTube
W pliku `.md` wpisu wklej kod osadzenia (YouTube → *Udostępnij → Umieść*):
```html
<iframe width="100%" height="420" src="https://www.youtube.com/embed/XXXX"
        frameborder="0" allowfullscreen></iframe>
```

---

## 4. Podgląd na własnym komputerze

Wpisy bloga wczytują się z plików `.md`, a przeglądarki blokują takie wczytywanie,
gdy otworzysz plik „na podwójny klik" (adres `file://`). Dlatego do podglądu uruchom
**prosty lokalny serwer** (jedna komenda w folderze `site/`):

```bash
python -m http.server
```

Następnie wejdź na `http://localhost:8000`. Strona główna i podstrony działają,
a wpisy wczytują się poprawnie. Na GitHub Pages działa to bez żadnych dodatków.

---

## 5. Publikacja na GitHub Pages

1. Utwórz repozytorium na GitHubie i wgraj do niego **zawartość folderu `site/`**
   (czyli `index.html` i resztę mają być w korzeniu repo).
2. W repozytorium: **Settings → Pages**.
3. W sekcji *Build and deployment* wybierz **Deploy from a branch**,
   gałąź `main`, folder `/ (root)`, i zapisz.
4. Po chwili strona będzie pod adresem `https://TWOJ-LOGIN.github.io/NAZWA-REPO/`.

> Jeśli wolisz trzymać stronę w podfolderze `docs/`, zmień w punkcie 3 folder na `/docs`
> i umieść tam pliki. Plik `.nojekyll` (już dołączony) sprawia, że GitHub serwuje pliki
> bez przetwarzania — zostaw go na miejscu.