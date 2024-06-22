---
layout: default_math
title: Thermodynamic Potentials
nav_order: 1
grand_parent: Physics
parent: Thermodynamics
---

# Important Thermodynamic Potentials

The internal energy $U$ of a system is a homogeneous function of the extensive parameters $S$, $V$, and $N$ (for simplicity we consider a single-component system) of first degree

$$
\begin{align}
U(S,V,N)=TS-PV+\mu N,
\end{align}
$$

and

$$
\begin{align}
dU(S,V,N)=TdS-PdV+\mu dN.
\end{align}
$$

In the entropy representation we have

$$
\begin{align}
S(U,V,N)=\frac{1}{T}U+\frac{P}{T}V-\frac{\mu}{T} N,
\end{align}
$$

and

$$
\begin{align}
dS(U,V,N)=\frac{1}{T}dU+\frac{P}{T}dV-\frac{\mu}{T} dN.
\end{align}
$$


The  Helmholtz potential or the Helmholtz free energy of a system is defined as

$$
\begin{align}
F(T,V,N)=U-TS=-PV+\mu N,
\end{align}
$$

and 

$$
\begin{align}
dF(T,V,N)=-SdT-PdV+\mu dN.
\end{align}
$$

In the entropy representation we have the Massieu potential or the Helmholtz free entropy,

$$
\begin{align}
S_F\left (\frac{1}{T},V,N \right)=S-\frac{1}{T}U=\frac{P}{T}V-\frac{\mu}{T}N,
\end{align}
$$

and

$$
\begin{align}
dS_F\left (\frac{1}{T},V,N \right)=-Ud\left (\frac{1}{T}\right )+\frac{P}{T}dV-\frac{\mu}{T}dN.
\end{align}
$$

It is related to the Helmholtz free energy by

$$
\begin{align}
S_F=-\frac{F}{T}.
\end{align}
$$

The enthalpy of a system is defined as

$$
\begin{align}
H(S,P,N)=U+PV=TS+\mu N,
\end{align}
$$

and 

$$
\begin{align}
dH(S,P,N)=TdS+VdP+\mu dN.
\end{align}
$$

In entropy representation we have

$$
\begin{align}
S_H\left (U,\frac{P}{T},N \right)=S-\frac{P}{T}V=\frac{1}{T}U-\frac{\mu}{T}N,
\end{align}
$$

and

$$
\begin{align}
dS_H\left (U,\frac{P}{T},N \right)=\frac{1}{T}dU-V d\left (\frac{P}{T}\right)-\frac{\mu}{T}dN.
\end{align}
$$

This form of free entropy corresponds to a system with fixed $P/T$, but allows $1/T$ to vary.
Thus, this free entropy is not physical and is just a mathematical function [^unphysical-free-entropy]

[^unphysical-free-entropy]: Even though we denote this free entropy as $S_H$,
    there is no simple relation between $S_H$ and $H$.
    This choice is just to make our notation consistent with other free entropies.

\cite{callen1985thermodynamics}.

The Gibbs potential or the Gibbs free energy of a system is defined as

$$
\begin{align}
G(T,P,N)=U-TS+PV=\mu N,
\end{align}
$$

and 

$$
\begin{align}
dG(T,P,N)=-SdT+VdP+\mu dN.
\end{align}
$$

In the entropy representation we have the Planck potential or the Gibbs free entropy,

$$
\begin{align}
S_G\left (\frac{1}{T},\frac{P}{T},N \right)=S-\frac{1}{T}U-\frac{P}{T}V=-\frac{\mu}{T}N,
\end{align}
$$

and

$$
\begin{align}
dS_G\left (\frac{1}{T},\frac{P}{T},N \right)=-Ud\left (\frac{1}{T}\right )-V d\left (\frac{P}{T}\right)-\frac{\mu}{T}dN.
\end{align}
$$

It is related to the Gibbs free energy by

$$
\begin{align}
S_G=-\frac{G}{T}.
\end{align}
$$

The grand potential or the Landau potential or the Landau free energy of a system is defined as
$$
\begin{align}
\Phi(T,V,\mu)=U-TS-\mu N=-PV,
\end{align}
$$

and 

$$
\begin{align}
d\Phi(T,V,\mu)=-SdT-PdV-Nd\mu.
\end{align}
$$


In the entropy representation we have the Kramers potential \cite{kubo1968thermodynamics} or the Landau free entropy,

$$
\begin{align}
S_\Phi\left (\frac{1}{T},V,\frac{\mu}{T} \right)=S-\frac{1}{T}U+\frac{\mu}{T}N=\frac{P}{T}V,
\end{align}
$$

and

$$
\begin{align}
dS_\Phi\left (\frac{1}{T},V,\frac{\mu}{T} \right)=-Ud\left (\frac{1}{T}\right )+\frac{P}{T}dV+Nd\left (\frac{\mu}{T}\right ).
\end{align}
$$

It is related to the Landau free energy by

$$
\begin{align}
S_\Phi=-\frac{\Phi}{T}.
\end{align}
$$


The relations between free energies and free entropies are summarized in Table \ref{tab:FEFS}. Note that the total differential forms of these relations are more general, as they can be applied to all systems. The Euler relations, however, is derived from the fact that the internal energy $U$ itself is extensive and is a function of extensive parameters $S$, $V$, $N$. If this is not true then the Euler relations in Table \ref{tab:FEFS} also break down.


| Name | Total differential | Euler Relations |
| ---- | ------------------ | --------------- |
| Internal energy | $dU(S,V,N)=TdS-PdV+\mu dN$ | $U(S,V,N)=TS-PV+\mu N$ |
| Entropy | $dS(U,V,N)=\frac{1}{T}dU+\frac{P}{T}dV-\frac{\mu}{T} dN$ | $S(U,V,N)=\frac{1}{T}U+\frac{P}{T}V-\frac{\mu}{T} N$ |
| Helmholtz free energy | $dF(T,V,N)=-SdT-PdV+\mu dN$ | $F(T,V,N)=U-TS=-PV+\mu N$ |
| Helmholtz free entropy | $dS_F\left (\frac{1}{T},V,N \right)=-Ud\left (\frac{1}{T}\right )+\frac{P}{T}dV-\frac{\mu}{T}dN$ | $S_F\left (\frac{1}{T},V,N \right)=S-\frac{1}{T}U=\frac{P}{T}V-\frac{\mu}{T}N=-\frac{F}{T}$ |
| Enthalpy | $dH(S,P,N)=TdS+VdP+\mu dN$ | $H(S,P,N)=U+PV=TS+\mu N$ |
| Free entropy [^unphysical]| $dS_H\left (U,\frac{P}{T},N \right)=\frac{1}{T}dU-V d\left (\frac{P}{T}\right)-\frac{\mu}{T}dN$ | $S_H\left (U,\frac{P}{T},N \right)=S-\frac{P}{T}V=\frac{1}{T}U-\frac{\mu}{T}N$ |
| Gibbs free energy | $dG(T,P,N)=-SdT+VdP+\mu dN$ | $G(T,P,N)=U-TS+PV=\mu N$ |
| Gibbs free entropy | $dS_G\left (\frac{1}{T},\frac{P}{T},N \right)=-Ud\left (\frac{1}{T}\right )-V d\left (\frac{P}{T}\right)-\frac{\mu}{T}dN$ | $S_G\left (\frac{1}{T},\frac{P}{T},N \right)=S-\frac{1}{T}U-\frac{P}{T}V=-\frac{\mu}{T}N=-\frac{G}{T}$ |
| Landau free energy | $d\Phi(T,V,\mu)=-SdT-PdV-Nd\mu$ | $\Phi(T,V,\mu)=U-TS-\mu N=-PV$ |
| Landau free entropy | $dS_\Phi\left (\frac{1}{T},V,\frac{\mu}{T} \right)=-Ud\left (\frac{1}{T}\right )+\frac{P}{T}dV+Nd\left (\frac{\mu}{T}\right )$ | $S_\Phi\left (\frac{1}{T},V,\frac{\mu}{T} \right)=S-\frac{1}{T}U+\frac{\mu}{T}N=\frac{P}{T}V=-\frac{\Phi}{T}$ |

[^unphysical]: Unphysical, no simple relation between $S_H$ and $H$.





[comment]: # Maxwell Relations
[comment]: # Stability
[comment]: # Phase Transitions
[comment]: # Critical Phenomena


