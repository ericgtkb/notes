---
layout: default_math
title: N-Dimensional Sphere
nav_order: 3
grand_parent: Mathematics
parent: Miscellaneous
---

# N-Dimensional Sphere

## Volume and Surface Area
Let the radius of the sphere be $R$. We know that the volume will be proportional
to $R$, so we write

$$
V_n = C_n R^n,
$$

where $C_n$ is a constant that depends on the dimensionality of the space.

The differential volume element can be written in terms the surface element

$$
dV_n = S_n(R) dR = n C_n R^{n-1} dR,
$$

where $S_n$ is the surface area.

From the Gaussian integral, we have

$$
\int_{-\infty}^{\infty} dx e^{-x^2} = \sqrt{\pi}.
$$

If we consider a product of $n$ such integrals, we can write

$$
\begin{align*}
\pi^{n/2} &= \int_{-\infty}^{\infty}\cdots\int_{-\infty}^{\infty} e^{-\sum_i^n x_i^2} \prod_i^n dx_i \\
    &=\int_0^{\infty} e^{-R^2} S_n(R) dR \\
    &=\int_0^{\infty} e^{-R^2} n C_n R^{n-1} dR. \\
\end{align*}
$$

Changing the integration variable $t=R^2$, we have


$$
\begin{align*}
\pi^{n/2} &=\frac{n C_n}{2}\int_0^{\infty} e^{-t} t^{\frac{n}{2} - 1} dt \\
    &=C_n\frac{n}{2} \Gamma\qty(\frac{n}{2}) \\
    &=C_n\frac{n}{2} \qty(\frac{n}{2} - 1)! \\
    &= C_n \qty(\frac{n}{2})!.
\end{align*}
$$

Therefore,

$$
C_n = \frac{\pi^{\frac{n}{2}}}{\qty(\frac{n}{2})!},
$$

or

$$
\begin{align}
V_n(R) = \frac{\pi^{\frac{n}{2}}}{\qty(\frac{n}{2})!}R^n
    =\frac{\pi^{\frac{n}{2}}}{\Gamma\qty(\frac{n}{2} + 1)}R^n,
\end{align}
$$

and

$$
\begin{align}
S_n(R) = \frac{2\pi^{\frac{n}{2}}}{\qty(\frac{n}{2} - 1)!}R^{n-1}
    =\frac{2\pi^{\frac{n}{2}}}{\Gamma\qty(\frac{n}{2})}R^{n-1}.
\end{align}
$$

These formulas are useful for counting microstates for an ideal gas.
