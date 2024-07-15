---
layout: default_math
title: The Density Matrix
nav_order: 2
grand_parent: Physics
parent: Quantum Mechanics
---

# The Density Matrix

## Pure and Mixed States
The state of a qunatum system can be described using the wave function
of the system.  A system characterized by a wave function is said to be in
a ***pure state***, and can be completely described by the state $\ket{\psi}$.

In practice, the system under consideration may not be closed, and instead
is a part of a bigger closed system. In this case, the system is considered
to be in a ***mixed state***. Such a system may be described using

$$
\begin{align}
\sum_i \prob_i \ket{\psi_i},
\end{align}
$$

where $\ket{\psi_i}$ is some state of the system, and $\prob_i$ is the
probability that the system is in the $i$th state. Note that here the states
$\qty{\psi_i}$ need not be orthogonal. The probabilities $\prob_i$
satisfy the normalization condition

$$
\sum_i \prob_i = 1.
$$

If we consider some observable $A$, the ***ensemble average*** of $A$ in
this mix state is defined as

$$
\begin{align}\label{eq:ev-a}
\ev{A} &= \sum_i \prob_i\ev{A}{\psi_i} \\
    &= \sum_i \sum_a \prob_i\mel{\psi_i}{A}{a}\braket{a}{\psi_i} \notag \\
    &= \sum_i \sum_a \prob_i \abs{\braket{a}{\psi_i}}^2.
\end{align}
$$

Notice now we have two probabilities: $\prob_i$ from our lack of knowledge of
the system, and $\abs{\braket{a}{\psi_i}}^2$ the normal quantum-mechanical
probability.

We now rewrite \eqref{eq:ev-a} in a more general basis, by inserting the
completeness relation twice:

$$
\begin{align*}
\ev{A} &= \sum_i \sum_\alpha \sum_{\alpha'} \prob_i \braket{\psi_i}{\alpha} \mel{\alpha}{A}{\alpha'} \braket{\alpha'}{\psi_i} \\
    &= \sum_i \sum_\alpha \sum_{\alpha'} \prob_i \qty(\braket{\alpha'}{\psi_i} \braket{\psi_i}{\alpha}) \mel{\alpha}{A}{\alpha'} \\
\end{align*}
$$

Notice that in the parentheses, we have factored out the dependencies on the
operator $A$. From this we can define the ***density operator*** or the
***density matrix***:

$$
\begin{align}\label{eq:do-def}
\rho &\equiv \sum_i \prob_i \dyad{\psi_i}.
\end{align}
$$

To be more precise, the ***density matrix*** in the $\qty{\ket{\alpha}}$ basis
is given by the elements

$$
\begin{align}
\mel{\alpha'}{\rho}{\alpha} &= \sum_i \prob_i \braket{\alpha'}{\psi_i} \braket{\psi_i}{\alpha}.
\end{align}
$$

We note that from the definition \eqref{eq:do-def} that the density operator is
***Hermitian***.


With the definition of the density operator, the ensemble average of $A$ can be
written as

$$
\begin{align}
\ev{A} &= \sum_i \sum_\alpha \sum_{\alpha'} \mel{\alpha'}{\rho}{\alpha} \mel{\alpha}{A}{\alpha'} \notag \\
    &= \sum_i \sum_{\alpha'} \ev{\rho A}{\alpha'} \\
    &= \tr\qty(\rho A).
\end{align}
$$

The trace of the density operator is

$$
\begin{align}
\tr\rho &= \sum_i \sum_\alpha \prob_i \braket{\alpha}{\psi_i} \braket{\psi_i}{\alpha} \notag \\
    &= \sum_i \sum_\alpha \prob_i \braket{\psi_i}{\alpha} \braket{\alpha}{\psi_i} \notag \\
    &= \sum_i \prob_i \braket{\psi_i} = 1.
\end{align}
$$

This is one of the two improtant properties of the density operator.

We now calculate the trace of $\rho^2$

$$
\begin{align}
\tr\qty(\rho^2) &= \sum_i \sum_j \sum_\alpha \prob_i \prob_j \braket{\alpha}{\psi_i} \braket{\psi_i}{\psi_j} \braket{\psi_j}{\alpha} \notag \\
    &= \sum_i \sum_j \sum_\alpha \prob_i \prob_j \braket{\psi_j}{\alpha} \braket{\alpha}{\psi_i} \braket{\psi_i}{\psi_j} \notag \\
    &= \sum_i \sum_j \prob_i \prob_j \braket{\psi_j}{\psi_i} \braket{\psi_i}{\psi_j}. \notag \\
\end{align}
$$

Using the Schwarz inequality
$\abs{\braket{\psi_i}{\psi_j}} \le \braket{\psi_i}\braket{\psi_j}$, and that
the states $\ket{\psi_i}$ are normalized, we find

$$
\begin{align}
\tr\qty(\rho^2) &= \sum_i \sum_j \prob_i \prob_j \braket{\psi_j}{\psi_i} \braket{\psi_i}{\psi_j}. \notag \\
    &\le \sum_i \sum_j \prob_i \prob_j = 1.
\end{align}
$$

For a pure state, with $i = n$ and $\prob_n = 1$, the density operator is

$$
\rho = \dyad{\psi_n},
$$

so we have

$$
\begin{align*}
\tr\qty(\rho^2) &= \abs{\braket{\psi_n}{\psi_n}}^2 = 1.
\end{align*}
$$

In summary we have

$$
\begin{align}
\tr\qty(\rho^2) \le 1,
\end{align}
$$

where the equality holds when the system is in a pure state.

Note that for a pure state, we have

$$
\rho^2 = \rho,
$$

or

$$
\rho\qty(\rho - I) = 0.
$$

Therefore, the eigenvalues for a pure state are either zero or one. In the
basis that diagonalizes the density operator the density operator must be of
the form

$$
\begin{align}\label{eq:dm-pure}
\rho \doteq
\mqty(\dmat{0,0,\ddots,0,1,0,\ddots,0}).
\end{align}
$$

Sometimes we would like to write the density operator in the basis of
position eigenkets $\ket{\mb{r}}$. For the average of an observable $A$, we
then have

$$
\ev{A} = \int d\mb{r} \int d\mb{r}' \mel{\mb{r}'}{\rho}{\mb{r}} \mel{\mb{r}}{A}{\mb{r}'}.
$$

In this basis, the density matrix is

$$
\begin{align}
\mel{\mb{r}'}{\rho}{\mb{r}} &= \sum_i \prob_i \braket{\mb{r}'}{\psi_i} \braket{\psi_i}{\mb{r}} \notag \\
    &= \sum_i \prob_i \psi_i(\mb{r}') \psi_i^*(\mb{r}). \label{eq:dm-pos}
\end{align}
$$

This form is sometimes written as $\rho(\mb{r}',\mb{r})$.

## Some examples
**Example 1.** A pure state

$$
\rho = \dyad{\uparrow} \doteq \mqty(1&0\\0&0).
$$

This is a pure state and we have $\tr\qty(\rho^2) = \tr\rho = 1$. We can
calculate the expectation value for $\sigma_z$

$$
\ev{\sigma_z} = \tr\qty(\rho \sigma_z) = \tr\qty[\mqty(1&0\\0&0)\mqty(\pmat{z})] = 1.
$$

**Example 2.** A mixed state

$$
\rho = \frac{1}{4}\dyad{\uparrow} + \frac{3}{4}\dyad{\downarrow} \doteq
    \mqty(\frac{1}{4}&0\\0&\frac{3}{4}).
$$

We have $\tr\rho = 1$, and $\tr(\rho^2) = \frac{5}{8}$. The expectation value
of $\sigma_z$

$$
\ev{\sigma_z} = \tr\qty(\rho \sigma_z)
    = \tr\qty[\mqty(\frac{1}{4}&0\\0&\frac{3}{4})\mqty(\pmat{z})]
    = \frac{1}{4} - \frac{3}{4} = -\frac{1}{2}.
$$

**Example 3.** A mixed state, but the states are not orthogonal

$$
\rho = \frac{1}{2}\dyad{\uparrow_x} + \frac{1}{2}\dyad{\uparrow},
$$

where $\ket{\uparrow_x}$ is an eigenket of $\sigma_x$. Writing
$\ket{\uparrow_x}$ in the $\sigma_z$ basis we have

$$
\begin{align*}
\rho &= \frac{1}{4}\qty(\ket{\uparrow} + \ket{\downarrow})\qty(\bra{\uparrow} + \bra{\downarrow}) + \frac{1}{2}\dyad{\uparrow} \\
    &= \frac{1}{4}\qty(\dyad{\uparrow}{\uparrow} + \dyad{\uparrow}{\downarrow} + \dyad{\downarrow}{\uparrow} + \dyad{\downarrow}{\downarrow})+ \frac{1}{2}\dyad{\uparrow} \\
    &= \frac{3}{4}\dyad{\uparrow}{\uparrow} + \frac{1}{4}\dyad{\uparrow}{\downarrow} + \frac{1}{4}\dyad{\downarrow}{\uparrow} + \frac{1}{4}\dyad{\downarrow}{\downarrow} \\
    &\doteq \mqty(\frac{3}{4}&\frac{1}{4}\\ \frac{1}{4}&\frac{1}{4}).
\end{align*}
$$

We can easily check $\tr\rho = 1$, as it should be. For $\rho^2$, we have

$$
\begin{align*}
\tr(\rho^2) &= \tr\qty[\mqty(\frac{3}{4}&\frac{1}{4}\\ \frac{1}{4}&\frac{1}{4})
    \mqty(\frac{3}{4}&\frac{1}{4}\\ \frac{1}{4}&\frac{1}{4})] \\
    &= \tr\mqty(\frac{5}{8}&\frac{1}{4} \\ \frac{1}{4}&\frac{1}{8}) = \frac{3}{4}.
\end{align*}
$$

The expectation value for $\sigma_z$ is

$$
\begin{align*}
\ev{\sigma_z} &= \tr\qty(\rho \sigma_z) 
    = \tr\qty[\mqty(\frac{3}{4}&\frac{1}{4}\\ \frac{1}{4}&\frac{1}{4})\mqty(\pmat{z})] \\
    &= \tr\mqty(\frac{3}{4}&-\frac{1}{4}\\ \frac{1}{4}&-\frac{1}{4}) = \frac{1}{2},
\end{align*}
$$

and the expectation value for $sigma_x$ is

$$
\begin{align*}
\ev{\sigma_x} &= \tr\qty(\rho \sigma_x) 
    = \tr\qty[\mqty(\frac{3}{4}&\frac{1}{4}\\ \frac{1}{4}&\frac{1}{4})\mqty(\pmat{x})] \\
    &= \tr\mqty(\frac{1}{4}&\frac{3}{4}\\ \frac{1}{4}&\frac{1}{4}) = \frac{1}{2}.
\end{align*}
$$

These results are expected as the expectation value of $\sigma_z$ for a system
in the state $\ket{\uparrow_x}$ is zero, same for the expectation value of
$\sigma_x$ for a state in $\ket{\uparrow}$.

## Time evolution
The time dependent density operator is given by

$$
\rho = \sum_i \prob_i \dyad{\psi_i(t)}.
$$

The time evolution of the density operator is then

$$
\begin{align}
i\hbar\pdv{\rho}{t} &= i\hbar \sum_i \prob_i \qty[ \qty(\pdv{\ket{\psi_i(t)}}{t})\bra{\psi_i(t)}
    + \ket{\psi_i(t)}\qty(\pdv{\bra{\psi_i(t)}}{t})] \notag \\
    &= \sum_i \prob_i \qty( \ham\dyad{\psi_i(t)} - \dyad{\psi_i(t)}\ham ) \notag \\
    &= [\ham, \rho],
\end{align}
$$

where we have used the fact that the states $\ket{\psi_i(t)}$ satisfy the
Schrödinger equation.

Let's move the factor $i\hbar$ to the right hand side
$$
\begin{align}\label{eq:do-te}
\pdv{\rho}{t} &= \frac{1}{i\hbar}[\ham, \rho].
\end{align}
$$

We have seen that the connection between classical mechanics and quantum mechanics
can be done by replacing the classical Poisson brackets by the commutators:

$$
\qty{A, B} \rightarrow \frac{1}{i\hbar}[A, B].
$$

From \eqref{eq:do-te} we can see that the corresponding classical equation is

$$
\begin{align}
\pdv{\rho}{t} &= \qty{\ham, \rho}.
\end{align}
$$

This is Liouville's theorem in classical statistical mechanics, and $\rho$
is the phase space density. We see that the density operator plays the same
role as the phase space density in classical mechanics.

## Density Operator in Quantum Statistical Mechanics
Having seen the correspondence of density operator in classical statistical
mechanics, we can now show how to formulate quantum statistical mechanics
using the density operator.

Consider a system in thermal equilibrium. In thermal equilibrium, from
\eqref{eq:do-te} and by setting $\pdv{\rho}{t} = 0$, we see that the density
matrix commutes with the Hamiltonian. Thus, we can diagonalize the density
martix using the energy eigenkets. Assuming we have a completely random
ensemble, or equivalently, we don't have any knowledge of the states of the
system and the system can be in any of the $\Gamma$ possible states. In this case,
the desity matrix is

$$
\begin{align}\label{eq:dm-rand}
\rho \doteq
\frac{1}{\Gamma}\mqty(\dmat{1,1,1,\ddots,1,1}).
\end{align}
$$

Comparing \eqref{eq:dm-rand} with \eqref{eq:dm-pure}, we seen that the
completely random ensemble is the complete opposite of a pure state.
We want to define some qunatity that can tell us the difference between the
two, i.e. some measure of randomness.

Let's calculate the ensemble average
of the quantity $\ln\rho$. Recall that we can calculate the average of
an observable $A$ by taking the trace or $\rho A$. For $\ln\rho$, we have

$$
\ev{\ln\rho} = \tr\qty(\rho\ln\rho) = \sum_i \rho_{ii} \ln\rho_{ii},
$$

where in the last equality, we assume that we are using a basis in which
$\rho$ is diagonalized. Note that from the two extreme cases
\eqref{eq:dm-rand} and \eqref{eq:dm-pure}, that this average is a negative
number. Let's define a positive quantity

$$
\begin{align}
S = -k_B\ev{\ln\rho} = -k_B\tr\qty(\rho\ln\rho)
\end{align}
$$

called ***entropy***. For now just treat $k_B$ as some constant. For the pure
state \eqref{eq:dm-pure}, we have

$$
S = 0,
$$

whereas for the completely random ensemble, we have

$$
\begin{align}
S = -k_B\sum_i \frac{1}{\Gamma} \ln\qty(\frac{1}{\Gamma}) = k_B\ln\Gamma.
\end{align}
$$

We will now show that this is the maximum entropy subject to the constraint

$$
\begin{align}\label{eq:constr-rho}
\sum_i \rho_{ii} = 1.
\end{align}
$$

We want to find the $\rho_{ii}$ that maximizes the entropy

$$
\begin{align}
S = -k_B\sum_i \rho_{ii}\ln\rho_{ii}.
\end{align}
$$

The variation of the entropy is

$$
\begin{align}
\delta S = -k_B\sum_i \delta \rho_{ii} \qty(\ln\rho_{ii} + 1),
\end{align}
$$

subject to the contraint from \eqref{eq:constr-rho}:

$$
\begin{align}\label{eq:var-rho}
\sum_i \delta \rho_{ii} = 0.
\end{align}
$$

Using Lagrange multipliers, we have

$$
\begin{align}
\sum_i \delta \rho_{ii} \qty[ \qty( \ln\rho_{ii} + 1) + \alpha] = 0,
\end{align}
$$

where $\alpha$ is the Lagrange multiplier for constraint \eqref{eq:var-rho}.
From this we find

$$
\rho_{ii} = C^* e^{-\alpha - 1} = C,
$$

where we have abosorb all the constant factors in the the constant $C$. The
density matrix that maximizes the entropy is thus a constant. Using the
constraint \eqref{eq:constr-rho}, we find

$$
\rho_{ii} = \frac{1}{\Gamma},
$$

which is just the maximally random ensemble we started with. In statistical
mechanics, this ensemble is called the ***microcanonical ensemble***.

We now impose an additional constraint to find the corresponding density
matrix. To do so, we calculate the ensemble average of energy

$$
\begin{align}
\ev{\ham} = \tr \qty(\rho \ham) = \sum_i \rho_{ii} E_i = U.
\end{align}
$$

In thermodynamics, this quantity is called the internal energy $U$. We want
to find $\rho_{ii}$ that maximizes the entropy as before with the additional
constraint

$$
\begin{align}
\sum_i \rho_{ii} E_i = U.
\end{align}
$$

Varying $\rho_{ii}$, we have

$$
\begin{align}
\sum_i \delta \rho_{ii} E_i = 0.
\end{align}
$$

Combining all the constraints, we have

$$
\begin{align}
\sum_i \delta \rho_{ii} \qty[ \qty( \ln\rho_{ii} + 1) + \beta E_i + \alpha] = 0,
\end{align}
$$

or

$$
\rho_{ii} = C^*e^{-\beta E_i - \alpha -1} = C e^{-\beta E_i},
$$

where $\alpha$ and $\beta$ are Lagrange multipliers, and we have again
absorbed all the constants in the one constant $C$. Substituting $\rho_{ii}$
into \eqref{eq:constr-rho} we find

$$
\begin{align}\label{eq:rho-canon}
\rho_{ii} = \frac{e^{-\beta E_i}}{\sum_i e^{-\beta E_i}} = \frac{e^{-\beta E_i}}{Z},
\end{align}
$$

where

$$
\begin{align}
Z = \sum_i e^{-\beta E_i}
\end{align}
$$

is the ***partition function***. Since we are using the basis of energy
eigenkets, we can rewrite the partition function as

$$
Z = \tr \qty(e^{-\beta\ham}).
$$

The density matrix can also be written in the operator form using the
Hamiltonian


$$
\begin{align}
\rho = \frac{e^{-\beta \ham}}{Z}.
\end{align}
$$

The is the density operator in a ***canonical ensemble***.

So far $\beta$ is just a Lagrange multiplier. We will now try to identiyf its
physical meaning. The internal energy can now be calculated as

$$
\begin{align}
U = \sum_i \rho_{ii} E_i = \frac{\sum_i E_i e^{-\beta E_i}}{Z}.
\end{align}
$$

For the entropy, we have

$$
\begin{align}
S &= -k_B\sum_i \rho_{ii} \ln \rho_{ii} \notag \\
    &= -k_B\sum_i \frac{e^{-\beta E_i}}{Z} \qty(-\beta E_i - \ln Z) \notag \\
    &= k_B \sum_i \frac{\beta E_i e^{-\beta E_i}}{Z} + k_B\ln Z \notag \\
    &= k_B \beta U + k_B\ln Z. \label{eq:s-u-lnz}
\end{align}
$$

Now from thermodynamics, we know that [^ds-du]

[^ds-du]: To be more precise, the derivative should be written as $\qty(\pdv{S}{U})_{V,N}$.

$$
\pdv{S}{U} = \frac{1}{T},
$$

where $T$ is the temperature. The Lagrange multiplier $\beta$ is thus related
to the temperature through

$$
\begin{align}
\beta = \frac{1}{k_B T}.
\end{align}
$$

At very high temperature $\beta \rightarrow 0$, the density matrix
\eqref{eq:rho-canon} becomes a constant, and we again have the maximally
random ensemble. For zero temperature $\beta \rightarrow \infty$, only
the ground state is occupied, and the ensemble is in a pure state.

It should be now clear that the constant $k_B$, called the ***Boltzmann
constant***, in our definition for the entropy $S$ is to make the
unit match the thermodynamic definition.

Without going into the details, we note that \eqref{eq:s-u-lnz} is just
the thermodynamic relation

$$
F = U - TS,
$$

or

$$
S = \frac{U}{T} - \frac{F}{T},
$$

where $F$ is the ***Helmholtz free energy***. From the last term in
\eqref{eq:s-u-lnz}, we find

$$
\begin{align}
F = -k_BT \ln Z = -\frac{1}{\beta}\ln Z.
\end{align}
$$

All the other thermodynamic quantities can be similarly derived from the
density matrix $\rho_{ii}$. For more details, see [statistical mechanics].

**Eaxmple.** a harmonic oscillator.

In the energy basis, $\rho$ is diagonalized, with

$$
E_i = \hbar\omega\qty(n_i + \frac{1}{2}).
$$

The partition function is therefore

$$
Z = \sum_i e^{-\frac{\beta \hbar \omega}{2}} e^{-\beta \hbar\omega n_i}
    = \frac{e^{-\frac{\beta\hbar\omega}{2}}}{1 - e^{-\beta\hbar\omega}}.
$$

The internal energy can be calculated through

$$
\begin{align*}
U &= -\pdv{\ln Z}{\beta} = -\pdv{\beta}\qty[-\frac{-\beta\hbar\omega}{2} - \ln \qty(1 - e^{-\beta\hbar\omega})] \\
    &=\hbar\omega \qty( \frac{e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}} + \frac{1}{2} ) \\
    &=\hbar\omega \qty( \frac{1}{e^{\beta\hbar\omega} - 1} + \frac{1}{2} ).
\end{align*}
$$



## Composite Systems and Partial Trace

TBD

Below is a code snippet using Python and [QuTiP](https://qutip.org/) to
calculate partial trace of a system. The system is in the state

$$
\ket{\psi} = \ket{\uparrow} \otimes \ket{\downarrow} = \ket{\uparrow\downarrow}.
$$

```python
>>> from qutip import basis, tensor
>>> up = basis(2, 0)
>>> down = basis(2, 1)
>>> up
Quantum object: dims=[[2], [1]], shape=(2, 1), type='ket', dtype=Dense
Qobj data =
[[1.]
 [0.]]
>>> down
Quantum object: dims=[[2], [1]], shape=(2, 1), type='ket', dtype=Dense
Qobj data =
[[0.]
 [1.]]
>>> psi = tensor(up, down)
>>> psi
Quantum object: dims=[[2, 2], [1, 1]], shape=(4, 1), type='ket', dtype=Dense
Qobj data =
[[0.]
 [1.]
 [0.]
 [0.]]
>>> dm = psi * psi.dag()
>>> dm
Quantum object: dims=[[2, 2], [2, 2]], shape=(4, 4), type='oper', dtype=Dense, isherm=True
Qobj data =
[[0. 0. 0. 0.]
 [0. 1. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]
>>> dm.ptrace(0)
Quantum object: dims=[[2], [2]], shape=(2, 2), type='oper', dtype=Dense, isherm=True
Qobj data =
[[1. 0.]
 [0. 0.]]
>>> dm.ptrace(1)
Quantum object: dims=[[2], [2]], shape=(2, 2), type='oper', dtype=Dense, isherm=True
Qobj data =
[[0. 0.]
 [0. 1.]]
```

Now we repeat the same, but for the state

$$
\ket{\psi} = \frac{1}{\sqrt{2}} \qty(\ket{\uparrow} \otimes \ket{\downarrow}
    + \ket{\downarrow} \otimes \ket{\uparrow})
    = \frac{1}{\sqrt{2}} \qty(\ket{\uparrow\downarrow} + \ket{\downarrow\uparrow}).
$$

```python
>>> psi = (tensor(up, down) + tensor(down, up)).unit()
>>> psi
Quantum object: dims=[[2, 2], [1, 1]], shape=(4, 1), type='ket', dtype=Dense
Qobj data =
[[0.        ]
 [0.70710678]
 [0.70710678]
 [0.        ]]
>>> dm = psi * psi.dag()
>>> dm
Quantum object: dims=[[2, 2], [2, 2]], shape=(4, 4), type='oper', dtype=Dense, isherm=True
Qobj data =
[[0.  0.  0.  0. ]
 [0.  0.5 0.5 0. ]
 [0.  0.5 0.5 0. ]
 [0.  0.  0.  0. ]]
>>> dm.ptrace(0)
Quantum object: dims=[[2], [2]], shape=(2, 2), type='oper', dtype=Dense, isherm=True
Qobj data =
[[0.5 0. ]
 [0.  0.5]]
>>> dm.ptrace(1)
Quantum object: dims=[[2], [2]], shape=(2, 2), type='oper', dtype=Dense, isherm=True
Qobj data =
[[0.5 0. ]
 [0.  0.5]]
```

## Composite Systems in Position Basis
We have seen how desity matrix in a position basis looks like \eqref{eq:dm-pos}.
In {% cite landau1981quantum %}, the density matrix is introduced in the
position basis, and the system is considered as part of a larger closed system.
We can now review this description of the density matrix in more modern
notations.

Consider a closed system in a pure state described by a wave function

$$
\Psi(\mb{q}, \mb{r}) = \braket{\mb{q}, \mb{r}}{\Psi}.
$$

Here $\mb{r}$ is the coordinates of smaller system, and $\mb{q}$ is all
the remaining coordinates in the larger system.

From \eqref{eq:dm-pos}, the desity matrix for the large closed system is
just

$$
\rho_L(\mb{q}',\mb{r}',\mb{q},\mb{r}) = \Psi(\mb{q}', \mb{r}') \Psi^*(\mb{q}, \mb{r})
$$

in the position basis. In operator form, we of course have

$$
\rho_L = \dyad{\Psi}.
$$

Now consider an observable $A$, the expectation value of $A$ can be
calculated through

$$
\begin{align}
\ev{A} &= \tr\qty(\rho_L A) = \int d\mb{q}' \int d\mb{r}' \ev{\rho_L A}{\mb{q}',\mb{r}'} \notag \\
    &= \int d\mb{q}' \int d\mb{r}' \int d\mb{q} \int d\mb{r} \mel{\mb{q}',\mb{r}'}{\rho_L}{\mb{q},\mb{r}} \mel{\mb{q},\mb{r}}{A}{\mb{q}',\mb{r}'} \label{eq:ev-a-full}\\
    &= \int d\mb{q}' \int d\mb{r}' \int d\mb{q} \int d\mb{r} \rho_L(\mb{q}',\mb{r}',\mb{q},\mb{r}) A(\mb{q},\mb{r},\mb{q}',\mb{r}'). \notag
\end{align}
$$

If the operator $A$ acts only of the corrdinates of our system, i.e. it
is an observable only for our smaller system, from \eqref{eq:ev-a-full} we find

$$
\begin{align*}
\ev{A} &= \int d\mb{q}' \int d\mb{r}' \int d\mb{q} \int d\mb{r} \mel{\mb{q}',\mb{r}'}{\rho_L}{\mb{q},\mb{r}} \mel{\mb{r}}{A}{\mb{r}'}\delta(\mb{q}-\mb{q}') \\
    &= \int d\mb{r}' \int d\mb{q} \int d\mb{r} \mel{\mb{q},\mb{r}'}{\rho_L}{\mb{q},\mb{r}} \mel{\mb{r}}{A}{\mb{r}'}, \\
\end{align*}
$$

where we have used $\braket{\mb{q}}{\mb{q}'} = \delta(\mb{q} - \mb{q}')$.

We can now define the density matrix of our system:

$$
\begin{align}
\rho(\mb{r}', \mb{r})= \int d\mb{q} \mel{\mb{q},\mb{r}'}{\rho_L}{\mb{q},\mb{r}}.
    = \int d\mb{q} \Psi(\mb{q}, \mb{r}') \Psi^*(\mb{q}, \mb{r}).
\end{align}
$$

This is exaclty the form of the density matrix Landau introduced, and it is essentially
the partial trace of the larger closed system's pure-state density matrix
over the remaining corrdinates $\mb{q}$.

The expectation value of an observable of our system is simply

$$
\begin{align}
\ev{A} &= \int d\mb{r}' \int d\mb{r} \mel{\mb{r}'}{\rho}{\mb{r}} \mel{\mb{r}}{A}{\mb{r}'}, \notag \\
    &= \int d\mb{r}' \int d\mb{r} \rho(\mb{r}', \mb{r}) A(\mb{r}, \mb{r}'). \\
\end{align}
$$

It can be shown that if the wavefunction of the larger closed system can
be decomposed into the form

$$
\Psi(\mb{q}, \mb{r}) = \phi(\mb{q})\psi(\mb{r}),
$$

the density matrix of our smaller system is in a pure state.

---
## Footnotes
* Footnotes
{:footnotes}
---
## References

{% bibliography --cited %}
---
[Previous Page]({% link physics/quantum-mechanics/basic-concepts.md %}){: .btn }
[Next Page](#){: .btn }

{% include pages.md %}
