---
name: qc
title: Komputery kwantowe
---

Wyobraźmy sobie jakiś obiekt fizyczny, który może przyjmować dwa różne
stany. Na przykład może to być:

-   cząstka mogącą znajdować się w jednym z dwóch położeń, po lewej lub
    po prawej

    <!-- [0.45]{} ![image](/assets/images/blog/czastka_x1.png) -->
    <img src="/assets/images/blog/czastka_x1.png" width=300>
    <img src="/assets/images/blog/czastka_x2.png" width=300>


    <!-- [0.45]{} ![image](/assets/images/blog/czastka_x2.png) -->

-   cząstka, która może poruszać się w lewo lub w prawo

    [0.45]{} ![image](/assets/images/blog/czastka_v1.png)

    [0.45]{} ![image](/assets/images/blog/czastka_v2.png)

-   atom wodoru z elektronem na pierwszej lub drugiej powłoce

    [0.45]{} ![image](/assets/images/blog/atom1.png)

    [0.45]{} ![image](/assets/images/blog/atom2.png)

-   fala drgająca w pionie lub poziomie

    [0.45]{} ![image](/assets/images/blog/fala1.png)

    [0.45]{} ![image](/assets/images/blog/fala2.png)

-   foton padający na półprzepuszczalne lustro, który może się odbić lub
    nie

    [0.45]{} ![image](/assets/images/blog/plytka1.png)

    [0.45]{} ![image](/assets/images/blog/plytka2.png)

Niezależnie od konkretnej fizycznej realizacji każdego z tych układów
możemy jego dwa stany oznaczyć w następujący sposób: 
$$\begin{cases}
    \text{pierwszy stan:} &|0\rangle\; \text{np.:}\;
        |\includegraphics[scale=0.01, valign=c]{czastka_x1.png}\rangle,\;
        |\includegraphics[scale=0.1, valign=c]{czastka_v1.png}\rangle,\;
                    |\includegraphics[scale=0.01, valign=c]{atom1.png}\rangle,\;
                    |\includegraphics[scale=0.05, valign=c]{fala1.png}\rangle,\;
                    |\includegraphics[scale=0.05, valign=c]{plytka1.png}\rangle \\
            \text{drugi stan:} &|1\rangle\; \text{np.:}\;
                    |\includegraphics[scale=0.01, valign=c]{czastka_x2.png}\rangle,\;
                    |\includegraphics[scale=0.1, valign=c]{czastka_v2.png}\rangle,\;
                    |\includegraphics[scale=0.01, valign=c]{atom2.png}\rangle,\;
                    |\includegraphics[scale=0.05, valign=c]{fala2.png}\rangle,\;
                    |\includegraphics[scale=0.05, valign=c]{plytka2.png}\rangle \\
        \end{cases}$$ Są to tylko oznaczenia nawiązujące do bitów,
równie dobrze można by nazwać te stany inaczej: $$\begin{cases}
            |\uparrow\rangle\\
            |\downarrow\rangle\\
        \end{cases}$$ W klasycznej fizyce, czyli opisującej świat w
skalach jakie widzimy na codzień, tego typu układy mogłyby występować
jedynie w jednym z tych dwóch stanów, albo $|0\rangle$ albo $|1\rangle$.
Jednak w fizyce kwantowej, opisującej świat na fundamentalnym poziomie,
w małych skalach, układ może być w stanie *superpozycji*, tzn. być
kombinacją tych dwóch stanów:
$$|\psi\rangle = \alpha|0\rangle+\beta|1\rangle
        \label{eq:superpozycja}$$ przez $|\psi\rangle$ oznaczyliśmy
tutaj ogólnie pewien stan układu, natomist $\alpha$ i $\beta$ są
liczbami, w ogólności zespolonymi, określają one na ile stan
$|\psi\rangle$ jest bliski stanowi $|0\rangle$, a na ile stanowi
$|1\rangle$.

Spójrzmy na przykład, weźmy foton padający na półprzepuszczalne lustro,
foton ten może się odbić lub przez nie przelecieć. Stan fotonu po
interakcji z takim lustrem będzie zadany właśnie wzorem
(\[eq:superpozycja\]), tzn. będzie superpozycją fotonu który odbił się i
fotonu który przeszedł. Uwaga, nie oznacza to że foton w jakiś sposób
sie dzieli i trochę go się odbija a trochę przechodzi. Oznacza to, że
foton w stanie (\[eq:superpozycja\]) będzie zachowywał się ,,jakby był”
w dwóch miejscach jednocześnie. Taki stan fotonu jest czymś
nieituicyjnym dla nas ponieważ nie ma odpowiednika w naszej
codzienności, jednak stan kwantowy nie jest czymś co obserwujemy
bezpośrednio. Tym co ma fizyczne znaczenie są wyniki pomiarów dokonywane
na układzie. W przykładzie z fotonem możemy ustawić detektory reagujące
na obecność fotonu. W wyniku takiego pomiaru otrzymamy wynik mówiący o
tym że foton jest w jednej albo drugiej gałęzi. Nigdy nie otrzymamy
wyniku, że foton jest w obu gałęziach. Zatem mimo, że stan jest
kombinacją stanów $|0\rangle$ i $|1\rangle$ to wynik pomiaru jest albo
$0$ albo $1$.

Pojawia się więc pytanie w czym przejawia się fakt, że jednak foton był
w superpozycji. Otóż jeżeli będziemy powtarzać eksperyment polegający na
wysłaniu fotonu w kierunku półprzepuszczalnego lustra a następnie
dokonaniu pomiaru, to czasami będziemy otrzywać wynik pomiaru $0$ a
czasami $1$, w sposób losowy. Jednak prawdopodobieństwo otrzymania
danego wyniku będzie zdeterminowane przez stan układu
(\[eq:superpozycja\]). Tzn. prawdopodobieństo otrzymania wyniku $0$
będzie równe $|\alpha|^2$, prawdopodobieństo otrzymania wyniku $1$
będzie równe $|\beta|^2$.

Spójrzmy na przykład, weźmy foton padający na półprzepuszczalne lustro,
które jest dokładnie w $50\%$ półprzepuszczalne. Wtedy stan fotonu po
interakcji z lustrem będzie postaci:
$$|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle+\frac{1}{\sqrt{2}}|1\rangle
            \label{eq:plus}$$ Dlaczego? Bo w takim stanie
prawdopodobieństo, że foton ulegnie odbiciu (czyli otrzymamy wynik
pomiaru $0$) jest równe $|\frac{1}{\sqrt{2}}|^2=\frac{1}{2}$, oraz
prawdopodobieństo, że foton przejdzie (czyli otrzymamy wynik pomiaru
$1$) jest równe $|\frac{1}{\sqrt{2}}|^2=\frac{1}{2}$.

Biorąc pod uwagę, że moduł kwadrat współczynnika w stanie
(\[eq:superpozycja\]), oznacza prawdopodobieństwo, określ ile dla
dowolnego stanu kwantowego wynosi wyrażenie: $$|\alpha|^2+|\beta|^2=?$$

Powiedzieliśmy poprzednio, że aby eksperymentalnie określić
prawdopodobieństwa wyników musimy cały eksperyment powtórzyć
wielokrotnie. Dlaczego nie możemy raz wysłać fotonu w kierunku lustra a
potem wielokrotnie dokonać pomiaru? Dlatego, że w wyniku pomiaru
następuje *kolaps* stan kwantowego, tzn.: $$\begin{cases}
            \alpha|0\rangle+\beta|1\rangle \rightarrow |0\rangle & \text{gdy wynik pomiaru to $0$}\\
            \alpha|0\rangle+\beta|1\rangle \rightarrow |1\rangle & \text{gdy wynik pomiaru to $1$}\\
        \end{cases}$$ Zatem stan kwantowy przestaje być superpozycją.

Weźmy układ w stanie zadanym wzorem:
$$|\psi\rangle = \frac{\sqrt{3}}{2}|0\rangle-\frac{1}{\sqrt{2}}|1\rangle$$
Jakie jest prawdopodobieństwo otrzymania wyniku $0$ a jakie wyniku $1$?
Po dokonaniu pomiaru dokonujemy go jeszcze raz (na tym samym układzie,
bez przygotowywanie go od nowa), jakie jest prawdopodobieństo otrzymania
wyniku $0$ a jakie wyniku $1$, rozpatrz przypadki gdy w poprzednim
pomiarze wynik był $0$ i gdy był $1$.

Stan układu, który dotychczas zapisywaliśmy w tzw. notacji *braketowej*
można również zapisać za pomocą wektora. W przypadku układów kóre tu
opisujemy potrzebujemy wektory o dwóch współrzędnych. Wektory opisujące
stany bazowe to:
$$|0\rangle = \left(\begin{array}[]{c}
            1\\
            0\\
        \end{array}\right)$$ $$|1\rangle = \left(\begin{array}[]{c}
            0\\
            1\\
        \end{array}\right)$$

Natomiast dowolny stan będzie opisywany
wektorem:
$$|\psi\rangle=\alpha|0\rangle+\beta|1\rangle=\alpha\left(\begin{array}[]{c}
            1\\
            0\\
        \end{array}\right)+
        \beta\left(\begin{array}[]{c}
            0\\
            1\\
        \end{array}\right)=
        \left(\begin{array}[]{c}
            \alpha\\
            \beta\\
        \end{array}\right)$$ Umiemy już zapisywać stan układu
kwantowego. Zobaczmy teraz jak zapisać operacje na tym układzie.
Operację wykonywaną na układzie możemy zapisać za pomocą macierzy. Weźmy
na przykład taką macierz: $$H=\left(\begin{array}{cc}
            \frac{1}{\sqrt{2}}&\frac{1}{\sqrt{2}}\\
            \frac{1}{\sqrt{2}}&-\frac{1}{\sqrt{2}}\\
            \end{array}\right)
            \label{eq:hadamard}$$ aby zobaczyć jak działa na stan
$|0\rangle$ wykonujemy następujące obliczenie:
$$H|0\rangle=\left(\begin{array}{cc}
            \frac{1}{\sqrt{2}}&\frac{1}{\sqrt{2}}\\
            \frac{1}{\sqrt{2}}&-\frac{1}{\sqrt{2}}\\
            \end{array}\right)
            \left(\begin{array}[]{c}
                1\\
                0\\
            \end{array}\right)=
            \left(\begin{array}[]{c}
                \frac{1}{\sqrt{2}}\\
                \frac{1}{\sqrt{2}}\\
            \end{array}\right)=
            \frac{1}{\sqrt{2}}|0\rangle+\frac{1}{\sqrt{2}}|1\rangle$$ W
wyniku działania macierzy $H$ na stan $|0\rangle$ otrzymujemy stan
(\[eq:plus\]). Można zatem powiedzieć, że w przypadku układu będącego
fotonem padającym na płytkę, macierz $H$ opisuje działanie płytki o
półprzepuszczalności dokładnie $50\%$. Wszystkie zmiany stanu (poza
pomiarem) są opisywane przez tzw. macierze *unitarne*. Są to macierze
spełniające warunek: $$UU^\dagger=\mathbb{I}$$ gdzie $\mathbb{I}$ to
macierz jednostkowa: $$\mathbb{I}=\left(\begin{array}{cc}
            1&0\\
            0&1\\
            \end{array}\right)$$ natomiast $\dagger$ oznacza *sprzeżenie
hermitowskie* tzn. transpozycję macierzy wraz ze zespolonym sprzężeniem:
$$\left(\begin{array}{cc}
            a&b\\
            c&d\\
            \end{array}\right)^\dagger=
            \left(\begin{array}{cc}
                \bar{a}&\bar{c}\\
                \bar{b}&\bar{d}\\
                \end{array}\right)$$ We wszystkich zadaniach będziemy
rozpatrywać jedynie stany z rzeczywistymi (nie-zespolonymi)
współczynnikami, zatem możesz zapomnieć o sprzężeniu ($\bar{.}$).

Sprawdź czy macierz: $$R = \left(\begin{array}{cc}
                \cos\theta&\sin\theta\\
                \sin\theta&\cos\theta\\
                \end{array}\right)$$ jest unitarna dla dowolnego
$\theta$.

Dotychczas rozpatrywane układy, mające dwa stany bazowe, mogą pełnić
rolę *kubitu*, czyli podstawowej jednostki komputer kwantowego. Zanim
jednak przejdziemy do działania komputera kwantowego, musimy zobaczyć
jak opisywać układy składające się z więcej niż jednego kubitu.
Przykładem stanu dwu kubitowego może być układ dwóch cząstek, z których
każda może poruszać się w lewo lub w prawo. Tak jak wcześniej stan
każdej z nich możemy oznaczyć za pomocą $|0\rangle$ i $|1\rangle$,
natomiast stan całego układu będzie mógł przyjmować cztery bazowe stany:
$$\begin{cases}
            \text{pierwszy stan:} &|00\rangle\;np.:
                    |\includegraphics[scale=0.1, valign=c]{czastka_v1.png}
                    \includegraphics[scale=0.1, valign=c]{czastka_v1.png}\rangle\\
            \text{drugi stan:} &|01\rangle\;np.:
                    |\includegraphics[scale=0.1, valign=c]{czastka_v1.png}
                    \includegraphics[scale=0.1, valign=c]{czastka_v2.png}\rangle\\

            \text{trzeci stan:} &|10\rangle\;np.:
                    |\includegraphics[scale=0.1, valign=c]{czastka_v2.png}
                    \includegraphics[scale=0.1, valign=c]{czastka_v1.png}\rangle\\

            \text{czwarty stan:} &|11\rangle\;np.:
                    |\includegraphics[scale=0.1, valign=c]{czastka_v2.png}
                    \includegraphics[scale=0.1, valign=c]{czastka_v2.png}\rangle\\
        \end{cases}$$ natomiast dowolny stan tego układu będzie
kombinacją tych czterech:
$$|\psi\rangle = \alpha|00\rangle+\beta|01\rangle+\gamma|10\rangle+\delta|11\rangle$$
możemy również użyć notacji wektorowej, teraz jednak będziemy
potrzebować wektorów cztero elementowych:
$$|00\rangle=\left(\begin{array}{c}
            1\\
            0\\
            0\\
            0\\
            \end{array}\right)$$ $$|01\rangle=\left(\begin{array}{c}
            0\\
            1\\
            0\\
            0\\
            \end{array}\right)$$ $$|10\rangle=\left(\begin{array}{c}
            0\\
            0\\
            1\\
            0\\
            \end{array}\right)$$ $$|11\rangle=\left(\begin{array}{c}
            0\\
            0\\
            0\\
            1\\
            \end{array}\right)$$
$$|\psi\rangle=\alpha|00\rangle+\beta|01\rangle+\gamma|10\rangle+\delta|11\rangle=\left(\begin{array}{c}
            \alpha\\
            \beta\\
            \gamma\\
            \delta\\
            \end{array}\right)$$ Natomiast do opisu operacji będziemy
potrzebować macierzy unitarnych $4\times4$.

Ilu elementowych wektorów będziemy potrzebować aby opisać układ $N$
kubitów? A ilu elementowych macierzy będziemy potrzebować aby opisać
układ $N$ kubitów? Przyjmij, że na zapisanie jedenj liczby w komputerze
klasycznym potrzebujemy $8$ bajtów. Policz ile pamięci RAM potrzebowałby
komputer klasyczny aby w pełni przechować macierz opisującą operację na
$20$ kubitach, czyli np. opisać $20$ fotonów padających na płytkę. Wynik
podaj w terabajtach. Przyjmij, że zapisujemy każdy element macierzy, nie
korzytsamy z żadnych szczególnych cech tej macierzy.

W algorytmach kwantowych czyli ,,programach komputerowych” wykonywanych
na komputerach kwantowych, stosuje się notację za pomocą *obwodów*
kwantowych i *bramek* kwantowych. Każdy kubit reprezentuje pozioma
linia, np. tu mamy układ dwóch kubitów zainicjowanych w stanie
$|00\rangle$.

@C=1em @R=1em [ &\
&\
]{}

następnie operacje wykonywane na kubitach, są reprezentowane za pomocą
bramek, np. macierz (\[eq:hadamard\]), to tzw. bramka Hadamarda, możemy
ją zaznaczyć na obwodzie:

@C=1em @R=1em [ & & &\
& & &\
]{}

w tym przypadku działa ona na pierwszy kubit. Jak widzieliśmy wcześniej
bramka ta ze stanu $|0\rangle$ robi
$\frac{1}{\sqrt{2}}\left(|0\rangle+|1\rangle\right)$ zatem stan na końcu
powyższego obwodu będzie postaci:
$$\frac{1}{\sqrt{2}}\left(|0\rangle+|1\rangle\right)|0\rangle=
        \frac{1}{\sqrt{2}}\left(|00\rangle+|10\rangle\right)
        \label{eq:separowalny}$$ Wprowadźmy teraz operację dwu kubitową
tzn. działającą jednocześnie na dwa kubity, jak powiedzieliśmy wcześniej
opisywaną macierzą $4\times4$, jednak nie musimy zapisywać jej jawnie,
możemy wypisać jedynie jak działa na stany bazowe. Będzie to tzw.
kontrolowany NOT, CNOT, jest to bramka, która zmienia drugi kubit z
$|0\rangle$ na $|1\rangle$ lub z $|1\rangle$ na $|0\rangle$, ale tylko
wtedy jeśli pierwszy kubit był w stanie $|1\rangle$.
$$CNOT|00\rangle=|00\rangle$$ $$CNOT|01\rangle=|01\rangle$$
$$CNOT|10\rangle=|11\rangle$$ $$CNOT|11\rangle=|10\rangle$$ dodajmy ją
do naszego wcześniejszego obwodu:

@C=1em @R=1em [ & & & &\
& & & &\
]{}

stan układu po wykonaniu tego obwodu przyjmie postać:
$$\frac{1}{\sqrt{2}}\left(|00\rangle+|11\rangle\right)
        \label{eq:splatany}$$

Dany jest obwód:

@C=1em @R=1em [ & & & &\
& & & &\
& & & &\
]{}

gdzie $$R_y\left(\theta\right)=\left(\begin{array}{cc}
                \cos\frac{\theta}{2}&-\sin\frac{\theta}{2}\\
                \sin\frac{\theta}{2}&\cos\frac{\theta}{2}\\
                \end{array}\right)$$ Oblicz prawdopodobieństwo
otrzymania wyniku $101$ w pomiarze na końcu tego obwodu dla
$\theta=\frac{\pi}{3}$.

Istnieje jeszcze jeden bardzo ważny aspekt stanów kwantowych, nie mający
klasycznego odpowiednika, *splątanie* kwantowe. Spójrzmy na stan
(\[eq:separowalny\]), jak widać można go zapisać jako iloczyn stanów
poszczególnych kubitów:
$$\frac{1}{\sqrt{2}}\left(|00\rangle+|10\rangle\right)=
        \frac{1}{\sqrt{2}}\left(|0\rangle+|1\rangle\right)|0\rangle$$
Taki stan nazywamy *separowalnym*, stany które nie są separowalne to
właśnie stany splątane. Przykładem takiego stanu jest (\[eq:splatany\]),
nie da się go zapisać jako iloczyn stanów na obu kubitach.

Dla każdego z podanych stanów określ czy jest separowalny czy splątany:
$$|\psi_1\rangle = \frac{1}{2}\left(|00\rangle+|01\rangle+|10\rangle+|11\rangle\right)$$
$$|\psi_2\rangle = \frac{1}{2}\left(|00\rangle+|01\rangle+|10\rangle-|11\rangle\right)$$

Splątanie kwantowe wprowadza korelację między wynikami pomiarów na
poszczególnych podukładach układu. Sprawia poza tym, że znajomość stanu
każdego z podukładu nie wystarcza aby poznać stan całego ukladu.
Spójrzmy na przykład dwóch cząstek, z ktorych każda może poruszać się w
lewo lub w prawo. Wprowadźmy je najpierw w stan separowalny
(\[eq:separowalny\]):
$$\frac{1}{\sqrt{2}}\left(|\includegraphics[scale=0.1, valign=c]{czastka_v1.png}
                                    \includegraphics[scale=0.1, valign=c]{czastka_v1.png}\rangle+
                                |\includegraphics[scale=0.1, valign=c]{czastka_v2.png}
                                    \includegraphics[scale=0.1, valign=c]{czastka_v1.png}\rangle\right)$$
Kiedy dokonamy pomiaru na pierwszej cząstce jako wynik możemy
zarejestrować albo ruch w lewo albo w prawo, z prawdopodobieństwami
$50\%$. Dokonując pomiaru na drugiej cząstce zawsze dostaniemy w wyniku
ruch w lewo. Wyniki pomiarów na obu cząstkach są od siebie całkowicie
niezależne. Znając wynik pomiaru na jednej z cząstek, np. wiedząc że
pomiar na drugiej cząstce dał wynik w lewo, nie możemy przewidzieć
wyniku pomiaru na pierwszej cząstce, który wciąż może być w lewo lub w
prawo. Spójrzmy teraz na przypadek splątany (\[eq:splatany\]):
$$\frac{1}{\sqrt{2}}\left(|\includegraphics[scale=0.1, valign=c]{czastka_v1.png}
                                    \includegraphics[scale=0.1, valign=c]{czastka_v1.png}\rangle+
                                |\includegraphics[scale=0.1, valign=c]{czastka_v2.png}
                                    \includegraphics[scale=0.1, valign=c]{czastka_v2.png}\rangle\right)$$
Kiedy dokonamy pomiaru na pierwszej cząstce jako wynik możemy
zarejestrować albo ruch w lewo albo w prawo, z prawdopodobieństwami
$50\%$. Dokonując pomiaru na drugiej cząstce sytuacja jest taka sama,
możemy zarejestrować albo ruch w lewo albo w prawo, z
prawdopodobieństwami $50\%$. Ale tym razem wyniki pomiarów na obu
cząstkach są w pełni skolerowane. Znając wynik pomiaru na jednej z
cząstek, np. wiedząc że pomiar na drugiej cząstce dał wynik w lewo,
wiemy, że na pewno wynik pomiaru na pierwszej cząstce, da również wynik
w lewo. Jeżeli pomiar na drugiej cząstce dałby wynik w prawo, to wynik
pomiaru na pierwszej cząstce, da również wynik w prawo.

Alicja wygenerowała dwie cząstki w stanie:
$$|\psi\rangle = \frac{1}{\sqrt{3}}\left(|00\rangle+|01\rangle+|10\rangle\right)$$
Pierwszą cząstkę zostawiła dla siebie a drugą wysłała do Boba. Następnie
dokonała pomiaru na swojej cząstce otrzymując wynik $0$. Jakie jest
prawdopodobieństo, że gdy Bob dokona teraz pomiaru na swojej cząstce to
otrzyma $0$? A jakie byłoby to prawdopodobieństwo gdyby Alicja wczesniej
otrzymała wynik $1$?

Poznane przez nas zjawiska kwantowe są wykorzystywane do tworzenia
algorytmów kwantowych. Uruchamiane na komputerach kwantowych mogą one
osiągać, w pewnych zastosowaniach, wydajność nieosiągalną przez
komputery klasyczne. Przykładem takiego algorytmu może być algorytm
Shora, ktory umożliwia szybkie rozkladanie na czynniki pierwsze liczb.
Tym samym może posłużyć do łamania metod szyfrowania, kóre są obecnie
powzechnie używane, takich jak protokół RSA. Jednocześnie kwantowe
algorytmy mogą posłużyć do stworzenia bezpieczniejszych metod
szyfrowania. Algorytmy kwantowej dystrybucji klucza takie BB84, E91,
umożliwiają uzgodnienie między dwiema osobami tajnego klucza w sposób
bezpieczny.

Wszystkie omawiane tu cechy kwantowego świata oraz algorytmy wspomniane
powyżej możesz samemu przetestować na prawdziwym komputerze kwantowym.
Firma IBM oferuje dostęp do niektórych swoich komputerów kwantowych,
wystarczy założyć konto na stronie: https://quantum-computing.ibm.com/
Następnie można tam tworzyć algorytmy kwantowe (reprezentowane przez
obwody kwantowe, które poznaliśmy) i je uruchamiać. Można to robić
korzystając z graficznego kompozytora lub programujac w Pythonie za
pomocą biblioteki https://qiskit.org/

Badaniami nad informatyką kwantową zajmują sie naukowcy m.in. w m.in. w
Zakładzie Optyki Atomowej i w Zakładzie Teorii Układów Złożonych FAIS
UJ.

https://chaos.if.uj.edu.pl/ZOA/index.php

http://cs.if.uj.edu.pl/cs/department.html
