---
layout: default_math
title: Basic Concepts
nav_order: 1
grand_parent: Physics
parent: Quantum Mechanics
---

# The Basic Concepts of Quantum Mechanics

## Position and Mementum Eigenstates

The Position eigenstates satisfy the eigenvalue equation
$\hat{\mb{r}}\ket{\mb{r}}=\mb{r}\ket{\mb{r}}$. Similarly, the momentum
eigenstates satisfy the eigenvalue equation
$\hat{\mb{p}}\ket{\mb{p}}=\mb{p}\ket{\mb{p}}$. They follow the following orthonormal relations

$$
\begin{align}\label{eq:orth-r}
\braket{\mb{r}}{\mb{r}'}&=\delta (\mb{r}-\mb{r}'),\\
\label{eq:orth-p}
\braket{\mb{p}}{\mb{p}'}&=(2\pi \hbar)^3\delta (\mb{p}-\mb{p}'),
\end{align}
$$

and completeness relations\footnote{We use Landau's convention for the momentum eigenstates.}

$$
\begin{align}\label{eq:comp-r}
\int d\mb{r} \ket{\mb{r}}\bra{\mb{r}}&=1,\\
\label{eq:comp-p}
\int \frac{d\mb{p}}{(2\pi \hbar)^3} \ket{\mb{p}}\bra{\mb{p}}&=1,
\end{align}
$$

respectively.

Since the momentum eigenstates satisfy
$\hat{\mb{p}}\ket{\mb{p}}=\mb{p}\ket{\mb{p}}$, we can project this equation
using the position basis $\ket{\mb{r}}$ and write

$$
\begin{align}
\bra{\mb{r}}\hat{\mb{p}}\ket{\mb{p}}=-i\hbar\pdv{\mb{r}} \braket{\mb{r}}{\mb{p}}=\mb{p}\braket{\mb{r}}{\mb{p}}.
\end{align}
$$

Solving for $\braket{\mb{r}}{\mb{p}}$, we find the momentum wave function

$$
\begin{align}
\braket{\mb{r}}{\mb{p}}=e^{i\mb{p}\cdot\mb{r}/\hbar},
\end{align}
$$

where we have chosen the normalization constant as one in accordance
to our normalization convention. If we use
Eq. \eqref{eq:comp-r} to expand $\ket{\mb{p}}$, we find

$$
\begin{align}
\ket{\mb{p}}=\int d\mb{r} \braket{\mb{r}}{\mb{p}}\ket{\mb{r}}=\int d\mb{r} e^{i\mb{p}\cdot\mb{r}/\hbar}\ket{\mb{r}}
\end{align}
$$

is just the Fourier transform of the position eigenket $\ket{\mb{r}}$.

We can repeat the above derivation in the momentum representation for
the eigenvalue equation $\hat{\mb{r}}\ket{\mb{r}}=\mb{r}\ket{\mb{r}}$. Now in momentum basis this is

$$
\begin{align}
\bra{\mb{p}}\hat{\mb{r}}\ket{\mb{r}}=i\hbar\pdv{\mb{p}}\braket{\mb{p}}{\mb{r}}=\mb{r}\braket{\mb{p}}{\mb{r}}.
\end{align}
$$

Again solving for $\braket{\mb{p}}{\mb{r}}$, we get

$$
\begin{align}
\braket{\mb{p}}{\mb{r}}=e^{-i\mb{p}\cdot\mb{r}/\hbar}.
\end{align}
$$

If we now use Eq. \eqref{eq:comp-p} to expand $\ket{\mb{r}}$, we have

$$
\begin{align}
\ket{\mb{r}}=\int \frac{d\mb{p}}{(2\pi \hbar)^3}\braket{\mb{p}}{\mb{r}} \ket{\mb{p}}=\int \frac{d\mb{p}}{(2\pi \hbar)^3}e^{-i\mb{p}\cdot\mb{r}/\hbar}\ket{\mb{p}}.
\end{align}
$$

This is again just the Fourier transform of the momentum eigenket $\ket{\mb{p}}$.

If the state of a system is characterized by the state ket $\ket{\psi}$,
in the position and momentum representations we have

$$
\begin{align}
\ket{\psi}=\int d\mb{r} \braket{\mb{r}}{\psi}\ket{\mb{r}}=\int d\mb{r} \psi(\mb{r}) \ket{\mb{r}},
\end{align}
$$

and

$$
\begin{align}
\ket{\psi}=\int \frac{d\mb{p}}{(2\pi \hbar)^3}\braket{\mb{p}}{\psi} \ket{\mb{p}}=\int \frac{d\mb{p}}{(2\pi \hbar)^3}\tilde{\psi}(\mb{p}) \ket{\mb{p}},
\end{align}
$$

respectively, where $\braket{\mb{r}}{\psi}\equiv\psi(\mb{r})$ is the wave
function of the state $\ket{\psi}$ in the position representation and $\braket{\mb{p}}{\psi}\equiv \tilde{\psi}(\mb{p})$ is the wave function of the state $\ket{\psi}$ in the momentum representation. These wave functions are in fact just the projections of the state on to the position basis and the momentum basis, respectively. Now if we insert the completeness relation of momentum eigenkets into the position wave function, and the completeness relation of the position eigenkets into the momentum wave function, we obtain

$$
\begin{align}\label{eq:ft-wf-rp}
\psi(\mb{r})&=\int \frac{d\mb{p}}{(2\pi \hbar)^3}\braket{\mb{r}}{\mb{p}}\braket{\mb{p}}{\psi}=\int \frac{d\mb{p}}{(2\pi \hbar)^3} \tilde{\psi}(\mb{p})e^{i\mb{p}\cdot\mb{r}/\hbar},\\
\label{eq:ft-wf-pr}
\tilde{\psi}(\mb{p})&=\int d\mb{r}\braket{\mb{p}}{\mb{r}} \braket{\mb{r}}{\psi}=\int d\mb{r} \psi(\mb{r})e^{-i\mb{p}\cdot\mb{r}/\hbar}.
\end{align}
$$

Therefore, the position and momentum wave function form a Fourier transform
pair
\footnote{The choice of normalization of the momentum eigenstates makes the
Fourier transform pair consistent with the Fourier transform convention used
in \textit{Mathematics}.
The wave function $\psi(\mb{r})$ in the position representation is
a combination of plane waves of the form $e^{i\kr}$ ($\mb{p}=\hbar\mb{k}$).}.


## Harmonic Oscillator
The Hamiltonian for a classical oscillator is given by

$$
\begin{align}
\ham=\frac{p^2}{2m}+\frac{1}{2}m\omega^2 x^2.
\end{align}
$$

If we treat $p$ and $x$ as operators, we have the Hamiltonian of a quantum harmonic oscillator

$$
\begin{align}
\ham=\frac{\hat{p}^2}{2m}+\frac{1}{2}m\omega^2 \hat{x}^2.
\end{align}
$$

We now introduce the operators

$$
\begin{align}
a=\sqrt{\frac{m\omega}{2\hbar}}\left (\hat{x}+\frac{i\hat{p}}{m\omega} \right),\\
a^\dagger=\sqrt{\frac{m\omega}{2\hbar}}\left (\hat{x}-\frac{i\hat{p}}{m\omega} \right).
\end{align}
$$

From the canonical commutation relation we can calculate the commutator

$$
\begin{align}
[a,a^\dagger]&=\frac{m\omega}{2\hbar}\left [\left (\hat{x}+\frac{i\hat{p}}{m\omega} \right),\left (\hat{x}-\frac{i\hat{p}}{m\omega} \right) \right ] \notag \\
	&=\frac{1}{2\hbar}([\hat{x},-i\hat{p}]+[i\hat{p},\hat{x}]) \notag \\
	&=1.
\end{align}
$$

If we rewrite $\hat{x}$ and $\hat{p}$ in terms of $a$ and $a^\dagger$

$$
\begin{align}
\hat{x}=\sqrt{\frac{\hbar}{2m\omega}} (a+a^\dagger),\\
\hat{p}=-i\sqrt{\frac{\hbar m\omega}{2}}(a-a^\dagger).
\end{align}
$$

and substitute it into the Hamiltonian, we can rewrite the Hamiltonian as

$$
\begin{align}
\ham&=-\frac{\hbar\omega}{4}(a-a^\dagger)^2+\frac{\hbar\omega}{4}(a+a^\dagger)^2 \notag \\
	&=\frac{\hbar\omega}{2}(aa^\dagger+a^\dagger a) \notag \\
	&=\hbar\omega\left (a^\dagger a+\frac{1}{2} \right ), \label{eq:ham-ho}
\end{align}
$$

where we have used the commutation relation for $a$ and $a^\dagger$
in the last equal sign. The operator $a^\dagger a$ is clearly a Hermitian operator and the Hamiltonian can be diagonalized simultaneously with it. If we define the number operator as $N=a^\dagger a$ and denote its eigenkets as $\ket{n}$ we have

$$
\begin{align}
N\ket{n}=n\ket{n},
\end{align}
$$

where n is the eigenvalue associated with the eigenket $\ket{n}$.
From Eq. \eqref{eq:ham-ho} we see that the kets $\ket{n}$ are also eigenkets of the Hamiltonian and the energy eigenvalues are

$$
\begin{align}
E_n=\hbar\omega\left (n+\frac{1}{2} \right ).
\end{align}
$$

To determine the allowed $n$, we first calculate the commutators

$$
\begin{align}
[N,a]=[a^\dagger a,a]=[a^\dagger,a]a=-a,\\
[N,a^\dagger]=[a^\dagger a,a^\dagger]=a^\dagger [a,a^\dagger]=a^\dagger.
\end{align}
$$

If we calculate

$$
\begin{align}
Na\ket{n}&=(aN-a)\ket{n}\notag \\
	&=(n-1)a\ket{n},
\end{align}
$$

We find that $a\ket{n}$ is also an eigenket of $N$ with eigenvalue $n-1$. Similarly,

$$
\begin{align}
Na^\dagger\ket{n}&=(a^\dagger N+ a^\dagger)\ket{n}\notag \\
	&=(n+1)a^\dagger\ket{n},
\end{align}
$$

So $a^\dagger\ket{n}$ is an eigenket of $N$ with eigenvalue $n+1$. From this we must have

$$
\begin{align}
a\ket{n}=c\ket{n-1},
\end{align}
$$

where $c$ is some normalization constant. If we require both $\braket{n}{n}=1$ and $\braket{n-1}{n-1}=1$, we find

$$
\begin{align}
\bra{n}a^\dagger a\ket{n}=n\braket{n}{n}=|c|^2\braket{n-1}{n-1}.
\end{align}
$$

Choosing $c$ to be real and positive we obtain

$$
\begin{align}
a\ket{n}=\sqrt{n}\ket{n-1}.
\end{align}
$$

Similarly for $a^\dagger$, we have

$$
\begin{align}
a^\dagger\ket{n}=\sqrt{n+1}\ket{n+1}.
\end{align}
$$

The operators $a$ and $a^\dagger$ are thus called the lowering and raising operators or the annihilation and creation operators, respectively.

If we apply $a$ consecutively to the state $\ket{n}$, we obtain

$$
\begin{align}
a\ket{n}&=\sqrt{n}\ket{n-1} \notag,\\
a^2\ket{n}&=\sqrt{n(n-1)}\ket{n-2} \notag,\\
a^3\ket{n}&=\sqrt{n(n-1)(n-2)}\ket{n-3} \notag,\\
\vdots \notag
\end{align}
$$

If we start with a positive integer $n$ this sequence terminates when we reach the ket $\ket{0}$. If we start with a non-integer $n$, we will obtain states with negative eigenvalues. However, since the states must have nonnegative norms, if we consider the state $a\ket{n}$, we must have

$$
\begin{align}
(\bra{n}a^\dagger) \cdot (a\ket{n})=n\geq 0.
\end{align}
$$

Thus $n$ can only be nonnegative integers.

From the above discussion we find that the ground-state energy of a harmonic oscillator is just

$$
\begin{align}
E_0=\frac{1}{2}\hbar\omega.
\end{align}
$$

The excited states can be expressed using the ground state $\ket{0}$ as

$$
\begin{align}
\ket{1}&=a^\dagger\ket{0}, \notag\\
\ket{2}&=\frac{a^\dagger}{\sqrt{2}}\ket{1}=\frac{(a^\dagger)^2}{\sqrt{2!}}\ket{0}, \notag\\
\ket{3}&=\frac{a^\dagger}{\sqrt{3}}\ket{2}=\frac{(a^\dagger)^3}{\sqrt{3!}}\ket{0}, \notag\\
\vdots \notag\\
\ket{n}&=\frac{(a^\dagger)^n}{\sqrt{n!}}\ket{0}.
\end{align}
$$

### Coherent states

---
[Previous Page]({% link physics/quantum-mechanics/index.md %}){: .btn }
[Next Page]({% link physics/quantum-mechanics/density-matrix.md %}){: .btn }
