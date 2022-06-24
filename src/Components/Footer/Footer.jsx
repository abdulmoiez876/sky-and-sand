import React from 'react'
import {BsLinkedin, BsFacebook} from 'react-icons/bs';
import {AiFillInstagram} from 'react-icons/ai';
import styles from './Footer.module.css';

export default function Footer() {
    let date = new Date().getFullYear();
    return (
        <footer className={`${styles.footer}`}>
            <span className={`${styles.copyright}`}>Copyright &copy; {date}, Sky & Sand</span>
            <ul className={`${styles.ul}`}>
                <li><a className={`${styles.a}`} href="#home">Home</a></li>
                <li><a className={`${styles.a}`} href="#hotels">Places</a></li>
                <li><a className={`${styles.a}`} href="#testimonials">Testimonials</a></li>
                <li><a className={`${styles.a}`} href="#services">Services</a></li>
            </ul>
            <ul className={`${styles.list} ${styles.ul}`}>
                <li>
                    <BsLinkedin/>
                </li>
                <li>
                    <BsFacebook/>
                </li>
                <li>
                    <AiFillInstagram/>
                </li>
            </ul>
        </footer>
    )
}
