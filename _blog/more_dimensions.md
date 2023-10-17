---
name: more_dimensions
title: Dodatkowe wymiary
level: 1
---

Żyjemy we Wszechświecie z trzema wymiarami przestrzennymi i jednym czasowym. Jednak niektóre nowe teorie fizyczne sugerują istnienie dodatkowych wymiarów. Na przykład, zgodnie z teorią strun, istnieje dziewięć wymiarów przestrzennych i jeden czasowy. Nie widzimy jednak tych dodatkowych wymiarów. Dlaczego?

Dostrzeżenie dodatkowych wymiarów może być trudne. Rozważmy prostszą ilustrację, którą łatwo sobie wyobrazić. Weźmy płaską powierzchnię i przekształćmy ją w cylinder, zwijając ją niczym kartkę papieru. Jeśli ten cylinder jest długi i ma bardzo mały promień, to będzie wyglądał jak jednowymiarowa linia.  Niemniej jednak pozostaje on wciąż dwuwymiarową powierzchnią, ale z drugim wymiarem skompresowanym do małego okręgu.

![Surface](\assets\videos\blog\surface.gif)

Dodatkowe wymiary przestrzeni, poza trzema które widzimy, mogą być również skompresowane do małych okręgów. Na przykład, 9-wymiarowa przestrzeń w większej skali może wydawać się przestrzenią 3-wymiarową. Aby ustalić, czy nasz świat ma dodatkowe wymiary, musimy to potwierdzić za pomocą eksperymentu. Pytanie czy da się taki eksperyment przeprowadzić?

Rozważmy dwuwymiarowy przykład i zaobserwujmy, jak porusza się cząstka w takiej przestrzeni. Cząstka będzia się poruszała w obu wymiarach, zarówno tym nie zwiniętym w okrąg jak i tym zwiniętym, który jest ukryty przed nami. Czy możliwe jest eksperymentalne wykrycie tego ruchu w dodatkowym wymiarze?

Przyjrzyjmy się, jak cząstka porusza się w okręgu. Musimy pamiętać, że musimy użyć fizyki kwantowej, aby opisać nasz świat w małej skali. Tak więc nasza cząstka jest opisana przez funkcję falową, którą możemy oznaczyć jako $\psi$. W mechanice kwantowej mamy następujące równanie:

$$\hat{H}\psi(x)=E\psi(x)$$

Operator hamiltonianu ($\hat{H}$) działa na $\psi$ dając $E$ razy $\psi$, gdzie $E$ to energia cząstki. Położenie cząstki na okręgu oznaczymy przez $x$. Możemy założyć, że nasza cząstka jest swobodna, tzn. nie działają na nią żadne siły. Operator hamiltonianu dla swobodnej cząstki to:

$$\hat{H}=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$$

$$-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}\psi(x)=E\psi(x)$$

Tutaj $\hbar$ reprezentuje zredukowaną stałą Plancka. Jest to tylko liczba, bardzo mała liczba, a $m$ jest masą naszej cząstki. Ogólne rozwiązanie tego równania można wyrazić następująco:

$$\psi(x)=Ae^{i \frac{\sqrt{2mE}}{\hbar} x}+Be^{-i \frac{\sqrt{2mE}}{\hbar} x}$$

Tutaj $i$ reprezentuje jednostkę urojoną, natomiast $A$ i $B$ to dowolne stałe. Rozwiązania te opisują fale, pierwszy człon odpowiada falom poruszającym się w kierunku dodatniego znaku $x$. Drugi człon odpowiada falom poruszającym się w przeciwnym kierunku

![Waves](\assets\videos\blog\waves.gif)

Jak na razie taki wynik uzyskalibyśmy również, gdyby cząstka poruszała się tylko po linii prostej. Jak zatem możemy uwzględnić, że cząstka porusza się po torze kołowym, a nie po linii prostej? Kiedy poruszamy się po okręgu, wracamy do punktu początkowego, jeśli pokonamy odległość równą obwodowi okręgu, czyli $2\pi R$. Dlatego nasze rozwiązanie, nasza funkcja falowa, musi być okresowa. Oznacza to, że wartość $\psi$ w punkcie $0$ musi być taka sama jak wartość $\psi$ w punkcie $2\pi R$, gdzie $R$ jest promieniem naszego okręgu.

$$\psi(0)=\psi(2\pi R)$$

Wstawiając nasze rozwiązanie do tego równania, otrzymujemy następujące wyrażenie.

$$A+B=Ae^{i\frac{\sqrt{2mE}}{\hbar}2\pi R}+Be^{-i\frac{\sqrt{2mE}}{\hbar}2\pi R}$$

Równanie to może być prawdziwe tylko wtedy, gdy zachodzi następująca zależność:

$$\frac{\sqrt{2mE}}{\hbar}2\pi R=k\cdot 2\pi\quad\forall k\in\mathbb{Z}$$

Dzieje się tak, ponieważ $e$ do potęgi całkowitej wielokrotności $2\pi$ razy $i$ jest równe $1$. Możemy otrzymać równanie na energię naszej cząstki.

$$E=\frac{\hbar^2}{2mR^2}k^2$$

Energia cząstki na okręgu nie jest dowolna, jest skwantowana. Może być równa tylko pewnym określonym wartościom. Energia ta jest równa pewnej stałej wartości, która zawiera masę cząstki, zredukowaną stałą Plancka i promień okręgu, pomnożonej przez liczbę całkowitą podniesioną do kwadratu. Jeśli $k=0$, to energia jest równa $0$, co oznacza nieporuszającą się cząstkę. Jeśli $k$ jest równe $1$, to energia jest równa następującej stałej

$$E=\frac{\hbar^2}{2mR^2}$$

jeśli $k=2$, to energia jest równa 4-krotności tej stałej i tak dalej.

$$E=\frac{\hbar^2}{2mR^2}4$$

Przyczynę tego zjawiska można również zrozumieć za pomocą obrazka. Jako, że cząstka jest opisywana przez funkcję falową, funkcja ta musi "pasować" do okręgu.

![CompactWave](\assets\videos\blog\compactwave.gif)

Dlatego dozwolone są tylko określone wartości.

Wiemy zatem, że w ruchu na okręgu cząstka może posiadać tylko określone poziomy energii. Obliczmy więc najmniejszą ilość energii potrzebną do poruszenia się tej cząstki po małym okręgu. Najmniejsza ilość energii będzie wtedy, gdy $k=1$, ponieważ $k=0$ spowoduje, że cząstka nie będzie się poruszać.

Oszacujmy ile liczbowo wynosi najmniejsza energia, którą musi mieć cząstka aby poruszać się w dodatkowym wymiarze. Liczba $\hbar$ jest stałą równą $6,6\cdot10^{-34}Js$. Promień wymiaru zwiniętego w okrąg jest nieznany, ale musi być bardzo mały. Przyjmmijmy, że jest on rzędu długości Plancka równej $1,6\cdot 10^{-35}m$, przy której to klasyczna teoria grawitacji powinna się załamywać. Jako masę przyjmijmy masę dużych cząsteczek chemicznych czyli rzędu $10^{-25}kg$. Po wprowadzeniu tych parametrów do równania okazuje się, że minimalna wymagana energia potrzebna do ruszenia cząstki o masie $10^{-25}kg$ w dodatkowym wymiarze wynosi wynosi $10^{25}J$.

Eneregia wybuchu najpotężniejszej bomby wodorowej w historii świata była rzędu $10^{17}J$, czyli $10^8=100000000$ razy mniejsza niż ta której tu potrzebujemy. Co więcej, ta energia musiałaby być nadana konkretnym cząstkom. Jest to nieosiągalne przy obecnie dostępnych technologiach. Największy zbudowany akcelerator cząstek LHC w CERNie nadeje cząstkom energię odpowiadającą (aż albo jedynie) $2\cdot 10^{-6}J$. W związku z tym do poruszenia cząstki w dodatkowym wymiarze potrzebujemy akceleratora, który może przyspieszać cząstki do energii ok. $10^{31}$ razy większej niż LHC.

![CompactEnergy](\assets\videos\blog\compactenergy.gif)

Ta ogromna liczba oznacza, że stworzenie takiego akceleratora jest nieosiągalne w najbliższej przyszłości. W związku z tym trudno jest ustalić, czy istnieją jakiekolwiek dodatkowe wymiary. Mówiąc prościej, jeśli działamy w środowisku o niskiej energii, wszelkie możliwe dodatkowe wymiary, w skali Plancka, nie mają na nas wpływu. Istnieje jednak nadzieja, że wymiary te nie są aż tak małe, tzn. większe niż długość Plancka ale mniejsze niż długości badane obecnie. W takiej sytuacji być może jakiś zbudowany w przyszłości potężniejszy akcelerator pozwoli odkryć dodatkowe wymiary.