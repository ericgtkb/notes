---
layout: default_math
title: Groups
nav_order: 1
grand_parent: Mathematics
parent: Group Theory
---

# Groups

## Definition of a Group

A set of elements $\qty{A, B, C, \dots}$ form a group if it satisfies the following
group axioms:

1. The product of any two elements is also an element of the group. All elements
$C$s of the form $C = AB$ are also elements of the group for any two $A$ and $B$ in the group.

2. The associative law $(AB)C = A(BC)$ holds.

3. There exists an element $E$ such that $EA = AE = A$ for all $A$s in the group.
The element $E$ is called the ***identity element***.

4. For each element $A$ in the group, there exists an element $A^{-1}$ also
in the group such that $A^{-1}A = AA^{-1} = E$. The element $A^{-1}$ is called
the ***inverse element*** of $A$.

Groups having infinite number of elements are called ***infinite groups***. Groups
having finite number of elements are called ***finite groups***.

In general the commutative law does not hold: $AB \neq BA$. However, if any two
elements $A$ and $B$ of a group commute $AB = BA$ the group is called
a ***commutative group*** or an ***Abelian*** group.

## Simple Examples

Let's consider a few simple examples of groups.

### An Equilateral triangle
An equilateral remains unchanged under the following symmetry oprations.
3. The identity operation $E$.
1. Rotation by $\frac{2\pi}{3}$, $R\qty(\frac{2\pi}{3}) = C_3$.
2. Ratation by $\frac{4\pi}{3}$ or $-\frac{2\pi}{3}$, $C_3^2=C_3^{-1}$. It should
be clear that $C_3^3=E$.
4. Three reflections about the three angle bisectors. We denote them as $\sigma_1$,
$\sigma_2$, and $\sigma_3$.

Here we are using the Schönflies notation for symmetry operations. We will introduce
them as we go. The full detail of the Schönflies notation will be discussed in
the [point groups]({% link mathematics/group-theory/point-groups.md %}) section.

The symmetry operations of an equilateral triangle form a group

$$
C_{3v} = \qty{E, C_3, C_3^2, \sigma_1, \sigma_2, \sigma_3}.
$$

If we include only the rotation opertations, they also form a group:

$$
C_3 = \qty{E, C_3, C_3^2}.
$$

Note that since rotation operations about the same axis commute, this is an
Abelian group.

The group formed by the identity operation and a reflection is

$$
C_{1h} = C_s = \qty{E, \sigma}.
$$

The identity element itself also forms a group

$$
C_1 = \qty{E}.
$$

The group corresponds to all symmetry operations is of course $C_{3v}$. However,
we could have viewed the three reflection operations as three $\pi$ rotation operations
about the axes passing through the three angle bysectors. In doing so we obtain the group

$$
D_3 = \qty{E, C_3, C_3^2, C_2, C_2', C_2''}.
$$

### A Square
We can write down the groups forming from symmetry operations similar to
what we did for an equilateral triangle.

1. Identity $E$.
2. three rotaions about the center of the square, $C_4$, $C_4^2$, $C_4^3=C_4^{-1}$.
Again $C_4^4 = E$.
3. Four reflections, $\sigma_x$, $\sigma_y$ about the two axes bisecting the edges,
and $\sigma_d$, $\sigma_d'$ about the two diagonals.

The full set of symmery operations form the group

$$
C_{4v} = \qty{E, C_4, C_2, C_4^{-1}, \sigma_x, \sigma_y, \sigma_d, \sigma_d'}.
$$

Consider the reflections as rotations by $\pi$ instead, we have

$$
D_4 = \qty{E, C_4, C_2, C_4^{-1}, C_2', C_2'', C_2''', C_2'''}.
$$

The group formed by only rotations:

$$
C_4 = \qty{E, C_4, C_2, C_4^{-1}}.
$$

Finally we also have $C_{1h} = C_s$ and ${C_1}$.

### Multiplication tables
We can construct a multiplication table for a group by writing the elements
in the top row and the left most column. We can then fill out the rest of
the table by carrying the multiplication for each pair of elements.  For example
for $C_{3v}$, we have the table below.

|            | $E$        | $C_3$      | $C_3^2$    | $\sigma_1$ | $\sigma_2$ | $\sigma_3$ |
| $E$        | $E$        | $C_3$      | $C_3^2$    | $\sigma_1$ | $\sigma_2$ | $\sigma_3$ |
| $C_3$      | $C_3$      | $C_3^2$    | $E$        | $\sigma_3$ | $\sigma_1$ | $\sigma_2$ |
| $C_3^2$    | $C_3^2$    | $E$        | $C_3$      | $\sigma_2$ | $\sigma_3$ | $\sigma_1$ |
| $\sigma_1$ | $\sigma_1$ | $\sigma_2$ | $\sigma_3$ | $E$        | $C_3$      | $C_3^2$    |
| $\sigma_2$ | $\sigma_2$ | $\sigma_3$ | $\sigma_1$ | $C_3^2$    | $E$        | $C_3$      |
| $\sigma_3$ | $\sigma_3$ | $\sigma_1$ | $\sigma_2$ | $C_3$      | $C_3^2$    | $E$        |

Note that the top left corner of this table up to the element $C_3^2$ is just
the multiplication table of the group $C_3$.

For $C_{4v}$ we can similarly construct the multiplication table.

|             | $E$         | $C_4$       | $C_2$       | $C_4^{-1}$  | $\sigma_x$  | $\sigma_y$  | $\sigma_d$  | $\sigma_d'$ |
| $E$         | $E$         | $C_4$       | $C_2$       | $C_4^{-1}$  | $\sigma_x$  | $\sigma_y$  | $\sigma_d$  | $\sigma_d'$ |
| $C_4$       | $C_4$       | $C_2$       | $C_4^{-1}$  | $E$         | $\sigma_d'$ | $\sigma_d$  | $\sigma_x$  | $\sigma_y$  |
| $C_2$       | $C_2$       | $C_4^{-1}$  | $E$         | $C_4$       | $\sigma_y$  | $\sigma_x$  | $\sigma_d'$ | $\sigma_d$  |
| $C_4^{-1}$  | $C_4^{-1}$  | $E$         | $C_4$       | $C_2$       | $\sigma_d$  | $\sigma_d'$  | $\sigma_y$  | $\sigma_x$ |
| $\sigma_x$  | $\sigma_x$  | $\sigma_d$  | $\sigma_y$  | $\sigma_d'$ | $E$         | $C_2$       | $C_4$       | $C_4^{-1}$  |
| $\sigma_y$  | $\sigma_y$  | $\sigma_d'$ | $\sigma_x$  | $\sigma_d$  | $C_2$       | $E$         | $C_4^{-1}$  | $C_4$       |
| $\sigma_d$  | $\sigma_d$  | $\sigma_y$  | $\sigma_d'$ | $\sigma_x$  | $C_4^{-1}$  | $C_4$       | $E$         | $C_2$       |
| $\sigma_d'$ | $\sigma_d'$ | $\sigma_x$  | $\sigma_d$  | $\sigma_y$  | $C_4$       | $C_4^{-1}$  | $C_2$       | $E$         |


## Basic Definitions

**Definition.** *The total number of elements in a group is the **order** of the group.*

For example, $C_{3v}$ is of order 6, whereas $C_{4v}$ is of order 8.

**Definition.** *A **subgroup** is a collection of elements in a group that forms a group
by themselves. The group itself and the single element group $\qty{E}$ are trivial subgroups.
All the other subgroups are **proper subgroups**.*

For example, $C_{3v}$ has proper subgroups $C_3$, three $C_{1h}$, and $C_1$.

**Theorem** *For any element $A$ of a finite group, if it is multiplied by itself
enough times, eventually $A^n = E$ is satisfied.*

<details markdown="1">
<summary><b>Proof</b></summary>
For a group of order $g$, since there are $g$ total elements, we will always
find repetitions if we multiple $A$ by it self enough times.

Assume this repetition is element B, we have

$$
B = A^p = A^q,
$$

assuming $p > q$, and write $p = q + n$, we obtain

$$
A^p = A^{(p + n)} = A^p A^n.
$$

Comparing the two sides of the equation we find $A^n = E$.
<p style="text-align:right;">$\Box$</p>
</details>

**Definition.** *The order of an element is the smallest $n$ statisfying
$A^n = E$*.

**Definition.** *The collection of elements $E, A, A^2, \dots, A^{n-1}$ is
called the **period** of element $A$. The period of an element forms an Abelian
subgroup.*

For $C_{3v}$ we have periods

$$
\begin{align*}
&\qty{E, C_3, C_3^2} \\
&\qty{E, \sigma_1} \\
&\qty{E, \sigma_2} \\
&\qty{E, \sigma_3}.
\end{align*}
$$

## The Rearrangement Theorem
**Theorem.** *Let $\qty{A_1, A_2,\dots,A_g}$ be a group of order $g$. If we multiply
every element by and arbitrary element $A_i$ from the left, we obtain the set*

$$
\qty{A_i A_1, A_i A_2,\dots,A_i A_g},
$$

*where each element appears once and only once.*

<details markdown="1">
<summary><b>Proof</b></summary>
1. Let's pick an element arbitrary element $G$. From group axioms, $A_i^{-1}G$ must
be an element of the group. From this, we have $A_i A_i^{-1}G = G$. We have proved
the existence of $G$.

2. Now suppose the element $G$ appears twice in $\qty{A_i A_1, A_i A_2, \dots}$.
We can write $G = A_i A_j = A_i A_k$, where $A_j \neq A_k$. By multiplying on the
left by $A_i^{-1}$ we find $A_j = A_k$, which contradicts our initial assumption.
Thus, $G$ must appear only once.
<p style="text-align:right;">$\Box$</p>
</details>

---
[Previous Page]({% link mathematics/group-theory/index.md %}){: .btn }
[Next Page]({% link mathematics/group-theory/representations.md %}){: .btn }
