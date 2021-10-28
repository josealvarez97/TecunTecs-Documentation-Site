import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "Finest Formulation & Modeling",
    Svg: require("../../static/img/TecunTecs-Logo.svg").default,
    description: (
      <>
        Applied mathematics is a fine art. Get inspired from thousands of
        applications.
      </>
    ),
  },

  {
    title: "Focus on Insight",
    Svg: require("../../static/img/TecunTecs-Logo.svg").default,
    showSvg: true,
    description: (
      <>
        TecunTecs lets you focus on insight, and we&apos;ll do the computations.
      </>
    ),
  },
  {
    title: "Best Implementation & Delivery",
    Svg: require("../../static/img/TecunTecs-Logo.svg").default,
    description: (
      <>TecunTecs is expert knowledge as an scalable easy-to-use solution.</>
    ),
  },
  {
    title: "Optimization-As-A-Service",
    Svg: require("../../static/img/TecunTecs-Logo.svg").default,
    description: (
      <>
        Leverage mathematical frameworks across a myriad of problem instances.
      </>
    ),
  },

  {
    title: "",
    Svg: require("../../static/img/TecunTecs-Logo.svg").default,
    description: <> </>,
  },
  {
    title: "Statistics-As-A-Service",
    Svg: require("../../static/img/TecunTecs-Logo.svg").default,
    description: (
      <>
        Applied mathematics is a fine art. Get inspired from hundreds of
        applications.
      </>
    ),
  },
];

function Feature({ Svg, title, description, showSvg = false }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {showSvg && <Svg className={styles.featureSvg} alt={title} />}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
