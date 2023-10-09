<!-- ---
name: qg
title: Grawitacja kwantowa
level: 1
--- -->

Opis grawitacji w języku fizyki kwantowej pozostaje nierozwiązanym problemem.
Jako jeden z pierwszych na ten problem zwrócił uwagę Matvei Petrovich Bronstein, rosyjski fizyk zamordowany w młodym wieku, trakcie stalinowskich czystek.
Przedstawił on argument pokazujący, ze jeżeli połączyć ze sobą fizykę kwantową i grawitację to niemożliwy staje się opis czasoprzestrzenii w dowolnie małych odległościach.
Przeanalizujmy ten argument, w uproszczonej, i unowocześnionej wersji.
Wyobraźmy sobie, że chcemy zbadać przestrzeń o rozmiarze mniejszym niż pewna długość $L$.
W tym celu musimy umieć określić położenie $x$, np. jakiejś cząstki z dokładnością $\Delta x<L$.
Jednak jak wiadomo z zasady nieoznaczonosci Heisenberga

$$\Delta x\Delta p > \hbar$$

im dokładniej znamy położenie tym mniej dokładnie znamy pęd. To oznacza, że średnia wartość kwadratu pędu $p^2$ również wzrasta.
Tzn.
$$p^2>(\Delta p)^2>\left(\frac{\hbar}{L}\right)^2$$
Większy pęd oznacza również większą enrgię:
$$E = \sqrt{p^2c^2+m^2c^4}\simeq pc$$ 
gdzie $c$ to prędkość światła, przybliżenie zrobione dla dużych pędów $p^2$.
Zatem
$$E^2=p^2c^2>(\Delta p)^2c^2>\left(\frac{\hbar}{L}\right)^2c^2$$
Im mniejsze skale chcemy badać tym potrzebujemy większych energii, dlatego w miejscach takich jak CERN cząstki są rozpędzane do dużych energii.
Powyższe rozważanie było czysto kwantowe, dodajmy teraz grawitacje.
Jak wiadomo ze słynnego równania:
$$E=Mc^2$$
Energia działa jak masa, również może wytwarzać grawitację, czyli innymi słowy odkształcać czasoprzestrzeń.
Kiedy na małej przestrzenii zgromadzimy zbyt dużo energii odkształcenie może stać się na tyle duże że powstanie czarna dziura.
Aby powstała czarna dziura musimy skoncetrować masę $M$ w sferze o promieniu rzędu
$$R\simeq\frac{GM}{c^2}$$
gdzie $G$ to stała grawitacji.
Zatem jeżeli chcąc badać mały obszar $L$ zgromadzimy tak dużo energii, że $R=L$ to powstanie czarna dziura i obszar, który chieliśmy badać zostanie ukryty.
Z tej uproszczonej analizy wynika, że istnieje pewna fundamentalna długość poniżej której nie da się opisywać czasoprzestrzenii.


![test](/assets/videos/blog/test.gif)

## Dodatkowe wymiary

Niektóre z proponowanych teorii, zakładają istnienie dodatkowych wymiarów czasoprzestrzeni poza znanymi nam czteroma (trzema przestrzennymi i jednym czasowym). Wymiary te miałyby być "ciasno zwinięte" i dlatego niewidoczne dla nas. Możemy zobrazować to na przykładzie następującym przykładzie.

Dla ułatwienia wizualizacji wyobraźmy sobie wszechświat który ma jeden wymiar przestrzenny a nie trzy. Taki wszechświat ma postać prostej (lub krzywej ale dla uproszczenia przyjmijmy prostą). Żyjące w nim istoty mogą poruszać się jedynie w jednym wymiarze, oznaczmy go $x$.

Pewien fizyk, żyjący w tym wszechświecie proponuje, że być może ich wszechświat ma tak naprawdę dwa wymiary przestrzenne z tym, że ten drugi (oznaczmy go $y$), ma postać nie prostej ale bardzo małego okręgu. Innymi słowy, że żyją na powierzchni bardzo długiego i bardzo cienkiego walca.


Dodatkowy wymiar nie jest widoczny dla tych istot bo jest zbyt mały, nie są one w stanie się w nim poruszać, więc efektywnie ich wszechświat ma tylko jeden wymiar. Zastanóœmy się w jaki sposób istoty te mogłyby eksperymentalnie wykryć ten dodatkowy wymiar. Najlepiej byłoby przeprowadzić eksperyment, którego wynik zależy od liczby wymiarów. Jednym z najprostszych układów kwantowych jakie można rozważać jest cząstka w nieskończonej studni potencjału.

Studnia potencjału to taki rozkład potencjału, który jest równy $0$ na pewnym obszarze, powiedzmy od $0$ do $a$ i równy nieskończoność poza tym obszarem. Klasycznym odpowiednikiem takiego układu jest kulka pomiędzy dwiema ścianami, która może się poruszać pomiędzy nimi i odbijać od nich (bez tarcia i strat energii).

W klasycznej wersji kulka będzie się poruszać pomiędzy ściankami ze stałą prędkością o dowolnej wartości. W kwantowej wersji jednak cząstka może przyjmować jedynie pewne dyskretne wartości energii. Znajdźmy najpierw wartości tych energii dla sytuacji gdy dodatkowy wymiar nie istnieje.

Najpierw określić Hamiltonian tego układu, czyli operator energii całkowitej.
<div class="read-more">
    <p>
        Więcej o formalizmie Hamiltona przeczytasz w poście <a href="/blog/lang.html">Język fizyki współczesnej</a>
    </p>
</div>
Interesuje nas jedynie obszar gdzie potencjał jest równy $0$ (czyli od $0$ do $a$), ponieważ cząstka nie może wniknąć w obszar o nieskończonym potencjale bo musiałaby mieć nieskończoną energię.
<div class="read-more">
    <p>
        Uwaga, gdyby potencjał był skończony, nawet gdyby był większy niż energia cząstki, mogłaby ona wniknąć w niego z pewnym prawdopodobieństwem dzięki efektowi tunelowania kwantowego. Więcej o tym przeczytasz w poście <a href="/tutorials/quant_box.html">Kwantowa cząstka w studni potencjału</a>
    </p>
</div>
W tym obszarze energia potencjalna wynosi $0$ zatem cząstka ma jedynie energię kinetyczną $H=\frac{mv^2}{2}$. Którą wyrażamy za pomocą pędu $H=\frac{p^2}{2m}$ a następnie podstawiamy operator pedu używany w mechanice kwantowej $p=-i\hbar\partial_x$ zatem hamiltonian to:

$$H=-\frac{\hbar^2}{2m}\partial_x^2$$

Teraz musimy znaleźć energie jakie może przyjmować nasza cząstka, czyli wartości własne hamiltonianu. Innymi słowy musimy znaleźć wszystkie $E_n$ takie, że:

$$H\psi_n=E_n\psi_n$$

dla pewnych funkcji $\psi_n$.

Musimy jednak jescze określić warunki brzegowe dla tego równania. Wiemy, że cząstka nie wnika w obszar o nieskończonym potencjale zatem funkcje $\psi_n$ (opisujące stan cząstki) muszą być równe zeru w punktach $x=0$ oraz $x=a$.

Podsumowując mamy do rozwiązania następujące równanie różniczkowe:

$$-\frac{\hbar^2}{2m}\partial_x^2\psi_n=E_n\psi_n$$

$$\psi_n(0)=0$$

$$\psi_n(a)=0$$

Ogólnym rozwiązaniem tego równania jest:

$$\psi_n(x)=C_1e^{-\frac{i}{\hbar}\sqrt{2mE}x}+C_2e^{\frac{i}{\hbar}\sqrt{2mE}x}$$

a stałe $C_1$ i $C_2$ musimy wyznaczyć z warunków brzegowych. Z pierwszego mamy:

$$\psi_n(0)=0=C_1+C_2$$
$$C_2=-C_1$$

a z drugiego mamy:

$$\psi_n(a)=0=C_1e^{-\frac{i}{\hbar}\sqrt{2mE}a}-C_1e^{\frac{i}{\hbar}\sqrt{2mE}a}=-2iC_1\sin(\frac{1}{\hbar}\sqrt{2mE}a)$$

czyli albo $C_1=0$ ale to by oznaczało, że $\psi_n=0$ zawsze, co oznaczałoby, że w ogóle nie ma naszej cząstki. Albo:

$$\sin(\frac{1}{\hbar}\sqrt{2mE}a)=0$$

zatem

$$\frac{1}{\hbar}\sqrt{2mE}a=n\pi$$

$$E_n=n^2\frac{\pi^2\hbar^2}{2ma^2}$$

Znaleźliśmy zatem wartości energii, które może przyjmować cząstka, są to kolejno wartości:

$$E_0=0$$

$$E_1=\frac{\pi^2\hbar^2}{2ma^2}$$

$$E_2=4\frac{\pi^2\hbar^2}{2ma^2}$$

$$E_3=9\frac{\pi^2\hbar^2}{2ma^2}$$

$$\dots$$

Teraz zobaczmy jak wygląda sytuacja jeżeli istnieje drugi zwinięty wymiar $y$. Niech długość dodatkowego wymiaru będzie równa $l$. Teraz funkcja falowa będzie miała dwa argumenty $\psi_n(x,y)$. Cząstka będzie mogła poruszać się w obu wymiarach zatem jej pęd ma teraz dwi składowe $x$-ową i $y$-ową. Zatem hamiltonian ma postać:

$$H=-\frac{\hbar^2}{2m}(\partial_x^2+\partial_y^2)$$

warunki brzegowe dla wymiaru $x$ pozostają bez zmian:

$$\psi_{n,k}(0,y)=0$$

$$\psi_{n,k}(a,y)=0$$

dochodzi jednak warunek dla wymiaru $y$. Ponieważ dugi wymiar jest zwinięty w okrąg o długości $l$ to po przesunięciu się o $l$ w kierunku $y$ musimy wrócić do tego samego, czyli funkcja falowa musi mieć tą samą wartość:

$$\psi_{n,k}(x,0)=\psi_{n,k}(x,l)$$

$$E_n=n^2\frac{\pi^2\hbar^2}{2ma^2}$$

$$E_k=k^2\frac{2\pi^2\hbar^2}{ml^2}$$

$$E_{n,k}=n^2\frac{\pi^2\hbar^2}{2ma^2}+k^2\frac{2\pi^2\hbar^2}{ml^2}=(n^2+4k^2\left(\frac{a}{l}\right)^2)\frac{\pi^2\hbar^2}{2ma^2}$$

Porównując poiom energetyczne dla przypadku bez dodatkowego wymiaru oraz z nim, widzimy, że pojawia się dodatkowy człon:

$$E_n=n^2\frac{\pi^2\hbar^2}{2ma^2}$$

$$E_{n,k}=\left(n^2+\color{red}{4k^2\left(\frac{a}{l}\right)^2}\right)\frac{\pi^2\hbar^2}{2ma^2}$$

wydaje się więc, że wystarczy zmierzyć energię cząstki w studni potencjału aby wykryć dodatkowy wymiar. Oszacujmy jaka część energi cząstki jest związana z wymiarem $x$ a jaka z dodatkowym wymiarem $y$. Przyjmijmy, że dodatkowy wymiar ma długość Plancka a szerokość naszej studni jest rzędu nanometrów czyli ok. $10^{25}\hbar$, zatem:

$$E_n=10^{-50}n^2\frac{\pi^2}{2m}$$

$$E_k=k^2\frac{2\pi^2}{m}$$
