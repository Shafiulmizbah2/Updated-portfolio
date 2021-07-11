import { useRouter } from 'next/router';
import React from 'react'
import styles from "../styles/navbar.module.scss";

const Logo = () => {
    const {push} = useRouter();
    return (
        <div  className={styles.logobox} onClick={()=> push("/")}>
            <span className={styles.S}>S</span>
            <span className={styles.A}>A</span>
        </div>
    )
}

export default Logo
