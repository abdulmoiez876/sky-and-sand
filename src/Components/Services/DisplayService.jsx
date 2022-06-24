import React from 'react'
import styles from './Services.module.css';

export default function DisplayService(props) {
  return (
      <div className={`${styles.service}`}>
          <div className={`${styles.icon}`}>
              <img src={props.icon} alt={props.title} />
          </div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
      </div>
  )
}
