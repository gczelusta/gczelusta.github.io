---
name: geiger
title: Licznik Geigera
level: 1
---

Licznik Geigera pozwala na rejestrację promieniowania jonizującego.
Nie rozróznia jednak rodzaju promieniowania, rejestruje zarówno promieniowanie alfa, beta jak i gamma.
Jego głównym elementem jest szklana rurka z elektrodami pod wysokim napięciem.
Kiedy cząstka alpha, beta czy wysokoenergetyczny foton przelatują przez gaz wewnątrz rurki, jonizują go i umozliwiają przepływ prądu.
Impuls ten jest wzamcniany i zamieniany na dźwięk lub rejestrowany.
Stąd znane charakterystyczne trzaski dochodzące z czujnika Gaigera.
Kazdy taki trzask to właśnie impuls wywołany przelatującą cząstką promieniowania.
W naszym przypadku impuls ten pojawia się na wyjściu z czujnika podłączonym do Raspberry Pico i jest przez nie rejestrowany.

Licznik Geigera jedynie zlicza liczbę zarejestrowanych cząstek, nie mierzy ich energii.
Zatem miarą promieniowania jaką mozemy tu stosować są *zliczenia na minutę* (*cpm, counts per minute*).
Mozemy zobaczyć na wykresie liczbę zliczeń w zalezności od czasu.