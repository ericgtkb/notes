---
layout: default_math
title: Homogeneous Functions
nav_order: 1
grand_parent: Mathematics
parent: Miscellaneous
---

# Homogeneous Functions

## Definition
If a function $f(x_i)$ satisfies the relation

$$
\begin{align}\label{eq:hf-def}
f(\lambda x_i)=\lambda^n f(x_i),
\end{align}
$$

where $\lambda$ is any number and $n$ is a constant integer, then we say $f(x_i)$ is an
$n$th order ***homogeneous function*** of variables $x_i$.

**Example.** $f(x, y, z) = ax + by + cz$.

$$
f(\lambda x, \lambda y, \lambda z) = \lambda (ax + by + cz) = \lambda f(x,y,z).
$$

$f$ is a homogeneous function of order $1$.

<p style="text-align:right;">$\blacksquare$</p>

**Example.** $f(x, y, z) = ax^2 + bxy + cy^2$.

$$
f(\lambda x, \lambda y, \lambda z) = \lambda^2 (ax^2 + bxy + cy^2) = \lambda^2 f(x,y,z).
$$

In general, quadratic forms are a homogeneous functions of order $2$.

<p style="text-align:right;">$\blacksquare$</p>

**Example.** $f(x, y, z) = ax + by^2 + cz^3$.

$$
f(\lambda x, \lambda y, \lambda z) = \lambda ax + \lambda^2 by^2 + \lambda^3 cz^3.
$$

$f$ is not a homogeneous function.

<p style="text-align:right;">$\blacksquare$</p>

## Euler's Theorem
Differentiating both sides of \eqref{eq:hf-def} with respect to $\lambda$ we find

$$
\begin{align}
\sum_i x_i\pdv{f(\lambda x_i)}{(\lambda x_i)}=n\lambda^{n-1} f(x_i).
\end{align}
$$

Choosing $\lambda=1$, we obtain ***Euler's homogeneous function theorem***:

$$
\begin{align}
\sum_i x_i\pdv{f(x_i)}{x_i}=nf(x_i).
\end{align}
$$
