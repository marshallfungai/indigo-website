import React from "react";
import Link from "next/link";
import LocaleSwitcher from "./locale-switcher";
import styles from './navbar.module.css';


export default function Navbar() {
    return (
        <ul className='nav d-flex justify-content-end'>
            <li>
                <a target='_blank' href='https://www.facebook.com/indigobarnicosia/'>
                    <i className='fa-brands fa-facebook-f' />
                </a>
            </li>
            <li>
                <a target='_blank' href='https://www.instagram.com/indigobarnicosia/'>
                    <i className='fa-brands fa-instagram' />
                </a>
            </li>
       
        </ul>
    );
}