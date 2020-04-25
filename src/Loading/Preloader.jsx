import React from 'react';
import styles from './Preloader.module.css'

class Preloader extends React.Component {
  render = () => {
    return (
      <div id={styles.cssloadPgloading}>
        <div className={styles.cssloadLoadingwrap}>
          <ul className={styles.cssloadBokeh}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Preloader;
