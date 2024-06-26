---
layout: default_math
title: Representations of Groups
nav_order: 2
grand_parent: Mathematics
parent: Group Theory
---

# Representations of Groups


## Representation theory
Below are a few important theorems in representation theory. The
"Wonderful Orhtogonality Theorm" is of great importance. To prove
the theorem we need to make use of a few lemmas below.

### Unitarization of a Representation
**Theorem.** *Any representation of a group can be brought into unitary form by
an equivalence (similarity) transformation.*

<details>
<summary><b>Proof</b></summary>

TBD

</details>

### Schur's First Lemma
**Lemma.** *For two given irreducible representations $D^{(1)}$ and $D^{(2)}$
of dimensions $m$ and $n$, respectively, a matrix $M$ that satisfies*

$$
\begin{align}\label{eq:schur1}
MD^{(1)}(G) = D^{(2)}(G)M
\end{align}
$$

*for any group element G of the group must be either the null matrix ($M = O$),
or a squre matrix ($m = n$) with $\det M \neq 0$. For the latter case, $M$ is
invertable, so we can multiply \eqref{eq:schur1} from the left by $M^{-1}$:*

$$
D^{(1)}(G) = M^{-1}D^{(2)}(G)M,
$$

*which shows that the two irreducible representations must be equivalent.
If the two representations are not equivalent, the matrix $M$ must be the zero
matrix.*

<details>
<summary><b>Proof</b></summary>
TBD
</details>

### Schur's Second Lemma
**Lemma** *A matrix $M$ that commutes with all matrices of an
irreducible represnetation $D(G)$*,

$$
MD(G) = D(G)M
$$

*must be of the form*

$$
M = cI,
$$

*where $c$ is an arbitrary complex number and $I$ is the unit matrix. Therefore,
if a non-constant commuting matrix exists, the representation must be reducible.
If none exists, the representation is irreducible.*

<details>
<summary><b>Proof</b></summary>
TBD
</details>

### The Wonderful Orthogonality Theorem
**Theorem.** *For an irreducible **unitary** representation $D^{(\alpha)}$,
its matrices satisfy the following orthogonality relations:*

$$
\begin{align}
\sum_G D_{ij}^{(\alpha)}(G)^{*} D_{kl}^{(\alpha)}(G) = \frac{g}{n_\alpha} \delta_{ij} \delta_{kl},
\end{align}
$$

*where the summation is over all $g$ elements of the group, and $n_\alpha$ is
the dimension of the representation.*

*If $D^{(\alpha)}$ and $D^{(\beta)}$ are two inequivalent irreducible unitart representations,
their matrices satisfy the relations:*

$$
\begin{align}
\sum_G D_{ij}^{(\alpha)}(G)^{*} D_{kl}^{(\beta)}(G) = 0.
\end{align}
$$

*The two orthagonality relations can be combined into*

$$
\begin{align}
\sum_G D_{ij}^{(\alpha)}(G)^{*} D_{kl}^{(\beta)}(G) = \frac{g}{n_\alpha} \delta_{\alpha\beta} \delta_{ij} \delta_{kl},
\end{align}
$$

<details>
<summary><b>Proof</b></summary>
TBD
</details>

---
[Previous Page]({% link mathematics/group-theory/groups.md %}){: .btn }
[Next Page](#){: .btn }
