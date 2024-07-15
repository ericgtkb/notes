---
layout: default_math
title: Homogeneous Functions
nav_order: 1
grand_parent: Mathematics
parent: Miscellaneous
---

# Homogeneous Functions

If a function $f(x_i)$ satisfies the relation

$$
\begin{align}
f(\lambda x_i)=\lambda^n f(x_i),
\end{align}
$$

where $\lambda$ is any number and $n$ is a constant integer, then we say $f(x_i)$ is an
$n$th order ***homogeneous function*** of variables $x_i$.

Differentiating both sides with respect to $\lambda$ we find

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
