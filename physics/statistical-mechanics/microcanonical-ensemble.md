---
layout: default_math
title: The Microcanonical Ensemble
nav_order: 1
grand_parent: Physics
parent: Statistical Mechanics
---

# The Microcanonical Ensemble

## Microstates and Macrostates
A physical system at the fundamental level is described by quantum mechanics, or
to some appropriate approximations, classical mechanics. By solving the equations
of motion of the whole system, we can fully describe how the system evolves.

In quantum mechanics, the solution to the equations of motion gives us all the
possible states of the system. In classical mechanics we solve the equations of
motion to obtain the trajectory of the system given the initial condition
of the system.

In either case, the full description by solving the eqluations of montion gives
us the ***microstates*** of the system. For classical mechanics, a
representative point in phase space corresponds to a states. However, this
means that we will have a continuous (infinite) number of states. We will see
later that we can "count" the number of microstates by counting the
representative points within some phase space volume.

For a system with high degrees of freedom, describing the system with
microstates is impractical, and we often need a statistical description of
the system. These coarse-grained states describing the system are called
***macrostates***. For example, a macrostate of a close system can
be described using $N$, $V$, and $E$, the total number of particles, the total
volume of the system, and the total energy of the system.[^e-u]

[^e-u]: We will often use $E$ and $U$ interchangeably. $E$ stands for the total
    energy of the system, and thus the internal energy $U$ in thermodynamics.
    When talking about energy of the system, we will often use $E$. When
    describing thermodynamic relations, we will often use $U$.

For a given macrostate with fixed $(N, V, E)$, a large number of different
microstates are allowed. Let us call the number of allowed microstates

$$
\Gamma(N,V,E).
$$

Remarkably, if we have the expression of $\Gamma$ as a function of $N$, $V$, and
$E$, all other thermodyanmic quantities can be calculated! Before going into
the details of calculating $\Gamma$, let us try to understand its physical
significance and its relation to thermodynamics.

## From Microstates to Thermodynamics
Let us consider two systems in thermal contact, as shown in the figure below.
For the moment, we assume that the two system are only allowed to exchange
energy. The wall separating the two system is rigid, but not thermally insulated.

The composite system can be considered as a closed system, and the two subsystems
are described by their macrostates $(N_1, V_1, E_1)$, and $(N_2, V_2, E_2)$,
respectively. Microscopically, $\Gamma_1$ and $\Gamma_2$ specify the number of
allowed microstates for the two subsystems, respectively.

<figure align="center" id="fig:nve-contact">
  <img src="{% link assets/images/physics/statistical-mechanics/nve-2-systems.svg %}">
  <figcaption><b>Figure 1.</b> Systems in contact</figcaption>
</figure>

The total energy of the combined closed system can be written as

$$
E = E_1 + E_2 = \text{constant}.
$$

Since energy exchange is allowed in between the two system, the values of $E_1$
and $E_2$ may vary, but the total energy $E$ remains fixed.

The total number of allowed microstates for the combined system is

$$
\Gamma(E) = \Gamma_1(E_1)\Gamma_2(E_2) = \Gamma_1(E_1)\Gamma_2(E - E_1).
$$

At thermal equilibrium, a closed system evolves towards a configuration that
maximizes the total number of microstates. We can thus calculate the condition
for thermal equilibrium.

At thermal equilibrium, we have

$$
\pdv{\Gamma}{E} = \pdv{\Gamma}{E_1}= 0,
$$

or

$$
\begin{align*}
\pdv{\Gamma_1}{E_1}\Gamma_2 + \Gamma_1 \pdv{\Gamma_2}{E_1}
    &= \pdv{\Gamma_1}{E_1}\Gamma_2 - \Gamma_1 \pdv{\Gamma_2}{E_2} = 0,
\end{align*}
$$

where we have used $\pdv{E_2}{E_1} = -1$. We thus find the condition for
thermal equilibrium

$$
\begin{align}
\qty(\pdv{\ln\Gamma_1}{E_1})_{N_1,V_1} = \qty(\pdv{\ln\Gamma_2}{E_2})_{N_2,V_2}.
\end{align}
$$

Defining $\beta$ as

$$
\begin{align}
\beta \equiv \qty(\pdv{\ln\Gamma}{E})_{N,V},
\end{align}
$$

or writing $E$ as internal energy $U$

$$
\begin{align}\label{eq:gamma-u-beta}
\beta \equiv \qty(\pdv{\ln\Gamma}{U})_{N,V}.
\end{align}
$$

we see that at equilibrium, we must have $\beta_1 = \beta_2$.

From thermodynamics, we learned that entropy is maximized at thermal equilibrium,
with the relation

$$
\begin{align}\label{eq:s-u-t}
\qty(\pdv{S}{U})_{N,V} = \frac{1}{T},
\end{align}
$$

where $T$ is the thermodynamic temperature. Comparing \eqref{eq:gamma-u-beta}
and \eqref{eq:s-u-t}, we find the relation between $\Gamma$ and $S$:

$$
\frac{S}{\ln\Gamma} = \frac{1}{\beta T} = \text{constant}.
$$

Since we have not made any assumptions about the nature of the system, this
constant must be a universal constant. We therefore have the important equation
for the entropy

$$
\begin{align}\label{eq:s-def}
S = k_B \ln\Gamma,
\end{align}
$$

where the constant $k_B$, is the Boltzmann constant, which connects
statistical description to thermodynamics.

Note that the parameter $\beta$ is often use in place of temperature

$$
\begin{align}
\beta = \frac{1}{k_B T}.
\end{align}
$$

Equation \eqref{eq:s-def} is actually a special case of a more general definition
of entropy

$$
\begin{align}\label{eq:s-ln-prob}
S = -k_B \ev{\ln \prob_i} = -k_B\sum_i \prob_i\ln \prob_i,
\end{align}
$$

where the angle brackets denote the ***ensemble average***, and $\prob_i$ is
the probability of the system in the $i$th microstate. Here, we treat each
microstates as equally probable, so $\prob_i = \frac{1}{\Gamma}$, and we
obtain \eqref{eq:s-def}. An ensemble in which all states are equally probable
is called a ***microcanonical ensemble***.

If we now instead consider the wall separating the two system moveable, but
insulated. Following the similar calculation as above, we find

$$
\begin{align}
\qty(\pdv{\ln\Gamma}{V})_{N,U} = \frac{P}{k_B T},
\end{align}
$$

where $P$ is the thermodynamic pressure. Similarly, if we allow only the exchange of
particles between the systems

$$
\begin{align}
\qty(\pdv{\ln\Gamma}{N})_{V,U} = -\frac{\mu}{k_B T},
\end{align}
$$

where $\mu$ is the chemical potential. These relations are, collectively, just
the famous thermodynamic relation

$$
dU = TdS - PdV + \mu dN.
$$

Thus, if we can correctly calculate $\Gamma$ form the funamental nature
of a system, we can then derive all the thermodynamic qunatities of the
system from it. In quantum mechanics, this can be done using the density
matrix formalism, and the calculation of the number of microstates depends
on the types of particles in the system: bosons and fermion. For a system of
identical particles, the type of particle determines how we can properly
count the microstates. We will discuss these details with the density matrix
formalism in a later chapter. For now, we will treat them all as "classical
particles", which is valid for both bosons and fermions at high temperatures.

## Classical Phase Space and Liouville's theorem
In classical mechanics, the state of a particle is defined by its generalized
(canonical) corrdinates $q_i$ and their conjugate momenta $p_i$. In three
dimensions, these coordinates and momenta define a six-dimentaional phase
space, sometimes called the $\mu$ space. At any instant in time, by solving
the Hamilton's equations with proper initial conditions, the montion, or the
state of the particle, is represented by the six numbers $\qty{q_i, p_i}$,
call a representative point.

Now if we have $N$ particles in the system, the system is describe by $3N$
generalized coordinates ad $3N$ momenta, in a $6N$-dimensional phase space,
sometimes called the $\Gamma$ space. The cooredinates and momenta, $q_i$ and
$p_i$, are functions of time $t$, and Hamiltons's equations of the system,

$$
\begin{align}
\dot{q}_i &= \pdv{\ham}{p_i}, \\
\dot{p}_i &= -\pdv{\ham}{q_i},
\end{align}
$$

tell us how they vary with time.

By solving these equations we find the trajectory of the representative points.
If the energy of the system is fixed at $\ham(q_i, p_i) = E$, the trajectory
will be confied on a hypersurface. If the system is allowed to have total
energy in a range from $E$ to $E + \Delta$, the trajectory is now confined in
a hypershell.

Now consider that we have many copies of the same system, or an ensemble of
systems, each occupies a different representative point. These points are all
confined in the same hypersurface or hypershell mentioned above. We can then
define a probability density function $\rho$ such that[^rho-def]

[^rho-def]: There are two different definitions of $\rho$ in the literature.
    Here, we follow the definition in {% cite landau1980statistical %} and
    {% cite kardar2007statistical %}, where $\rho$ is defined as a probability
    density. In {% cite huang2008statistical %} and {% cite pathria2011statistical %},
    $\rho'$ is defined as a density function such that $\rho' d^{3N}qd^{3N}p$ is
    the number of representative points within the volume insead of a probability.
    The two definitions are related through

    $$
    \rho = \frac{\rho'}{\int\rho' d^{3N}qd^{3N}p},
    $$

    where $\int\rho' d^{3N}qd^{3N}q$ is just the total number of representation
    points, or the number of systems (copies) in the ensemble. If $\rho'$ is
    used to calculate the expectation value of a quantity $A$, we need to
    include this factor:

    $$
    \ev{A} = \frac{\int\rho' A d^{3N}qd^{3N}p}{\int\rho' d^{3N}qd^{3N}p},
    $$

$$
\begin{align}
\rho(q_i, p_i, t)d^{3N}qd^{3N}q
\end{align}
$$

represents the probability of finding an allowed representive point within the
phase-space volume, where $d^{3N}qd^{3N}q=dq_1\cdots dq_{3N}dp_1\cdots dp_{3N}$
is the differential volume.

Since $\rho$ is a probability density, it must be normalized to

$$
\begin{align}\label{eq:rho-norm}
\int \rho(q_i, p_i, t)d^{3N}qd^{3N}q = 1.
\end{align}
$$

For a physical quantity $A(q_i, p_i)$ that depends on the representitive points,
we can now calculate the ***ensemble average*** of it
through

$$
\begin{align}
\ev{A} = \int \rho(q_i, p_i, t) A(q_i, p_i)d^{3N}qd^{3N}q.
\end{align}
$$

For a stationary ensemble the probability density does not depend explicitlt
on time, we have

$$
\begin{align}\label{eq:pd-rho-t}
\pdv{\rho}{t} = 0.
\end{align}
$$

Since we are only considering systems in equilibrium for now, this will
gernally be the case.

We will now derive how $\rho$ changes in phase space. We know that the total
number of representative points in our ensemble is fixed. This means that any
representative point leaving a differential volume in phase space, must equal
to the decrease in representative points in the differential volume. In other
words, the density of representative points behaves like an imcompressible
fluid in phase space, and so does our probability density function $\rho$.

From the change in density of an incompressible fluid in
[fluid mechanics]({% link physics/fluid-mechanics/index.md %}#),
we have

$$
\begin{align}\label{eq:incom-flow}
\pdv{\rho}{t} + \div (\rho \mb{v}) = 0,
\end{align}
$$

where $\mb{v} = \qty{\dot{q}_i, \dot{p}_i}$ and the divergence is taken over
all $\qty{q_i, p_i}$. Expanding the second term, we have

$$
\begin{align*}
\div (\rho \mb{v}) &= \sum_i^{3N}\qty(\pdv{\rho}{q_i}\dot{q}_i + \pdv{\rho}{p_i}\dot{p}_i)
    + \rho\sum_i^{3N}\qty(\pdv{\dot{q}_i}{q_i} + \pdv{\dot{p}_i}{p_i}) \\
    &=\sum_i^{3N}\qty(\pdv{\rho}{q_i}\pdv{\ham}{p_i} - \pdv{\rho}{p_i}\pdv{\ham}{q_i})
    + \rho\sum_i^{3N}\qty(\pdv{\ham}{q_i}{p_i} - \pdv{\ham}{p_i}{q_i}) \\
    &=\qty{\rho, \ham},
\end{align*}
$$

where we have used Hamiltons equations for $\dot{q}_i$ and $\dot{p}_i$, and
$\qty{.,.}$ is the Poisson bracket.

If we follow the probability density as it moves through phase space, the
total time derivative of $\rho$ is

$$
\begin{align}
\frac{D\rho}{Dt} &= \pdv{\rho}{t} + \sum_i^{3N}\qty(\pdv{\rho}{q_i}\dot{q}_i + \pdv{\rho}{p_i}\dot{p}_i) \notag \\
    &=\pdv{\rho}{t} + \qty{\rho, \ham},\label{eq:drho-dt}
\end{align}
$$

where $\frac{D\rho}{Dt}$ is the change in $\rho$ if we follow it as it moves
through phase space. The partial derivative $\pdv{\rho}{t}$, on the other
hand, is the local change in $\rho$. Combining \eqref{eq:incom-flow} and
\eqref{eq:drho-dt}, we have Liouville's theorem

$$
\begin{align}\label{eq:liouville}
\boxed{
\frac{D\rho}{Dt} =\pdv{\rho}{t} + \qty{\rho, \ham} = 0,
}
\end{align}
$$

which states that the density of representative points (or our probability
density) of an ensemble moves like an imcompressible fluid, or the density
is constant as it moves along its trajectory in phase space.  Note that
\eqref{eq:liouville} is more general than \eqref{eq:pd-rho-t} and is
statisfied even for non-stationary ensembles.

For a stationary ensemble, from \eqref{eq:pd-rho-t} and \eqref{eq:liouville}
we have

$$
\begin{align}\label{eq:rho-ham}
\qty{\rho, \ham} = 0.
\end{align}
$$

## Classical Microcanonical Ensemble
Let's consider a simple case where \eqref{eq:rho-ham} is trivially satisfied -
***the microcanonical ensemble***. For a microcanonical ensemble where the
energy is allowed to be in the range between $E$ and $E+\Delta$, since all
microstates are equally probable, we have

$$
\begin{align}
\rho =
\begin{cases}
\text{constant} \qquad &E\le \ham(q_i, p_i)\le E + \Delta, \\
0 &\text{otherwise}.
\end{cases}
\end{align}
$$

Let us call this constant $1/\Gamma'$. From the normalization condition
\eqref{eq:rho-norm} we have

$$
\frac{1}{\Gamma'}\int d^{3N}qd^{3N}q = 1,
$$

or

$$
\begin{align}
\Gamma' = \int d^{3N}qd^{3N}q,
\end{align}
$$

where the integral is over the allow region of energy. This gives us

$$
\begin{align}
\rho = \frac{1}{\Gamma'}
\end{align}
$$

in the allowed region. Note that $\Gamma'$ has the same units as the
phase space volume or $(\text{energy}\times\text{time})^{3N}$. Can we now
calculate entropy with $\rho$? Recalling \eqref{eq:s-ln-prob}, the entropy
is defined as $-k_B$ times the expectation value of probability of microstates.
Our $\rho$ is indeed a probability density, so the entropy is

$$
S \stackrel{?}{=} -k_B \ev{\ln \rho} = -k_B \int\rho \ln \rho d^{3N}qd^{3N}p.
$$

However, $\rho$ has the units of inverse phase space volume, so if our units
of measurement change, the entropy will also change by an additive constant.
Therefore, only the entropy change is valid, and not the value on entropy
itself.  To make the argument of the lorgarithm  dimensionless we have to multiply
$\rho$ by a constant factor of units $(\text{energy}\times\text{time})^{3N}$.

Let's first consider a special case, the microcanonical ensemble. If we
correct $\rho$ by some factor $C$ to make it dimensionless, we will have

$$
C\rho = \frac{C}{\Gamma'} = \frac{1}{\Gamma}.
$$

With this correction, we replace the argument of the logarithm $\rho$
by $C\rho$ in the expression of the entropy:

$$
\begin{align*}
S &= -k_B \ev{\ln C\rho} \\
    &= -k_B \int \frac{1}{\Gamma'} \ln \frac{1}{\Gamma} d^{3N}qd^{3N}p. \\
    &=k_B\ln \Gamma,
\end{align*}
$$

but this is just \eqref{eq:s-def} from our quantum mechanical discussion
of the microcanonical ensemble! This means that if we can find the correct $C$,
we can then properly define the entropy and other thermodynamic quantities.

We know that the Plank constant $h=2\pi\hbar$ has units
$(\text{energy}\times\text{time})$, so perhaps we could set $C=(2\pi\hbar)^{3N}$?
In fact, this is indeed the correct correction, but it is hard to understand
the reason behind it without going into more details of the correspondence
between classical mechanics and quantum mechanics. For now let's just accept
this correction, and the justification will be discussed in a
[later section](#classical-phase-space-and-quantum-states).

If we accept that $C=(2\pi\hbar)^{3N}$, the general formula for the entropy is

$$
\begin{align}
S = -k_B \ev{\ln\qty[(2\pi\hbar)^{3N}\rho]} = -k_B\int \rho\ln\qty[(2\pi\hbar)^{3N}\rho]d^{3N}qd^{3N}p.
\end{align}
$$

For the microcanonical ensemble, we have

$$
\begin{align}
S = k_B \ln\Gamma,
\end{align}
$$

where

$$
\begin{align}\label{eq:gamma-classical}
\Gamma = \int \frac{d^{3N}qd^{3N}p}{(2\pi\hbar)^{3N}},
\end{align}
$$

where the ingeration is over the allowed region in phase space. Our probability
density function

$$
\rho = \frac{1}{\int d^{3N}qd^{3N}p} = \frac{(2\pi\hbar)^{3N}}{\Gamma}
$$

over the allowed phase space region, and zero otherwise.

For a classical microcanonical ensemble, we therefore just need to calculate
$\Gamma$ through \eqref{eq:gamma-classical}, and all other thermodynamic
quantities can then be calculated from it.

## Dimensionless probabiliy density function
The definition of $\rho$ we have so far makes certain definitions (such as
the entropy) look clumsy. If we accept that the extra factor
$(2\pi\hbar)^{3N}$ is the correct correction to make the argument to the
logarithm dimensionless, we can instead redefine $\rho$ to make it
dimensionless. Let us write our previous probability density as $\rho'$,
the new definition $\rho$ is related to $\rho'$ through

$$
\rho = (2\pi\hbar)^{3N}\rho',
$$

then the expression

$$
\rho\frac{d^{3N}qd^{3N}p}{(2\pi\hbar)^{3N}}
$$

corresponds to the probability of finding an equivalent quantum state
in the differential volume $d^{3N}qd^{3N}p$. We will often use

$$
d\Gamma = \frac{d^{3N}qd^{3N}p}{(2\pi\hbar)^{3N}}
$$

for the diffential volume.

The normalization condition is thus

$$
\int\rho(q_i, p_i, t)\frac{d^{3N}qd^{3N}p}{(2\pi\hbar)^{3N}} = \int\rho(q_i, p_i, t) d\Gamma = 1,
$$

and the expectation value for a physical quantity $A$

$$
\ev{A} = \int\rho(q_i, p_i, t) A(q_i, p_i)\frac{d^{3N}qd^{3N}p}{(2\pi\hbar)^{3N}} = \int\rho(q_i, p_i, t) A(q_i, p_i) d\Gamma.
$$

This definition of $\rho$ corresponds directly to its quantum mechanical
counterpart - the density operator, or the
[Wigner distribution function]({% link physics/quantum-mechanics/density-matrix.md %}#the-wigner-distribution-function)
in the limit of $\hbar\ra 0$:

$$
\rho\lra\rho_W,
$$

where $\rho_W$ is the Wigner distribution function. The calculation of the
expectation value of a physical quantity takes the exact same form for $\rho$
and $\rho_W$.

The general formula for the entropy is now just

$$
\begin{align}\label{eq:s-rho}
\boxed{
S = -k_B \ev{\ln \rho} = -k_B \int\rho \ln \rho d\Gamma.
}
\end{align}
$$

As we will see later that if we have a system of idential particles, we will
need to correct for over counting. An additional $1/N!$ factor is needed.
So for a system of identical particle we have

$$
\begin{align}
\rho\frac{d^{3N}qd^{3N}p}{N!(2\pi\hbar)^{3N}}
\end{align}
$$

representing the probability of finding an equivalent "quantum state" in
the differential phase-space vloume for a sysyem of indistinguishable particles.

We will include this factor in $d\Gamma$,

$$
\begin{align}\label{eq:d-gamma}
d\Gamma = \frac{d^{3N}qd^{3N}p}{N!(2\pi\hbar)^{3N}}.
\end{align}
$$

The normalization is now

$$
\begin{align}
\boxed{
\int\rho(q_i, p_i, t)\frac{d^{3N}qd^{3N}p}{N!(2\pi\hbar)^{3N}} = \int\rho(q_i, p_i, t) d\Gamma = 1,
}
\end{align}
$$

and for the expectation value of a physical quantity, we have

$$
\begin{align}
\boxed{
\ev{A} = \int\rho(q_i, p_i, t) A(q_i, p_i)\frac{d^{3N}qd^{3N}p}{N!(2\pi\hbar)^{3N}} = \int\rho(q_i, p_i, t) A(q_i, p_i) d\Gamma.
}
\end{align}
$$

Equation \eqref{eq:s-rho} is still the correct formula for the entropy but
for a system of identical pariticles $d\Gamma$ is given by \eqref{eq:d-gamma}.

For a microcanonical ensemble, $\rho$ is a constant in the allowed phase-space
region. Using our new definition and the normalization condition, we have

$$
\begin{align}\label{eq:micro-gamma}
\Gamma = \int d\Gamma = \frac{1}{N!(2\pi\hbar)^{3N}}\int d^{3N}qd^{3N}p,
\end{align}
$$

where the integral is over the allowed phase-space volume. The probability
density is just

$$
\begin{align}
\rho = \frac{1}{\Gamma}
\end{align}
$$

over the allowed region, and zero otherwise.

The entropy is still just

$$
S = k_B\ln \Gamma,
$$

but $\Gamma$ is given by \eqref{eq:micro-gamma}.

## Quantum Ideal Gas
Consider a quantum mechanical problem of a particle in a box. The solution
to the Schrödinger euqation give us the energy spectrum[^bc]:

[^bc]: This expression comes from solving the Schrödinger equation with
    Dirichlet boundary conditions (the wave function vanishes at the bounding
    box). We can instead use the solution from periodic boundary conditions.
    Doing so changes the spacing between two consecutive modes and the
    quantum numbers now can be negative integers. By considering the change
    in mode spacing and ranges of the integrals, we will arrive at the smae
    statistical results. The Appendix of {% cite pathria2011statistical %}
    has a very detailed discussion on the effect of boundary conditions
    to the allowed energy levels.

$$
\varepsilon = \frac{\pi^2\hbar^2}{2mL^2}(n_x^2 + n_y^2 + n_z^2),
$$

where $L=V^{1/3}$ is the length of the box.

For a system of $N$ non-interacting particles the total energy is just

$$
\begin{align}\label{eq:p-in-cube}
E = \sum_i^{3N}\frac{\hbar^2 n_i^2\pi^2}{2mL^2} = \sum_i^{3N}\frac{\hbar^2k_i^2}{2m},
\end{align}
$$

where $n_i$ are positive integers, and $k_i = \frac{n_i\pi}{L}$. Note here
that we are not restricting the sum over $k_i$, meaning that we are assuming
that the particles are assumed to be ***distinguishable***.

We want to calculate $\Gamma$ for a fixed set of $(N, V, E)$.
In view of \eqref{eq:p-in-cube}, we want to count the number of states, or the
different arrangements of $\qty{n_i}$ that sum up to a fixed value $E$.

For the moment let us consider a different quantity $\Sigma(N, V, E)$, the
number of microstates at fixed $N$, $V$, with total energy less than or equal
to $E$.

The relationship between $\Sigma$ and $\Gamma$ is given by

$$
\Sigma(N,V,E) = \sum_{E' \leq E}\Gamma(N, V, E').
$$

Equation \eqref{eq:p-in-cube} gives us the constraint for the set $\qty{k_i}$.
The $k_i$s must lie on an n-dimensional hypersphere of radius
$\sqrt{2mE}/\hbar$. To calculate $\Sigma$, we must count all the $k_i$ points
within this hypersphere. Since $k_i$s are positive integers, the sum is confined
in the positive hyperoctant of the hypersphere:

$$
\Sigma = \sum_{\substack{k_i\text{ in positive}\\ \text{hyperoctant of sphere}}} 1.
$$

Converting the summation into integral and noting that $dk_i = \pi/L$, we have

$$
\Sigma = \qty(\frac{L}{\pi})^{3N}\int_{\substack{\text{positive}\\ \text{hyperoctant}}}d^{3N}\mb{k}.
$$

The
[volume of an n-dimensional hypershpere]({% link mathematics/miscellaneous/n-dimensional-sphere.md%})
of radius $R$ is given by

$$
V_n(R) = \frac{\pi^{\frac{n}{2}}}{\qty(\frac{n}{2})!}R^n,
$$

so we have[^bc-sphere]

[^bc-sphere]: Had we used the periodic boundary conditions, we would instead
    have to integrate over entire sphere, removing the $\qty(\frac{1}{2})^{3N}$
    factor.  At the same time, when converting the summations over $k_i$ into
    integrals we would instead have $dk_i = 2\pi/L$. The combined effect of
    these two factors would give us the same expression for $\Sigma$.

$$
\begin{align}
\Sigma(N, V, E) &= \qty(\frac{1}{2})^{3N}\qty(\frac{L}{\pi})^{3N}\frac{\qty(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!\hbar^{3N}} \notag \\
    &=\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!}. \label{eq:sigma}
\end{align}
$$

We can also calculate $\Gamma$ directly, which is just the number of $k_i$s on
the hypersphere. However, it is more realistic to calculate the number of states
within a thin shell around the surface of the hypersphere. Let us allow the
energy to vary between $E$ and $E + \Delta$. The differential volume of a shell
of an n-dimensional hypersphere or radius $R$ is

$$
S_n(R)dR = \frac{2\pi^{\frac{n}{2}}}{\qty(\frac{n}{2} - 1)!}R^{n-1}dR.
$$

Using $R=\sqrt{2mE}/\hbar$ and $dR=\frac{1}{2}\frac{\sqrt{2m}}{\hbar\sqrt{E}}dE$,
and writing $dE$ as $\Delta$, we have

$$
\begin{align}
\Gamma(N,V,E;\Delta) &= \qty(\frac{1}{2})^{3N}\qty(\frac{L}{\pi})^{3N}\frac{2\pi^{3N/2}}{\qty(\frac{3N}{2} - 1)!}
    \frac{(2mE)^{3N/2-1/2}}{\hbar^{3N-1}}\frac{(2m)^{1/2}}{2\hbar E^{1/2}}\Delta \notag \\
    &=\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2}-1)!}\frac{\Delta}{E} \notag \\
    &=\frac{3N}{2}\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!}\frac{\Delta}{E} \\
    &=\frac{3N}{2}\frac{\Delta}{E}\Sigma(N, V, E).
\end{align}
$$

This result can also be calculated from \eqref{eq:sigma} directly by noting

$$
\Gamma(N,V,E) = \Sigma(N,V,E+\Delta) - \Sigma(N, V, E) = \pdv{\Sigma}{E}\Delta,
$$

and calulate the derivative of $\Sigma$ with respect to $E$ directly.

Using Stirlings formula $\ln (N!) = N\ln N - N$ for large $N$, we can now calculate

$$
\begin{align}
\ln \Sigma = N \ln\qty[\frac{V}{(2\pi\hbar)^3}\qty(\frac{4\pi mE}{3N})^{3/2}] + \frac{3N}{2},
\end{align}
$$

and

$$
\begin{align}
\ln \Gamma = N \ln\qty[\frac{V}{(2\pi\hbar)^3}\qty(\frac{4\pi mE}{3N})^{3/2}] + \frac{3N}{2}
    + \ln \qty(\frac{3N}{2}) + \ln \qty(\frac{\Delta}{E}).
\end{align}
$$

When the number of particles $N$ is large, $\ln N/N\ra 0$. The last
term in the above equation is also negligible. Therefore, in practice, we have

$$
\begin{align}
S = k_B\ln \Gamma \approx k_B \ln \Sigma.
\end{align}
$$

Note that this is generally ture for any system with large $N$. What this tells
us is that there are an overwhelmingly large number of states around energy $E$
such that it does not matter whether we count the states around $E$ or all
states from energy $0$ to $E$.

The entropy of an ideal gas is therefore given by

$$
\begin{align}\label{eq:wrong-s}
S = N k_B\ln\qty[\frac{V}{(2\pi\hbar)^3}\qty(\frac{4\pi mE}{3N})^{3/2}] + \frac{3}{2}Nk_B.
\end{align}
$$

This is actually ***incorrect***! From thermodynamics, the entropy should be an
extensive property of a system, but the $\ln V$ term renders this untrue.

Even though this expression is not entirely correct, it does give us the
correct relationship between temperature and energy. Using

$$
\qty(\pdv{S}{U})_{N,V} =\frac{1}{T} = Nk_B\frac{1}{U^{3/2}}\frac{3}{2}U^{1/2} = \frac{3}{2}\frac{Nk_B}{U},
$$

we have

$$
\begin{align}\label{eq:u-t}
u = \frac{U}{N} = \frac{3}{2}k_BT.
\end{align}
$$

Thus, the entropy \eqref{eq:wrong-s} can be written in terms of temperature

$$
\begin{align}\label{eq:wrong-s-t}
S = N k_B\ln\qty[\frac{V}{(2\pi\hbar)^3}\qty(2\pi mk_B T)^{3/2}] + \frac{3}{2}Nk_B.
\end{align}
$$

## Gibbs Paradox and the Correct Boltzman Counting
Let us now consider the change in entropy of mixing two ideal gases at constant
temperature. Let's first rewrite $S$ as

$$
\begin{align}\label{eq:s-ln-v-mixing}
S = N k_B\ln V + Nk_B\ln\qty[\frac{1}{(2\pi\hbar)^3}\qty(2\pi mk_B T)^{3/2}] + \frac{3}{2}Nk_B.
\end{align}
$$

Before mixing the two gases each occupies volumes $V_1$ and $V_2$, with numbers
of particles $N_1$ and $N_2$, respectively. If we are mixing two different gases, there mass
$m$ will also be different. After mixing, we have $N = N_1 + N_2$ particles
occupying the volume $V = V_1 + V_2$.

The change in entropy after mixing is

$$
\begin{align}
\Delta S &= (N_1 + N_2) k_B\ln V - N_1 k_B\ln V_1 - N_2 k_B\ln V_2 \notag \\
    &= N_1 k_B\ln\frac{V}{V_1} + N_2 k_B\ln\frac{V}{V_2}, \label{eq:ds-mixing}
\end{align}
$$

where the last two terms in \eqref{eq:s-ln-v-mixing} do not contribute to the
change in entropy. This expression is correct if the two gases are different.

Now consider mixing of two gases at constant temperature with the same initial
pariticle density, $N_1/V_1 = N_2/V_2 = (N_1+N_2)/V$. The change in the total
entropy can be rewritten as

$$
\begin{align}\label{eq:ds-same-density}
\Delta S &= (N_1 + N_2) k_B\ln (N_1 + N_2) - N_1 k_B\ln N_1 - N_2 k_B\ln N_2.
\end{align}
$$

This again is fine if the two gases are different. If the two gases are the
same, this process should be reverseible since we can reinsert the wall to
return to the system before mixing. Looking at \eqref{eq:ds-same-density},
it seems that we can fix the problem if we add an additional $-N\ln N$ term to
the entroy, which corresponds to a factor of $N!$ reduction to $\Gamma$ (or
$\Omega$).

In deriving the expression for $\Gamma$, we have implicitly assumed that
the particles are ***distinguishable***, but from quantum mechanics we know
that this is not true. Consider two particles in an ideal gas. Assuming all
other particles are in some fixed states, the state with $\mb{n}_1 = (1, 1, 1)$
and $\mb{n}_2 = (2, 1, 2)$ will be different from the state with
$\mb{n}_1 = (2, 1, 2)$ and $\mb{n}_2 = (1, 1, 1)$ in our previous counting.
In reality, there is no way to tell these two states apart.

Another way to think about distinguishability is to consider the mixing problem
with the same gas. If the particles were distinguishable, after reinserting
the partition, we would have different particles in the two partitions. This
would mean that the mixing of the same gas is irreversible!

From the above discussion, we see that we have overcounted the number of
microstates for an ideal gases. To correct it, we divide $\Gamma$ by a factor
of $N!$, the number of permutations of the $N$ particles. This is the correct
Boltzmann counting, and is the correct counting of states at high
temperature[^counting].

[^counting]: To correctly count the number of microstates, we also need to
    consider the nature of the particles - whether they are bosons or fermions.
    The type of particles sets the limitation of how many particles can be in
    the same degenerate states, which leads to the correct counting of states
    even at low temperatures. The Boltzmann counting assumes that the particles
    each occupies a different state, which is the correct approximation for
    both bosons or fermions at high temperature.

Adding this factor to $\Gamma$ and $\Sigma$, we have the correct numbers of
microstates

$$
\begin{align}\label{eq:corrected-gamma}
\Gamma(N,V,E;\Delta) =\frac{3N}{2}\frac{1}{N!}\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!}\frac{\Delta}{E}
\end{align}
$$

and

$$
\begin{align}\label{eq:corrected-sigma}
\Sigma(N, V, E) =\frac{1}{N!}\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!}.
\end{align}
$$

The correct expression for the entropy of an ideal gas is

$$
\begin{align}\label{eq:correct-s}
\boxed{
S = N k_B\ln\qty[\frac{V}{(2\pi\hbar)^3N}\qty(\frac{4\pi mU}{3N})^{3/2}] + \frac{5}{2}Nk_B,
}
\end{align}
$$

or in terms of temperature

$$
\begin{align}\label{eq:correct-s-t}
\boxed{
S = N k_B\ln\qty[\frac{V}{(2\pi\hbar)^3N}\qty(2\pi mk_B T)^{3/2}] + \frac{5}{2}Nk_B.
}
\end{align}
$$

Note that we have used \eqref{eq:u-t}, which remains valid even with the
correction to the enrtopy. Equation \eqref{eq:correct-s} (or equation \eqref{eq:correct-s-t})
is called the ***Sackur–Tetrode equation***, and has been experimentally
verified as the coorect expression for the entropy of an ideal gas at high
temperatures.

Going back to the Gibbs paradox. With the correct expression for the entropy
of mixing of the same gas is now

$$
\begin{align}\label{eq:correct-ds-same-gas}
\Delta S &= (N_1 + N_2) k_B\ln \frac{V_1 + V_2}{N_1 + N_2} - N_1 k_B\ln \frac{V_1}{N_1} - N_2 k_B\ln \frac{V_2}{N_2},
\end{align}
$$

which is indeed zero when the densities of the gases are the same. Note that
for the mixing of two different gases, we will instead have

$$
\begin{align}\label{eq:correct-ds-diff-gases}
\Delta S &= N_1 k_B\ln\frac{V}{N_1} + N_2 k_B\ln\frac{V}{N_2} - N_1 k_B\ln \frac{V_1}{N_1} - N_2 k_B\ln \frac{V_2}{N_2},
\end{align}
$$

so \eqref{eq:ds-mixing} and \eqref{eq:ds-same-density} remain valid.

## Classical Ideal Gas
For a classical microcanonical ensemble of an ideal gas, the Hamiltonain is
given by

$$
\begin{align}
\ham = \sum_i^{3N}\frac{p_i^2}{2m}.
\end{align}
$$

From the [previous section](#dimensionless-probabiliy-density-function), we know that
we just need to calculate $\Gamma$ through \eqref{eq:micro-gamma}. Using
the above Hamiltonian, we have

$$
\Gamma = \frac{1}{N!}\qty[\frac{V}{(2\pi\hbar)^3}]^N\underset{E\leq \sum_i^{3N}\frac{p_i^2}{2m} \leq E + \Delta}{\int\cdots\int_{-\infty}^{\infty}} d^{3N}p,
$$

where the we have carried out the trivial integrals over the coordinates in the
factor $V^N$ and included the factor $\frac{1}{N!}$ to correct for
indistinguishability. This is exactly the same integral as in the previous section
except the integraion is now over the full sphere instead of over only the positive
hyperoctant. Therefore we have

$$
\begin{align}
\Gamma(N,V,E;\Delta) =\frac{3N}{2}\frac{1}{N!}\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!}\frac{\Delta}{E}
\end{align}
$$

or if we choose to integrate over the entire sphere

$$
\begin{align}
\Sigma(N, V, E) =\frac{1}{N!}\qty[\frac{V}{(2\pi\hbar)^3}]^N \frac{(2\pi mE)^{3N/2}}{\qty(\frac{3N}{2})!}.
\end{align}
$$

This confirms that our choice of $C$ in the [previous section](#classical-microcanonical-ensemble)
is indeed the correct choice, and it gives us consistent results between
quantum statistics and classical statistics.

## Thermodynamic Propereties of an Ideal Gas
Having calculated the correct number of microstates $\Gamma$ (and thus the
entropy $S$) for an ideal gas using both quantum statistics and classical
statistics, let us now calculate all the other thermodynamic quantities

The entropy of an ideal gas is given by the Sackur–Tetrode equation

$$
\begin{align}
S = N k_B\ln\qty[\frac{V}{(2\pi\hbar)^3N}\qty(\frac{4\pi mU}{3N})^{3/2}] + \frac{5}{2}Nk_B,
\end{align}
$$

or

$$
\begin{align}\label{eq:s-t}
S = N k_B\ln\qty[\frac{V}{(2\pi\hbar)^3N}\qty(2\pi mk_B T)^{3/2}] + \frac{5}{2}Nk_B.
\end{align}
$$

The energy-temperature relation is calculated through

$$
\qty(\pdv{S}{U})_{N,V} =\frac{1}{T} = Nk_B\frac{1}{U^{3/2}}\frac{3}{2}U^{1/2} = \frac{3}{2}\frac{Nk_B}{U},
$$

or

$$
\begin{align}
u = \frac{U}{N} = \frac{3}{2}k_BT
\end{align}
$$

and

$$
\begin{align}\label{eq:u-n-k-t}
U = \frac{3}{2}Nk_BT = \frac{3}{2}nRT,
\end{align}
$$

The specific heat at constant volume is

$$
\begin{align}
C_V = \qty(\pdv{U}{T})_{N,V} = \frac{3}{2}Nk_B = \frac{3}{2}nR.
\end{align}
$$

where $n=N/N_A$ is the number of moles, $R=N_Ak_B$ is the universal gas constant,
and $N_A$ is the Avogadro constant.

Inverting the expression for entropy, we have the internal energy

$$
\begin{align}\label{eq:u-s}
U = \frac{3(2\pi\hbar)^2N^{5/3}}{4\pi m V^{2/3}}\exp\qty(\frac{2S}{3Nk_B} - \frac{5}{3}).
\end{align}
$$

The thermodynamic pressure is

$$
\begin{align}\label{eq:p-u-v}
P = -\qty(\pdv{U}{V})_{N,S} = \frac{2}{3}\frac{U}{V},
\end{align}
$$

or, using \eqref{eq:u-n-k-t}

$$
\begin{align}
PV = Nk_BT = nRT.
\end{align}
$$

The enthalpy is

$$
\begin{align}
H = U + PV = \frac{5}{2}k_BT = \frac{5}{2}nRT,
\end{align}
$$

and so the specific heat at constant temperature is

$$
\begin{align}
C_P = \qty(\pdv{H}{T})_{N,P} = \frac{5}{2}Nk_B = \frac{5}{2}nR.
\end{align}
$$

We thus have the specific heat ratio

$$
\begin{align}
\gamma = \frac{C_P}{C_V} = \frac{5}{3}.
\end{align}
$$

The chemical potential is

$$
\begin{align}
\mu = \qty(\pdv{U}{N})_{V,S} = \frac{5}{3}\frac{U}{N} - \frac{2}{3}\frac{SU}{N^2k_B},
\end{align}
$$

or, on substituting $U$ and $S$ as functions of temperature

$$
\begin{align}
\mu = k_B T \ln\qty{\frac{N}{V}\qty[\frac{(2\pi\hbar)^2}{2\pi mk_B T}]^3}.
\end{align}
$$

The Gibbs free energy is just $\mu N$

$$
\begin{align}
G = Nk_B T \ln\qty{\frac{N}{V}\qty[\frac{(2\pi\hbar)^2}{2\pi mk_B T}]^3}.
\end{align}
$$

The Helmholtz free energy is $F = U - TS = G - PV$

$$
\begin{align}
F = Nk_B T\qty( \ln\qty{\frac{N}{V}\qty[\frac{(2\pi\hbar)^2}{2\pi mk_B T}]^3} - 1).
\end{align}
$$

The Landau free energy, or the grand potential is

$$
\begin{align}
\Phi = -PV = -Nk_BT
\end{align}
$$

For isothermal processes, from \eqref{eq:s-t} we have the change in entropy

$$
\begin{align}
S_f - S_i = Nk_B\ln\frac{V_f}{V_i}.
\end{align}
$$

For adiabatic processes, \eqref{eq:u-s} says $U$ varies as $V^{-2/3}$, and
so $P$ varies as $V^{-5/3}$, or


$$
\begin{align}
PV^\gamma = \text{constant}.
\end{align}
$$

Using $PV\propto T$, we can also write

$$
\begin{align}
TV^{\gamma -1} = \text{constant}.
\end{align}
$$

## Classical Phase Space and Quantum States
So far, we have used the factor $(2\pi\hbar)^{3N}$ to correct for the
units from phase-space volume to number of states, but how do we know that
this is correct?

We can in fact use a couple of simple examples to convince us that this is
the correct choice. Since it is difficult to visualize phase space of more
than one dimension, we will use only one-dimensional examples here.

**Example.** A one-dimensional harmonic oscillator.

The enery of quantum harmonic oscillator is given by

$$
\begin{align}\label{eq:e-ho-quantum}
E = \hbar\omega\qty(n + \frac{1}{2}).
\end{align}
$$

For a classical harmonic oscillator the hamiltomian is given by

$$
\ham = \frac{p^2}{2m}+\frac{1}{2}m\omega^2x^2.
$$

For a fixed energy, the phase-space trajectory is given by

$$
\frac{x^2}{\qty( \sqrt{\frac{2E}{m\omega^2}} )^2} + \frac{p^2}{\qty(\sqrt{2mE})^2} = 1,
$$

which is an ellipse of area

$$
\begin{align}
\frac{2\pi E}{\omega}.
\end{align}
$$

Substituting \eqref{eq:e-ho-quantum} into the above, we have

$$
\begin{align}
\frac{2\pi E}{\omega} = 2\pi\hbar\qty(n + \frac{1}{2}).
\end{align}
$$

The area (or volume in higher dimensions) increases by a factor of $2\pi\hbar$
as we increase $n$ by 1. In other words, the phase-space volume corresponding
to one quantum state is just $h=2\pi\hbar$ for a one-dimensional harmonic
oscillator!
<span style="float:right;">$\blacksquare$</span>


**Example.** A one-dimensional particle in a box.

The energy of a quantum-mechanical particle in a box of lengh $L$ is

$$
\begin{align}\label{eq:p-in-box}
E = \frac{\pi^2\hbar^2n^2}{2mL^2}.
\end{align}
$$

We can think of the classical version of this as a particle bouncing back and
forth in between two walls. Assuming the walls are perfectly rigid, when
the particle moves to the right we have momentum $p$, and as the particle hits
the wall, it moves to the left with momentum $-p$.

Using $p=\sqrt{2mE}$, the phase-space volume is

$$
\begin{align}
2p \times L = 2\sqrt{2mE}L.
\end{align}
$$

Substituting \eqref{eq:p-in-box} into the above, we have

$$
\begin{align}
2\sqrt{2mE}L = 2\pi\hbar n.
\end{align}
$$

Again, the phase-space volume corresponding to one quantum state is $h=2\pi\hbar$!
<span style="float:right;">$\blacksquare$</span>

The two examples above should convince us that the phase-space volume
corresponding to a quantume state is just $(2\pi\hbar)^3$ for one particle.
For a system of $N$ particles, we therefore have volume $(2\pi\hbar)^{3N}$
per state. Accounting for indentical particles, we thus have

$$
d\Gamma = \frac{d^{3N}qd^{3N}p}{N!(2\pi\hbar)^{3N}}.
$$

---
## Footnotes
* Footnotes
{:footnotes}
---
## References

{% bibliography --cited %}
---
[Previous Page](#){: .btn }
[Next Page](#){: .btn }
