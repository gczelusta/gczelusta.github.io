Perceiving extra dimensions can be difficult. Let's consider a simpler illustration that's easy to imagine. Take a flat surface and transform it into a cylinder by rolling it up like a sheet of paper. If this cylinder is long and has a very small radius, it will look like a one-dimensional line. Nevertheless, it remains a two-dimensional surface, but with the second dimension compressed into a small circle.

![Surface](assets/videos/blog/surface.gif)

Additional dimensions of space, beyond the three we see, could also be compressed into small circles. For example, a 9-dimensional space could appear, on a larger scale, as a 3-dimensional space. To determine whether our world has extra dimensions, we need to confirm this through experiment. The question is whether such an experiment can be carried out.

Let's consider a two-dimensional example and observe how a particle moves in such a space. The particle will move in both dimensions — the one not curled into a circle, and the one that is curled up and hidden from us. Is it possible to experimentally detect this motion in the extra dimension?

Let's look at how a particle moves on a circle. We need to remember that we must use quantum physics to describe our world at small scales. So our particle is described by a wave function, which we can denote as $\psi$. In quantum mechanics, we have the following equation:

$$\hat{H}\psi(x)=E\psi(x)$$

The Hamiltonian operator ($\hat{H}$) acts on $\psi$, giving $E$ times $\psi$, where $E$ is the energy of the particle. We'll denote the particle's position on the circle by $x$. We can assume that our particle is free, meaning no forces act on it. The Hamiltonian operator for a free particle is:

$$\hat{H}=-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}$$

$$-\frac{\hbar^2}{2m}\frac{d^2}{dx^2}\psi(x)=E\psi(x)$$

Here $\hbar$ represents the reduced Planck constant. It's just a number, a very small one, and $m$ is the mass of our particle. The general solution to this equation can be expressed as follows:

$$\psi(x)=Ae^{i \frac{\sqrt{2mE}}{\hbar} x}+Be^{-i \frac{\sqrt{2mE}}{\hbar} x}$$

Here $i$ represents the imaginary unit, while $A$ and $B$ are arbitrary constants. These solutions describe waves; the first term corresponds to waves moving in the positive $x$ direction. The second term corresponds to waves moving in the opposite direction.

![Waves](assets/videos/blog/waves.gif)

So far, we would get this same result even if the particle moved only along a straight line. So how can we account for the fact that the particle moves along a circular path rather than a straight line? When we move along a circle, we return to the starting point after covering a distance equal to the circumference of the circle, i.e. $2\pi R$. Therefore, our solution, our wave function, must be periodic. This means that the value of $\psi$ at point $0$ must be the same as the value of $\psi$ at point $2\pi R$, where $R$ is the radius of our circle.

$$\psi(0)=\psi(2\pi R)$$

Substituting our solution into this equation, we get the following expression.

$$A+B=Ae^{i\frac{\sqrt{2mE}}{\hbar}2\pi R}+Be^{-i\frac{\sqrt{2mE}}{\hbar}2\pi R}$$

This equation can only be true if the following relation holds:

$$\frac{\sqrt{2mE}}{\hbar}2\pi R=k\cdot 2\pi\quad\forall k\in\mathbb{Z}$$

This is because $e$ raised to an integer multiple of $2\pi$ times $i$ equals $1$. We can obtain the equation for the energy of our particle.

$$E=\frac{\hbar^2}{2mR^2}k^2$$

The energy of a particle on a circle is not arbitrary — it is quantized. It can only take certain specific values. This energy equals a certain constant value, which contains the particle's mass, the reduced Planck constant, and the radius of the circle, multiplied by an integer squared. If $k=0$, the energy equals $0$, which corresponds to a particle at rest. If $k$ equals $1$, the energy equals the following constant

$$E=\frac{\hbar^2}{2mR^2}$$

If $k=2$, the energy equals 4 times this constant, and so on.

$$E=\frac{\hbar^2}{2mR^2}4$$

The reason for this phenomenon can also be understood with a picture. Since the particle is described by a wave function, this function must "fit" onto the circle.

![CompactWave](assets/videos/blog/compactwave.gif)

That's why only certain values are allowed.

So we know that, in motion on a circle, a particle can only have certain energy levels. Let's calculate the smallest amount of energy needed to set this particle in motion along a small circle. The minimum amount of energy occurs when $k=1$, since $k=0$ would mean the particle isn't moving at all.

Let's estimate the numerical value of the minimum energy a particle must have in order to move in the extra dimension. The number $\hbar$ is a constant equal to $6.6\cdot10^{-34}Js$. The radius of the dimension curled into a circle is unknown, but it must be very small. Let's assume it is on the order of the Planck length, equal to $1.6\cdot 10^{-35}m$, at which classical gravitational theory should break down. Let's take the mass of an electron, on the order of $10^{-31}kg$, as our mass. Plugging these parameters into the equation, it turns out that the minimum energy required to set a particle of mass $10^{-31}kg$ in motion in the extra dimension is $10^{33}J$.

The energy released by the most powerful hydrogen bomb in history was on the order of $10^{17}J$, which is $10^{16}=10000000000000000$ times smaller than what we need here. What's more, this energy would have to be delivered to a single particle. This is unattainable with currently available technology. The largest particle accelerator ever built, the LHC at CERN, gives particles an energy of (as much as, or merely) $2\cdot 10^{-6}J$. So, to move a particle in the extra dimension, we would need an accelerator capable of accelerating particles to an energy about $10^{39}$ times greater than the LHC.

![CompactEnergy](assets/videos/blog/compactenergy.gif)

This enormous number means that building such an accelerator is unattainable in the foreseeable future. Therefore, it is difficult to establish whether any extra dimensions exist at all. Put simply, if we operate in a low-energy environment, any possible extra dimensions at the Planck scale have no effect on us. However, there is hope that these dimensions are not quite that small — that is, larger than the Planck length but smaller than the lengths currently probed. In such a case, perhaps some more powerful accelerator built in the future could allow us to discover extra dimensions.