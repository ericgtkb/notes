---
layout: default_math
title: Fourier Transforms
nav_order: 2
grand_parent: Mathematics
parent: Fourier Series and Fourier Transforms
---

# Fourier Transforms

## Convention
In physics, it is important to put the $2\pi$ factor with the integration over
either the frequency $\omega$ or the wave vector $\mb{k}$. These have the
physical meaning of density of modes (states).

Fourier transform in time:

$$
\begin{align}
f(t)&=\frac{1}{2\pi}\int \tilde{f}(\omega) e^{-i\ot} d\omega,\\
\tilde{f}(\omega)&=\int f(t) e^{i\ot}dt.
\end{align}
$$

With this definition, $f(t)$ is a oscillatory function in time with various frequencies of the from $e^{-i\ot}$. 

Fourier transform in space:

$$
\begin{align}
f(\mb{r})&=\frac{1}{(2\pi)^3}\int \tilde{f}(\mb{k}) e^{i\kr} d\mb{k},\\
\tilde{f}(\mb{k})&=\int f(\mb{r}) e^{-i\kr}d\mb{r}.
\end{align}
$$

With this definition, $f(\mb{r})$ is a oscillatory function in space with various wave vectors of the from $e^{i\kr}$. 

Fourier transform in space and time:

$$
\begin{align}
f\frt&=\frac{1}{(2\pi)^4}\int \tilde{f}\fko e^{i(\kr-\ot)} d\mb{k}d\omega,\\
\tilde{f}\fko&=\int f\frt e^{-i(\kr-\ot)}d\mb{r}dt.
\end{align}
$$

With this definition, $f\frt$is superposition of waves radiating outward. 

