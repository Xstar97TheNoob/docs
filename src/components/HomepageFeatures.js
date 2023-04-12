import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy for noobs',
    Svg: require('../../static/img/saitama-tf.gif').default,
    gif: true,
    description: (
      <>
        Easy for any noob or pro to read and get started right away!
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('../../static/img/anime.gif').default,
    gif: true,
    description: (
      <>
        Focus on that "anime" addiction and let me spend the time writing the docs 😉.
      </>
    ),
  },
  {
    title: 'Powered by Docusaurus',
    Svg: require('../../static/img/thumbs-up.gif').default,
    gif: true,
    description: (
      <>
        Welcome to the noob life of homelabbing.
      </>
    ),
  },
];

function Feature({Svg, title, description, gif}) {
  if (!gif){
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <Svg className={styles.featureSvg} alt={title} />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  } else {
    return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
        <img src={Svg} alt="loading..." />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    )
  }
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
