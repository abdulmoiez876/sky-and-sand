import React from 'react'
import styles from './Hotels.module.css';
// import img from '../../images/2.jpg';

export default function DisplayHotel(props) {
    // const img = props.img;
  return (
    <div className={`${styles.hotelContainer}`}>
        <div className="visuals">
            <img className={`${styles.img}`} src={props.img} alt={props.name} />
        </div>
        <div className="info">
            <div>
                <h3>{props.name}</h3>
            </div>
            <div className="location">
                <h3>{props.city}, {props.country}</h3>
            </div>
            <div className="contact">
                <p>{props.contact}</p>
            </div>
            <div className="rate">
                <h2>{props.rate}/Night</h2>
            </div>
                <a className={`${styles.link}`} href={props.link}>Visit Now!</a>
        </div>
    </div>
  )
}
