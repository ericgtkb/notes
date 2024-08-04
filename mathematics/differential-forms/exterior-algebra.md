---
layout: default_math
title: Exterior Algebra
nav_order: 1
grand_parent: Mathematics
parent: Differential Forms
---

# Exterior Algebra
The formal definition of this subject can be somewhat unituitive. We will
study exterior algebra through many examples aftering giving formal definitions.
We follow the book {% cite flanders2012differential %} closely.

## p-Vectors
In a $n$ dimensional space $\R^n$ or $\V$[^dual], we can construct a vector
space for each $p=0,1,\dots,n$

[^dual]: We can similarly construct the same for the dual space $\V^*$ of
    $\V$. In fact, it is more often the case that we are dealing with
    dual vectors. For dual vectors, we have a vector space $\bigwedge^p(\V)$
    for each $p$. We will sometimes give examples of both vectors and their
    dual. For the dual vectors we will usually use Greek letters. For example
    $\mbg{\alpha} = \alpha_i\ep^i$.

$$
\bigwedge^p(\V).
$$

For $p=0$, $\bigwedge^0(\V) = \R$, which
is just the scalar space. For $p=1$, we have $\bigwedge^1(\V) = \V$.

For $p=2$, $\bigwedge^2(\V)$ is the space consists of sums of terms of the form

$$
a(\mb{a} \wedge \mb{b}),
$$

where $a$ is a real number, and $\mb{a}$ and $\mb{b}$ are vectors in $\V$. The
product $\mb{a}\wedge\mb{b}$ is called the ***exterior product*** or the
***wedge*** product of $\mb{a}$ and $\mb{b}$. The sums follow the rules:

1. $(a\mb{a} + b\mb{b}) \wedge \mb{c} = a(\mb{a} \wedge \mb{c}) + b(\mb{b} \wedge \mb{c})$,
2. $\mb{a} \wedge (b\mb{b} + c\mb{c}) = b(\mb{a} \wedge \mb{b}) + c(\mb{a} \wedge \mb{c})$,
3. $\mb{a} \wedge \mb{a} = 0$,
4. $\mb{a} \wedge \mb{b} = - \mb{b} \wedge \mb{a}$.

If $\mb{a}$ and $\mb{b}$ are dependent or $\mb{a} = c\mb{b}$, then by rule 3

$$
\mb{a} \wedge \mb{b} = c\mb{a}\wedge \mb{a} = 0.
$$

If we now use a basis $\e_1,\dots,\e_n$ of the vector space $\V$[^basis], we can expand
the vectors as

[^basis]: Here, we use a basis of a contravariant vectors $\e_i,\dots,\e_n$.
    As we will see later, a basis 1-form, or a covariant basis
    $\ep^i,\dots,\ep^n$, appears more often in wedge products. The discussion
    here applies to both.

$$
\mb{a} = a^i\e_i, \qquad \mb{b} = b^i\e_i,
$$

where Einstein's summation convention is used here.

The wedge product can now be written as

$$
\begin{align*}
\mb{a}\wedge\mb{b} &= a^i\e_i \wedge b^j\e_j \\
    &= a^ib^j(\e_i\wedge\e_j) \\
    &= \sum_{i<j} (a^ib^j - a^jb^i)(\e_i\wedge\e_j),
\end{align*}
$$

where in the last equality, we have used $\e_i\wedge\e_i = 0$ and
$\e_j\wedge\e_i = - \e_i\wedge\e_j$.

Since the space $\bigwedge^2(\V)$ consists of linear combinations of the above,
2-vectors

$$
\e_i\wedge\e_j, \qquad 1\le i < j \le n,
$$

form a basis of this space. Note it is often more useful to write these
products in cyclic order. It is easy to see that

$$
\dim\bigwedge^2(\V) = \binom{n}{2}.
$$

We can generalize the above for $p\ge 2$. The space $\bigwedge^p(\V)$ consists of
sums of terms of the form

$$
a(\mb{a}_1\wedge\cdots\wedge\mb{a}_p),
$$

subject to the constraints:

1. $(a\mb{a}_1 + b\mb{b}_1) \wedge (\mb{a}_2\wedge \cdots \wedge \mb{a}_p)
    = a(\mb{a}_1\wedge\mb{a}_2\wedge\cdots\wedge\mb{a}_p) + b(\mb{b}_1\wedge\mb{a}_2\wedge\cdots\wedge\mb{a}_p)$,
    and similarly if any $A_i$ is replaced by a linear combination.
2. $\mb{a}_1 \wedge \cdots \wedge \mb{a}_p = 0$, if any of the $\mb{a}_i = \mb{a}_j$.
3. $\mb{a}_1 \wedge \cdots \wedge \mb{a}_p$ changes sign if any two $\mb{a}_i$ and $\mb{a}_j$ are interchanged.

Again, if we use $\e_1,\dots,\e_n$ as our basis for $\V$, we can construct a
basis by p-vectors of the form

$$
\e_{i_1}\wedge\cdots\wedge\e_{i_p},
$$

where $i_1,\dots,i_p$ is a set of $p$ vectors from the basis vectors $\e_i$s.
The number of ways of choosing $p$ vectors our of total $n$ basis vector of
$\V$ is $\binom{n}{p}$, so we have

$$
\dim\bigwedge^p(\V) = \binom{n}{p}.
$$

For $p=n$, we thus have $\dim\bigwedge^n(\V)=1$.

We can write a p-vector in basis $\e_i$ as

$$
\begin{align}
\mb{a} = \frac{1}{p!}a^{i_1,i_2,\dots,i_p}\e_{i_1}\wedge\e_{i_2}\wedge\dots\wedge\e_{i_p},
\end{align}
$$

where $a^{i_1,i_2,\dots,i_p}$ is a skew-symmetric tensor. As a reference,
we can similarly write

$$
\begin{align}
\mbg{\alpha} = \frac{1}{p!}\alpha_{i_1,i_2,\dots,i_p}\ep^{i_1}\wedge\ep^{i_2}\wedge\dots\wedge\ep^{i_p}
\end{align}
$$

for a p-vector in $\bigwedge^p(\V^*)$, where $\ep^1,\dots\ep^n$ is a basis.

For $p > n$, if we write the vector $\mb{a} = A^i\e_i$, in the wedge product of
$p$ such terms, some of the $\e_i$ must show up more than once in the product.
We therefore concludes that $\bigwedge^p(\V) = 0$ for $p>n$.

**Example.** Three dimensional vector space.

For $p = 0$, we have scalars.

For $p = 1$, we have 1-vectors of the form $\mb{a} = a^x\e_x + a^y\e_y + a^z\e_z$.

For $p = 2$, we have 2-vectors of the form
$\mb{b} = b^1\e_y \wedge \e_z + b^2\e_z \wedge \e_x + b^3\e_x \wedge \e_y$.

Notice we have written the terms in cyclic order.

For $p = 3$, we have 3-vectors of the form
$\mb{c} = c\e_x \wedge \e_y \wedge \e_z$.
<span style="float:right;">$\blacksquare$</span>

## Exterior Products

If we have a p-vector $\mb{a}$ and a q-vector $\mb{b}$, we can perform multiplication of them.
This is a mapping

$$
\bigwedge^p(\V) \times \bigwedge^q(\V) \ra \bigwedge^{p+q}(\V).
$$

The product

$$
\mb{a} \wedge \mb{b}
$$

has properties:

1. The distributive law $\mb{a}\wedge(\mb{b} + \mb{c}) = \mb{a}\wedge\mb{b} + \mb{a}\wedge\mb{c}$.
2. The associative law $\mb{a}\wedge(\mb{b}\wedge\mb{c}) = (\mb{a}\wedge\mb{b})\wedge\mb{c}$.
3. $\mb{a}\wedge\mb{b} = (-1)^{pq}\mb{b}\wedge\mb{a}$.

The last property comes from the fact that we need $pq$ interchanges to
exchange the two vectors.

Let us now look at some examples. Consider a three-dimensional space, and
consider $dx^1=dx$, $dx^2=dy$, $dx^3=dz$ as the basis.

**Example 1.** $(Adx + Bdy + Cdz) \wedge (Pdx + Qdy + Rdz)$.

$$
\begin{align*}
(Adx &+ Bdy + Cdz) \wedge (Pdx + Qdy + Rdz) \\
    &=APdxdx + AQdxdy + ARdxdz + BPdydx + BQdydy \\
    &\qquad+ BRdydz + CPdzdx + CQdzdy + CRdzdz \\
    &= (BR - CQ)dydz + (CP - AR)dzdx + (AQ - BP)dxdy.
\end{align*}
$$

Notice we have omitted the $\wedge$ sign when it is obvious. This example
is just the cross product of two vectors.
<span style="float:right;">$\blacksquare$</span>

**Example 2.** $(Adx + Bdy + Cdz) \wedge (Pdydz + Qdzdx + Rdxdy)$.

$$
\begin{align*}
(Adx + Bdy + Cdz) \wedge (Pdydz + Qdzdx + Rdxdy) = (AP + BQ + CR)dxdydz.
\end{align*}
$$

This is similar to the dot product in vector analysis.
<span style="float:right;">$\blacksquare$</span>

## Determinants
TBD

## Inner Products
TBD

## The Hodge Star Operator

The Hodge star operator is a map

$$
\star: \bigwedge^p(\V) \ra \bigwedge^{n-p}(\V).
$$

**Example 1.** $\mb{a} = a^x\e_x + a^y\e_y + a^z\e_z$, $\mb{b} = b^x\e_x + b^y\e_y + b^z\e_z$.

We first calculate

$$
\mb{a}\wedge\mb{b} = (a^yb^z - a^zb^y)\e_y\wedge\e_z + (a^zb^x - a^xb^z)\e_z\wedge\e_x + (a^xb^y - a^yb^x)\e_x\wedge\e_y.
$$

Now take the star of it:

$$
\star(\mb{a}\wedge\mb{b}) = (a^yb^z - a^zb^y)\e_x + (a^zb^x - a^xb^z)\e_y + (a^xb^y - a^yb^x)\e_z.
$$

We thus see that this is just the cross product

$$
\star(\mb{a}\wedge\mb{b}) = \mb{a} \times \mb{b}.
$$

<p style="text-align:right;">$\blacksquare$</p>

**Example 2.** Consider another vector $\mb{c} = c^x\e_x + c^y\e_y + c^z\e_z$
with $\mb{a}$ and $\mb{b}$ from the above example.

We can calculate

$$
\begin{align*}
\mb{a}\wedge\mb{b}\wedge\mb{c} &= (a^xb^yc^z - a^yb^xc^z + a^yb^zc^x - a^zb^yc^x
    + a^zb^xc^y - a^xb^zc^y)\e_x\wedge\e_y\wedge\e_z \\
    &=\mdet{a^x & a^y & a^z \\ b^x & b^y & b^z \\ c^x & c^y & c^z}\e_x\wedge\e_y\wedge\e_z.
\end{align*}
$$

Now we calculate its Hodge dual

$$
\star(\mb{a}\wedge\mb{b}\wedge\mb{c}) = \mdet{a^x & a^y & a^z \\ b^x & b^y & b^z \\ c^x & c^y & c^z}.
$$

This gives us

$$
\star(\mb{a}\wedge\mb{b}\wedge\mb{c}) = \mb{a}\cdot(\mb{b}\times\mb{c}).
$$

<p style="text-align:right;">$\blacksquare$</p>

**Example 3.** In a three dimensional Euclidean space $\E^3$, we have functions
$f$ and $g$.

$$
df = \pdv{f}{x}dx + \pdv{f}{y}dy + \pdv{f}{z}dz.
$$

We have

$$
\star df = \pdv{f}{x}dydz + \pdv{f}{y}dzdx + \pdv{f}{z}dxdy.
$$

We also have

$$
df\wedge\star dg = \qty(\pdv{f}{x}\pdv{g}{x} + \pdv{f}{y}\pdv{g}{y} + \pdv{f}{z}\pdv{g}{z})dxdydz.
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
[Previous Page]({% link mathematics/differential-forms/index.md %}){: .btn }
[Next Page]({% link mathematics/differential-forms/exterior-derivatives.md %}){: .btn }

