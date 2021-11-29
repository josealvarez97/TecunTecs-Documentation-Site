---
sidebar_position: 1
---

# Heat Loss

---

## Example problem:

_Adapted from Boyd, S., & Vandenberghe, L. (2004). Convex optimization. Cambridge university press._

A heated fluid at temperature $T$ (degrees above ambient temperature) flows in a pipe with fixed length and circular cross section with radius $r$. A layer of insulation, with thickness $w<<r$, surrounds the pipe to reduce heat loss through the pipe walls. The design variables in this problem are $T$, $r$, and $w$.

The **heat loss is (approximately) proportional** to $Tr/w$, so over a fixed lifetime, the **energy cost** due to heat loss is given by $\alpha_1 Tr/w$.

The **cost of the pipe**, which has a fixed wall thickness, is approximately proportional to the **total material**, i.e., it is given by $\alpha_2 r$.

The **cost of the insulation** is also approximately proportional to the **total insulation material**, i.e., $\alpha_3 rw$ (using $w<<r$). _(Proportional to the radious and the thickness of the pipe.)_

**The total cost is the sum of these three costs.**

$$
\alpha_1 Tr/w + \alpha_2 r + \alpha_3 rw
$$

The **heat flow down the pipe** is entirely due to the flow of the fluid, which has a fixed velocity, i.e., it is given by

$$
 \alpha_4 Tr^2
$$

For the sake of intuition:

- The greater the temperature, the greater is the energy in the fluid and, hence, the greater the heat loss will be.
- Similarly, the greater the radius, the greater the circular cross sectional area of the pipe (which is directly proportional to the square of the radius) and, hence, the greater the heat loss will be.

The constraints $\alpha_i$ are all positive, as are the variables $T$, $r$, and $w$.

Now the problem: **maximize the total heat flow** down the pipe, subject to an upper limit $C_{max}$ on total cost, and the constraints

$$
T_{min} \leq T \leq T_{max}
$$

$$
r_{min} \leq r \leq r_{max}
$$

$$
w_{min} \leq w \leq w_{max}
$$

$$
w \leq 0.1r
$$

Express this problem as a geometric program.

### Example Problem Solution:

Maximizing the objective function $\alpha_4 Tr^2$ is equivalent (in the case of geometric programs) to **minimizing** its inverse:

$$
\alpha_4^{-1} T^{-1} r^{-2}
$$

The **total cost constraint** is given by:

$$
\left(\frac{\alpha_1}{C_{max}}\right)Trw^{-1} + \left(\frac{\alpha_2}{C_{max}}\right)r + \left(\frac{\alpha_3}{C_{max}}\right)rw \leq 1
$$

:::danger Don't forget:
Factor the constants of proportionality from the variables to properly express the _geometric problem in standard form_.
:::

The **other constraints** are:

$$
T_{min}T^{-1} \leq 1
$$

$$
(1/T_{max})T\leq 1
$$

$$
r_{min}r^{-1} \leq 1
$$

$$
(1/r_{max})r \leq 1
$$

$$
w_{min}w^{-1} \leq 1
$$

$$
(1/w_{max})w \leq 1
$$

$$
10wr^{-1}\leq 1
$$

---

## Case study:

## How to recognize potential applications:

Let's discover **Docusaurus in less than 5 minutes**.

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
