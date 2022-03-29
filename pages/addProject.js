import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/contact.module.scss";
import Logo from "../components/Logo";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "../components/form/Form";

import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

import { db, storage } from "../utils/firebase.config";
import { useDispatch, useSelector } from "react-redux";
import { getallCategory } from "../store/generalSlice";
import router from "next/router";

const validfationSchema = Yup.object().shape({
  category: Yup.string().required().label("Category"),
  projectName: Yup.string().required().label("Project Name"),
  photo: Yup.mixed().required().label("Photo"),
  link: Yup.string().required().label("Link"),
});

const Addproject = () => {
  const { user } = useSelector((state) => state.auth);
  const { allCatagory } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  //   console.log(allCatagory);

  useEffect(() => {
    if (!user) router.push("/projects");
  }, []);

  const uploadTask = (file) => {
    return new Promise(function (resolve, reject) {
      if (!file) return;

      const storageRef = ref(
        storage,
        `project-img/${new Date().toISOString()}${file.name}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`${prog}%`);
        },
        (error) => {
          console.log("ERRRRR!!!!!!");
          alert("Error inside upload file function", error);
          reject();
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // console.log("File available at", downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
  };

  useEffect(() => {
    dispatch(getallCategory());
  }, []);

  if (!user) return null;

  return (
    <>
      <Head>
        <title>Contact me || Shafiul Azim</title>
        <meta
          name="description"
          content="A web designer & developer.Projection of your mind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.contact} style={{ height: "100vh" }}>
        <Formik
          initialValues={{
            category: "",
            projectName: "",
            photo: null,
            link: "",
          }}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            const cat = allCatagory.filter(
              (cat) => cat.name === values.category
            );
            const catId = cat[0].id;

            try {
              //upload photo and get download url
              const photoUrl = await uploadTask(values.photo);
              //add to firesotre
              const data = {
                name: values.projectName,
                category: values.category,
                photoUrl: photoUrl,
                link: values.link,
              };

              // console.log(data);
              const colRef = doc(collection(db, "allProject"));

              await setDoc(colRef, data);
              setSubmitting(false);
              resetForm({
                category: "",
                projectName: "",
                photo: null,
                link: "",
              });
            } catch (error) {
              console.log(error.message);
            }
          }}
          validationSchema={validfationSchema}
        >
          {({
            handleChange,
            handleBlur,
            errors,
            setFieldTouched,
            setFieldValue,
            touched,
            values,
            isSubmitting,
            handleSubmit,
          }) => (
            <div className={styles.layer}>
              <form className={styles.form}>
                <Logo />
                <Form.Item>
                  <Form.Input
                    list="category"
                    className={styles.input}
                    placeholder="Select category"
                    name="category"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.category}
                  />
                  <Form.Datalist id="category">
                    {allCatagory.map((cat) => (
                      <Form.Option value={cat.name} key={cat.id} />
                    ))}
                  </Form.Datalist>
                  <Form.Error>
                    {errors.category && touched.category && errors.category}
                  </Form.Error>
                </Form.Item>

                <Form.Item>
                  <Form.Input
                    className={styles.input}
                    placeholder="Project name"
                    name="projectName"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.projectName}
                  />
                  <Form.Error>
                    {errors.projectName &&
                      touched.projectName &&
                      errors.projectName}
                  </Form.Error>
                </Form.Item>

                <Form.Item>
                  <Form.Input
                    className={styles.input}
                    placeholder="Photo url"
                    name="photo"
                    type="file"
                    onChange={(e) =>
                      setFieldValue("photo", e.currentTarget.files[0])
                    }
                    onBlur={handleBlur}
                    // value={values.photo}
                  />
                  <Form.Error>
                    {errors.photo && touched.photo && errors.photo}
                  </Form.Error>
                </Form.Item>

                <Form.Item>
                  <Form.Input
                    className={styles.input}
                    placeholder="Website url"
                    name="link"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.link}
                  />
                  <Form.Error>
                    {errors.link && touched.link && errors.link}
                  </Form.Error>
                </Form.Item>

                <button
                  className="btn"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                  }}
                >
                  Add project
                </button>
              </form>
            </div>
          )}
        </Formik>
      </section>
    </>
  );
};

export default Addproject;
