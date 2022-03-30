import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/about.module.scss";
import Typical from "react-typical";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Portfolio || Shafiul Azim</title>
        <meta
          name="description"
          content="A web designer & developer.Projection of your mind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.about}>
        <div className={styles.layer}>
          <div className={styles.left}>
            <h3>
              Hello,
              <br />
              <span>
                I am {""}
                <Typical
                  loop={Infinity}
                  wrapper="i"
                  steps={[
                    "Shafiul Azim",
                    1500,
                    "a Software Engineer",
                    1500,
                    "a React developer",
                    1500,
                    "React Native developer",
                    1500,
                    "Next JS developer",
                    1500,
                  ]}
                />
              </span>
            </h3>
            <p style={{ lineHeight: 1.5, letterSpacing: "1px" }}>
              Studing B.Sc in Computer Science & Engineering (last year). I had
              around 2 years of experience working with React eco-system.As well
              as React Native and Next Js.I worked in different projects as per
              company requirement.I love to enlarge my skills.
            </p>
            <div className={styles.actionContainer}>
              <button
                className={styles.btn}
                onClick={() => router.push("/projects")}
              >
                See projects
              </button>
              <button
                className={styles.btn2}
                onClick={() => router.push("/contact")}
              >
                Contact me
              </button>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.imgbox}></div>
          </div>
        </div>
      </section>
    </div>
  );
}
