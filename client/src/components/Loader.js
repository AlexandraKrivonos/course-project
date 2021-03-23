import React from 'react';

import Spinner from './spinner.svg';

import styles from './styles.module.css';

const Loader = () => (
  <div className={styles.loadingPlaceholder}>
    <img src={Spinner} alt="Loading..." />
  </div>
);

export default Loader;