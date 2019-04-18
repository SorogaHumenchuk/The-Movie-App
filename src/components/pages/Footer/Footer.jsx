import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>
        This app was designed by{' '}
        <a href="https://github.com/SerogaHumenchuk" className={styles.name}>
          {' '}
          Serhiy Hymenchuk
        </a>{' '}
        for{' '}
        <a href="https://morbax.com/" className={styles.company}>
          {' '}
          Morbax{' '}
        </a>{' '}
        in 2019
      </p>
    </footer>
  );
};

export default Footer;
