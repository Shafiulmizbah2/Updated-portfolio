import React from 'react'
import styles from "../styles/navbar.module.scss";
import Navbox from './Navbox';

import { toggleMenu } from "../store/generalSlice"
import { useDispatch } from 'react-redux';

import Logo from './Logo';

const Header = () => {
    const dispatch = useDispatch();
    return (
        <header className={styles.header}>
            <nav  className={styles.nav}>
                
                <Logo />               

                <div className={styles.menu} onClick={()=> dispatch(toggleMenu())}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </div>


                <Navbox/>
            </nav>
        </header>
    )
}

export default Header
