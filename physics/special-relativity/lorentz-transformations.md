---
layout: default_math
title: Lorentz Transformations
nav_order: 2
grand_parent: Physics
parent: Special Relativity
---

# Lorentz Transformations

We now find the transformation under which intervals are invariant.

In regular three-dimensional, we know that the transformations that preserve
the length $x^2+y^2+z^2$ are rotations of the coordinates.
Similarly, in four-dimensional spacetime, we will see that the interval
is invariant under four-dimensional "rotations". As in three dimensions,
rotations in four-dimensions can be decomposed into rotations in the
$tx$, $ty$, $tz$, $xy$ $yz$ $zx$ planes. Rotations in the last three planes
are just regular three-dimensional rotations. For simplicity we consider
only rotations in the $tx$ plane and assume that at $t=t'=0$ the origins
of the two frames $K$ and $K'$ coincide, and $K'$ is moving with respect to
$K$ along the $x$-axis with a constant velocity $V$. We will make use
of the following identities for hyperbolic functions:

$$
\begin{align}
\label{eq:hi-1}
\cosh^2\zeta-\sinh^2\zeta=1,\\
\label{eq:hi-2}
\cosh\zeta=\frac{1}{\sqrt{1-\tanh^2\zeta}},\\
\label{eq:hi-3}
\sinh\zeta=\frac{\tanh\zeta}{\sqrt{1-\tanh^2\zeta}}.
\end{align} 
$$

Since the relative motion between the frames is only in the $x$-direction,
we only need to consider transformations that preserve $c^2t^2-x^2$.
The most general from of such a transformation is

$$
\begin{align}
\label{eq:four-rot-t}
ct=ct'\cosh\zeta+x'\sinh\zeta,\\
\label{eq:four-rot-x}
x=ct'\sinh\zeta+x'\cosh\zeta.
\end{align}
$$

It can be easily verified that $c^2t^2-x^2=c^2t'^2-x'^2$ from
Eq. \eqref{eq:hi-1}. We can also write $x'$ and $t'$ in terms of $x$ and $t$

$$
\begin{align}
ct'=ct\cosh\zeta-x\sinh\zeta,\\
x'=-ct\sinh\zeta+x\cosh\zeta.
\end{align}
$$

To find out the relation between this "angle" $\zeta$ and the velocity,
we note that at time $t$ in the origin of $K'$ is moves to $x=Vt$
as observed in $K$. However, in the $K'$ frame the origin is still $x'=0$.
Setting $x'=0$ in Eqs. \eqref{eq:four-rot-t} and \eqref{eq:four-rot-x}, we find

$$
\begin{align}
\tanh\zeta=\frac{x}{ct}=\frac{V}{c}.
\end{align}
$$

We see that the angle $\zeta$ is a measure of velocity and it goes
to infinity when $V\ra c$. It is called the ***boost parameter***
or the ***rapidity***.

From Eqs. \eqref{eq:hi-2} and Eqs. \eqref{eq:hi-3}, we obtain

$$
\begin{align}
\cosh\zeta=\ddfrac{1}{\sqrt{1-\frac{V^2}{c^2}}},\\
\sinh\zeta=\ddfrac{\frac{V}{c}}{\sqrt{1-\frac{V^2}{c^2}}}.
\end{align}
$$

Thus, we have the ***Lorentz transformation*** form $K$ to $K'$

$$
\begin{align}
t'&=\ddfrac{ t-\frac{Vx}{c^2}}{\sqrt{1-\frac{V^2}{c^2}}},\\
x'&=\ddfrac{x-Vt}{\sqrt{1-\frac{V^2}{c^2}}},\\
y'&=y,\\
z'&=z,
\end{align}
$$

and the inverse transformation from $K'$ to $K$

$$
\begin{align}
t&=\ddfrac{ t'+\frac{Vx'}{c^2}}{\sqrt{1-\frac{V^2}{c^2}}},\\
x&=\ddfrac{x'+Vt'}{\sqrt{1-\frac{V^2}{c^2}}},\\
y&=y',\\
z&=z'.
\end{align}
$$

If we write $ct$ in place of $t$ and introduce the factor $\beta=V/c$
and the Lorentz factor

$$
\begin{align}
\gamma=\ddfrac{1}{\sqrt{1-\frac{V^2}{c^2}}}=\frac{1}{\sqrt{1-\beta^2}},
\end{align}
$$

we can rewrite the Lorentz transformations as

$$
\begin{align}
ct'&=\gamma (ct-\beta x),\\
x'&=\gamma (x-\beta ct),\\
y'&=y,\\
z'&=z,
\end{align}
$$

and the inverse transformation as

$$
\begin{align}
ct&=\gamma (ct'+\beta x'),\\
x&=\gamma (x'+\beta ct'),\\
y&=y',\\
z&=z'.
\end{align} 
$$

In matrix form we have

$$
\begin{align}
\begin{pmatrix}
ct' \\
x' \\
y' \\
z' 
\end{pmatrix}=
\begin{pmatrix}
\gamma & -\gamma\beta & 0 & 0\\
-\gamma\beta & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
ct \\
x \\
y \\
z 
\end{pmatrix},
\end{align} 
$$

and

$$
\begin{align}
\begin{pmatrix}
ct \\
x \\
y \\
z 
\end{pmatrix}=
\begin{pmatrix}
\gamma & \gamma\beta & 0 & 0\\
\gamma\beta & \gamma & 0 & 0\\
0 & 0 & 1 & 0\\
0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
ct' \\
x' \\
y' \\
z' 
\end{pmatrix},
\end{align} 
$$

If we let $x^0=ct$, $x^1=x$, $x^2=y$, $x^3=z$, and similarly in the primed
frame, we can rewrite the Lorentz transformation as

$$
\begin{align}
x^{\mu'}=\Lambda^{\mu'}{}_\nu x^\nu,\quad x^{\nu}=\Lambda^\nu{}_{\mu'} x^{\mu'},
\end{align}
$$

where the primed indices denote components in the primed frame.
The components $x^\mu$ define a ***four-vector*** $\vec{\mb{x}}$,
or in this case the ***four-position***. 

We now generalize the Lorentz transformation we derived for a
general relative velocity $\mb{V}$ between $K$ and $K'$. Again, we can write

$$
\begin{align}
\mbg{\beta}=\frac{\mb{V}}{c},\quad \gamma=\frac{1}{1-\beta^2}.
\end{align}
$$

If we decompose the position vector into components parallel to the
velocity and components perpendicular to the velocity

$$
\begin{align}
\mb{r}=\mb{r}_\parallel+\mb{r}_\perp,\quad \mb{r}'=\mb{r}_\parallel'+\mb{r}_\perp',
\end{align}
$$

we have the transformation

$$
\begin{align}
ct'&=\gamma(ct-\mbg{\beta}\cdot\mb{r}_\parallel),\\
\mb{r}_\parallel'&=\gamma(\mb{r}_\parallel-\mbg{\beta} ct),\\
\mb{r}_\perp'&=\mb{r}_\perp.
\end{align}
$$

The parallel and perpendicular components can be expressed as

$$
\begin{align}
\mb{r}_\parallel=(\mb{r}\cdot\mb{n})\mb{n},\quad \mb{r}_\perp=\mb{r}-(\mb{r}\cdot\mb{n})\mb{n},
\end{align}
$$

where $\mb{n}$ is the unit vector in the $\mb{V}$ direction. Expressing
$\mb{n}$ in terms of $\mbg{\beta}$ we obtain the Lorentz transformation
for an arbitrary $\mb{V}$

$$
\begin{align}
ct'&=\gamma(ct-\mbg{\beta}\cdot\mb{r}),\\
\mb{r}'&=\mb{r}+\frac{\gamma-1}{\beta^2}(\mb{r}\cdot\mbg{\beta})\mbg{\beta}-\gamma\mbg{\beta}ct,
\end{align}
$$

or in matrix form

$$
\begin{align}\label{eq:gen-lt}
\begin{pmatrix}
ct' \\
x' \\
y' \\
z' 
\end{pmatrix}=
\begin{pmatrix}
\gamma & -\gamma\beta_x & -\gamma\beta_y & -\gamma\beta_z\\
-\gamma\beta_x & 1+(\gamma-1)\frac{\beta_x^2}{\beta^2} & (\gamma-1)\frac{\beta_x\beta_y}{\beta^2} & (\gamma-1)\frac{\beta_x\beta_z}{\beta^2}\\
-\gamma\beta_y & (\gamma-1)\frac{\beta_y\beta_x}{\beta^2} & 1+(\gamma-1)\frac{\beta_y^2}{\beta^2} & (\gamma-1)\frac{\beta_y\beta_z}{\beta^2}\\
-\gamma\beta_z & (\gamma-1)\frac{\beta_z\beta_x}{\beta^2} & (\gamma-1)\frac{\beta_z\beta_y}{\beta^2} & 1+(\gamma-1)\frac{\beta_z^2}{\beta^2}
\end{pmatrix}
\begin{pmatrix}
ct \\
x \\
y \\
z 
\end{pmatrix}.
\end{align}
$$

Similarly, for the inverse transformation can be obtained by changing
the sign of $\mbg{\beta}$:

$$
\begin{align}
ct&=\gamma(ct'+\mbg{\beta}\cdot\mb{r}'),\\
\mb{r}&=\mb{r}'+\frac{\gamma-1}{\beta^2}(\mb{r}'\cdot\mbg{\beta})\mbg{\beta}+\gamma\mbg{\beta}ct',
\end{align}
$$

or in matrix form

$$
\begin{align}
\begin{pmatrix}
ct \\
x \\
y \\
z 
\end{pmatrix}=
\begin{pmatrix}
\gamma & \gamma\beta_x & \gamma\beta_y & \gamma\beta_z\\
\gamma\beta_x & 1+(\gamma-1)\frac{\beta_x^2}{\beta^2} & (\gamma-1)\frac{\beta_x\beta_y}{\beta^2} & (\gamma-1)\frac{\beta_x\beta_z}{\beta^2}\\
\gamma\beta_y & (\gamma-1)\frac{\beta_y\beta_x}{\beta^2} & 1+(\gamma-1)\frac{\beta_y^2}{\beta^2} & (\gamma-1)\frac{\beta_y\beta_z}{\beta^2}\\
\gamma\beta_z & (\gamma-1)\frac{\beta_z\beta_x}{\beta^2} & (\gamma-1)\frac{\beta_z\beta_y}{\beta^2} & 1+(\gamma-1)\frac{\beta_z^2}{\beta^2}
\end{pmatrix}
\begin{pmatrix}
ct' \\
x' \\
y' \\
z' 
\end{pmatrix}.
\end{align}
$$

## Transformation of Velocities
We can now derive how velocities transform between different inertial frames.
Consider the case where $K'$ is moving with respect to $K$ with a velocity $V$
along the $x$-direction from the transformation of the coordinates we have

$$
\begin{align}
cdt'&=\gamma (cdt-\beta dx),\\
dx'&=\gamma (dx-\beta cdt),\\
dy'&=dy,\\
dz'&=dz.
\end{align}
$$

From these we obtain

$$
\begin{align}
\frac{dx'}{dt'}&=\ddfrac{dx-\beta cdt}{dt-\frac{\beta}{c} dx}, \notag \\
\frac{dy'}{dt'}&=\ddfrac{dy}{\gamma(dt-\frac{\beta}{c} dx)}, \notag \\
\frac{dz'}{dt'}&=\ddfrac{dz}{\gamma(dt-\frac{\beta}{c} dx)}, \notag
\end{align}
$$

or after dividing both the denominator and the numerator by $dt$

$$
\begin{align}
v_x'&=\ddfrac{v_x-V}{1-\frac{V}{c^2}v_x}, \\
v_y'&=\ddfrac{\sqrt{1-\frac{V^2}{c^2}}v_y}{1-\frac{V}{c^2}v_x},  \\
v_z'&=\ddfrac{\sqrt{1-\frac{V^2}{c^2}}v_z}{1-\frac{V}{c^2}v_x}.
\end{align}
$$

We can write these relation in a more general form

$$
\begin{align}
v_\parallel'&=\ddfrac{v_\parallel-V}{1-\frac{\mb{V}\cdot\mb{v}}{c^2}}, \\
\mb{v}_\perp'&=\ddfrac{\mb{v}_\perp}{\gamma\left (1-\frac{\mb{V}\cdot\mb{v}}{c^2}\right )},
\end{align}
$$

and

$$
\begin{align}
v_\parallel&=\ddfrac{v_\parallel'+V}{1+\frac{\mb{V}\cdot\mb{v}'}{c^2}}, \\
\mb{v}_\perp&=\ddfrac{\mb{v}_\perp'}{\gamma\left (1+\frac{\mb{V}\cdot\mb{v}'}{c^2}\right )},
\end{align}
$$

where $v_\parallel$ and \$\mb{v}_\perp$ are the components of $\mb{v}$
parallel and perpendicular to $\mb{V}$, respectively.

**Exercise.** Consider three inertial frames $K$, $K'$, $K''$, and let
the velocity of $K'$ relative to $K$ be $V_x\mb{e}_x$ and the velocity
of $K''$ relative to $K$ be $V_y\mb{e}_y$.
1. Find the velocity of $K''$
relative to $K'$ observed in the $K'$ frame and the velocity of $K'$
relative to $K''$ observed in $K''$.
2. Write down the Lorentz transformation matrix between $K'$ and $K''$.
3. Calculate the transformation matrix using matrix representation of
Lorentz transformation between frames.
4. Discuss the difference between 2 and 3.

**Solution.**
1. The velocity of $K''$ with respect to $K'$ can be calculated using
    the formulas for velocity transformation. In $K$, the velocity of $K''$
    is $(0,V_y,0)$. If we denote the velocity of $K''$ in the $K'$
    frame by $(V_x',V_y',V_z')$ we find

    $$
    \begin{align}
    V_x'&=-V_x, \\
    V_y'&=\sqrt{1-\frac{V_x^2}{c^2}}V_y,  \\
    V_z'&=0.
    \end{align}
    $$
    Similarly, In $K$, the velocity of $K'$ is $(V_x,0,0)$. Denoting the velocity
    of $K'$ in the $K''$ frame by $(V_x'', V_y'', V_z'')$ we find

    $$
    \begin{align}
    V_x''&=\sqrt{1-\frac{V_y^2}{c^2}}V_x, \\
    V_y''&=-V_y,  \\
    V_z''&=0.
    \end{align}
    $$

    The velocity between $K'$ and $K''$ observed in $K'$ and $K''$ differs
    not just by a sign! However, magnitude of the velocity is the same.

2. The Lorentz matrix is given by Eq. \eqref{eq:gen-lt}. Using the $\gamma'$
    and $\beta'$ for transformation from $K'$ and $K''$, and $\gamma''$ and
    $\beta''$ for transformation between $K''$ and $K'$, we have

    $$
    \begin{align}
    \gamma'=\gamma''=\ddfrac{1}{\sqrt{1-\frac{V_x^2+V_y^2}{c^2}+\frac{V_x^2 V_y^2}{c^4}}}
    =\ddfrac{1}{\sqrt{(1-\frac{V_x^2}{c^2})(1-\frac{V_y^2}{c^2})}}=\gamma_x\gamma_y,
    \end{align}
    $$

    and the components of $\mbg{\beta}'$ and $\mbg{\beta}''$ are

    $$
    \begin{align}
    \beta_x'&=-\frac{V_x}{c}=-\beta_x, \\
    \beta_y'&=\frac{\sqrt{1-\frac{V_x^2}{c^2}}V_y}{c}=\frac{\beta_y}{\gamma_x}, \\
    \beta_z'&=0, \\
    \beta_x''&=\frac{\sqrt{1-\frac{V_y^2}{c^2}}V_x}{c}=\frac{\beta_x}{\gamma_y},  \\
    \beta_y''&=-\frac{V_y}{c}=-\beta_y,\\
    \beta_z''&=0,
    \end{align}
    $$

    and

    $$
    \begin{align}
    \beta'^2=\beta''^2=\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2,
    \end{align}
    $$

    where

    $$
    \begin{align}
    \gamma_x&=\ddfrac{1}{\sqrt{1-\frac{V_x^2}{c^2}}}=\frac{1}{\sqrt{1-\beta_x^2}}, \\
    \gamma_y&=\ddfrac{1}{\sqrt{1-\frac{V_y^2}{c^2}}}=\frac{1}{\sqrt{1-\beta_y^2}}.
    \end{align}
    $$

    Thus we find the transformation matrix from $K'$ to a frame with
    a velocity $\mbg{\beta}'$:

    $$
    \begin{align}
    \Lambda^{\mu''}{}_{\nu'}=
    \begin{pmatrix}
    \gamma_x\gamma_y & \gamma_x\gamma_y\beta_x & -\gamma_y\beta_y & 0\\
    \gamma_x\gamma_y\beta_x & \displaystyle 1+\frac{(\gamma_x\gamma_y-1)\beta_x^2}{\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2} & \displaystyle -\frac{(\gamma_x\gamma_y-1)\beta_x\beta_y}{\gamma_x(\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2)} & 0\\
    -\gamma_y\beta_y & \displaystyle -\frac{(\gamma_x\gamma_y-1)\beta_x\beta_y}{\gamma_x(\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2)} & \displaystyle 1+\frac{(\gamma_x\gamma_y-1)\beta_y^2}{\gamma_x^2(\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2)} & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix},
    \end{align}
    $$

    and similarly from $K''$ to a frame with a velocity $\mbg{\beta}''$

    $$
    \begin{align}
    \Lambda^{\mu'}{}_{\nu''}=
    \begin{pmatrix}
    \gamma_x\gamma_y & -\gamma_x\beta_x & \gamma_x\gamma_y\beta_y & 0\\
    -\gamma_x\beta_x & \displaystyle 1+\frac{(\gamma_x\gamma_y-1)\beta_x^2}{\gamma_y^2(\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2)} & \displaystyle -\frac{(\gamma_x\gamma_y-1)\beta_x\beta_y}{\gamma_y(\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2)} & 0\\
    \gamma_x\gamma_y\beta_y & \displaystyle -\frac{(\gamma_x\gamma_y-1)\beta_x\beta_y}{\gamma_y(\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2)} & \displaystyle 1+\frac{(\gamma_x\gamma_y-1)\beta_y^2}{\beta_x^2+\beta_y^2-\beta_x^2\beta_y^2} & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}.
    \end{align}
    $$

    Note that these matrices are symmetric, corresponding to pure Lorentz boots.
    However, these matrices are *not* the actual Lorentz transformation
    between $K'$ and $K''$!

3. From

    $$
    \begin{align}
    x^{\alpha''}=\Lambda^{\alpha''}{}_\beta x^\beta,\quad x^{\beta}=\Lambda^{\beta}{}_{\gamma'}x^{\gamma'}
    \end{align}
    $$

    we find

    $$
    \begin{align}
    x^{\alpha''}=\Lambda^{\alpha''}{}_\beta\Lambda^{\beta}{}_{\gamma'}x^{\gamma'},
    \end{align}
    $$

    or

    $$
    \begin{align}
    \Lambda^{\alpha''}{}_{\gamma'}=\Lambda^{\alpha''}{}_\beta\Lambda^{\beta}{}_{\gamma'}.
    \end{align}
    $$

    Thus, the transformation matrix from $K'$ to $K''$ is

    $$
    \begin{align}
    \Lambda^{\alpha''}{}_{\gamma'}&=
    \begin{pmatrix}
    \gamma_y & 0 & -\gamma_y\beta_y & 0\\
    0 & 1 & 0 & 0\\
    -\gamma_y\beta_y & 0 & \gamma_y & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}
    \begin{pmatrix}
    \gamma_x & \gamma_x\beta_x & 0 & 0\\
    \gamma_x\beta_x & \gamma_x & 0 & 0\\
    0 & 0 & 1 & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}\\
    &=
    \begin{pmatrix}
    \gamma_x\gamma_y & \gamma_x\gamma_y\beta_x & -\gamma_y\beta_y & 0\\
    \gamma_x\beta_x & \gamma_x & 0 & 0\\
    -\gamma_x\gamma_y\beta_y & -\gamma_x\gamma_y\beta_x\beta_y & \gamma_y & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}.
    \end{align}
    $$

    Similarly, the transformation matrix from $K''$ to $K'$ is

    $$
    \begin{align}
    \Lambda^{\alpha'}{}_{\gamma''}&=
    \begin{pmatrix}
    \gamma_x & -\gamma_x\beta_x & 0 & 0\\
    -\gamma_x\beta_x & \gamma_x & 0 & 0\\
    0 & 0 & 1 & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}
    \begin{pmatrix}
    \gamma_y & 0 & \gamma_y\beta_y & 0\\
    0 & 1 & 0 & 0\\
    \gamma_y\beta_y & 0 & \gamma_y & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}\\
    &=
    \begin{pmatrix}
    \gamma_x\gamma_y & -\gamma_x\beta_x & \gamma_x\gamma_y\beta_y & 0\\
    -\gamma_x\gamma_y\beta_x & \gamma_x & -\gamma_x\gamma_y\beta_x\beta_y & 0\\
    \gamma_y\beta_y & 0 & \gamma_y & 0\\
    0 & 0 & 0 & 1
    \end{pmatrix}.
    \end{align}
    $$

4. The martices in 3. are actual transformation between the two frames
$K'$ and $K''$ but the matrices in 2. are not. This is because two
successive non-collinear Lorentz boots do not equal to a pure boost.
It is equal to a pure boost followed by or preceded by a pure rotation.
The transformation matrices in (b) are thus only for pure Lorentz boosts.
An observer in $K'$ not only sees $K''$ with a Lorentz boost,
but also a rotation of its spatial coordinates. The rotation matrices can
be obtained by multiplying the actual Lorentz transformation matrices by their
respective inverse matrices for pure boosts (or matrices for pure boosts
in the opposite directions).
**Check again! This seems to be valid only for small $\beta_x$ and $\beta_y$.**


## Four-vectors, Tensors, and Differential Forms
The metric tensor is chosen to be
$$
\begin{align}
g_{\mu\nu}=
\begin{pmatrix}
1 & 0 & 0 & 0\\
0 & -1 & 0 & 0\\
0 & 0 & -1 & 0\\
0 & 0 & 0 & -1
\end{pmatrix}.
\end{align} 
$$

\subsection{Four-velocity}
We use bold letters with arrows to denote four-vectors, bold letters with
tildes to denote 1-forms (or covectors). For example, four-velocity
is $\vec{\mb{v}}$ with components $v^\alpha=(\gamma c,\gamma \mb{v})$,
and the 1-form corresponding to the four velocity is $\tilde{\mb{v}}$
with components $v_\alpha=(\gamma c,-\gamma \mb{v})$, where the bold letter
$\mb{v}$ (without any decorations) is the normal three dimensional velocity.


**Exercise.** if $K_1$ is moving relative to $K$ with a velocity $v_x\mb{x}$
and $K_2$ is moving relative to $K$ with a velocity $v_y\mb{y}$, find the
velocity of $K_2$ in the $K_1$ frame. Also find the LT between $K_1$ and
$K_2$ using a) LT between $K-K_1$ and $K-K_2$ b) general LT formula for
an arbitrary velocity.

