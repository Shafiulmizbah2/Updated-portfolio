import React, { useState } from "react";
import Head from "next/head";
import styles from "../styles/contact.module.scss";
import Logo from "../components/Logo";
import { useRouter } from "next/router";
import emailjs from "@emailjs/browser";

const pofile = "https://www.facebook.com/profile.php?id=100012008747536";

const Contact = () => {
  const { push } = useRouter();
  const [newMessage, setNewMessage] = useState({ email: "", message: "" });
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newMessage.email &&
      newMessage.message &&
      newMessage.email.trim(" ") &&
      newMessage.message.trim(" ")
    ) {
      setError("");

      emailjs
        .sendForm(
          "service_94etrxo",
          "template_ri68hri",
          e.target,
          "QQbOPt4EPcSeJYqjW"
        )
        .then(
          (result) => {
            showStatus("Message send successfully.Thank you.");
            // console.log(result.text);
          },
          (error) => {
            showStatus(error.text);
          }
        );

      setNewMessage({ email: "", message: "" });
      e.target.reset();
    } else {
      setError("Please Enter valid input!");
    }
  };

  const showStatus = async (msg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 2000);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewMessage({ ...newMessage, [name]: value });
  };

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
          <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
            <Logo />

            {error ? (
              <div className={styles.error}>{error}</div>
            ) : (
              <div className={styles.error}> </div>
            )}

            <input
              className={styles.input}
              type="email"
              placeholder="Your Email"
              value={newMessage.email}
              name="email"
              onChange={(e) => handleChange(e)}
            />

            <textarea
              className={styles.input}
              placeholder="Your message"
              value={newMessage.message}
              name="message"
              onChange={(e) => handleChange(e)}
            />

            <button className="btn">Send message</button>
            <div className={styles.or}>Or</div>
            <p className={styles.social} onClick={() => push(pofile)}>
              Connect with <span>Facebook</span>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
