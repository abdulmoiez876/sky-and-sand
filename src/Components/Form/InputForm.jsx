import React from 'react'
import styles from './InputForm.module.css';

export default function InputForm(props) {
    return (
        <form action="">
            <input type="email" name="email" placeholder="Enter Your Email Here"/>
            <input type='password' name="password" placeholder="Enter Your Password Here"/>
            <input type='password' name="confirmPassword" placeholder="Re-enter Your Password Here"/>
            <button>Sign Up</button>
        </form>
    )
}