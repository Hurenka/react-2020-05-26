import React from 'react';

import styles from './banner.module.css';
import PropTypes from 'prop-types';

import DefaultBanner from './banner.jpg';

const Banner = ({ img = DefaultBanner, heading, description, children }) => (
  <div className={styles.banner}>
    <img src={img} className={styles.img} alt="banner" />
    <div className={styles.caption}>
      <h2 className={styles.heading}>{heading}</h2>
      <p className={styles.description}>{description}</p>
      <div>{children}</div>
    </div>
  </div>
);

Banner.propTypes = {
  banner: PropTypes.string,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string,
  children: PropTypes.shape({ id: PropTypes.string }),
};

export default Banner;
