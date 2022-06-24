import React from 'react'
import styles from './TestimonialsCarousel.module.css';

export default function DisplayTestimonial(props) {
    console.log(props.current);
    if(props.id === props.current) { 
        return (
            <div className={`${styles.testimonial}`}>
                <img className={`${styles.img}`} src={props.img} alt='pic' />
                <p>{props.review}</p>
                <h3>{props.rating}</h3>
            </div>
        )
    }
}
