import React, { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/projects.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Login } from "../store/authSlice";
import { getallCategory, getAllProjects } from "../store/generalSlice";

const Projects = () => {
  const router = useRouter();
  const { work } = useSelector((state) => state.general);
  const { auth, general } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { allCatagory } = general;

  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getallCategory());
  }, []);

  return (
    <>
      <Head>
        <title>Projects || Shafiul Azim</title>
        <meta
          name="description"
          content="A web designer & developer.Projection of your mind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.projects}>
        <div className={styles.layer}>
          {allCatagory?.map((cat, i) => {
            return (
              <div className={styles.catagory} key={cat.id}>
                <div className={styles["hero-box"]}>
                  <h1 className={styles.hero}>{cat.name}</h1>
                  {auth.user && i === 0 && (
                    <button
                      className={styles.addBtn}
                      onClick={() => router.push("/addProject")}
                    >
                      Add new project
                    </button>
                  )}
                </div>

                <div className={styles.cardbox}>
                  {work?.map((project) => {
                    if (project.category === cat.name)
                      return (
                        <div
                          className={styles.card}
                          key={project.id}
                          style={{
                            backgroundImage: `url(${project.photoUrl})`,
                          }}
                          onClick={() => router.push(project.link)}
                        >
                          <div>
                            <p>{project.name}</p>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Projects;
