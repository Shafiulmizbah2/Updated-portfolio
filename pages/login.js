import React from "react";
import Head from "next/head";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "../components/form/Form";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase.config";
import styles from "../styles/contact.module.scss";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { Login as signIn } from "../store/authSlice";
import router from "next/router";

const validfationSchema = Yup.object().shape({
  email: Yup.string().email().required().label("Email"),
  password: Yup.string().required().label("Password"),
});

const Login = () => {
  const dispatch = useDispatch();
  const { error, user } = useSelector((state) => state.auth);

  if (user) router.push("/projects");

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
      <section className={styles.contact}>
        <div className={styles.layer}>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values, { setSubmitting }) => {
              await dispatch(signIn(values.email, values.password));
              setSubmitting(false);
            }}
            validationSchema={validfationSchema}
          >
            {({
              handleChange,
              handleBlur,
              errors,
              setFieldTouched,
              touched,
              values,
              isSubmitting,
              handleSubmit,
            }) => (
              <form className={styles.form} onSubmit={handleSubmit}>
                <Logo />
                <Form.Text>Login As Admin</Form.Text>
                <br />
                {error && (
                  <Form.Error style={{ marginBottom: "10px" }}>
                    {error}
                  </Form.Error>
                )}
                <Form.Item>
                  <Form.Input
                    className={styles.input}
                    placeholder="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <Form.Error>
                    {errors.email && touched.email && errors.email}
                  </Form.Error>
                </Form.Item>

                <Form.Item>
                  <Form.Input
                    className={styles.input}
                    type="password"
                    placeholder="password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <Form.Error>
                    {errors.password && touched.password && errors.password}
                  </Form.Error>
                </Form.Item>

                <button className="btn" type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
};

export default Login;
