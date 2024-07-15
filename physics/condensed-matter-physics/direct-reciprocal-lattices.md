---
layout: default_math
title: Direct and Reciprocal Lattices
nav_order: 2
grand_parent: Physics
parent: Condensed Matter Physics
---

# Direct and Reciprocal Lattices

If a solid is arranged in an orderly fashion, it is called a crystalline solid, and is invariant under any translation of the form

$$
\begin{align}
\mb{R}=n_1\mb{a}_1+n_2\mb{a}_2+n_3\mb{a}_3,
\end{align}
$$

where $\mb{R}$ is a lattice vector, $\mb{a}_1$, $\mb{a}_2$, and $\mb{a}_3$ are
the unit vectors of the direct lattice. Any function of the solid is therefore
invariant under these translations and thus satisfies the relation

$$
\begin{align}
f(\mb{r}+\mb{R})=f(\mb{r}).
\end{align}
$$

Since the function $f$ is periodic we can rewrite it as a Fourier series:

$$
\begin{align}
f(\mb{r})=\sum_{\mb{K}}f_{\mb{K}}e^{i\mb{K}\cdot\mb{r}}.
\end{align}
$$

Substituting $\mb{r}+\mb{R}$ into the above equation, we obtain an additional
factor $e^{i\mb{K}\cdot\mb{R}}$. Since the function is invariant with respect to this substitution, $\mb{K}\cdot\mb{R}$ must be an integer multiple of $2\pi$. Thus, we must have $\mb{K}\cdot\mb{a}_1=2\pi m_1$, $\mb{K}\cdot\mb{a}_2=2\pi m_2$, and $\mb{K}\cdot\mb{a}_2=2\pi m_2$, where $m_1$, $m_2$, and $m_3$ are integers. The vector $\mb{K}$ can then be written as

$$
\begin{align}
\mb{K}=m_1\mb{b}_1+m_2\mb{b}_2+m_3\mb{b}_3,
\end{align}
$$

where

$$
\begin{align}
\mb{b}_1=2\pi \frac{\mb{a}_2\times\mb{a}_3}{\mb{a}_1\cdot(\mb{a}_2\times\mb{a}_3)},\\
\mb{b}_2=2\pi \frac{\mb{a}_3\times\mb{a}_1}{\mb{a}_2\cdot(\mb{a}_3\times\mb{a}_1)},\\
\mb{b}_3=2\pi \frac{\mb{a}_1\times\mb{a}_2}{\mb{a}_3\cdot(\mb{a}_1\times\mb{a}_2)},
\end{align}
$$

and

$$
\begin{align}
V_c=|\mb{a}_1\cdot(\mb{a}_2\times\mb{a}_3)|
\end{align}
$$

is the volume of the primitive unit cell. The vectors $\mb{K}$ so defined,
is called the reciprocal lattice vectors\footnote{The reciprocal lattice
vector is also commonly denoted by $\mb{G}$. However, here we use $\mb{K}$
to make the formulas symmetric with respect to the real and the reciprocal space.}
and $\mb{b}_1$, $\mb{b}_2$, and $\mb{b}_3$ are called the reciprocal unit vectors.
With the above definitions we can also find the volume of the unit cell of
the reciprocal lattice

$$
\begin{align}
\Omega_c&=|\mb{b}_1\cdot(\mb{b}_2\times\mb{b}_3)| \notag \\
	&=\frac{(2\pi)^3}{V_c^3}|(\mb{a}_2\times\mb{a}_3)\cdot(\mb{a}_3\times\mb{a}_1)\times(\mb{a}_1\times\mb{a}_2)| \notag \\
	&=\frac{(2\pi)^3}{V_c^3}|[\mb{a}_2\cdot(\mb{a}_3\times\mb{a}_1)][\mb{a}_3\cdot(\mb{a}_1\times\mb{a}_2)]|\notag \\
	&=\frac{(2\pi)^3}{V_c}.
\end{align}
$$

## Bloch's theorem
Bloch's theory describes non-interacting electrons moving in a periodic potential.
The wave functions obey the Born-von Karman boundary condition and can be expanded as

$$
\begin{align}
\psi (\mb{r}) = \frac{1}{V}\sum_{\mb{k}} c_\mb{k}e^{i\mb{k} \cdot \mb{r}} .
\end{align}
$$

The potential is periodic in the lattice, and can be written as

$$
\begin{align}
U (\mb{r}) = \sum_{\mb{K}} U_\mb{K}e^{i\mb{K} \cdot \mb{r}} . 
\end{align}
$$

Note that the volume factor for the Fourier transform is not present to
simplify the expression. From this we can write

$$
\begin{align}
\bra{\mb{k}} H \ket{\psi} = \sum_{\mb{k}'}\left ( \varepsilon_\mb{k}\delta_{\mb{k},\mb{k}'}
+ \sum_\mb{K} U_\mb{K} \delta_{\mb{k},\mb{k}'+\mb{K}} \right ) c_{\mb{k}'},
\end{align}
$$

where 

$$
\begin{align}
\varepsilon_\mb{k} = \frac{\hbar^2 k^2}{2m}.\notag
\end{align}
$$

The Schrödinger equation now takes the form

$$
\begin{align}
c_\mb{k}\varepsilon_\mb{k} + \sum_\mb{K} U_\mb{K} c_{\mb{k}-\mb{K}} = c_\mb{k}E,
\end{align}
$$

For a fixed $\mb{k}$ this equation couples only wave vectors differ by a
reciprocal lattice vector $\mb{K}$.


## Useful Formulas for Direct and Reciprocal Lattice

****Need to change the Fourier normalization here!

If a function $f$ is periodic with respect to the direct lattice, we have

$$
\begin{align}
f(\mb{r}+\mb{R})=f(\mb{r}).
\end{align}
$$

Writing $f$ in terms of a Fourier series, we obtain

$$
\begin{align}\label{eq:fs-dl}
f(\mb{r})=\sum_{\mb{K}}f_{\mb{K}}e^{i\mb{K}\cdot\mb{r}},
\end{align}
$$

$$
where
\begin{align}\label{eq:fc-dl}
f_{\mb{K}}=\frac{1}{V_c}\int_C d\mb{r} f(\mb{r})e^{-i\mb{K}\cdot\mb{r}},
\end{align}
$$

where $C$ is over any primitive unit cell, and can be chosen as the Wigner-Seitz cell.

Now if a function $g$ has the periodicity of the reciprocal lattice

$$
\begin{align}
g(\mb{k}+\mb{K})=g(\mb{k}),
\end{align}
$$

we can expand it in a Fourier series
\footnote{The sign here again is chosen such that $g_{\mb{R}}$ is written
as plane waves of the form $e^{i\mb{k}\cdot\mb{R}}$.}

$$
\begin{align}\label{eq:fs-rl}
g(\mb{k})=\sum_{\mb{R}}g_{\mb{R}}e^{-i\mb{k}\cdot\mb{R}},
\end{align}
$$

where

$$
\begin{align}
g_{\mb{R}}&=\frac{1}{\Omega_c}\int_C d\mb{k} g(\mb{k})e^{i\mb{k}\cdot\mb{R}}, \notag \\
	&=V_c\int_C \frac{d\mb{k}}{(2\pi)^3} g(\mb{k})e^{i\mb{k}\cdot\mb{R}},\label{eq:fc-rl}
\end{align}
$$

where the integral over $C$ can be over any reciprocal unit cell and is usually chosen to be the first Brillouin zone.

If the only periodicity of a function $F$ is the Born-von Karman boundary condition, we have the condition

$$
\begin{align}
F(\mb{r}+N_i\mb{a}_i)=F(\mb{r}),
\end{align}
$$

where $i=1,2,3$, and $N_i$ is the number of unit cells in the $i$th direction.
There are two ways of treating this problem. If we use the Bloch theorem,
we will find that physical wave vectors are given by $\mb{k}=\sum_i n_i\mb{b}_i/N_i$
and the integers $n_i$ range from $0$ to $N_i-1$\footnote{With this choice,
the wave vectors $\mb{k}$ fill up a reciprocal unit cell.
We can also choose a different set of $\mb{k}$ such that they fill up
the first Brillouin zone.}.

Alternatively, we can treat the vectors $N_i\mb{a}_i$ as the unit vectors of
a direct lattice with large unit cells. Then the corresponding reciprocal unit
vectors are just $\mb{b}_i/N_i$ and a reciprocal lattice vector is of the
form $\mb{k}=\sum_i n_i\mb{b}_i/N_i$. The Fourier series of the function $F$ is thus

$$
\begin{align}
F(\mb{r})=\sum_{\mb{k}}F_{\mb{k}}e^{i\mb{k}\cdot\mb{r}},
\end{align}
$$

where the sum is now over the a unit cell spanned by the unit vectors $\mb{b}_i$
\footnote{Check!!!}.

The coefficients $F_{\mb{k}}$ are given by

$$
\begin{align}
F_{\mb{k}}=\frac{1}{V}\int d\mb{r} F(\mb{r})e^{-i\mb{k}\cdot\mb{r}},
\end{align}
$$

where $V=NV_c$ ($N=N_1 N_2 N_3$) is the total volume of the system and
the integral is now over the entire volume.

We can also write down similar formulas for a function $G$ that satisfies
the Born-von Karman boundary condition in the reciprocal space:

$$
\begin{align}
G(\mb{k}+M_i\mb{b}_i)=G(\mb{k}),
\end{align}
$$

where $M_i$ is the number of reciprocal unit cells in the $i$th direction.
Treating $M_i\mb{b}_i$ as the reciprocal unit vectors of a reciprocal lattice
with larger periods, we find the unit vectors of the corresponding direct
lattice $\mb{r}=\sum_i m_i\mb{a}_i/M_i$. The Fourier series of the function $G$ is

$$
\begin{align}
G(\mb{k})=\sum_{\mb{r}}G_{\mb{r}}e^{-i\mb{k}\cdot\mb{r}},
\end{align}
$$

***CHECK Below***

where the sum is over a unit cell of the direct lattice spanned by $\mb{a}_i$.

The coefficients $G_{\mb{r}}$ are given by

$$
\begin{align}
G_{\mb{r}}=\frac{1}{\Omega}\int d\mb{k} G(\mb{k})e^{i\mb{k}\cdot\mb{r}},
\end{align}
$$

where $\Omega=M\Omega_c$ ($M=M_1 M_2 M_3$) is the volume of the entire
reciprocal space
\footnote{If we convert the summations in the above
Fourier series for $F$ and $G$ into integrals and note that
$\Delta \mb{k}=\Omega_c/N=(2\pi)^3/V$ and $\Delta \mb{r}=V_c/M=(2\pi)^3/\Omega$,
we have $F(\mb{r})=V\int d\mb{k}/(2\pi)^3 \cdot F_{\mb{k}}e^{i\mb{k}\cdot\mb{r}}$
and $G(\mb{k})=\Omega\int d\mb{r}/(2\pi)^3 \cdot G_{\mb{r}}e^{-i\mb{k}\cdot\mb{r}}$.
These formulas are completely symmetric with respect to $\mb{r}$ and $\mb{k}$.}.

A useful formula can be obtained from the above formulas:

$$
\begin{align}
\sum_{\mb{K}} e^{i\mb{K}\cdot\mb{r}}=V_c\sum_{\mb{R}}\delta (\mb{r}-\mb{R}).
\end{align}
$$

The right hand side of this equation is often called a Dirac comb on
the direct lattice. This relation can be obtained by observing that the
right hand side has the periodicity of the direct lattice, and can be written
in terms of a Fourier series Eq. (\ref{eq:fs-dl}). The Fourier coefficients
are obtained by substituting $f(\mb{r})=V_c\sum_{\mb{R}}\delta (\mb{r}-\mb{R})$
into Eq. (\ref{eq:fc-dl}). Since the integration is over a unit cell only one
$\mb{R}$ is selected, the Fourier coefficients are just $e^{-i\mb{K}\cdot\mb{R}}=1$.

Similarly the Fourier series of a Dirac comb on the reciprocal lattice can be
obtained using Eqs. (\ref{eq:fs-rl}) and (\ref{eq:fc-rl}):

$$
\begin{align}
\sum_{\mb{R}} e^{-i\mb{k}\cdot\mb{R}}=\Omega_c\sum_{\mb{K}}\delta (\mb{k}-\mb{K}).
\end{align}
$$

