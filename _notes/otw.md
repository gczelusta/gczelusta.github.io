---
name: otw
title: Ogólna teoria względności
level: 2
---

Notatki prezentujące w zwięzłej formie podstawy ogólnej teorii względności.

# Geometria Riemannowska

## Gładkie pole wektorowe $\mathcal{X}(M)$

Niech, $M$ to rozmaitość oraz $C^\infty(M):M\rightarrow \mathbb{R}$ wtedy:

$$\mathcal{X}(M):C^\infty(M)\rightarrow C^\infty(M)$$

$\mathcal{X}(M)\ni X$ jest odwzorowaniem liniowym oraz

$$X(fg)=X(f)g+fX(g)$$

**Obserwacja:**

$$X\in \mathcal{X}(M)\Rightarrow fX\in \mathcal{X}(M)\quad\forall f\in C^\infty(M)$$

$$X,Y\in \mathcal{X}(M)\Rightarrow [X,Y]\in \mathcal{X}(M)$$

gdzie $[X,Y]f:=X(Y(f))-Y(X(f))$

**Obserwacja**

Niech $\Omega^1(M)$ to przestrzeń 1-form różniczkowych.

$$\Omega^1(M)=\mathcal{X}(M)^*$$

$$\Omega^1(M)\ni\omega:\mathcal{X}(M)\rightarrow C^\infty(M)$$

jest odwzorowaniem liniowym oraz jest $C^\infty$-liniowe.

$$\omega(fX)=f\omega(X)\quad\forall f\in C^\infty(M)$$

## Koneksja liniowa $\nabla$

$$\nabla:\mathcal{X}(M)\times \mathcal{X}(M)\rightarrow\mathcal{X}(M)$$

Notacja:

$$\nabla(X,Y)\equiv\nabla_XY$$

jest odwzorowaniem biliniowym oraz $C^\infty$-liniowym na pierwszym argumencie

$$\nabla_{fX}Y=f\nabla_XY$$

oraz

$$\nabla_X(fY)=X(f)Y+f\nabla_XY$$

Obderwacje:

* istnieje wiele koneksji liniowych
* koneksje liniowe nie tworzą przestrzeni wektorowej
* niech $e_i$ będzie bazą $\mathcal{X}(M)$,tzn.

$$X=X^ke_k,\quad X^k\in C^\infty(M)$$
$$\nabla_{e_i}e_j=\Gamma_{ij}^ke_k$$

To pozwala policzyć koneksję na dowolnych polach wektorowych:

$$\nabla_VW=V^\mu\nabla_{e_\mu}\left(W^\nu e_\nu\right)=V^\mu\left(e_\mu\left(W^\mu\right)e_\nu+W^\nu\nabla_{e_\mu}e_\nu\right)=V^\mu\left(\frac{\partial W^\lambda}{\partial x^\mu}+W^\nu\Gamma^\lambda_{\mu\nu}\right)e_\lambda$$

Koneksja liniowa definiuje równoległy transport tensorów wzdłuż krzywych, w szczególności wektorów, pozwalając na wprowadzenie pochodnej kowariantnej, czyli uogólnienia pochodnej kierunkowej z funkcji na tensory. Wektor $X$ jest transportowany równolegle wzdłuż krzywej jeżeli:

$$\nabla_VX=0$$

gdzie $V$ to wektor styczny do tej krzywej.


## Torsja koneksji liniowej $T$

$$T:\mathcal{X}(M)\times\mathcal{X}(M)\rightarrow\mathcal{X}(M)$$

$$T:=\nabla_XY-\nabla_YX-[X,Y]$$

**Obserwacje**:

* $T(X,Y)=-T(Y,X)$

* $T(fX,Y)=fT(X,Y)$

## Krzywizna koneksji liniowej $R$

$$R:\mathcal{X}(M)\times\mathcal{X}(M)\times\mathcal{X}(M)\rightarrow\mathcal{X}(M)$$

$$R(X,Y)Z:=-\nabla_X\nabla_YZ+\nabla_Y\nabla_XZ+\nabla_{[X,Y]}Z$$

**Obserwacje**:

* $R(X,Y)Z=-R(Y,X)Z$

* liniowe oraz $C^\infty$-liniowe na wszystkich argumentach

## Wybór koneksji

Jeżeli $M$ jest wyposażona w metrykę $g$ wtedy koneksję spełniającą:
$$\nabla_{X}g=0$$
nazywamy kompatybilną z metryką.

Koneksję możemy wybrać na wiele sposobów. Wybrana koneksja zadaje krzywiznę oraz torsję.

## Tetrady

Often useful is to use non-coordinate bases (tetrads). Let $M$ be parallelizable manifold with a metric then there exist vector fields $e_a$ which are orthonormal in each point. We can express these vectors in coordinate basis:

$$e_a=e_a^\mu\partial_\mu$$

We have also dual vectors:

$$\theta^a=e^a_\mu dx^\mu$$

$$\langle\theta^a,e_b\rangle=\delta^a_b$$

Coefficients $e_a^\mu$ are called vierbeins. We can express metric tensor coefficients using vierbeins:

$$g_{\mu\nu}=e^a_\mu e^b_\nu\eta_{ab}$$

We denote tetrads (anholonomic) frames with Latin letters and coordinate (holonomic) frames with Greek letters. We can express also metric tensor in terms of $\theta^a$:

$$g=g_{\mu\nu}dx^\mu\otimes dx^\nu=\eta_{ab}\theta^a\otimes\theta^b$$

Tetrads has a non-vanishing Lie bracket:

$$[e_a,e_b]=c_{ab}^ce_c$$

where

$$c_{ab}^c=e^c_\nu\left(e_a^\mu\partial_\mu e_b^\nu-e_b^\mu\partial_\mu e_a^\nu\right)$$

Then we can define connection coefficients with respect to the tetrads by:

$$\nabla_{e_a}e_b=\Gamma^c_{ab}e_c$$


# Ogólna teoria względności

Pole grawitacyjne to symetryczne pole tensorowe $g_{\mu\nu}(x)$, które może być interpretowane jako pseudo-Riemannowska metryka czasoprzestrzeni. Dynamika tego pole jest ukryta w równaniach Einsteina, które wynikają z działania Hilberta-Einsteina:

$$S[g]=\frac{1}{16\pi G}\int d^4x\sqrt{-g}(R-2\Lambda)$$

gdzie $g$ to wyznacznik metryki $g_{\mu\nu}(x)$, $R$ to skalar Ricciego a $\Lambda$ to stała kosmologiczna. Indeksy greckie są indeksami stycznymi do czasoprzestrzeni.

## Sformułowanie za pomocą tetrad

...

$$S[e]=\int e\wedge e\wedge F^\star$$

## Sformułowanie Hamiltonowskie