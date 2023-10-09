---
name: lqg
title: LQG
---

Notatki prezentujące w zwięzłej formie podstawy pętlowej grawitacji kwantowej.

## Ogólna Teoria Względności

Działanie Holsta:

$$S[e,\omega]=\int e\wedge e\wedge (\star+\frac{1}{\gamma})F$$

gdzie $e$ to pole tetrad a $\omega$ koneksja Lorentza.

Na brzegu, pęd sprzeżony do $\omega$ jest 2-formą o wartościach w algebrze $sl(2,\mathbb{C})$:

$$\Pi=\frac{1}{6\pi G}\left((e\wedge e)^*+\frac{1}{\gamma}(e\wedge e)\right)$$

"Elektryczna" i "magnetyczna" część $B$ spełnia *linear simplicity constraint*

$$\vec{K}=\gamma\vec{L}$$

Teoria jest niezmienninac zna lokalne transformacje $SL(2,\mathbb{C})$.

## Traingulacja

Bulk

| Triangulation | two-complex |
| ------------ | ------------ |
| 4-simplex | vertex (v)|
| tetrahedron | edge (e)|
| traingle | face(f) |
| segment | - |
| point | - |

Boundary

| Triangulation | graph |
|---------------|-------|
| tetrahedron | node (boundary vertex) (n) |
| triangle | link (boundary edge) (l) |

## Dyskretyzacja

Każda krawędź (*edge*, $e$) ma przypisany element grupy:

$$\omega \longrightarrow U_e=Pe^{\int_e \omega}\in SL(2,\mathbb{C})$$

czyli holonomię koneksji wzdłuż krawędzi, czyli macierz transportu równoległego generowanego przez koneksję wzdłuż krawędzi ($e$).

Każdy trójkąt (*triangle*, $t$), czyli poprzez dualność, każda ściana (*face*, $f$), ma przypisany element algebry:

$$e \longrightarrow B_f=\int_{t_f}B\in sl(2,\mathbb{C})$$

czyli całkę po powierzchni z 2-formy $B$ na trójkącie $t$ dualnym do ściany $f$.

Na brzegu $U_l$ jest przypisany do linków, które są krawędzami brzegowymi a $B_l$ jest przypisany też do linków, które sąbrzegami ściany $f$.

## Kwantyzacja

### $\Gamma_\gamma$

Unitarne reprezentacje $SL(2,\mathbb{C})$ są etykietowane przez $(p,k)$, gdzie $p\in\mathbb{R}_+$ oraz $k = \{\frac{1}{2},\frac{3}{2},\dots\}$.

$SU(2)$ jest podgrupą $SL(2,\mathbb{C})$. Reprezentacje $SL(2,\mathbb{C})$ rozkładają się na reprezentacje $SU(2)$:

$$V^{(p,k)}=\oplus_{j=k}^\infty \mathcal{H}_j$$

gdzie $\mathcal{H}_j$ to nieredukowalna reprezentacja $SU(2)$ dla spinu $j$.

Zatem w $V^{(p,k)}$ można wybrać bazę $|p,k;j,m\rangle$ gdzie $j=k,k+1,\dots$ i $m=-j,\dots,j$.

Liczby kwantowe $(p,k)$ są związane z dwoma operatorami Casimira w $SL(2,\mathbb{C})$:

$$|\vec{K}|^2-|\vec{L}|^2=p^2-k^2+1$$

$$\vec{K}\cdot\vec{L}=pk$$

a $j$, $m$ są liczbami kwantowymi odpowiednio dla $|\vec{L}|^2$ oraz $L_z$.

Chcemy aby w granicy klasycznej zachodziło:

$$\vec{K}=\gamma\vec{L}$$

zatem

$$|\vec{K}|^2-|\vec{L}|^2=(\gamma^2-1)|\vec{L}|^2$$

$$\vec{K}\cdot\vec{L}=\gamma|\vec{L}|^2$$

czyli dla liczb kwantowych mamy:

$$p^2-k^2+1=(\gamma^2-1)j(j+1)$$

$$pk=\gamma j(j+1)$$

dla dużych liczb kwantowych otrzymujemy:

$$p^2-k^2+1=(\gamma^2-1)j^2$$

$$pk=\gamma j^2$$

czego rozwiązaniem jest:

$$p=\gamma k$$

$$k=j$$

Pierwsze równanie nakłada ograniczenie na reprezentacje unitarne $V^{(p,k)}$ z kolei drugie równanie wybiera z każdej $V^{(\gamma k,k)}$ poprzestrzeń o najniższym spinie z rozkładu $\oplus_{j=k}^\infty \mathcal{H}_j$.

Zatem stany spełniające relacje to

$$|p,k;j,m\rangle=|\gamma j,j;j,m\rangle$$

zatem stany z $SL(2,\mathbb{C})$ spełniające relacje możemy przypisać 1-1 do stanów z $SU(2)$:

$$\Gamma_\gamma : \mathcal{H}_j\rightarrow V^{(p=\gamma j, k=j)}$$

$$|j,m\rangle\rightarrow |\gamma j,j;j,m\rangle$$

Zatem mamy odwzorowanie z sieci spinowych $SU(2)$ do sieci spinowych $SL(2,\mathbb{C})$.

### Sieci spinowe

Przestrzeń Hlberta linków możemy zdekomponować:

$$L_2[SU(2)^L]=\otimes_l[\oplus_j(\mathcal{H}_j\otimes\mathcal{H}_j)]$$

po uwzględnieniu więzów w wierzchołkach:

$$L_2[SU(2)^L/SU(2)^N]=\oplus_{j_l}\otimes Inv_{SU(2)}(\mathcal{H}_{j_1}\otimes\mathcal{H}_{j_2}\otimes\mathcal{H}_{j_3}\otimes\mathcal{H}_{j_4})$$

Funkcja falowa na zamkniętym zorientowanym grafie $\Gamma$:

$$\psi_\Gamma : SU(2)^{\times E}\rightarrow\mathbb{C}$$
$$\{g_e\}_{e\in\Gamma}\mapsto=\psi_\Gamma(\{g_e\}_{e\in\Gamma})=\psi_\Gamma(\{h_{t(e)}g_eh^{-1}_{s(e)}\}_{e\in\Gamma})\quad\forall h_v\in SU(2)^{\times V}$$

a iloczyn skalarny to

$$\langle\psi_\Gamma|\tilde{\psi_\Gamma}\rangle=\int_{SU(2)^{\times E}}\prod_edg_e\overline{\psi_\Gamma(\{g_e\}_{e\in\Gamma})\tilde{\psi}_\Gamma(\{g_e\}_{e\in\Gamma})}$$

gdzie $dg_e$ to miara Haara.

Elementy $g$ przypisane linkom są reprezentowane przez macierz Wignera:

$$D^j_{mm'}(g)=\langle j,m|g|j,m'\rangle$$
$$\overline{D^j_{mm'}(g)}=D^j_{m'm}(g^{-1})$$

tworzą one bazę ortogonalną dla $L_2[SU(2)]$:

$$\int_{SU(2)}dg\overline{D_{ab}^j(g)}D_{cd}^k(g)=\frac{\delta_{jk}}{2j+1}\delta_{ac}\delta_{bd}$$

$$D^j_{m'm}=(-1)^{m'-m}(D^{j}_{-m',-m})^*$$

$$T|jm\rangle=(-1)^{j-m}|j,-m\rangle$$

gdzie $T$ to operator odbicia czasowego.

#### Elementy analizy harmonicznej

Rozpatrzmy przestrzeń funkcji całowalnych z kwadratem na zwartej grupie $U(1)$

$$\psi(\theta)\in L_2[U(1)]$$

z iloczynem skalarnym

$$(\psi,\phi)=\frac{1}{2\pi}\int_0^{2\pi}d\theta\bar{\psi(\theta)}\phi(\theta)$$

Ta przestrzeń jednocześnie niesie ze sobą reprezentację grupy $U(1)$:

$$\alpha\cdot\psi(\theta)=\psi(\theta+\alpha)\quad\forall\alpha\in U(1)$$

Ortogonalną bazą w tej przestrzeni są funkcje

$$\psi_n(\theta)=e^{in\theta}\quad n\in\mathbb{Z}$$

Każda z tych funkcji definiuje unitarną nieredukowalną jedno wymiarować reprezentację $U(1)$

??

$$\alpha\cdot\psi_n(\theta)=\psi_n(\theta+\alpha)\quad\forall\alpha\in U(1)$$

??

Zatem (z twierdzenia Fouriera):

$$L_2[U(1)]=\oplus_n\mathbb{C}_n$$

gdzie $\mathbb{C}_n$ to płaszczyzna zespolona niosąca reprezentację $U(1)$ w postaci:

??

$$\alpha\cdot z=\psi_n(\alpha)z\quad\forall\alpha\in U(1)\quad\forall z\in\mathbb{C}$$

czyli jakby obracająca płaszczyznę o kąt $n\alpha$

??

Dystrybucja delta na grupie $U(1)$ może być rozwnięta w bazie:

$$\delta(\theta)=\frac{1}{2\pi}\sum_n e^{in\theta}$$

Teraz rozpatrzmy przestrzeń funkcji całowalnych z kwadratem na grupie $L_2[SU(2)]$

$$\psi(U)\in L_2[SU(2)]$$

z iloczynem skalarnym

$$(\psi,\phi)=\int_{SU(2)}dU\bar{\psi(U)}\phi(U)$$

gdzie $dU$ to miara Haara.

Jeżeli grupę $SU(2)$ sparametryzujemy za pomocą katów Eulera:

$$U(\psi,\theta,\phi)=e^{\psi\tau_3}e^{\theta\tau_2}e^{\phi\tau_3}$$

gdzie $\psi\in[0,2\pi]$, $\theta\in [0,\pi]$, $\phi\in [0,4\pi]$ oraz $\tau_i=-\frac{i}{2}\sigma_i$ są generatorami $SU(2)$ w jej reprezentacji fundamentalnej.

wtedy miara Haara to:

$$\int dU=\frac{1}{16\pi^2}\int_0^{2\pi}d\psi\int_0^\pi\sin\theta d\theta\int_0^{4\pi} d\phi$$

Przestrzeń $L_2[SU(2)]$ niesie eprezentację grupy $SU(2)$:

$$\Lambda\cdot\psi(U)=\psi(\Lambda^{-1}U)\quad\forall\Lambda\in SU(2)$$

baza ortogonalna tej przestrzeni to

$$\psi_{jnm}(U)=D^j_{nm}(U)$$

gdzie $D^j_{nm}(U)$ to macierze Wignera.

Każda z tych funkcji jest elementem macierzowym unirtarnej nieredukowalnej reprezentacji $SU(2)$. Zatem z twierdzenia Petera-Weyla przestrzeń $L_2[SU(2)]$ rozkłada się na ortogonalną sumę nieredukowalnych reprezentacji $SU(2)$

$$L_2[SU(2)]=\oplus_jV_j$$

gdzie $j$ etykietuje nieredukowalne reprezentacje $SU(2)$.

$V_j$ to przestrzeń gdzie żyją macierze $D^j$, ma ona wymiar $(2j+1)^2$ i każdy indeks macierzy trasformuje się przez reprezentację spinu $j$, zatem:

$$V_j=\mathcal{H}_j\otimes\mathcal{H}_j$$

gdzie $\mathcal{H}_j$ jest reprezentacją $SU(2)$ dla spinu $j$.

Zatem ostatecznie

$$L_2[SU(2)]=\oplus_j(\mathcal{H}_j\otimes\mathcal{H}_j)$$

Dystrybucja delta na grupie $SU(2)$ to

$$\delta(U)=\sum_j(2j+1)Tr[D^j(U)]$$

Podsumowanie

| |$L_2[U(1)]$|$L_2[SU(2)]$|
|-|------|-------|
|Iloczyn skalarny|$\frac{1}{2\pi}\int_0^{2\pi}d\theta\overline{\psi(\theta)}\phi(\theta)$|$\int_{SU(2)}dU\overline{\psi(U)}\phi(U)$
|Działanie na przestrzeni|$\alpha\cdot\psi(\theta)=\psi(\theta+\alpha)$|$\Lambda\cdot\psi(U)=\psi(\Lambda^{-1}U)$|
|Funkcje bazowe|$e^{in\theta}$|$D^j_{nm}(U)$|
|Rzokład przestrzeni|$\oplus_n\mathbb{C}_n$|$\oplus_j(\mathcal{H}_j\otimes\mathcal{H}_j)$|
|Delta|$\frac{1}{2\pi}\sum_n e^{in\theta}$|$\sum_j(2j+1)Tr[D^j(U)]$|

$\dots$

$$\psi_{j_lk_n}(U_l)=\otimes_n\iota_{k_n}\otimes_l D^{j_l}(U_l)$$

### Intertwinery

Różne wybory kanału resprzężenia spinów we węźle są powiązane za pomocą unitarnej mapy zadanej przez symbole $\{3nj\}$

Nierówność trójkąta zwana też nierównością Mandelstama

$$|j_1-j_2|<j_3<j_1+j_2$$

Jedyny $SU(2)$ niezmienniczy obiekt z trzema indeksami to symbol Wignera $3j$:

$$\iota^{m_1m_2m_3}=\left(\begin{array}{ccc}j_1&j_2&j_3\\m_1&m_2&m_3\\\end{array}\right)$$

$SU(2)$ niezmiennicza kontrakcja indeksów magnetycznych odbywa się za pomocą:

$$g_{mn}=\sqrt{2j+1}\left(\begin{array}{ccc}j&j&0\\m&n&0\\\end{array}\right)=\delta_{m,-n}(-1)^{j-m}$$

$SU(2)$ niezmiennicza kontrakcja czterech symboli Wignera $3j$ $\iota$ daje symbol Wignera $6j$ (zwany też W-współczynnikiem Racach):

$$
\begin{split}\{\begin{array}{ccc}j_1&j_2&j_3\\j_4&j_5&j_6\\\end{array}\}=&\sum_{n_a,m_a}\prod_{a=1}^6g_{m_an_a}\left(\begin{array}{ccc}j_1&j_2&j_3\\m_1&m_2&m_3\\\end{array}\right)\left(\begin{array}{ccc}j_1&j_4&j_5\\n_1&m_4&m_5\\\end{array}\right)\\&\left(\begin{array}{ccc}j_2&j_4&j_6\\n_2&n_4&m_6\\\end{array}\right)\left(\begin{array}{ccc}j_3&j_5&j_6\\n_3&n_5&n_6\\\end{array}\right)\end{split}
$$

$SU(2)$ niezmiennicza kontrakcja dwóch symbol $\iota$, czyli intertwiner dla 4-walencyjnego wiezchołka:

$$\iota_k^{m_1m_2m_3m_4}=\left(\begin{array}{ccc}j_1&j_2&k\\m_1&m_2&m\\\end{array}\right)g_{mn}\left(\begin{array}{ccc}k&j_3&j_4\\ n&m_3&m_4\\\end{array}\right)$$

#### Węzeł drugiego rzędu



## Otwrte sieci spinowe

Niezmienniczość cechowania funkcji falowej redukuje  się do kowariancji $SU(2)$ na brzegu. (Zamiast $hgh^{-1}$ jest $gh^{-1}$)

## Kwantyzacja Diraca

$$\mathcal{H}_{kin}\xrightarrow[]{Gauss}\mathcal{H}^0\xrightarrow[]{Diff}\mathcal{H}^0_{diff}\xrightarrow[]{Scalar}\mathcal{H}_{phys}$$

Rozwiązanie węzła wektorowego nie jest podprzestrzenią $\mathcal{H}_{kin}$

Gelfand triple:

$$Cyl\subset\mathcal{H}_{diff}\subset Cyl^*$$

## Operator pętlowej holonomii

Większość operatorów, również różne wersje więzu Hamiltonowskiego, są zbudowane z podstawowych operatoróœ holonomy działających na zamknięte pętle grafu.

## Pytania ???

Czy stany linków odpowiadają holonomiom $h_l\in SU(2)$?

Czy linki mogą być tylko postaci?:

$$|e[g_e]\rangle\equiv\sum_{a,b}(-1)^{j_e-b}D^{j_e}_{a,b}(g_e)|j_e,a\rangle\otimes|j_e,b\rangle$$

Czy nie jest tak, że jak wystartuję od linku nie maksymalnie splątanego to po rzutowaniu dostanę dobry stan (z $\psi(g)=\psi(h_sgh_t^{-1}$) ale ten sam stan mógłbym uzyskać biorąc jakiś link maksymalnie splątany?

Czy zatem powininenem losować link tylko maksymalnie splątane i dodatkowo z uwzględnieniem klasy równoważności $g\sim h_sgh_t^{-1}$?

Czy tylko link singletowy odpowiada biwalentnemu węzłowi?

Czy ma znaczenie kolejność rzutowania, konstrukcji? Tzn. njapierw konstruję linki i je rzutuję na stany intertwiner, czy najpier tworzę intertwienr i je rzutuję na linki?

Sieci spinowe to nie tylko LQG. W LQG są zamknięte i skierowane?

Jakie są motywacje poszczególnych konstrukcji?

Konstrukcja "matematyczna" a "fizyczna"?

Wpływ grafu skierowanego na intertwiner. Tzn. wychodzące linki są z $V_j$ ale wchodzące z $V_j^*$. Co to znaczy w praktyce?

Mogę zafiksować na $\mathbb{I}$ $N-1$ linków dla $N$ węzłowego grafu?

Czy linki z holonomią $g=\mathbb{I}$ są w jakiś sposób redukowalne, nieistotne?

O co chodzi z więzem dyfeomorfizmu i s-knot states?

## Pomysły

- Otwarta sieć spinowa jako teleportacja pomiędzy obszarami brzegu, zależnośco od $g$, od $\mathcal{I}$

- Stany spinów, wysokich i na raz dla różnych $j$ za pomocą reprezentacji Jordana-Schwingera.

- Coarse graining za pomocą obwodów kwantowych (wariacyjne upraszczanie ?, szukamy ansatzu dającego ten sam brzeg ?, krajobraz mimnimów funkcji kosztu jako krajobraz bulków dających takie same brzegi ?), poprzez to dynamika?

- Implementacja więzu wektorowego