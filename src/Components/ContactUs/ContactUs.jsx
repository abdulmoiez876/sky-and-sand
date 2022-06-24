import React from 'react'
import styles from './ContactUs.module.css';
import Modal from '../UI/Modal';

export default function ContactUs(props) {
  const submitHandler = (event) => {
    event.preventDefault();
    props.hideContactUs();
  }
  return (
    <Modal onClick={props.hideContactUs}>
        <form className={`${styles.form}`} action="">
            <textarea className={`${styles.textArea}`} name=""></textarea>
            <div className={`${styles.btn}`}>
                <button className={`${styles.close}`} onClick={props.hideContactUs}>CLose</button>
                <button className={`${styles.submit}`} onClick={submitHandler}>Submit</button>
            </div>
        </form>
    </Modal>
  )
}
