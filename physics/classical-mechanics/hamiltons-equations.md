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

