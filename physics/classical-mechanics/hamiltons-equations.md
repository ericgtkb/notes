---
layout: default_math
title: Hamilton's Equations
nav_order: 3
grand_parent: Physics
parent: Classical Mechanics
---

# Hamilton's Equations of Motion

The Lagrangian $\lag$, is a a function of generalized coordinates $q_i$ and their
time derivatives $\dot{q}_i$.

Using Legendre's transformation, one can convert a set of independent variables to another.

The total differential of the Lagrangian is

$$
\begin{align}
d\lag = \sum_i \qty( \pdv{\lag}{q_i} dq_i + \pdv{\lag}{\dot{q}_i} d\dot{q}_i ). \notag
\end{align}
$$

Substituting $p_i = \pdv{\lag}{\dot{q}_i}$, the generalized momenta, and
$\dot{p}_i = \pdv{\lag}{q_i}$, from Lagrange's equations. We have

$$
\begin{align}
d\lag = \sum_i \qty( \dot{p_i} dq_i + p_i d\dot{q}_i ). \notag
\end{align}
$$

Using the relation $d\qty(\sum p_i \dot{q}_i) = \sum p_i d\dot{q}_i + \sum \dot{q}_i dp_i$ to rewrite
the second term on the right hand side, we obtain

$$
\begin{align}
d\qty( \sum_i p_i \dot{q}_i - \lag) = \sum_i \qty(\dot{q}_i dp_i - \dot{p}_i dq_i), \notag
\end{align}
$$

The left hand side is the differential of the total energy written in terms of
coordinates and momenta. This is the Hamiltonain of the system:

$$
\begin{align}
\ham\qty(\mb{p}, \mb{q}, t) = \sum_i p_i \dot{q}_i - \lag.
\end{align}
$$

We can now rewrite the equation of differential of the energy as

$$
\begin{align}
d\ham = \sum_i \qty(\dot{q}_i dp_i - \dot{p}_i dq_i). \notag
\end{align}
$$


From the definition of total differential, we find

$$
\begin{align}
\dot{q}_i = \pdv{\ham}{p_i}, \quad \dot{p}_i = \pdv{\ham}{q_i},
\end{align}
$$

or in vector form

$$
\begin{align}
\dot{\mb{q}} = \pdv{\ham}{\mb{p}}, \quad \dot{\mb{p}} = \pdv{\ham}{\mb{q}}.
\end{align}
$$

These equations are called Hamilton's equations of motions.

## Poisson's Brackets
If we have an arbitrary function $A(q_i,p_i,t)$ of coordinates, momenta,
and time, the total time derivative is

$$
\begin{align}
\frac{dA}{dt}=\pdv{A}{t}+\sum_i \left (\pdv{A}{q_i}\dot{q}_i+\pdv{A}{p_i}\dot{p}_i \right ).
\end{align}
$$

Using the Hamilton equations it becomes

$$
\begin{align}\label{eq:DADt}
\frac{dA}{dt}=\pdv{A}{t}+\sum_i \left (\pdv{A}{q_i}\pdv{\ham}{p_i}-\pdv{A}{p_i}\pdv{\ham}{q_i} \right ).
\end{align}
$$

Introducing the Poisson bracket of quantities $A$ and $B$ as

$$
\begin{align}
\qty{A,B }\equiv\sum_i \left (\pdv{A}{q_i}\pdv{B}{p_i}-\pdv{A}{p_i}\pdv{B}{q_i} \right ).
\end{align}
$$

Eq. (\ref{eq:DADt}) can now be written as

$$
\begin{align}
\frac{dA}{dt}=\pdv{A}{t}+\qty{A,\ham }.
\end{align}
$$

The Hamilton equations of motion can now be written as

$$
\begin{align}
\dot{q}_i=\qty{q_i,\ham },\\
\dot{p}_i=\qty{p_i,\ham }.
\end{align}
$$

In quantum mechanics an operator $\hat{A}$ in the Heisenberg picture follows
the time evolution

$$
\begin{align}
\frac{d\hat{A}}{dt}=\pdv{\hat{A}}{t}+\frac{1}{i\hbar}[\hat{A},\hat{\ham}],
\end{align}
$$


where $[\hat{A},\hat{\ham}]=\hat{A}\hat{\ham}-\hat{\ham}\hat{A}$
is the commutator of the operators. Thus, in passing from classical mechanics
to quantum mechanics we have the following correspondence:

$$
\begin{align}
 \qty{A,\ham }\rightarrow\frac{1}{i\hbar}[\hat{A},\hat{\ham}],
\end{align}
$$

or more generally

$$
\begin{align}
 \qty{A,B }\rightarrow\frac{1}{i\hbar}[\hat{A},\hat{B}].
\end{align}
$$
