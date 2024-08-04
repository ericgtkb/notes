---
layout: default_math
title: Green Functions
nav_order: 6
parent: Mathematics
has_children: true
has_toc: true
---

# Green Functions


## Helmholtz Equation

The Helmholtz equation describes the spatial variation of a monochromatic
plane wave. Let $\psi(\mb{r})$ satisfy the inhomogeneous Helmholtz equation:

$$
\begin{align}
(\laplacian + k^2)\psi(\mb{r})=-f(\mb{r}).
\end{align}
$$

The corresponding Green function satisfies

$$
\begin{align}
(\laplacian + k^2)G(\mb{r},\mb{r}')=-\delta(\mb{r}-\mb{r}').
\end{align}
$$

If $\psi(\mb{r})$ and $\phi(\mb{r})$ are both continuous and
differentiable in a volume $V$ bounded by a surface $S$,
Green's theorem states that

$$
\begin{align}
\int_V (\phi\nabla^2\psi-\psi\nabla^2\phi)dV=\int_S ( \phi\grad\psi-\psi \grad\phi )\cdot d\mb{A},
\end{align}
$$

where $d\mb{A}=\mb{n}dA$ and $\mb{n}$ is the outward normal of the surface
element. If we add and subtract $k^2\phi\psi$ to the left hand side, we have

$$
\begin{align}
\int_V [\phi(\nabla^2 +k^2)\psi-\psi(\nabla^2 +k^2)\phi ]dV
=\int_S ( \phi\grad\psi-\psi \grad\phi )\cdot d\mb{A}.
\end{align}
$$

If we set $\phi=G(\mb{r},\mb{r}')$ and let $\mb{r}'$ be the variable of
integration, we have

$$
\begin{align}
\int_V [-G(\mb{r},\mb{r}')f(\mb{r}')+\psi(\mb{r}')\delta(\mb{r}-\mb{r}')]dV'=\int_S [ G(\mb{r},\mb{r}')\grad'\psi(\mb{r}')- \psi(\mb{r}')\grad' G(\mb{r},\mb{r}') ]\cdot d\mb{A}'.
\end{align}
$$

Thus

$$
\begin{align}
\psi(\mb{r})=\int_V G(\mb{r},\mb{r}')f(\mb{r}') dV'+\int_S [ G(\mb{r},\mb{r}')\grad'\psi(\mb{r}')- \psi(\mb{r}')\grad' G(\mb{r},\mb{r}') ]\cdot d\mb{A}'.
\end{align}
$$

If $\psi(\mb{r})$ and its derivative vanish at infinity and we let the
surface $S$ go to infinity we find

$$
\begin{align}
\psi(\mb{r})=\int_V G(\mb{r},\mb{r}')f(\mb{r}') dV'.
\end{align}
$$

The Green function for this case satisfies the free-space boundary conditions,
and can be solved directly. Since $G(\mb{r},\mb{r}')$ is symmetric with
respect to $\mb{r}$ and $\mb{r}'$, it is only a function of the difference
$\mb{R}=\mb{r}-\mb{r}'$. Writing both sides of Helmholtz equation in terms
of the Fourier-transformed Green function, we have

$$
\begin{align}
\tilde{G}(\mb{q})=\frac{1}{q^2-k^2},
\end{align}
$$

Taking the inverse transform we find

$$
\begin{align}
G(\mb{R})=\frac{1}{(2\pi)^3}\int \frac{e^{i\mb{q}\cdot \mb{R}}}{q^2-k^2}d\mb{q},
\end{align}
$$

Now we write $d\mb{q}=q^2\sin\theta dq d\theta d\phi$, and let $\mb{R}$
be along the $q_z$-direction. The $\phi$ integral is just $2\pi$, so we have

$$
\begin{align}
G(\mb{R})&=\frac{1}{(2\pi)^2}\int_0^\infty q^2dq \int_{-1}^{1} d\cos\theta \frac{e^{iqR\cos\theta}}{q^2-k^2}\notag \\
	&=\frac{1}{(2\pi)^2}\int_0^\infty q^2dq \frac{1}{iqR} \frac{e^{iqR}-e^{-iqR}}{q^2-k^2} \notag \\
	&=\frac{1}{8\pi^2iR}\int_{-\infty}^\infty dq q\frac{e^{iqR}-e^{-iqR}}{q^2-k^2}.
\end{align}
$$

where we have used the fact that the integrand is an even function
in the last equality. This integral can be evaluated using complex
integration.

$$
\begin{align}
G(\mb{R})&= \frac{e^{ikR}}{4 \pi R},
\end{align}
$$

where $R = \abs{\mb{R}}$.

