---
layout: default_math
title: Elastic Solids
nav_order: 1
grand_parent: Physics
parent: Solid Mechanics
---

# Elastic Solids



## Strain Tensor
Let $\mb{r}$ be the position of a point in the body. After a deformation,
suppose the point is now at $\mb{r}'$. The displacement vector is then
$\mb{u}=\mb{r}'-\mb{r}$, or using tensor notation
($x_1=x$, $x_2=y$, $x_3=z$, and $u_1=u$, $u_2=v$, $u_3=w$) $u_i=x_i'-x_i$.
The coordinates $x_i'$ are functions of coordinates $x_i$, and so are $u_i$

(Lagrangian description? Check!).

The distance between two given points is $dl^2=dx_i^2$  before deformation,
and $dl'^2=dx_i'^2=(dx_i+du_i)^2$ after deformation (the Einstein summation
convention is used). Writing $du_i=(\partial u_i/\partial x_j)dx_j$, we have

$$
\begin{align}
dl'^2=dl^2+2\pdv{u_i}{x_j}dx_i dx_j+\pdv{u_i}{x_j}\pdv{u_i}{x_k}dx_j dx_k.
\end{align}
$$

Since in the second term $i$ and $j$ are all summed over, we can write it
in a symmetrical form
$(\partial u_i/\partial x_j+\partial u_j/\partial x_i)dx_i dx_j$.
Interchanging $i$ and $k$ in the third term, we have

$$
\begin{align}
dl'^2=dl^2+2\varepsilon_{ij}dx_i dx_j,
\end{align}
$$

where

$$
\begin{align}
\varepsilon_{ij}=\frac{1}{2}\qty(\pdv{u_i}{x_j}+\pdv{u_j}{x_i}+\pdv{u_k}{x_i}\pdv{u_k}{x_j} )
\end{align}
$$

is the strain tensor (Lagrangian??). For small deformation 

$$
\begin{align}
\varepsilon_{ij}=\frac{1}{2}\qty(\pdv{u_i}{x_j}+\pdv{u_j}{x_i}).
\end{align}
$$

The change in volume is given by

$$
\begin{align}
dV'=dV(1+\varepsilon_{ii}),
\end{align}
$$

thus the trace of the the strain tensor is just the relative change in volume. In matrix form

$$
\begin{align}
\varepsilon_{ij}=
\begin{pmatrix}
\pdv{u}{x} & \frac{1}{2}\qty(\pdv{u}{y}+\pdv{v}{x}) & \frac{1}{2}\qty(\pdv{u}{z}+\pdv{w}{x})\\
\frac{1}{2}\qty(\pdv{v}{x}+\pdv{u}{y}) & \pdv{v}{y} & \frac{1}{2}\qty(\pdv{v}{z}+\pdv{w}{y})\\
\frac{1}{2}\qty(\pdv{w}{x}+\pdv{u}{z}) & \frac{1}{2}\qty(\pdv{w}{y}+\pdv{v}{z}) &  \pdv{w}{z}
\end{pmatrix}. \notag
\end{align}
$$

In cylindrical coordinates $(r,\phi,z)$,

$$
\begin{align}
\varepsilon_{rr}&=\pdv{u_r}{r}, \notag \\
\varepsilon_{\phi\phi}&=\frac{1}{r}\pdv{u_\phi}{\phi}+\frac{u_r}{r}, \notag \\
\varepsilon_{zz}&=\pdv{u_z}{z}, \notag \\
\varepsilon_{r\phi}&=\frac{1}{2} \qty(\frac{1}{r}\pdv{u_r}{\phi}+\pdv{u_\phi}{r}-\frac{u_\phi}{r}), \notag \\
\varepsilon_{rz}&=\frac{1}{2}\qty(\pdv{u_r}{z}+\pdv{u_z}{r}), \notag \\
\varepsilon_{\phi z}&=\frac{1}{2}\qty(\pdv{u_\phi}{z}+\frac{1}{r}\pdv{u_z}{\phi}), \notag
\end{align}
$$

and in spherical coordinates $(r, \theta, \phi)$,

$$
\begin{align}
\varepsilon_{rr}&=\pdv{u_r}{r}, \notag \\
\varepsilon_{\theta\theta}&=\frac{1}{r}\pdv{u_\theta}{\theta}+\frac{u_r}{r}, \notag \\
\varepsilon_{\phi\phi}&=\frac{1}{r\sin\theta}\pdv{u_\phi}{\phi}+\frac{u_\theta}{r}\cot\theta+\frac{u_r}{r}, \notag \\
\varepsilon_{r\theta}&=\frac{1}{2} \qty(\frac{1}{r}\pdv{u_r}{\theta}+\pdv{u_\theta}{r}-\frac{u_\theta}{r}), \notag \\
\varepsilon_{r\phi}&=\frac{1}{2}\qty(\frac{1}{r\sin\theta} \pdv{u_r}{\phi}+\pdv{u_\phi}{r} -\frac{u_\phi}{r}), \notag \\
\varepsilon_{\theta \phi}&=\frac{1}{2}\qty(\frac{1}{r\sin\theta}\pdv{u_\theta}{\phi}+\frac{1}{r}\pdv{u_\phi}{\theta}-\frac{u_\phi}{r}\cot\theta). \notag
\end{align}
$$

## Stress Tensor
From Newton's third law, the forces acting on all in internal part of
a differential volume element $dV$ add up to zero, and the force per unit
volume $\mb{f}$ on the volume $dV$ comes from the forces acting on the
surface of $dV$. The total force acting on any portion of the body can be
calculated by $\int\mb{f}dV$. Since we can express this as only forces acting
on the surface, we can write

$$
\begin{align}
f_i=\pdv{\sigma_{ij}}{x_j},
\end{align}
$$

and convert the volume integral into a surface integral

$$
\begin{align}
\int\mb f_i dV =\int \pdv{\sigma_{ij}}{x_j}dV=\oint \sigma_{ij}dA_j,
\end{align}
$$

where the tensor $\sigma_{ij}$ is called the stress tensor,
and $\sigma_{ij}dA_j$ is just the $i$-component of the force acting on
the surface $d\mb{A}$. Thus $\sigma_{ij}$ is the force per unit area on
the surface perpendicular to the $j$-axis. Note that this force
$\oint \sigma_{ij}dA_j$ is the force acting on the volume by the surrounding
parts of the body. 

The moment of the forces on a portion of the body is given by

$$
\begin{align}
M_{ij}&=\int (f_i x_j -f_j x_i)dV =\int \qty(\pdv{\sigma_{ik}}{x_k} x_j -\pdv{\sigma_{jk}}{x_k} x_i)dV \notag \\
	&=\int \pdv{(\sigma_{ik} x_j -\sigma_{jk} x_i)}{x_k}dV-\int \qty(\sigma_{ik}\delta_{jk}-\sigma_{jk}\delta_{ik})dV \notag \\
	&=\oint (\sigma_{ik} x_j -\sigma_{jk} x_i) dA_k+\int (\sigma_{ij}-\sigma_{ji})dV.
\end{align}
$$

Since $\sigma_{ij}=\sigma_{ji}$ is a symmetric tensor (or can be chosen to be symmetric),

$$
\begin{align}
M_{ij}=\oint (\sigma_{ik} x_j -\sigma_{jk} x_i) dA_k.
\end{align}
$$


## Thermodynamics of Elastic Solids
The thermodynamic quantities are all per unit volume of the body (undeformed body).
The work $\delta W$ (per unit volume) done by the internal stresses within $dV$
is $\delta W=f_i du_i=(\partial \sigma_{ij}/ \partial x_j)du_i$. Integrating
over a portion of the body,

$$
\begin{align}
\int \delta W dV&=\oint \sigma_{ij} du_i dA_j -\int \sigma_{ij} \pdv{du_i}{x_j}dV \notag \\
	&=-\frac{1}{2} \int \sigma_{ij} \qty( \pdv{du_i}{x_j}+\pdv{du_j}{x_i})dV \notag \\
	&=-\frac{1}{2} \int \sigma_{ij} d\qty( \pdv{u_i}{x_j}+\pdv{u_j}{x_i})dV \notag \\
	&=-\int \sigma_{ij} d\varepsilon_{ij} dV,
\end{align}
$$

where we have used integration by parts and dropped the surface term by
letting the surface go to infinity, and used the symmetry property of
the stress tensor. The work done on the body per unit volume is therefore

$$
\begin{align}
\delta W=-\sigma_{ij} d\varepsilon_{ij}.
\end{align}
$$

For small deformation, the process is reversible and the infinitesimal change
in the internal energy (per unit volume) is $dU =TdS-dW$ ($dW$ is the
work done by the internal stresses), we thus have

$$
\begin{align}
dU(S,\varepsilon_{ij}) =TdS+\sigma_{ij} d\varepsilon_{ij},
\end{align}
$$

where $T$ is the temperature and $S$ is the entropy per unit volume.
For hydrostatic compression the stress tensor is $\sigma_{ij}=-P\delta_{ij}$,
so $\sigma_{ij} d\varepsilon_{ij}=-P\delta_{ij}d\varepsilon_{ij}=-Pd\varepsilon_{ii}$,
where $d\varepsilon_{ii}$ is jut the change in volume per unit volume.
We therefore have the usual thermodynamic relation in this case
($dU =TdS-PdV$ in per unit volume basis).

The generalized enthalpy $H$ per unit volume is $H=U-\sigma_{ij} \varepsilon_{ij}$, and

$$
\begin{align}
dH (S,\sigma_{ij})=TdS-\varepsilon_{ij}d\sigma_{ij}.
\end{align}
$$

Similarly, the Helmholtz free energy and the Gibbs free energy
(per unit volume) are $F=U-TS$ and $G=U-TS-\sigma_{ij} \varepsilon_{ij}$, respectively, and

$$
\begin{align}
dF(T,\varepsilon_{ij})=-SdT+\sigma_{ij}d\varepsilon_{ij}, \\
dG(T,\sigma_{ij})=-SdT-\varepsilon_{ij}d\sigma_{ij}.
\end{align}
$$

The usual thermodynamic relations then give

$$
\begin{align}\label{eq:therm-sig}
\sigma_{ij}=\qty(\pdv{U}{\varepsilon_{ij}})_S=\qty(\pdv{F}{\varepsilon_{ij}})_T,\\
\varepsilon_{ij}=-\qty(\pdv{H}{\sigma_{ij}})_S=-\qty(\pdv{G}{\sigma_{ij}})_T.
\end{align}
$$

## Hooke's law (Isotropic)
Suppose the body is at a fixed temperature and no external forces,
the Helmholtz free energy is a function of the strain tensor
$\varepsilon_{ij}$. Let $F=F_0$ when the body is not deformed
($\varepsilon_{ij}=0$). The internal stresses are thus also zero.
Since $F$ is a scalar, we can expand $F$ in terms of the strain tensor,
to second order this expansion can be written as

$$
\begin{align}\label{eq:f-iso}
F=\frac{1}{2}\lambda (\varepsilon_{ii})^2+\mu \varepsilon_{ij}^2,
\end{align} 
$$

where we dropped $F_0$. The first term is the square of the trace and
the second term is the sum of the squares of the elements.
The coefficients $\lambda$ and $\mu$ are called Lamé's first parameter
and Lamé's second parameter, respectively. If we separate the strain tensor into pure shear (deviatoric strain tensor) and the hydrostatic compression (volumetric strain tensor), we write

$$
\begin{align}
\varepsilon_{ij}=(\varepsilon_{ij}-\frac{1}{3}\varepsilon_{kk}\delta_{ij})+\frac{1}{3}\varepsilon_{kk}\delta_{ij}.
\end{align} 
$$

Substitute into $F$, we have

$$
\begin{align}
F=\mu(\varepsilon_{ij}-\frac{1}{3}\varepsilon_{kk}\delta_{ij})^2+\frac{1}{2}K (\varepsilon_{kk})^2,
\end{align}
$$

where $\mu$ (or $G$) is the shear modulus, and $K$ is the bulk modulus,
which is related to Lamé parameters by

$$
\begin{align}
K=\lambda+\frac{2}{3}\mu.
\end{align}
$$

Since the free energy must have a minimum for $\varepsilon_{ij}=0$,
the two moduli must be positive. We can now use Eq. \eqref{eq:therm-sig}
to find the relation between the stress tensor and the strain tensor:

$$
\begin{align}
dF&=K\varepsilon_{kk}d\varepsilon_{kk}+2\mu(\varepsilon_{ij}-\frac{1}{3}\varepsilon_{kk}\delta_{ij})d(\varepsilon_{ij}-\frac{1}{3}\varepsilon_{kk}\delta_{ij}).\notag \\
	&=K\varepsilon_{kk} \delta_{ij} d\varepsilon_{ij}+2\mu(\varepsilon_{ij}-\frac{1}{3}\varepsilon_{kk}\delta_{ij})d\varepsilon_{ij}.
\end{align}
$$

Thus the stress tensor is

$$
\begin{align}\label{eq:cr-stress}
\sigma_{ij}=K\varepsilon_{kk} \delta_{ij}+2\mu(\varepsilon_{ij}-\frac{1}{3}\varepsilon_{kk}\delta_{ij}).
\end{align}
$$

If we calculated the trace for the tensors, we find, $\sigma_{ii}=3K\varepsilon_{kk}$.
Substituting this into the above equation, we find the strain tensor in terms of the stress tensor

$$
\begin{align}\label{eq:cr-strain}
\varepsilon_{ij}=\frac{1}{9K}\sigma_{kk} \delta_{ij}+\frac{1}{2\mu}(\sigma_{ij}-\frac{1}{3}\sigma_{kk}\delta_{ij}).
\end{align}
$$

This is Hooke's law for an isotropic body.

Since $F$ is a quadratic function of the strain tensor, Euler's theorem
gives $\varepsilon_{ij}\partial F/\partial \varepsilon_{ij}=2F$, we have

$$
\begin{align}
F=\frac{1}{2}\sigma_{ij}\varepsilon_{ij}.
\end{align}
$$

If instead we substitute $\varepsilon_{ij}$ in terms of $\sigma_{ij}$,
we get $\varepsilon_{ij}=\partial F/\partial \sigma_{ij}$.
However, this relation is not a general thermodynamic relation, it is only
valid when Hooke's law is valid.


If the deformation is uniform throughout the body, the strain tensor is
constant\footnote{Check!} and so is the stress tensor. Consider now a simple
extension along the $z$-direction. All the stress components except
$\sigma_{zz}$ are zero. Substitute this into Eq. \eqref{eq:cr-strain}, we find

$$
\begin{align}
\varepsilon_{xx}&=\varepsilon_{yy}=\frac{1}{3} \qty(\frac{1}{3K}-\frac{1}{2\mu})\sigma_{zz}, \notag \\
\varepsilon_{zz}&=\frac{1}{3}\qty(\frac{1}{3K}+\frac{1}{\mu})\sigma_{zz}, \notag \\
\end{align}
$$

where we can define Young's modulus $E$ by the relation

$$
\begin{align}
E=\frac{\sigma_{zz}}{\varepsilon_{zz}}=\frac{9K\mu}{3K+\mu}.
\end{align}
$$

Poisson's ratio $\nu$ is defined as the ratio of the transverse compression to the longitudinal extension:

$$
\begin{align}
\nu=-\frac{\varepsilon_{xx}}{\varepsilon_{zz}}=\frac{3K-2\mu}{2(3K+\mu)}.
\end{align}
$$

We can also express the Lamé parameters and $K$ in terms of $E$ and $\nu$

$$
\begin{align}
\lambda&=\frac{E\nu}{(1+\nu)(1-2\nu)},\\
\mu&=\frac{E}{2(1+\nu)},\\
K&=\frac{E}{3(1-2\nu)}.
\end{align}
$$

The stress-strain relations are

$$
\begin{align}
\sigma_{ij}&=\frac{E}{(1+\nu)}\qty(\varepsilon_{ij}+\frac{\nu}{1-2\nu}\varepsilon_{kk}\delta_{ij}),\\
\varepsilon_{ij}&=\frac{1}{E} \qty[\sigma_{ij}-\nu(\sigma_{kk}\delta_{ij}-\sigma_{ij})].
\end{align}
$$

The individual components are

$$
\begin{align*}
\sigma_{xx}&=\frac{E}{(1+\nu)(1-2\nu)} [(1-\nu)\varepsilon_{xx}+\nu (\varepsilon_{yy}+\varepsilon_{zz}) ], \\
\sigma_{yy}&=\frac{E}{(1+\nu)(1-2\nu)} [(1-\nu)\varepsilon_{yy}+\nu (\varepsilon_{xx}+\varepsilon_{zz}) ], \\
\sigma_{zz}&=\frac{E}{(1+\nu)(1-2\nu)} [(1-\nu)\varepsilon_{zz}+\nu (\varepsilon_{xx}+\varepsilon_{yy}) ], \\
\sigma_{xy}&=\frac{E}{1+\nu}\varepsilon_{xy}, \\
\sigma_{xz}&=\frac{E}{1+\nu}\varepsilon_{xz}, \\
\sigma_{yz}&=\frac{E}{1+\nu}\varepsilon_{yz}, \\
\varepsilon_{xx}&=\frac{1}{E} [\sigma_{xx}-\nu (\sigma_{yy}+\sigma_{zz}) ], \\
\varepsilon_{yy}&=\frac{1}{E} [\sigma_{yy}-\nu (\sigma_{xx}+\sigma_{zz}) ], \\
\varepsilon_{zz}&=\frac{1}{E} [\sigma_{zz}-\nu (\sigma_{xx}+\sigma_{yy}) ], \\
\varepsilon_{xy}&=\frac{1+\nu}{E}\sigma_{xy}, \\
\varepsilon_{xz}&=\frac{1+\nu}{E}\sigma_{xz}, \\
\varepsilon_{yz}&=\frac{1+\nu}{E}\sigma_{yz}.
\end{align*}
$$

In a special case where all sides of the body are fixed except the end faces in the $z$-direction, only $\varepsilon_{zz}$ is nonzero and we have

$$
\begin{align}
\sigma_{xx}&=\sigma_{yy}=\frac{E\nu}{(1+\nu)(1-2\nu)} \varepsilon_{zz}, \notag \\
\sigma_{zz}&=\frac{E(1-\nu)}{(1+\nu)(1-2\nu)} \varepsilon_{zz}.
\end{align}
$$

The longitudinal modulus or the constrained modulus $M$ is then defined as

$$
\begin{align}
M=\frac{\sigma_{zz}}{\varepsilon_{zz}}=\frac{E(1-\nu)}{(1+\nu)(1-2\nu)}.
\end{align}
$$


## Matrix Representation and Hooke's Law in Crystals
The stress-strain relation for an isotropic in the last section can be written in matrix form:

$$
\begin{align}
\begin{pmatrix}
\sigma_{xx} &\sigma_{xy} &\sigma_{xz}\\
\sigma_{yx} &\sigma_{yy} &\sigma_{yz}\\
\sigma_{zx} &\sigma_{zy} &\sigma_{zz}
\end{pmatrix}=2\mu
\begin{pmatrix}
\varepsilon_{xx} &\varepsilon_{xy} &\varepsilon_{xz}\\
\varepsilon_{yx} &\varepsilon_{yy} &\varepsilon_{yz}\\
\varepsilon_{zx} &\varepsilon_{zy} &\varepsilon_{zz}
\end{pmatrix}
+\lambda
\begin{pmatrix}
\varepsilon_{ii} &0 &0\\
0 &\varepsilon_{ii} &0 \\
0 & 0 &\varepsilon_{ii}
\end{pmatrix}.
\end{align}
$$

In Eq. \eqref{eq:f-iso}, we constructed two scalar terms out of a symmetric
second rank tensor. In general, we can have a scalar product
from contracting the tensor with a tensor of rank four:

$$
\begin{align}\label{eq:f-general}
F=\frac{1}{2}C_{ijkl}\varepsilon_{ij}\varepsilon_{kl},
\end{align}
$$

where $C_{ijkl}$ is called the stiffness tensor. If $C_{ijkl}$ is chosen
to be $\lambda \delta_{ij}\delta_{kl}+\mu (\delta_{ik}\delta_{jl}+\delta_{il}\delta_{jk})$,
we get Eq. \eqref{eq:f-iso} immediately.


The stress tensor can be obtained by

$$
\begin{align}\label{eq:stress-strain-gen}
\sigma_{ij}=\pdv{F}{\varepsilon_{ij}}=C_{ijkl}\varepsilon_{kl}.
\end{align}
$$

Sometimes, the compliance tensor $S_{ijkl}$ is used in place of $C_{ijkl}$,
and is defined through the relation $\varepsilon_{ij}=S_{ijkl}\sigma_{kl}$.
Thus from the symmetry of $\sigma_{ij}$ and $\varepsilon_{kl}$,
we find $C_{ijkl}=C_{jikl}$ and $C_{ijkl}=C_{ijlk}$. This reduces the
components of $C_{ijkl}$ from 81 to 36. In addition, $C_{ijkl}$ can also be written as

$$
\begin{align}
C_{ijkl}=\pdv{F}{\varepsilon_{ij}}{\varepsilon_{kl}},
\end{align}
$$

which implies $C_{ijkl}=C_{klij}$. Thus, $C_{ijkl}$ can have at most 21
independent components. Eq. \eqref{eq:stress-strain-gen} is usually written
in a $6\times 6$ matrix representation:

$$
\begin{align}
\begin{pmatrix}
\sigma_{xx}\\
\sigma_{yy}\\
\sigma_{zz}\\
\sigma_{yz}\\
\sigma_{xz}\\
\sigma_{xy}
\end{pmatrix}=
\begin{pmatrix}
C_{xxxx} &C_{xxyy} &C_{xxzz} &C_{xxyz} &C_{xxxz} &C_{xxxy} \\
C_{yyxx} &C_{yyyy} &C_{yyzz} &C_{yyyz} &C_{yyxz} &C_{yyxy} \\
C_{zzxx} &C_{zzyy} &C_{zzzz} &C_{zzyz} &C_{zzxz} &C_{zzxy} \\
C_{yzxx} &C_{yzyy} &C_{yzzz} &C_{yzyz} &C_{yzxz} &C_{yzxy} \\
C_{xzxx} &C_{xzyy} &C_{xzzz} &C_{xzyz} &C_{xzxz} &C_{xzxy} \\
C_{xyxx} &C_{xyyy} &C_{xyzz} &C_{xyyz} &C_{xyxz} &C_{xyxy}
\end{pmatrix}
\begin{pmatrix}
\varepsilon_{xx}\\
\varepsilon_{yy}\\
\varepsilon_{zz}\\
2\varepsilon_{yz}\\
2\varepsilon_{xz}\\
2\varepsilon_{xy}
\end{pmatrix}.
\end{align}
$$

Using a contracted notation, $xx=1$, $yy=2$, $zz=3$, $yz=4$, $xz=5$, $xy=6$, we have

$$
\begin{align}
\begin{pmatrix}
\sigma_{1}\\
\sigma_{2}\\
\sigma_{3}\\
\sigma_{4}\\
\sigma_{5}\\
\sigma_{6}
\end{pmatrix}=
\begin{pmatrix}
C_{11} &C_{12} &C_{13} &C_{14} &C_{15} &C_{16} \\
C_{21} &C_{22} &C_{23} &C_{24} &C_{25} &C_{26} \\
C_{31} &C_{32} &C_{33} &C_{34} &C_{35} &C_{36} \\
C_{41} &C_{42} &C_{43} &C_{44} &C_{45} &C_{46} \\
C_{51} &C_{52} &C_{53} &C_{54} &C_{55} &C_{56} \\
C_{61} &C_{62} &C_{63} &C_{64} &C_{65} &C_{66}
\end{pmatrix}
\begin{pmatrix}
\varepsilon_{1}\\
\varepsilon_{2}\\
\varepsilon_{3}\\
\varepsilon_{4}\\
\varepsilon_{5}\\
\varepsilon_{6}
\end{pmatrix}.
\end{align}
$$

Note that $\varepsilon_{4}=2\varepsilon_{yz}$, $\varepsilon_{5}=2\varepsilon_{xz}$,
$\varepsilon_{6}=2\varepsilon_{xy}$. For an isotropic body we find

$$
\begin{align}
\begin{pmatrix}
\sigma_{1}\\
\sigma_{2}\\
\sigma_{3}\\
\sigma_{4}\\
\sigma_{5}\\
\sigma_{6}
\end{pmatrix}=
\begin{pmatrix}
2\mu+\lambda &\lambda &\lambda &0 &0 &0  \\
 \lambda &2\mu+\lambda &\lambda &0 &0 &0 \\
\lambda &\lambda &2\mu+\lambda &0 &0 &0 \\
0 &0 &0 &\mu &0 &0 \\
0 &0 &0 &0 &\mu &0 \\
0 &0 &0 &0 &0 &\mu
\end{pmatrix}
\begin{pmatrix}
\varepsilon_{1}\\
\varepsilon_{2}\\
\varepsilon_{3}\\
\varepsilon_{4}\\
\varepsilon_{5}\\
\varepsilon_{6}
\end{pmatrix},
\end{align}
$$

or

$$
\begin{align}
\begin{pmatrix}
\sigma_{1}\\
\sigma_{2}\\
\sigma_{3}\\
\sigma_{4}\\
\sigma_{5}\\
\sigma_{6}
\end{pmatrix}=
\begin{pmatrix}
C_{11} &C_{12} &C_{12} &0 &0 &0  \\
C_{12} &C_{11} &C_{12} &0 &0 &0 \\
C_{12} &C_{12} &C_{11} &0 &0 &0 \\
0 &0 &0 &\frac{1}{2}(C_{11}-C_{12}) &0 &0 \\
0 &0 &0 &0 &\frac{1}{2}(C_{11}-C_{12}) &0 \\
0 &0 &0 &0 &0 &\frac{1}{2}(C_{11}-C_{12})
\end{pmatrix}
\begin{pmatrix}
\varepsilon_{1}\\
\varepsilon_{2}\\
\varepsilon_{3}\\
\varepsilon_{4}\\
\varepsilon_{5}\\
\varepsilon_{6}
\end{pmatrix}.
\end{align}
$$


### Cubic Crystals
We choose the $x$, $y$, $z$ axes to be the three four-fold rotation axes of
the crystal. The $C_3$ rotation about the $[111]$ axis change the coordinate
axes $xyz\rightarrow zxy\rightarrow yzx$. Since the crystal is unchanged under
this operation, we have $C_{xxxx}=C_{yyyy}=C_{zzzz}$, $C_{xxyy}=C_{zzxx}=C_{yyzz}$,
and $C_{xyxy}=C_{zxzx}=C_{yzyz}$. Reflections through the planes $\qty{110}$
exchange $xy$, $zx$, or $yz$, so we have $C_{xxyy}=C_{yyxx}$, $C_{zzxx}=C_{xxzz}$,
and $C_{yyzz}=C_{zzyy}$. Rotations $C_2$ about the $\langle 100\rangle$ axes
invert two of the axes $xyz$. These operations change the signs of the
components $C_{xxxy}$, $C_{xxxz}$, $C_{yyxy}$, $C_{yyyz}$, $C_{zzyz}$, and $C_{zzxz}$.
Since the crystal is invariant under these operations these components must be zero.
From the above discussion we find the stiffness tensor for a cubic crystal:

$$
\begin{align}
\begin{pmatrix}
C_{11} &C_{12} &C_{12} &0 &0 &0 \\
C_{12} &C_{11} &C_{12} &0 &0 &0 \\
C_{12} &C_{12} &C_{11} &0 &0 &0 \\
0 &0 &0 &C_{44} &0 &0 \\
0 &0 &0 &0 &C_{44} &0 \\
0 &0 &0 & 0 &0 &C_{44}
\end{pmatrix}.
\end{align}
$$


### Hexagonal Crystals
To obtain the non-vanishing components of the stiffness tensor for a
hexagonal crystal, we can use the transformation properties:

$$
\begin{align}\label{eq:trans}
C_{ijkl}'=R_{im}R_{jn}R_{kp}R_{lq}C_{mnpq},
\end{align}
$$

where $R_{ij}$ is the transformation matrix for a given symmetry operation.
If we demand $C_{ijkl}'=C_{ijkl}$ we can find all the nonzero components of
the stiffness tensor. For hexagonal crystals, we can in fact use a simpler
method by noting the similarities between cubic crystals and hexagonal crystals
(face-centered cubic $\leftrightarrow$ hexagonal close-packed, diamond
$\leftrightarrow$ lonsdaleite, zinc-blende $\leftrightarrow$ wurtzite).
If we let the $c$-axis of a hexagonal crystal be the $z$-axis,
the properties of the crystal in the $xy$ plane should be the same as
the corresponding cubic crystal. We thus have $C_{xxxx}=C_{yyyy}\neq C_{zzzz}$,
$C_{xxzz}=C_{yyzz}\neq C_{xxyy}$, and $C_{xzxz}=C_{yzyz}\neq C_{xyxy}$.
The element $C_{xyxy}$ is related to $C_{xxxx}$ and $C_{xxyy}$, and the relation
can be found through Eq. \eqref{eq:trans} with $R_{ij}$ being a $C_3$ rotation
about the $z$-axis:

$$
\begin{align}
C_{xyxy}'=\frac{1}{4}C_{xyxy}+\frac{3}{8}C_{xxxx}-\frac{3}{8}C_{xxyy}. \notag
\end{align}
$$

The invariance of the crystal under this rotation requires that
$C_{xyxy}'=C_{xyxy}$, so we find $C_{xyxy}=(C_{xxxx}-C_{xxyy})/2$.
Therefore, the stiffness tensor for a hexagonal crystal is given by 

$$
\begin{align}
\begin{pmatrix}
C_{11} &C_{12} &C_{13} &0 &0 &0 \\
C_{12} &C_{11} &C_{13} &0 &0 &0 \\
C_{13} &C_{13} &C_{33} &0 &0 &0 \\
0 &0 &0 &C_{44} &0 &0 \\
0 &0 &0 &0 &C_{44} &0 \\
0 &0 &0 & 0 &0 &(C_{11}-C_{12})/2
\end{pmatrix}.
\end{align}
$$
