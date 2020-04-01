import React from 'react';
import styles from './Date.module.css'

class Date extends React.Component {
  render = () => {
    return (
      <div className={styles.date}>
        <div>created {this.props.created}</div>
        <div>updated {this.props.updated}</div>
        <div>finished {this.props.finished}</div>
      </div>
    )
  }
}

export default Date;
