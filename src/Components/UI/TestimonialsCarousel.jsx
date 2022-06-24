import React, {useState} from 'react';
import TestimonialApi from './TestimonialApi';
import {AiFillCaretLeft, AiFillCaretRight} from 'react-icons/ai';
import styles from './TestimonialsCarousel.module.css';
import DisplayTestimonial from './DisplayTestimonial';

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(1);
  const max = TestimonialApi.length;

  return (
    <div id='testimonials'>
      <h2 className={`${styles.sectionBreaker}  ${styles.h2}`}>Testimonials</h2>
        <div className={`${styles.slide}`}>
          <div className={`${styles.leftArrow}`} onClick={() => {
              if(current-1 === 0) {
                setCurrent(max);
              }
              else {
                setCurrent (prev => prev-1)
              }
          }}><AiFillCaretLeft/>
          </div>
        <div className={`${styles.slider}`}>
          {
            TestimonialApi.map((testimonial) => {
              return (
                <DisplayTestimonial
                  key = {testimonial.id}
                  id = {testimonial.id}
                  review = {testimonial.review}
                  img = {testimonial.img}
                  rating = {testimonial.rating}
                  current = {current}
                />
              )
            })
          }
        </div>
          <div className={`${styles.rightArrow}`} onClick={ () => {
              if(current+1 === max+1) {
                setCurrent(1);
              }
              else {
                setCurrent(prev => prev + 1)
              }
          }
            
          }
          ><AiFillCaretRight/>
          </div>
        </div>
    </div>
  )  
}
