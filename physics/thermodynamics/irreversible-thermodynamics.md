---
layout: default_math
title: Irreversible Thermodynamics
nav_order: 2
grand_parent: Physics
parent: Thermodynamics
---

# Irreversible Thermodynamics

For a discrete system, the change in entropy can be express as

$$
\begin{align}
dS=\sum_i \pdv{S}{X_i}dX_i=F_i dX_i,
\end{align}
$$

where $S$ is a function of all the extensive parameters $X_i$, and $F_i$ is the intensive parameter associated with $X_i$ in the entropy representation. From this we can write down the rate of production of entropy for a discrete system:

$$
\begin{align}\label{eq:s-rate-sum}
\dv{S}{t}=\sum_i F_i\dv{X_i}{t}.
\end{align}
$$

If we take $X_i$ as the internal energies $U_1$, $U_2$ of the subsystems of a composite system, Eq. (\ref{eq:s-rate-sum}) reads:

$$
\begin{align}
\dv{S}{t}&=\pdv{S}{U_1}\dv{U_1}{t}+\pdv{S}{U_2}\dv{U_2}{t}=\pdv{S_1}{U_1}\dv{U_1}{t}+\pdv{S_2}{U_2}\dv{U_2}{t} \notag \\
&=\frac{1}{T_1}\dv{U_1}{t}+\frac{1}{T_2}\dv{U_2}{t},
\end{align}
$$

where we have used the additive property of entropy $S(U_1,U_2)=S_1(U_1)+S_2(U_2)$ and $\partial S/\partial U=1/T$. Now since $U_1+U_2$ is a constant $dU_1/dt=-dU_2/dt$, we have

$$
\begin{align}
\dv{S}{t}=\left ( \frac{1}{T_1}-\frac{1}{T_2} \right ) \dv{U_1}{t}.
\end{align}
$$

We see that the driving force for this process is the difference between the intensive parameters of the subsystems $1/T_1-1/T_2$.

For a continuous system, we can assign a local entropy to a infinitesimal region (macroscopically small but microscopically large). This entropy thus a function of the local extensive variables. If we express all quantities in per unit volume units, we can write

$$
\begin{align}\label{eq:ds-per-vol}
ds=\sum_i F_i dx_i,
\end{align}
$$

where $ds$ here is the differential change in entropy per a small unit volume. Eq. (\ref{eq:ds-per-vol}) immediately gives us:

$$
\begin{align}\label{eq:pds-per-vol}
\pdv{s}{t}=\sum_i F_i \pdv{x_i}{t},
\end{align}
$$

and

$$
\begin{align}\label{eq:s-flux}
\mb{J}_S=\sum_i F_i \mb{J}_i,
\end{align}
$$

where $\mb{J}_S$ and $\mb{J}_i$ are the current densities\footnote{In a fluid $\mb{J}_S=s\mb{v}$ and $\mb{J}_i=x_i\mb{v}$, so we can directly obtain the above relation.} of the corresponding extensive parameters. The total change in entropy in a local region is given by

$$
\begin{align}\label{eq:ds-per-vol-dt}
\dv{s}{t}=\pdv{s}{t}+\div \mb{J}_S,
\end{align}
$$

and similarly for all other extensive quantities. If the extensive quantities $x_i$ are conserved, we have

$$
\begin{align}
\pdv{x_i}{t}+\div \mb{J}_i=0.
\end{align}
$$

Substituting Eqs. (\ref{eq:pds-per-vol}) and (\ref{eq:s-flux}) into Eq. (\ref{eq:ds-per-vol-dt}), we find 

$$
 \begin{align}
\dv{s}{t}&=\sum_i F_i \pdv{x_i}{t}+\div \sum_i F_i \mb{J}_i \notag \\
	&=\sum_i \left ( F_i \pdv{x_i}{t}+ F_i \div \mb{J}_i + \grad F_i \cdot \mb{J}_i \right ).
\end{align}
$$

If all the $x_i$ are conserved, we find

$$
\begin{align}\label{eq:s-per-vol-flux}
\dv{s}{t}=\sum_i \grad F_i \cdot \mb{J}_i=\sum_i \mathcal{F}_i \cdot \mb{J}_i.
\end{align}
$$

Therefore, in a continuous system, the driving force $\mathcal{F}_i$ of a flux $\mb{J}_i$ is the gradient of the corresponding intensive parameter.

## Linear Systems

Since if all the driving forces $\mathcal{F}_i$ vanish all the current densities also vanish, we can expand $\mb{J}_i$ in terms of all the driving forces, up to the first order we have 

$$
\begin{align}
J_{i\alpha}=\sum_{\beta}\sum_j L_{ij\alpha\beta}\mathcal{F}_{j\beta},
\end{align}
$$

where $L_{ij\alpha\beta}$ is the transport coefficient tensor connecting the $\alpha$th component of the $i$th flux to the $\beta$th component of the $j$th driving force. Here Greek letters are used to denote the Cartesian components of quantities.

For an isotropic medium, the above equation reduces to

$$
\begin{align}
\mb{J}_{i}=\sum_j L_{ij}\mathcal{F}_j.
\end{align}
$$

The Onsager theorem\footnote{For proof, see \textit{Statistical Mechanics}.} states that if the transport coefficients depend on an external magnetic field $\mb{B}$, then the transport coefficients follow the relation

$$
\begin{align}
L_{ij}(\mb{B})=L_{ji}(\mb{B}).
\end{align}
$$

In the absence of external magnetic fields, we have
$$
\begin{align}
L_{ij}=L_{ji}.
\end{align}
$$

As an example of transport coefficient, we look at the thermal conductivity from the phenomenological law of conduction. Fourier's law states that

$$
\begin{align}
\mb{J}_U=-\kappa \grad T=\kappa T^2 \grad \left (\frac{1}{T} \right ),
\end{align}
$$

where $\kappa$ is the thermal conductivity of the body. The transport coefficient in this case is thus $\kappa T^2$.
 
 
## Thermoelectric Effects

Consider an isotropic body in which both electric current and heat current can flow. The change in entropy in a local region can be written as

$$
\begin{align}
ds=\left ( \frac{1}{T}\right )du-\left ( \frac{\mu}{T}\right )dn.
\end{align}
$$

Here we assume that only electrons in the body are allowed to flow, other ions in the body are immobile. Thus $n$ is the number density of electrons, and $\mu$ is the electrochemical potential (per particle) of the electrons\footnote{In the literature, sometimes $\mu$ is only chemical potential, and the electrostatic potential is treated as an external force.}. From this we find the relation between the fluxes:

$$
\begin{align}
\mb{J}_S=\left ( \frac{1}{T}\right )\mb{J}_U-\left ( \frac{\mu}{T}\right )\mb{J}_N.
\end{align}
$$

Eq. (\ref{eq:s-per-vol-flux}) now gives the rate change in entropy

$$
\begin{align}
\dv{s}{t}=\grad \left ( \frac{1}{T}\right )\cdot \mb{J}_U-\grad\left ( \frac{\mu}{T}\right )\cdot \mb{J}_N.
\end{align}
$$

If we choose $-\mb{J}_N$ and $\mb{J}_U$ as our fluxes, we can write down the corresponding transport equations:

$$
\begin{align}
-\mb{J}_N &= L_{11}' \grad\left ( \frac{\mu}{T}\right )+L_{12}' \grad \left ( \frac{1}{T}\right ), \\
\mb{J}_U &= L_{21}' \grad\left ( \frac{\mu}{T}\right )+L_{22}' \grad \left ( \frac{1}{T}\right ).
\end{align}
$$

The Onsager relation then reads $L_{12}'=L_{21}'$.

In the above equations $\mb{J}_U$ is the current density of internal energy. It is more convenient to express the transport process in terms of heat flux. Using the thermodynamic relation $\delta q=Tds$, the heat current density can be written as $\mb{J}_Q=T\mb{J}_S$, or

$$
\begin{align}
\mb{J}_Q=\mb{J}_U-\mu\mb{J}_N.
\end{align}
$$

The rate change in entropy becomes

$$
\begin{align}
\dv{s}{t}=\grad \left ( \frac{1}{T}\right )\cdot \mb{J}_Q-\frac{1}{T} \grad \mu \cdot \mb{J}_N.
\end{align}
$$

Again choosing $-\mb{J}_N$ and $\mb{J}_Q$ as our fluxes, we find

$$
\begin{align}\label{eq:jn}
-\mb{J}_N &= L_{11} \frac{1}{T} \grad \mu+L_{12} \grad \left ( \frac{1}{T}\right ), \\
\label{eq:jq}
\mb{J}_Q &= L_{21} \frac{1}{T} \grad \mu+L_{22} \grad \left ( \frac{1}{T}\right ).
\end{align}
$$

The Onsager relation then gives

$$
\begin{align}
 L_{12}=L_{21}.
\end{align}
$$

## Electric Conductivity

The electric conductivity is defined as $\sigma=\mb{J}_e/\mb{E}$ at constant temperature, where  $\mb{J}_e=-e\mb{J}_N$ is the electric current\footnote{We use $e$ as the charge of a proton, thus the electron charge is $-e$} and $\mb{E}$ is the applied electric field. The chemical potential of electron can be written as $\mu=\mu_e+\mu_c$. The electric part $\mu_e$ is the potential energy of the electron $\mu_e=-e\phi$, where $\phi$ is the electrostatic potential. The chemical part $\mu_c$ is a function of the temperature and the electron density. The gradient of $\mu$ is therefore consists of two parts: the electric part $\grad \mu_e=-e\grad \phi=e\mb{E}$, and the chemical part $\grad \mu_c$. The chemical part is the driving force caused by a concentration gradient. For a homogeneous medium at constant temperature, $\grad \mu_c=0$, so we have

$$
\begin{align}
\mb{J}_e=-e\mb{J}_N=eL_{11} \frac{1}{T} \grad \mu_e= \frac{e^2L_{11}}{T}\mb{E}.
\end{align}
$$

Thus, the electric conductivity is

$$
\begin{align}
\sigma=\frac{e^2L_{11}}{T}.
\end{align}
$$

## Thermal Conductivity

The thermal conductivity of a system is defined as $\kappa=-\mb{J}_Q/\grad T$
in the absence of electric current. Solving for $\grad\mu$ in Eq. \eqref{eq:jn} when
$\mb{J}_N=0$, we find

$$
\begin{align}
\grad\mu=-T\frac{L_{12}}{L_{11}}\grad(\frac{1}{T}). \notag
\end{align}
$$

Substituting $\grad \mu$ into Eq. \eqref{eq:jq}, we obtain

$\kappa=-\mb{J}_Q/\grad T$
$$
\begin{align}
\mb{J}_Q=\left (L_{22}-\frac{L_{12}^2}{L_{11}} \right )\grad \left ( \frac{1}{T}\right )=-\left (\frac{L_{22}-L_{12}^2/L_{11}}{T^2} \right )\grad T.
\end{align}
$$

Thus we have the thermal conductivity

$$
\begin{align}
\kappa = \frac{L_{22}-L_{12}^2/L_{11}}{T^2}.
\end{align}
$$

## Seebeck Effect

The Seebeck coefficient or the thermoelectric power is defined as the electromotive force built up divided by the the temperature difference in a material when there is no electric current

$$
\begin{align}
-\grad V=\alpha \grad T.
\end{align}
$$

Setting $\mb{J}_N=0$ in Eq.(\ref{eq:jn}), we find   

$$
\begin{align}
-\grad V= -\grad \mu /(-e)=-\frac{L_{12}T}{eL_{11}}\grad \left ( \frac{1}{T}\right )=\frac{L_{12}}{eTL_{11}}\grad T,
\end{align}
$$

where $V=\phi+\mu_c/(-e)$ is the potential of the electron. Note that the electromotive force or the potential difference contains not only the electrostatic potential but also a chemical diffusion contribution. The Seebeck coefficient is therefore

$$
\begin{align}\label{eq:seebeck}
\alpha=\frac{L_{12}}{eTL_{11}}.
\end{align}
$$

This is the absolute Seebeck coefficient for a material. In practice, if we connect a voltmeter to measure this potential difference on two ends of a material, the temperature difference between the two ends will create additional voltage in the voltmeter, cancelling the voltage that we are trying to measure. Therefore, to measure such thermoelectric potential, the two leads of the voltmeter must be at the same temperature. Since not thermoelectric voltage is developed in a material at the same temperature, we must use two different material and measure the difference in the potentials developed in the two materials. 

Consider a system consists of two materials $A$ and $B$ (Fig. \ref{fig:Seebeck}). We now connect $A$ and $B$ at point 1, which is maintained at temperature $T_1$. At point 2, we connect $A$ and $B$ to a voltmeter, which is maintained at temperature $T_2$. The reading on the voltmeter gives the potential difference between $A$ and $B$, $V_{2A}-V_{2B}$ at point 2. This can be written as

$$
\begin{align}
V_{2A}-V_1-(V_{2B}-V_1)&=\int_1^2 dV_A-\int_1^2 dV_B \notag \\
	&=\int_1^2 (\alpha_B-\alpha_A) dT.
\end{align}
$$

The relative Seebeck coefficient is defined as

$$
\begin{align}
\alpha_{AB}=\alpha_B-\alpha_A.
\end{align}
$$

The sign of the Seebeck coefficient in Eq. (\ref{eq:seebeck}) is chosen such that the relative Seebeck coefficient $\alpha_{AB}$ is positive if $V_{2A}-V_{2B}>0$ when $T_2>T_1$.

\begin{figure}[!ht]
\begin{center}
\includegraphics[trim=0cm 0cm 0cm 0cm, clip, width=0.48\textwidth]{Seebeck}
\caption{Experimental setup for measuring Seebeck effect.}

\end{center}
\end{figure}


If we now choose the electric conductivity, the thermal conductivity, and the Seebeck coefficient as our transport coefficients Eqs. (\ref{eq:jn}) and (\ref{eq:jq}) can be written as

$$
\begin{align}\label{eq:jn2}
-\mb{J}_N &= \frac{\sigma}{e^2}\grad \mu+\frac{T^2\sigma\alpha}{e}\grad \left ( \frac{1}{T}\right ), \\
\label{eq:jq2}
\mb{J}_Q &= \frac{T\sigma\alpha}{e} \grad \mu+(T^2\kappa+T^3\sigma\alpha^2) \grad \left ( \frac{1}{T}\right ).
\end{align}
$$

Eliminating $\grad \mu$, we can write

$$
\begin{align}
\mb{J}_Q =-e\alpha T \mb{J}_N+T^2\kappa \grad \left ( \frac{1}{T}\right ),
\end{align}
$$

or using $\mb{J}_S=\mb{J}_Q/T$

$$
\begin{align}
\mb{J}_S =-e\alpha \mb{J}_N+T\kappa \grad \left ( \frac{1}{T}\right ).
\end{align}
$$

The second term is just the entropy current from the temperature gradient. If we recall the electric current $\mb{J}_e=-e\mb{J}_N$, the first term is the entropy carried by the electric current. In this sense, the Seebeck coefficient is the entropy per unit charge of the material.


## Peltier Effect

When an isothermal electric current flows in a material, a heat current will also be generated. The Peltier coefficient is define as the ratio of the heat current to the electric current under the isothermal condition

$$
\begin{align}
\mb{J}_Q=\Pi \mb{J}_e.
\end{align}
$$

Setting the temperature gradient to zero in Eq. (\ref{eq:jn}) and Eq.(\ref{eq:jq})

$$
\begin{align}
\mb{J}_Q=-\frac{L_{21}}{L_{11}}\mb{J}_N=\frac{L_{21}}{eL_{11}}\mb{J}_e.
\end{align}
$$

Thus,

$$
\begin{align}\label{eq:peltier}
\Pi =\frac{L_{21}}{eL_{11}}.
\end{align}
$$

From Eqs. (\ref{eq:seebeck}) and (\ref{eq:peltier}) we have the second Thomson relation

$$
\begin{align}
\Pi =T\alpha.
\end{align}
$$

If material $A$ and $B$ is connect at an isothermal junction, since the materials have different Peltier coefficients, we have a jump in heat current

$$
\begin{align}
\mb{J}_{QB}-\mb{J}_{QA}=(\Pi_B-\Pi_A)\mb{J}_e.
\end{align}
$$

The relative Peltier coefficient is defined as

$$
\begin{align}
\Pi_{AB}=\Pi_B-\Pi_A.
\end{align}
$$
Thus, to maintain the isothermal condition, heat must be supplied or evolved at the junction.

## Thomson Effect

The Thomson effect describes the heat generation in a local region, when an electric current flows through a temperature gradient. The energy change in a local region of the system is given by\footnote{It is probably better to treat the electric field as an external source. Revisit this whole section later!}

$$
\begin{align}
-\pdv{u}{t}=\div \mb{J}_U&=\div(\mb{J}_Q+\mu\mb{J}_N) \notag \\
	&=\div\mb{J}_Q+\grad\mu \cdot \mb{J}_N,
\end{align}
$$

where we have assumed steady current $\div\mb{J}_N=0$. Writing in terms of $\mb{J}_e$ and $\grad T$, we have

$$
\begin{align}
-\pdv{u}{t}&=\div (\alpha T\mb{J}_e-\kappa\grad T)-\left ( \frac{\mb{J}_e}{\sigma}+\alpha\grad T \right )\cdot \mb{J}_e \notag \\
&=T\grad \alpha \cdot \mb{J}_e-\grad\cdot (\kappa \grad T)-\frac{\mb{J}_e^2}{\sigma},
\end{align}
$$

where the first term is the Thomson heat, the second term is the energy change due to heat conduction, and the third term is Joule heat. The Thomson coefficient is defined as the ratio of Thomson heat to the product electric current and temperature gradient:

$$
\begin{align}
\tau=\frac{T\grad \alpha \cdot \mb{J}_e}{\grad T \cdot \mb{J}_e}.
\end{align}
$$

Writing $\grad \alpha=\grad T d\alpha /dT$, we find

$$
\begin{align}
\tau=T\dv{\alpha}{T}.
\end{align}
$$

From this and the second Thomson relation we have

$$
\begin{align}
\dv{\Pi}{T}-\alpha=\tau.
\end{align}
$$

This is the first Thomson relation.
