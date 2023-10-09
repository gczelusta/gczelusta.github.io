<!-- ---
name: JodanSchwinger
title: Realizacja algebry za pomocą oscylatorów
--- -->

Bozonowe operatory kreacji i anihilacji:

$$[a_i,a_j^\dagger]=\delta_{ij}$$
$$[a_i^\dagger,a_j^\dagger]=[a_i,a_j]=0$$

wtedy możemy odwzorować macierze w operatory biliniowe na przestrzeni Focka:

$$M\mapsto\hat{M}=\sum_{i,j}a_i^\dagger M_{ij}a_j$$

jest to izomorfizm, tzn. operatory $\hat{M}$ spełniają te same relacje komutacji co macierz $M$.

Na przykład dla $SU(2)$ możemy zdefiniować operator:

$$\hat{J}_i=\vec{a}^\dagger\cdot\frac{\sigma_i}{2}\cdot\vec{a}$$

gdzie $\vec{a}=\{a_1,a_2\}$

czyli inaczej:

$$\hat{\vec{J}}=\vec{a}^\dagger\cdot\frac{\vec{\sigma}}{2}\cdot\vec{a}$$

Kwadrat takiego operatora dany jest przez:

$$J^2=\frac{N}{2}\left(\frac{N}{2}+1\right)$$

gdzie $N=\sum_ia_i^\dagger a_i$.

Rozpatrzmy teraz stan:

$$(a^\dagger_1)^k(a^\dagger_2)^n|00\rangle$$

czyli stan dwóch oscylatorów, jeden w stanie $k$-tym a drugi $n$-tym.

Działanie $J^2$ na ten stan daje:

$$J^2(a^\dagger_1)^k(a^\dagger_2)^n|00\rangle=\frac{k+n}{2}\left(\frac{k+n}{2}+1\right)(a^\dagger_1)^k(a^\dagger_2)^n|00\rangle$$

z kolei działanie $J_z$:

$$J_z(a^\dagger_1)^k(a^\dagger_2)^n|00\rangle=\frac{1}{2}(k-n)(a^\dagger_1)^k(a^\dagger_2)^n|00\rangle$$

zatem dla $j=\frac{k+n}{2}$ oraz $m=\frac{k-n}{2}$ stan $(a^\dagger_1)^k(a^\dagger_2)^n|00\rangle$ jest proporcjonalny do stanu spinu $|j,m\rangle$ a dokładniej:

$$|j,m\rangle=\frac{(a^\dagger_1)^k(a^\dagger_2)^n}{\sqrt{k!n!}}|00\rangle=\frac{(a^\dagger_1)^{(j+m)}(a^\dagger_2)^{(j-m)}}{\sqrt{(j+m)!(j-m)!}}|00\rangle$$

Dodatkowo:

$$J_+=a_1^\dagger a_2$$

$$J_-=a_2^\dagger a_1$$

$$J_z=\frac{a_1^\dagger a_1-a_2^\dagger a_2}{2}$$