---
layout: default_math
title: Notes on Kronecker Delta and Dirac Delta Function
nav_order: 2
grand_parent: Mathematics
parent: Miscellaneous
---

# Notes on Kronecker Delta and Dirac Delta Function
The Kronecker delta is defined as

$$
\begin{align}
\delta_{nn'}=
\begin{cases}
1 & \text{ if } n=n', \\ 
0 & \text{ if } n\neq n'. \\
\end{cases}
\end{align}
$$

It can also be written as a sum of exponential functions

$$
\begin{align}
\delta_{nn'}=\frac{1}{N}\sum_{m=1}^N e^{2\pi i m(n-n')/N}.
\end{align}
$$

This can be derived using the formula for geometric series and noting that
for $n = n'$ the result is trivial.

We can rewrite the above in an integral representation

$$
\begin{align}
\delta_{nn'}=\frac{1}{2\pi i}\oint_{|z|=1} z^{n-n'-1}dz=\frac{1}{2\pi}\int_{0}^{2\pi}e^{i(n-n')\phi}d\phi.
\end{align}
$$

To connect this with a formulas in quantum mechanics, we shift the integration interval to $[-\pi,\pi)$,

$$
\begin{align}
\delta_{nn'}=\frac{1}{2\pi}\int_{-\pi}^{\pi}e^{i(n-n')\phi}d\phi.
\end{align}
$$

Changing the variable via $x_n=na$ and $k=\phi/a$, where $a$ is the spacing between two adjacent points we have

$$
\begin{align}
\delta_{nn'}=\frac{a}{2\pi}\int_{-\frac{\pi}{a}}^{\frac{\pi}{a}}e^{ik(x_n-x_{n'})}dk.
\end{align}
$$

Now we know that the Dirac delta function can be written as

$$
\begin{align}
\delta(x-x')=\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{ik(x-x')}dk.
\end{align}
$$

Thus the Kronecker delta is related the the Dirac Delta function through

$$
\begin{align}
\delta(x-x')=\lim_{a\ra 0}\frac{\delta_{nn'}}{a}.
\end{align}
$$


For applications in physics, we will also write down similar equations for momentum $k$. For Kronecker delta we have

$$
\begin{align}
\delta_{mm'}=\frac{1}{2\pi}\int_{-\pi}^{\pi}e^{i(m-m')\phi}d\phi.
\end{align}
$$

Now we let $k_m=2\pi m/L$ and $x=\phi L/2\pi$, where $L$ is the total length of the system, and rewrite the delta function as

$$
\begin{align}
\delta_{mm'}=\frac{1}{L}\int_{-\frac{L}{2}}^{\frac{L}{2}}e^{i(k_m-k_{m'})x}dx.
\end{align}
$$

Again recall the Dirac delta function can be written as

$$
\begin{align}
\delta(k-k')=\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{i(k-k')dx}dx.
\end{align}
$$

Thus, we find

$$
\begin{align}
\delta(k-k')=\lim_{L\ra \infty}\frac{\delta_{mm'}L}{2\pi}.
\end{align}
$$

These relations can be easily generalized to three dimensions. For the position delta functions we have 

$$
\begin{align}
\delta(\mb{r}-\mb{r}')=\lim_{V_c\ra 0}\frac{\delta_{\mb{r}\mb{r}'}}{V_c},
\end{align}
$$

and for momentum delta functions

$$
\begin{align}
\delta(\mb{k}-\mb{k}')=\lim_{V\ra \infty}\frac{\delta_{\mb{k}\mb{k}'}V}{(2\pi)^3},
\end{align}
$$

where $V_c$ is the unit cell volume in real space, or the volume occupied by one position point, and $V$ is the total volume of the system. If we rewrite $V=NV_c$, where $N$ is the total number of points in the system, and use the volume of reciprocal unit cell $\Omega_c=(2\pi)^3/V_c$, the momentum delta function becomes

$$
\begin{align}
\delta(\mb{k}-\mb{k}')=\lim_{N\ra \infty}\frac{\delta_{\mb{k}\mb{k}'}N}{\Omega_c}.
\end{align}
$$

We note that $\Omega_c/N$ is the reciprocal space volume occupied by one $k$-point. Therefore, we can write

$$
\begin{align}
\delta(\mb{r}-\mb{r}')=\lim_{\Delta x,\Delta y,\Delta z\ra 0}\frac{\delta_{\mb{r}\mb{r}'}}{\Delta x \Delta y \Delta z},
\end{align}
$$

$$
\begin{align}
\delta(\mb{k}-\mb{k}')=\lim_{\Delta k_x,\Delta k_y,\Delta k_z\ra 0}\frac{\delta_{\mb{k}\mb{k}'}}{\Delta k_x \Delta k_y \Delta k_z}.
\end{align}
$$


