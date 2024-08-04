---
layout: default_math
title: Exterior Derivatives
nav_order: 2
grand_parent: Mathematics
parent: Differential Forms
---

# Exterior Derivatives

## Differential Forms
Differential forms are essentially p-vectors in terms of a differential basis
$dx^1,dx^2,\dots,dx^n$. Since $dx^i$s form a basis of the dual vector space
$\V^*$, a p-form can be written as

$$
\begin{align}
\mbg{\omega} = \frac{1}{p!}\omega_{i_1,i_2,\dots,i_p}dx^{i_1}\wedge dx^{i_2}\wedge\dots\wedge dx^{i_p},
\end{align}
$$

which lives in the space $\bigwedge^p(\V^*)$.

For example, in $\E^3$,

$$
\mbg{\omega} = A(x, y, z)dx + B(x, y, z)dy + C(x, y, z)dz
$$

is a 1-form, and

$$
\mbg{\alpha} = A(x, y, z)dydz + B(x, y, z)dzdx + C(x, y, z)dxdy
$$

is a 2-form.

## Exterior Derivatives
Exterior derivatives are carried out by the operator $d$, which is a map

$$
d: \bigwedge^p(\V^*) \ra \bigwedge^{p+1}(\V^*)
$$

with the following properties:

1. $d(\mbg{\omega} + \mbg{\eta}) = d\mbg{\omega} + d\mbg{\eta}$.
2. $d(\mbg{\omega} \wedge \mbg{\eta}) = d\mbg{\omega} \wedge \mbg{\eta} + (-1)^p\mbg{\omega} \wedge d\mbg{\eta}$, where $\mbg{\omega}$ is a $p$-form.
3. $d(d\mbg{\omega}) = 0$.
4. If $f$ is a scalar (0-form),

    $$
    df = \pdv{f}{x^i}dx^i.
    $$

**Example 1.** A scalar function $f(x, y, z)$.

By the last property, we immediately have

$$
df = \pdv{f}{x}dx + \pdv{f}{y}dy + \pdv{f}{z}dz.
$$

The is just the gradient in vector analysis. Since $dx^i$s form a basis 1-form,
we see that the gradient of a scalar function is actually a 1-form, or a
dual-vector.
<span style="float:right;">$\blacksquare$</span>


**Example 2.** A 1-form $\mbg{\omega} = \omega_x dx + \omega_y dy + \omega_z dz$.

Let us look at the first term. By property 2, $d(\omega_x dx)$ = $(d\omega_x)dx + \omega_x d(dx)$,
but by property 4 $d(dx) =0$, so we just need to calculate $d\omega_i$ for each term.

$$
d\mbg{\omega} = \qty(\pdv{\omega_z}{y} - \pdv{\omega_y}{z})dydz + \qty(\pdv{\omega_x}{z} - \pdv{\omega_z}{x})dzdx
    + \qty(\pdv{\omega_y}{x} - \pdv{\omega_x}{y})dxdy.
$$

This looks like the curl of the 1-form $\mbg{\omega}$. If we take Hodge dual,
we have

$$
\star d\mbg{\omega} = \curl \mbg{\omega}.
$$

<p style="text-align:right;">$\blacksquare$</p>

**Example 3.** A 2-form $\mbg{\alpha} = \alpha_x dydz + \alpha_y dzdx + \alpha_z dxdy$.
We have intentionally labeled the components the way it is.

Follow the same rules we just need to calculate $d\alpha_i$.

$$
d\mbg{\alpha} = \qty(\pdv{\alpha_x}{dx} + \pdv{\alpha_y}{y} + \pdv{\alpha_z}{z})dxdydz,
$$

Which looks very much like a divergence. Its Hodge dual is

$$
\star d\mbg{\alpha} = \div\mbg{\alpha}.
$$

<p style="text-align:right;">$\blacksquare$</p>

---
## Footnotes
* Footnotes
{:footnotes}
---
## References

{% bibliography --cited %}
---
[Previous Page]({% link mathematics/differential-forms/exterior-algebra.md %}){: .btn }
[Next Page](#){: .btn }

