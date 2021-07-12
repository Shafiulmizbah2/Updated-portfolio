import React from 'react'
import Head from 'next/head'
import styles from "../styles/projects.module.scss";
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router'

const projects = () => {
    const {push} = useRouter();
    const { work } = useSelector((state)=> state.general);
    

    return (
        <>  
        <Head>
            <title>Projects || Shafiul Azim</title>
            <meta name="description" content="A web designer & developer.Projection of your mind" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <section className={styles.projects}>
            <div className={styles.layer}>

                {
                    work.catagory.map((cat)=>{

                        return(
                            <div className={styles.catagory} key={cat.id}>

                            <h1 className={styles.hero}>{cat.title}</h1>

                            <div className={styles.cardbox}>

                                {
                                    cat.work.map((card)=>{

                                        return(
                                            <div className={styles.card} key={card.id} style={{backgroundImage : `url(${card.img})` }}
                                            onClick={()=> push(card.link)}
                                            >
                                                <div>
                                                    <p>{card.name}</p>
                                                </div>
                                            </div>
                                        )

                                    })
                                }

                            </div>
                        </div>
                        )

                    })
                }
                
            </div>
        </section>

        </>
    )
}

export default projects
