import React, { useEffect } from "react";
import Link from "next/link";
import router, { useRouter } from "next/router";
import styles from "../styles/navbar.module.scss";
import { useSelector } from "react-redux";

import { toggleMenu } from "../store/generalSlice";
import { useDispatch } from "react-redux";
import { Login, Logout } from "../store/authSlice";

const Navbox = () => {
  const { pathname } = useRouter();
  const dispatch = useDispatch();
  const { isMenuOpen } = useSelector((state) => state.general);
  const { auth } = useSelector((state) => state);
  return (
    <ul
      className={
        isMenuOpen ? `${styles.navbox} ${styles.shownav}` : `${styles.navbox}`
      }
    >
      <li
        className={
          pathname === "/" ? ` active ${styles.navitem}` : styles.navitem
        }
        onClick={() => dispatch(toggleMenu())}
      >
        <Link href="/" className={styles.navlink}>
          Home
        </Link>
      </li>

      <li
        className={
          pathname === "/projects"
            ? ` active ${styles.navitem}`
            : styles.navitem
        }
        onClick={() => dispatch(toggleMenu())}
      >
        <Link href="/projects" className={styles.navlink}>
          Projects
        </Link>
      </li>
      <li
        className={
          pathname === "/contact" ? ` active ${styles.navitem}` : styles.navitem
        }
        onClick={() => dispatch(toggleMenu())}
      >
        <Link href="/contact" className={styles.navlink}>
          Contact me
        </Link>
      </li>

      {auth.user ? (
        <li
          className={styles.navitem}
          onClick={() => {
            dispatch(Logout());
            dispatch(toggleMenu());
          }}
        >
          <a className={styles.navlink}>Logout</a>
        </li>
      ) : (
        <li
          className={
            pathname === "/login" ? ` active ${styles.navitem}` : styles.navitem
          }
          onClick={() => {
            dispatch(toggleMenu());
            router.push("/login");
          }}
        >
          <a className={styles.navlink}>Login</a>
        </li>
      )}
    </ul>
  );
};

export default Navbox;
