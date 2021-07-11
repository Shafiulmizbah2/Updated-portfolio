import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Portfolio || Shafiul Azim</title>
        <meta name="description" content="A web designer & developer.Projection of your mind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.home}>
        <div className={styles.layer}>
            <h1 className={styles.hero}>Projection of your mind</h1>
            <h3 className={styles.subhero}>Where your imagination becomes true</h3>
            <button className={styles.btn} onClick={()=> router.push("/contact")}>Contact me</button>
        </div>
      </section>

    </div>
  )
}
