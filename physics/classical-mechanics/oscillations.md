---
layout: default_math
title: Oscillations
nav_order: 5
grand_parent: Physics
parent: Classical Mechanics
---

# Oscillations

## Free Harmonic Oscillators
We consider a particle in a one-dimensional potential $U(x)$. If the particle
is only moving around one of the stable equilibrium position $x_0$, we can
expand the potential energy in terms of $(x-x_0)$

$$
\begin{align}
U(x)=&U(x_0)+U'(x_0)(x-x_0)+\frac{1}{2}U''(x_0)(x-x_0)^2 \notag \\
&+\frac{1}{3!}U'''(x_0)(x-x_0)^3+\cdots.
\end{align}
$$

Since $U(x_0)$ is a local minimum, $U'(x_0)$ must vanish and $U'' (x_0)$ must
be positive. Without loss of generality, letting $U(x_0)=0$ and $x_0=0$ and
writing $U'' (x_0)=k$, the potential energy can now be written as

$$
\begin{align}
U(x)=\frac{1}{2}kx^2,
\end{align}
$$

where we have also neglect contribution from third and higher order derivatives.
These terms will cause anharmonic oscillations and will be discussed later.
The Lagrangian for the system is

$$
\begin{align}
\lag=T-U=\frac{1}{2}m\dot{x}^2-\frac{1}{2}kx^2.
\end{align}
$$

The Lagrange equation of motion is

$$
\begin{align}\label{eq:eom-ho}
m\ddot{x}+kx=0,
\end{align}
$$

or

$$
\begin{align}
\ddot{x}+\omega_0^2 x=0,
\end{align}
$$

where

$$
\begin{align}
\omega_0=\sqrt{\frac{k}{m}}
\end{align}
$$

is the natural frequency of the system.

We can obtain the same equation of motion from the Hamiltonian of the system.
We first calculate the generalized momentum

$$
\begin{align}
p=\pdv{\lag}{\dot{x}}=m\dot{x}.
\end{align}
$$

Then we have the Hamiltonian

$$
\begin{align}
\ham=\dot{x}p-\lag=\frac{p^2}{2m}+\frac{1}{2}kx^2.
\end{align}
$$

The Hamiltonian equations are

$$
\begin{align}
\dot{x}&=\frac{p}{m},\\
\dot{p}&=-kx.
\end{align}
$$

These equations are equivalent to the Lagrange equation of motion \eqref{eq:eom-ho}.

The solution to \eqref{eq:eom-ho} is

$$
\begin{align}
x=c_1\cos\omega_0 t +c_2\sin\omega_0 t,
\end{align}
$$

which can also be written as

$$
\begin{align}\label{eq:sol-ho-cos}
x=A\cos(\omega_0 t-\phi),
\end{align}
$$

where $A$ is called the amplitude of the oscillations and $\phi$ is called
the phase. Since $\cos(\omega_0 t-\phi)=\cos\omega_0 t \cos\phi+\sin\omega_0 t \sin\phi$,
the constants are related by

$$
\begin{align}
A=\sqrt{c_1+c_2},\\
\tan\phi=\frac{c_2}{c_1}.
\end{align}
$$

It is also convenient to express the solution using the complex expression

$$
\begin{align}
x=\Re [Ce^{-i\omega_0 t}],
\end{align}
$$

where $C$ is the complex amplitude of the oscillations. This is equivalent to
\eqref{eq:sol-ho-cos} if we write $C=Ae^{i\phi}$, where

$$
\begin{align}
&A=\sqrt{CC^*}=\sqrt{\Re[C]^2+\Im[C]^2},\\
&\tan\phi=\frac{\Im[C]}{\Re[C]}.
\end{align}
$$

## Forced Harmonic Oscillators
If the system is subject to an external force, we need to include an additional
external potential $U_e(x,t)$ to the Lagrangian. This external potential can
be time dependent. Since we are dealing with small displacements we can
expand $U_e(x,t)$ as

$$
\begin{align}
U_e(x,t)=U_e(0,t)+U'_e(0,t)x+\cdots.
\end{align}
$$

The first term does not affect the equation of motion, and the second term
can be written as $-xF(t)$, where $F(t)=-U'(0,t)$ is the external force. The
Lagrangian for a harmonic oscillator subject to an external force is thus

$$
\begin{align}
\lag=\frac{1}{2}m\dot{x}^2-\frac{1}{2}kx^2+xF(t).
\end{align}
$$

The equation of motion is

$$
\begin{align}\label{eq:eom-fho}
\ddot{x}+\omega_0^2x=\frac{F(t)}{m}.
\end{align}
$$

The solution for $x$ will now include the homogeneous (or complementary)
solution \eqref{eq:sol-ho-cos} and a particular solution, which depends
on the explicit form of $F(t)$.

Now let $F(t)$ be of the form

$$
\begin{align}
F(t)=\Re[F_0 e^{-i\ot}].
\end{align}
$$

The particular solution can be obtained by substitute $x=ce^{-i\ot}$ into
the equation of motion. We thus obtain the complete total solution in
complex form

$$
\begin{align}
x=Ce^{-i\omega_0 t}+\frac{F_0}{m(\omega_0^2-\omega^2)}e^{-i\ot}.
\end{align}
$$

The solution diverges at $\omega=\omega_0$. To obtain a solution for
$\omega=\omega_0$, we rewrite the solution as

$$
\begin{align}
x=C'e^{-i\omega_0 t}+\frac{F_0}{m(\omega_0^2-\omega^2)}(e^{-i\ot}-e^{-i\omega_0 t}),
\end{align}
$$

where $C'=C+\frac{F_0}{m(\omega_0^2-\omega^2)}$. Now we can use L'Hospital's
rule to obtain the solution at resonance[^diverge]

[^diverge]: Technically the first term now diverges since
    $C'\ra \infty$. However, this allows us to gain some physical
    found insights.

$$
\begin{align}
x=C'e^{-i\omega_0 t}+\frac{iF_0}{2m\omega_0}te^{-i\omega_0 t}.
\end{align}
$$

Thus, at resonance, the amplitude grows linearly with time until the small
displacement assumption breaks down.

The particular solution for different form of $F(t)$ and be obtained using
the Fourier-transform method. If we write both sides of \eqref{eq:eom-fho}
in terms of Fourier integrals of the form

$$
\begin{align}
x(t)=\frac{1}{2\pi}\int \tilde{x}(\omega)e^{-i\ot} d\omega,
\end{align}
$$

then in the frequency domain we have the equation

$$
\begin{align}
-\omega^2\tilde{x}(\omega)+\omega_0^2\tilde{x}(\omega)=\frac{\tilde{F}(\omega)}{m}.
\end{align}
$$

We can immediately obtain

$$
\begin{align}
\tilde{x}(\omega)=\frac{\tilde{F}(\omega)}{m(\omega_0^2-\omega^2)}.
\end{align}
$$

From this we can obtain $x(t)$ by taking the inverse Fourier transform.

As an example, if $F(t)=F_0e^{-i\omega_f t}$, we have
$\tilde{F}(\omega)=2\pi F_0\delta(\omega-\omega_f)$. Taking the inverse Fourier
transform we have $x(t)=\frac{F_0}{m(\omega_0^2-\omega_f^2)}e^{-i\omega_f t}$,
as we have before.

## Damped Harmonic Oscillators
The motion of an object under friction, in general, cannot be modeled by
simple mechanics since this involves the conversion of mechanical energy into
heat. However, there exists a class of frictional interaction where the
friction force is approximately proportional to the velocity of the particle,
$F=-b\dot{x}$, where $b$ is called the damping coefficient. Adding this force
into the equation of motion we have

$$
\begin{align}
m\ddot{x}+kx=-b\dot{x},
\end{align}
$$

or, writing $\kappa=b/2m$,

$$
\begin{align}
\ddot{x}+2\kappa \dot{x}+\omega_0^2x=0.
\end{align}
$$

The general solution of this equation takes the form $e^{\zeta t}$.
Substituting $x=e^{\zeta t}$ into the equation we find

$$
\begin{align}
\zeta=-\kappa\pm\sqrt{\kappa^2-\omega_0^2}.
\end{align}
$$

Depending on the value of $\kappa$ the motion can be characterized into
three categories:

1. Underdamping: $\kappa<\omega_0$.
2. Critical damping: $\kappa=\omega_0$.
3.  Overdamping: $\kappa>\omega_0$.

For underdamped oscillations the solution is given by

$$
\begin{align}
x=c_1e^{-\kappa t}e^{i\sqrt{\omega_0^2-\kappa^2} t}+c_2e^{-\kappa t}e^{-i\sqrt{\omega_0^2-\kappa^2} t}.
\end{align}
$$

We can again rewrite this as

$$
\begin{align}
x=\Re \left [Ce^{-\kappa t}e^{-i\sqrt{\omega_0^2-\kappa^2} t}\right ],
\end{align}
$$

or

$$
\begin{align}
x=Ae^{-\kappa t}\cos \left (\sqrt{\omega_0^2-\kappa^2} t-\phi \right ),
\end{align}
$$

where $C$ is a complex number and $A$ and $\phi$ are real numbers.
This result is similar to \eqref{eq:sol-ho-cos} except now the system
oscillates at a lower frequency $\sqrt{\omega_0^2-\kappa^2}$ and the motion
decays with the factor $e^{-\kappa t}$.

If the damping coefficient is much smaller than the natural frequency
$\kappa\ll\omega_0$, the solution is approximately

$$
\begin{align}
x=Ae^{-\kappa t}\cos(\omega_0 t-\phi).
\end{align}
$$

The system oscillates at its natural frequency and the amplitude slowly decays.

For critical damping $\kappa=\omega_0$ the general solution is

$$
\begin{align}
x=c_1e^{-\kappa t}+c_2te^{-\kappa t}.
\end{align}
$$

Both terms decay with the same exponential factor $e^{-\kappa t}$ in this
case and the system exhibits no oscillatory behavior.

For a overdamped oscillator, the solution is

$$
\begin{align}
x=c_1e^{-\left (\kappa-\sqrt{\kappa^2-\omega_0^2}\right ) t}+c_2e^{-\left (\kappa+\sqrt{\kappa^2-\omega_0^2}\right ) t}.
\end{align}
$$

We see that both terms in the solution decay in time and the second term
decays faster than the first term. Thus the motion decays with the decay
rate $\kappa-\sqrt{\kappa^2-\omega_0^2}$.

We note that the motion decays most rapidly for the critical damped case.

Before ending this section, we note that the friction force can be written as
the derivative of a function $\Phi$:

$$
\begin{align}\label{eq:fric-force}
F = -\pdv{\Phi}{\dot{x}},
\end{align}
$$

where $\Phi$ is a quadratic function of $X$

$$
\begin{align}
\Phi = \frac{1}{2}b\dot{x}^2
\end{align}
$$

called the the ***Rayleigh dissipation function***.

In Lagrange's equation, we must include the force term \eqref{eq:fric-force}

$$
\begin{align}
\pdv{t}\qty(\pdv{\lag}{\dot{x}}) - \pdv{\lag}{x} = -\pdv{\Phi}{\dot{x}}.
\end{align}
$$

We can then calculate rate change of energy through

$$
\begin{align*}
\dot{E} &= \dv{t}\qty(\dot{x}\pdv{\lag}{\dot{x}} - \lag) \\
    &= \qty[\ddot{x}\pdv{\lag}{\dot{x}} + \dot{x}\dv{t}\qty(\pdv{\lag}{\dot{x}})
    -\dot{x}\pdv{\lag}{x} -\ddot{x}\pdv{\lag}{\dot{x}}] \\
    &= \dot{x}\qty[\dv{t}\qty(\pdv{\lag}{\dot{x}}) -\pdv{\lag}{x}] \\
    &=-\dot{x}\pdv{\Phi}{\dot{x}}.
\end{align*}
$$

From the definition of dissipation function, we find

$$
\begin{align}\label{eq:e-diss}
\dot{E} = -2\Phi,
\end{align}
$$

The rate of enery dissipation is just $2\Phi$. Note that this relation
holds even when we have multiple degrees of freedom. Since $\Phi$ is a
quadratic function of the $\dot{x}_i$s, from Euler's theorem on
[homogeneous function]({% link mathematics/miscellaneous/homogeneous-function.md %}),
we have $\sum_i\dot{x}_i \pdv{\Phi}{\dot{x}_i} = 2\Phi$.


## Forced Harmonic Oscillators with Damping
The equation of a forced harmonic oscillator in the presence of damping is

$$
\begin{align}
\ddot{x}+2\kappa \dot{x}+\omega_0^2x=\frac{F(t)}{m}.
\end{align}
$$

The homogeneous solution of the equation has been discussed in the previous
section. In all cases, as $t\ra\infty$ all terms in the homogeneous
solution die out. We are thus only interested in the particular solution
to the equation of motion. We will focus again on the case where

$$
\begin{align}
F(t)=\Re[F_0 e^{-i\ot}].
\end{align}
$$

Assuming the solution takes the form

$$
\begin{align}
x=\Re[Ce^{-i\ot}]
\end{align}
$$

and substitute it into the equation we obtain

$$
\begin{align}
C=\frac{F_0}{m(\omega_0^2-\omega^2-2i\kappa\omega)}.
\end{align}
$$

Writing the solution in the form

$$
\begin{align}
x=A\cos(\ot-\phi),
\end{align}
$$

where $A$ and $\phi$ are real, we find

$$
\begin{align}
&A=\frac{F_0}{m\sqrt{(\omega_0^2-\omega^2)^2+4\kappa^2\omega^2}},\\
&\tan\phi=\frac{2\kappa\omega}{\omega_0^2-\omega^2}.
\end{align}
$$

Taking the derivative of $A$ with respect to $\omega$, we find that
at $\omega=\sqrt{\omega_0^2-2\kappa^2}$ the amplitude has its maximum

$$
\begin{align}
A_{max}=\frac{F_0}{2m\sqrt{\kappa^2(\omega_0^2-\kappa^2)}}.
\end{align}
$$

When the driving frequency passes through $\omega_0$ there is a phase shift
of $\phi$ from 0 through $\pi/2$ to $\pi$.

Now we examine the behavior of the solution when $\kappa\ll\omega_0$. As we
will see later, the behavior of the solution when $\kappa\ll\omega_0$ is only
important near the resonance frequency $\omega_0$. Thus we can also write
$\omega=\omega_0+\epsilon$, where $\epsilon$ is small compared to $\omega_0$
(about the same order as $\kappa$). Then, we have
$\omega_0^2-\omega^2\approx(\omega_0-\omega)(\omega_0+\omega)\approx
-2\epsilon\omega_0=2\omega_0(\omega_0-\omega)$,
and $\kappa\omega\approx\kappa\omega_0$, so

$$
\begin{align}
C=\frac{F_0}{2m\omega_0(\omega_0-\omega-i\kappa)},
\end{align}
$$

and

$$
\begin{align}
&A=\frac{F_0}{2m\omega_0\sqrt{(\omega-\omega_0)^2+\kappa^2}},\\
&\tan\phi=\frac{\kappa}{\omega_0-\omega}.
\end{align}
$$

Although in deriving these approximation we used the smallness of $\epsilon$,
the above equations are valid for a wide range of $\omega$ as long as
$\kappa\ll\omega_0$. In this case the maximum amplitude occurs at
$\omega=\omega_0$ and has the value

$$
\begin{align}
A_{max}=\frac{F_0}{2m\kappa\omega_0}.
\end{align}
$$

In the steady state, the energy dissipation must be balanced by the energy
absorbed by the system from the external source. Thus, the energy absorbed
at a given drive frequency per unit time $I(\omega)$ can be calculated can
be calculated using \eqref{eq:e-diss} or $I=2\langle \Phi \rangle$, where
the angle brackets denote average over the period of oscillation, and $\Phi$
is the Rayleigh dissipation function. For a damped harmonic oscillator,
we have $\Phi=\frac{1}{2}b\dot{x}^2=\kappa m \dot{x}^2$.
Substituting $\dot{x}=\Re[-i\omega Ce^{-i\ot}]$, we have[^average]

[^average]: To take the average of $x^2$, or similarly for $\dot{x}^2$,
    we must take the real part first and calculate

    $$
    \begin{align*}
    x^2&=\Re[Ce^{-i\ot}]^2 \\
        &=\frac{1}{4}(Ce^{-i\ot}+C^*e^{i\ot})^2 \\
        &=\frac{1}{4}(C^2e^{-2i\ot}+C^{*2}e^{2i\ot}+2CC^*).
    \end{align*}
    $$

    The time average of the exponential terms is zero, so we get
    $\langle x^2 \rangle=\frac{1}{2}CC^*$. We can obtain the same result if
    instead we use the cosine (or sine for $\dot{x}$) form of the solution and note
    that the time average of squared cosine  is $\frac{1}{2}$.

$$
\begin{align}
\langle\Phi\rangle&=\frac{1}{2}\kappa m \omega^2 CC^*=\frac{1}{2}\kappa m \omega^2 A^2 \notag \\
	&=\frac{F_0^2\kappa\omega^2}{2m[(\omega_0^2-\omega^2)^2+4\kappa^2\omega^2]},
\end{align}
$$

and

$$
\begin{align}
I(\omega)=\frac{F_0^2\kappa\omega^2}{m[(\omega_0^2-\omega^2)^2+4\kappa^2\omega^2]}.
\end{align}
$$

For $\kappa\ll\omega_0$, this can again be approximated as

$$
\begin{align}
I(\omega)=\frac{F_0^2\kappa}{4m[(\omega-\omega_0)^2+\kappa^2]}.
\end{align}
$$

This is a Lorentzian function centered at $\omega_0$, with a linewidth
$2\kappa$. The General form of a Lorentzian function is

$$
\begin{align}
L(x)=\frac{1}{\pi}\frac{\gamma}{(x-x_0)^2+\gamma^2},
\end{align}
$$

where $x_0$ is the location of the maximum $1/\pi\gamma$, $2\gamma$ is the
full width at half maximum (FWHM), and the integral

$$
\begin{align}
\int_{-\infty}^{\infty}L(x)dx=1.
\end{align}
$$

From this we find

$$
\begin{align}
\int_{-\infty}^{\infty} I(\omega)d\omega=\frac{\pi F_0^2}{4m}.
\end{align}
$$

We have seen that the sharpness of a resonance is determine by $\kappa$.
In many applications it is useful to define the quality factor $Q$ as

$$
\begin{align}
Q=\frac{\omega_0}{2\kappa},
\end{align}
$$

which is a dimensionless quantity. If we write $Q$ as

$$
\begin{align}
Q=\frac{\omega_0}{2\kappa}=2\pi\frac{1/2\kappa}{2\pi/\omega_0}=2\pi\frac{\text{decay time}}{\text{period}},
\end{align}
$$

we see that $Q$ is just $2\pi$ times the number of periods before in the
decay time. Note that here we are talking about the energy decay time
$1/2\kappa$ instead of the amplitude decay time $1/\kappa$. The energy decays
twice as fast as the amplitude.

For a general $F(t)$, we can solve the problem by writing the both sides of
the equation of motion in terms of their Fourier integrals. For each Fourier
components of $x(t)$ we have

$$
\begin{align}
\tilde{x}(\omega)=\frac{\tilde{F}(\omega)}{m(\omega_0^2-\omega^2-2i\kappa\omega)}.
\end{align}
$$

This is sometimes written as

$$
\begin{align}
\tilde{x}(\omega)=\chi(\omega)\tilde{F}(\omega),
\end{align}
$$

where

$$
\begin{align}
\chi(\omega)=\frac{1}{m(\omega_0^2-\omega^2-2i\kappa\omega)}
\end{align}
$$

is called the frequency-dependent susceptibility of the system. Once we find
$\tilde{F}(\omega)$, the solution can be obtained by taking the inverse
Fourier transform of $\tilde{x}(\omega)$.

## Harmonic Oscillators in Phase Space
The harmonic oscillator is one of the most import problem in physics. Let us
now get into more details of the Hamiltonian formulation of it.

The Hamiltonian for a free harmonic oscillator is

$$
\begin{align}
\ham = \frac{p^2}{2m}+\frac{1}{2}m\omega^2x^2,
\end{align}
$$

where we have replaced $k$ by $m\omega^2$, and dropped the subscript $0$ for
the natural frequency.

For a fix energy $E$, the phase space trajectory is given by

$$
\frac{x^2}{\qty( \sqrt{\frac{2E}{m\omega^2}} )^2} + \frac{p^2}{\qty(\sqrt{2mE})^2} = 1,
$$

an ellipse of area

$$
2\pi\frac{E}{\omega}.
$$



TBD

---
## Footnotes
* Footnotes
{:footnotes}
---
[Previous Page](#){: .btn }
[Next Page](#){: .btn }
