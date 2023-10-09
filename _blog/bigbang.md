---
name: bigbang
title: Wielki (Nie)Wybuch
tags: OTW Kosmologia Filozofia
level: 0
---

Wszechświat powstał w wyniku Wielkiego Wybuchu? Nie do końca. O co zatem chodzi z tym Wielkim Bum, bo tak należałoby dokładnie przetłumaczyć angielskie określenie Big Bang?

Na tyle na ile dzisiaj wiemy, w przyrodzie istnieją tylko cztery oddziaływania fundamentalne: silne, słabe, elektromagnetyczne i grawitacyjne. Oddziaływania silne i słabe to nazwy pewnych oddziałań, nie przymiotniki. Oznacza to, że materia może oddziaływać ze sobą tylko na te cztery sposoby. Oddziaływania silne i słabe są krótkozasięgowe, bardzo krótkozasięgowe w związku z tym działają jedynie na poziomie cząstek elementarnych i w życiu codziennym ich bezpośrednio nie obserwujemy, chociaż oczywiście gdyby nie działały na cząstki, ani my, ani świat w takiej postaci jaką ma, byśmy nie istnieli. Oddziaływanie elektromagnetyczne obserwujemy w życiu codziennym i to w zasadzie tylko ono gra istotną rolę dla nas. Bo to dzięki niemu atomy tworzą cząsteczki a więc całą materię wokół nas i nas samych oczywiście też. To dzięki nim szklanka postawiona na stole nie przelatuje przez niego, a woda nalana do niej nie przecieka przez jej ścianki. Ostatnie z oddziaływań, grawitacyjne, odgrywa w naszym codziennym otoczeniu mniejszą rolę, co prawda dzięki niemu chodzimy po Ziemi i po podskoczeniu nie odlatujemy w kosmos ale poza tym przyciąganie grawitacyjne nie jest istotne w oddziaływaniu obiektów w naszym otoczeniu.

Co innego w większych skalach, skalach kosmicznych. Tam grawitacja króluje. Oddziaływania silne i słabe oczywiście roli nie grają jako krótkozasięgowe, a oddziaływania elektromagnetyczne choć o nieskończonym zasięgu nie działają na planety, gwiazdy i inne takie ponieważ te są obojętne elektrycznie. Zatem na polu boju pozostaje jedynie grawitacja i to ona rządzi ciałami niebieskimi. To ona rządzi ruchem Ziemi dookoła Słońca, to ona rządzi formowaniem się galaktyk i to ona również rządzi ewolucją Wszechświata jako całości. Dlatego jeżeli chcemy poznać przeszłość Wszechświata to musimy się przyjrzeć grawitacji. A co wiemy o grawitacji? Najlepszą teorią jaką mamy do dyspozycji w opisie grawitacji jest Ogólna Teoria Względności (OTW). Sformułowana przez Alberta Einsteina w 1915 roku.

Jest to teoria, która kompletnie zmieniła nasze postrzeganie przestrzeni i czasu. Wcześniej przestrzeń uznawano za sztywne tło na którym rozgrywa się wszystko co się dzieje we Wszechświecie. Podobnie czas uznawano za bezwzględnie płynący, z niezmiennym tempem, w jednakowy sposób dla wszystkich obserwatorów i niezależny od przestrzeni. Na gruncie OTW okazuje się, że czas i przestrzeń tworzą nierozerwalną strukturę, która co więcej nie jest niezmienna lecz bierze aktywny udział w procesach fizycznych. W takim obrazie masa (tudzież energia) powoduje odkształcenie czasoprzestrzeni. Wszystkie ciała poruszają się po tzw. liniach geodezyjnych, czyli najkrótszych możliwych w czasoprzestrzeni. Dla płaskiej czasoprzestrzeni są to zwykłe linie proste. Możemy zatem podsumować OTW w następujący sposób:

$$\left(kształt\; czasoprzestrzeni\right)=\left(rozkład\; masy\; lub\; energii\right)$$

Masa (lub energia) poruszają się tak aby dopasować sie do kształtu czasoprzestrzeni, jednocześnie powodując odkształcenie czasoprzestrzeni. To co zapisaliśmy słowami zapiszmy wzorem.

$$R_{\mu\nu}+\frac{1}{2}Rg_{\mu\nu}=8\pi T_{\mu\nu}$$

jest to tzw. równanie Einsteina. Nie martwmy się znaczkami za pomocą, których jest zapisane, za chwilę je rozszyfrujemy. Istotne jest to, że wyraża ono dokładnie to samo co wcześniej zapisaliśmy słowami. Lewa strona opisuje kształt czasoprzestrzeni a prawa rozkłąd masy lub energii.

wyjaśnienie matematycznych obiektów używanych w OTW zacznijmy od $g_{\mu\nu}$. Nazywamy je metryką, mówi ono o tym jak mierzy się odległości w danej przestrzenii. Spójrzmy na przykład dla płaskiej przestrzenii dwuwymiarowej. Wprowadzamy układ współrzędnych $xy$ i rysujemy mały odcinek o długości $ds$. Literkę $d$ przed różnymi symbolami możemy rozumieć jako bardzo małą część czegoś. Ma ona również precyzyjne matematyczne sformułowanie ale nie będzie nam potrzebne. Jak możemy wyrazić długość $ds$ za pomocą współrzędnych? Możemy skorzystać z tw. Pitagorasa. Odcnikowi $ds$ odpowiada, krótki odcinek na osi $X$ o długości $dx$ oraz podobnie na osi $Y$ odcninek $dy$, mamy zatem:

$$ds^2=dx^2+dy^2$$

![Metric](\assets\videos\blog\metric.gif)

Jaki ma to związek z $g_{\mu\nu}$? Otóż indeksy $\mu$ oraz $\nu$ przyjmują wartości współrzędnych przestrzeni, którą opsiujemy. W naszym przypadkiu mamy dwie współrzędne $x$ oraz $y$. Czyli tensor $g_{\mu\nu}$ ma następujące składowe $g_{xx}$, $g_{xy}$, $g_{yx}$ oraz $g_{yy}$ a ich wartości można odczytać z wyrażenia na $ds$, odnoszą się one do współczynników stojących przy odpowiednich wyrazach:

$$ds^2=g_{xx}dx^2+g_{xy}dxdy+g_{yx}dydx+g_{yy}dy^2$$

zatem

$$g_{xx}=g_{yy}=1$$

$$g_{xy}=g_{yx}=0$$

Możemy zapisać $g_{\mu\nu}$ jako macierz:

$$g_{\mu\nu}=\left(\begin{array}{cc}
	g_{xx}&g_{xy}\\ 
	g_{yx}&g_{yy}
\end{array} \right)=\left(\begin{array}{cc}
	1&0\\ 
	0&1
\end{array} \right)$$

Zobaczmy na jeszcze jeden przykład, tym razem przestrzeni zakrzywionej. Wyobraźmy sobie sferę. Najwygodniejszymi współrzędnymi w tym przypadku będą współrzędne sferyczne, czyli dwa kąty $\theta$ i $\phi$. Podobnie jak przedtem chcemy wyrazić długość małego odcinka $ds$ za pomocą współrzędnych $d\theta$ i $d\phi$. Teraz wzór jest nieco mniej oczywisty:

$$ds^2=d\theta^2+\sin^2\theta d\phi^2$$

![Metric](\assets\videos\blog\sphere_metric.gif)

ponownie możemy odczytać elementy $g_{\mu\nu}$

$$g_{\theta\theta}=1$$

$$g_{\phi\phi}=\sin^2\theta$$

$$g_{\theta\phi}=g_{\phi\theta}=0$$

i zapisać w formie macierzy

$$g_{\mu\nu}=\left(\begin{array}{cc}
	g_{\theta\theta}&g_{\theta\phi}\\ 
	g_{\phi\theta}&g_{\phi\phi}
\end{array} \right)=\left(\begin{array}{cc}
	1&0\\ 
	0&\sin^2\theta
\end{array} \right)$$

Jakwidzimy po tych dwóch przykładach $g_{\mu\nu}$ ma prostą interpretację geometryczną, pozwala liczyć odległości. Widzimy też, że ma różną formą w zależności od geometrii przestrzeni. Ponownie, $g_{\mu\nu}$ można zdefiniować w precyzyjny sposób matematycznie, co więcej nie jest to jedyna wielkość, która decyduje o kształcie przestrzeni ale do podstawowych zagadnień OTW to nam wystarczy.

Obiekty $R_{\mu\nu}$ (tensor Ricciego) oraz $R$ (skalar Ricciego), które też pojawiają się w równaniu Einsteina można wyrazić za pomocą $g_{\mu\nu}$. Nie będziemy tu podawać wzorów ale pamiętajmy, że znając $g_{\mu\nu}$ można obliczyć $R_{\mu\nu}$ oraz $R$. Można by zapisać równanie Einsteina używając jedynie $g_{\mu\nu}$ i jego pochodnych, jednak byłoby wtedy długie i skomplikowane dlatego wprowadza się $R_{\mu\nu}$ oraz $R$.

Została nam jeszcze prawa strona równania Einsteina. Widzimy tam stałą grawitacji $G$ oraz tzw. tensor energii-pędu $T_{\mu\nu}$, który opisuje rozkład masy (energii) w przestrzenii, jego konkretną formę zobaczymy później.

Chcemy zobaczyć gdzie w równaniach Einsteina ukryty jest Wielki Wybuch. Rówanania Einsteina są dość ogólne. Kiedy chcemy policzyć coś w konkretnej stuacji musimy zapisać te równanie dla tej konkretenj sytuacji. Aby zastanwiać się nad początkiem Wszechświata musimy spróbować zapisać równania Einsteina dla Wszechświata jako całości. W takim ujęciu nie interesują nas szczegóły budowy Wszechświata a jedynie jego ogólny kształt. Najczęściej się przyjmuje, że Wszechświat w dużej skali jest jednorodny i izotropowy. Co to znaczy? Jednorodny tzn. że jest taki sam w każdym miejscu, a izotropowy tzn. że jest takim sam w każdym kierunku. Nie wiemy czy tak jest na pewno, bo nie widzieliśmy całego Wszechświata, ale mamy poszlaki obserwacyjne o tym świadczące. Przy taki założeniu okazuje się, że istnieją tylko trzy możliwe $g_{\mu\nu}$, które mogłyby opisywać czasoprzestrzeń takiego Wszechświata.

$$ds^2=-dt^2+a^2\left(t\right)\left(\frac{dr^2}{1-kr^2}+r^2d\theta^2+r^2\sin^2\theta d\phi^2\right)$$

gdzie $k=0$ lub $k=1$ lub $k=-1$. Jest to tzw. metryka FLRW, od nazwisk Friedmann, Lemaitre, Robertson i Walker. Podobnie jak poprzednie metryki możemy zapisać ją w formie macierzy:

$$g_{\mu\nu}=\left(\begin{array}{cccc}
	g_{tt}&g_{tr}&g_{t\theta}&g_{t\phi}\\ 
	g_{rt}&g_{rr}&g_{r\theta}&g_{r\phi}\\
	g_{\theta t}&g_{\theta r}&g_{\theta\theta}&g_{\theta\phi}\\
	g_{\phi t}&g_{\phi r}&g_{\phi\theta}&g_{\phi\phi}\\
\end{array} \right)=\left(\begin{array}{cc}
	-1&0&0&0\\
	0&\frac{a^2}{1-kr^2}&0&0\\
	0&0&a^2r^2&0\\
	0&0&0&a^2r^2\sin^2\theta\\
\end{array} \right)$$

Dokładnie tak samo jak wcześniejsze metryki w naszych prostych przykładach, tak samo ta, choć trochę baedziej złożona, opisuje geometrię czasoprzestrzenii. Mamy tu czery współrzędne $t$, $r$, $\theta$ oraz $\phi$ ponieważ opisujemy czasoprzestrzeń, która ma jeden wymiar czasowy ($t$) i trzy przestrzenne ($r$, $\theta$, $\phi$). Część przestrzenną metryki można by zapisać za pomocą współrzędnych katezjańskich $x$, $y$, $z$ jednak wygodniej jest zapisać ją za pomocą współrzędnych sferycznych $r$, $\theta$, $\phi$.

W meryce FLRW widzimy, że częśc opisująca przestrzeń $\left(\frac{dr^2}{1-kr^2}+r^2d\theta^2+r^2\sin^2\theta d\phi^2\right)$ jest pomnożona przez pewną funkcję $a^2(t)$ zależną od czasu. Możemy zapisać to słownie:

$$\left(metryka\; FLRW\right)=\left(czas\right)+\left(pewna\; funkcja\; czasu\right)\cdot\left(przestrzeń\right)$$

Widzimy zatem, że przestrzeń zmienia swój rozmiar w czasie.

Wniosek ten wynika jedynie z założenia, że Wszechświat jest jednorodny i izotropowy. Aby określić jak przestrzeń zmienia się w czasie, czyli aby znaleźć funkcję $a(t)$ musimy użyć równań Einsteina. Jak widzieliśmy wcześniej w tych równaniach pojawia się $T_{\mu\nu}$, który ma opisywać rozkład masy. Zatem aby powiedzieć coś o funkcji $a(t)$ musimy opisać rozkład materii we Wszechświecie.

Rozkład materii we Wszechświecie jest oczywiście dość złożony, a poza tym nie znamy go w pełni. Jednak, zauważmy, że patrząc w skali Wszechświata nawet galaktyki czy ich skupiska są jedynie drobnymi pyłkami swobodnie unoszącymi się w ogomnej przestenni. Możemy przyjąć w przybliżeniu, że Wszechświat jest wypełniony pyłem. Ponieważ wcześniej założyliśmy, że jest jednorodny i izotropowy to znaczy, że teraz musimy przyjąć, że pył ten jest równomiernie rozłożony we Wszechświecie.

Dla pyłu tensor energii-pedu ma bardzo prostą postać
$$T_{\mu\nu}=\left(\begin{array}{cc}
	\rho&0&0&0\\
	0&0&0&0\\
	0&0&0&0\\
	0&0&0&0\\
\end{array} \right)$$

gdzie $\rho$ to gęstość pyłu. Teraz możemy podstawić do równań Einsteina $T_{\mu\nu}$ oraz metrykę FLRW $g_{\mu\nu}$ (pamiętajmy, że $R_{\mu\nu}$ i $R$ można policzyć znając $g_{\mu\nu}$, zatem mamy wszystko czego potrzebujemy do równań Einsteina). Po przekształceniach otrzymujemy równanie:

$$\frac{\dot{a}^2+k}{a^2}=\frac{8\pi\rho}{3}$$

Możemy zobaczyć, że jest to równanie Einsteina zapisane dla naszego konretnego przypadku. Lewa strona opisuje geometrię czasoprzestrzenii, która jest zadana przez funkcję $a(t)$ (to ta funkcja, która mnożyła część przestrzenną w metryce FLRW i opisywała jej ewolucję) oraz jej pochodną $\dot{a}(t)$ (kropka oznacza pochodną po $t$, zatem jeżeli $a$ opisuje ewolucję przestrzeni, to $\dot{a}$ opisuje tempo tej ewolucji). Stała $k$ jest to ta sama stała co w metryce FLRW ($k=0,-1,1$), która odpowiada trzem możliwym postaciom metryki FLRW i określa krzywiznę przestrzeni. Prawa strona natomiast opsiuje rozkład materii, w naszym przypadku jednorodnego pyłu, dlatego zawiera jedynie gęstość $\rho$.

Teraz możemy rozwiązać to równanie (nazywane równaniem Friedmanna) i znaleźć $a(t)$. Przyjmijmy na razie $k=0$, co odpowiada płaskiemu Wszechświatowi. Nie wiemy jaką krzywiznę ma nasz Wszechświat ale z obserwacji wynika, że jest prawie płaski (nie wiemy czy dokładnie płaski). Po obliczeniach dostajemy:

$$a(t)=\sqrt{\frac{t}{t_0}}$$

gdzie $t_0$ to obecny wiek Wszechświata. Jak widać ze wzoru dla $t=0$ współczynnik skali znika:

$$a(0)=0$$

Przypomnijmy sobie, że $a$ mnoży część przestrzenną metryki, czyli wygląda na to, że istnieje jakaś chwila "zero" w której Wszechświat miał zerową objętość a później zaczął się rozszerzać. Mamy Wielki Wybuch!

Zastanówmy się jednak co nas doprowadziło do wyniku z Wielkim Wybuchem. Po pierwsze przyjęliśmy, że poprawną teorią opisującą grawitację jest OTW. A czy na pewno? OTW działa dość dobrze dla obiektów, które obserwujemy. Jednak prawie na pewno w sytuacjach bardzo skrajnych, czyli takich kiedy mamy do czynienia z bardzo dużymi energiami lub bardzo małymi odległościami OTW nie będzie działać poprawnie. Do opisu takich sytuacji potrzebujemy teorii kwantowej grawitacji. A początek Wszechświata niewątpliwie był skrajną sytuacją. Innymi słowy nie można naiwnie przedłużać wykresu $a(t)$ dowolnie daleko w przeszłość.

<div class="read-more">
    <p>
        Więcej o kwantowej grawitacji przeczytasz w poście <a href="/blog/qg.html">Kwantowa grawitacja</a>
    </p>
</div>

Bardziej zaawansowane modele kosmologiczne oraz obserwacje potwierdzają, że Wszechświat był w przeszłości bardzo mały i bardzo gorący. Zatem teoria Wielkiego Wybuchu, rozumiana jako rozszerzenia się Wszechświata od takich małych rozmiarów, jest prawdziwa. Jednak pojawiający się w OTW "punkt zero", moment w którym nie było przestrzeni wydaje się być jedynie artefaktem tej teorii. Nie należy go utożsamiać z Pocztkiem. W "bardziej" prawdziwej teorii kwantowej grawitacji nie powinno go być, choć oczywiście nie znamy jeszcze tej teorii.