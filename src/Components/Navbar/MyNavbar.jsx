import React from 'react'
import styles from './Navbar.module.css';
import logo from '../../Assets/2x/logo.png';

export default function MyNavbar(props) {
    return (
        <>
            <div className={`${styles.nav}`}>
                <div className={`${styles.brand}`}>
                    <div className={`${styles.container}`}>
                        <a href="">
                            <img className={`${styles.logo}`} src={logo} alt="logo" />          
                        </a>
                    </div>
                </div>
                <div className="toggle"></div>
                <ul className={`${styles.ul}`}>
                    <li><a className={`${styles.a}`} href="#home">Home</a></li>
                    <li><a className={`${styles.a}`} href="#hotels">Places</a></li>
                    <li><a className={`${styles.a}`} href="#testimonials">Testimonials</a></li>
                    <li><a className={`${styles.a}`} href="#services">Services</a></li>
                    <div className={`${styles.dot}`}></div>
                </ul>
                <div className={`${styles.connections}`}>
                    <button onClick={props.showContactUs}>Contact Us</button>
                    {/* <button>Log in</button> */}
                </div>
            </div>
        </>
    )
}
