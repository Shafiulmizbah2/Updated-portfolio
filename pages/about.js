import React from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import styles from '../styles/about.module.scss'

import Typical from "react-typical"

const about = () => {
    const router =  useRouter();

    return (
        <>  
            <Head>
                <title>About me || Shafiul Azim</title>
                <meta name="description" content="A web designer & developer.Projection of your mind" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <section className={styles.about}>
                <div className={styles.layer}>
                    <div className={styles.left}>
                        <h3>I am {''}
                            <Typical
                                loop={Infinity}
                                wrapper = "i"
                                steps={[
                                    'Shafiul Azim',1500,
                                    'a Trainee Software Engineer',1500,
                                    'a Web Designer',1500,
                                    'a Web Developer',1500,
                                ]}
                            />
                        </h3>
                        <p>Studing B.Sc in Computer Science & Engineering (last year).
Working as a “Trainee Software Engineer”.Worked in several projects.</p>
                        <button className={styles.btn} onClick={()=> router.push("/projects")}>See projects</button>

                    </div>
                    <div className={styles.right}>
                        <div className={styles.imgbox}></div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default about
