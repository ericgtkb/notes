---
layout: default_math
title: The Principle of Relativity
nav_order: 1
grand_parent: Physics
parent: Special Relativity
---

# The Principle of Relativity


## Two Postulates of Special Relativity
1. The laws of physics are the same in all inertial frames.
2. The speed of light is the same in all inertial frames.

The speed of light $c$ is a has the value

$$
\begin{align}
c=299,792,458\quad \text{m/s}. \notag 
\end{align}
$$

in all inertia frames.

## Invertals
The consequence of the two postulates can be seen easily if we consider
two inertial frames $K$ and $K'$. An ***event*** observed in each frame
will be indicated by the position and time at which it occurs in that frame.
Let one event be sending out a signal of light at a spacetime point
($t_1$, $x_1$, $y_1$, $z_1$ in frame $K$ and $t_1'$, $x_1'$, $y_1'$, $z_1'$
in frame $K'$) and event two be the signal reaching another spacetime point
($t_2$, $x_2$, $y_2$, $z_2$ in frame $K$ and $t_2'$, $x_2'$, $y_2'$, $z_2'$
in frame $K'$). In frame $K$, light travels at the speed $c$ so we have

$$
\begin{align}
c^2(t_2-t_1)^2-(x_2-x_1)^2-(y_2-y_1)^2-(z_2-z_1)^2=0.
\end{align}
$$

Since the speed of light is the same in all inertial frame, we have
similarly in $K'$

$$
\begin{align}
c^2(t_2'-t_1')^2-(x_2'-x_1')^2-(y_2'-y_1')^2-(z_2'-z_1')^2=0.
\end{align}
$$

The left hand side of the above equations is called the square of the
spacetime ***interval*** $s_{12}$ (or $s_{12}'$) between the two events.

If we have two events that are close to each other in spacetime coordinates,
not necessarily events connected by a light signal, the square of the
infinitesimal interval between the events is

$$
\begin{align}
ds^2=c^2dt^2-dx^2-dy^2-dz^2
\end{align}
$$

in the $K$ frame. Since if in the $K$ frame we have $ds=0$ then we must
have $ds'=0$ in the $K'$ frame, $ds$ and $ds'$ must be of the same order,
and $ds^2$ and $ds'^2$ must be related by

$$
\begin{align}
ds^2=\lambda ds'^2,
\end{align}
$$

where $\lambda$ is some proportionality constant. From the homogeneity of
space and time, we know that $\lambda$ cannot depend on the coordinates
of spacetime. Since both frames are inertial, $\lambda$ can only depend
on the relative velocity between the two frames. However, because of the
isotropy of space, it also cannot depend on the direction of the velocity.
We thus conclude that $\lambda$ is only a function of the magnitude
the relative velocity.

Now consider three inertial frames $K_1$, $K_2$, and $K_3$.
If $K_2$ is moving at a velocity $\mb{V}_{12}$ relative to $K_1$,
and $K_3$ is moving at a velocity $\mb{V}_{13}$ relative to $K_1$,
then we can write

\footnote{We use capital $V$ to denote velocities
between frames and the lower case $v$ is preserved for particle velocities.}

$$
\begin{align}
ds_1^2=\lambda (V_{12})ds_2^2,\quad ds_1^2=\lambda (V_{13})ds_3^2.
\end{align}
$$

Similarly, let the velocity of the $K_3$ frame relative to the $K_2$ frame
be $\mb{V}_{23}$, we have

$$
\begin{align}
ds_2^2=\lambda (V_{23})ds_3^2.
\end{align}
$$

From the above, we find

$$
\begin{align}
\frac{\lambda (V_{13})}{\lambda (V_{12})}=\lambda (V_{23}).
\end{align}
$$

The left hand side of this equation depends only on the magnitudes
of $\mb{V}_{12}$ and $\mb{V}_{13}$, but the right hand side clearly
depends on the angle between the two velocities. Thus, $\lambda$ must
be a constant 1. We now have for an infinitesimal interval between two events

$$
\begin{align}
ds^2=ds'^2.
\end{align}
$$

Similarly, for finite intervals we have $s=s'$. We thus obtain an important
conclusion that all inertial observers in their respective inertial frames
agree on the the interval between any two events.

An interval between any two events, say event 1 and 2,
can be categorized into one of the three groups:

1. Timelike: if $s_{12}^2>0$.
2. Lightlike: if $s_{12}^2=0$.
3. Spacelike: if $s_{12}^2<0$.

Note that some authors choose a different metric signature and the definition
of intervals may differ by a sign.

For a timelike separation, we can always choose a reference frame where
the two events happen at the same point in space. Since $s_{12}^2$
is the same in all frames, in the frame where the events occur at the same
spatial points we have

$$
\begin{align}
s_{12}^2=c^2(t_2-t_1)^2>0.
\end{align}
$$

Similarly, for a spacelike separation we can always find a frame where
the two events occur at the same time. If we let the temporal separation
be zero we have

$$
\begin{align}
s_{12}^2=-(x_2-x_1)^2-(y_2-y_1)^2-(z_2-z_1)^2<0.
\end{align}
$$

Therefore, for an infinitesimal timelike interval, we can define
the ***proper time*** $d\tau$ as

$$
\begin{align}
c^2d\tau^2=ds^2=c^2dt^2-dx^2-dy^2-dz^2,
\end{align}
$$

or by taking square root,

$$
\begin{align}
d\tau=\frac{ds}{c}.
\end{align}
$$

From this we see that proper time is the time recorded by a clock
in a frame where it is at rest.

