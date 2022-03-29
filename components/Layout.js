import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authStateChange } from "../store/authSlice";
import Header from "./Header";

const Layout = (props) => {
  const dispatch = useDispatch();
  useEffect(() => dispatch(authStateChange()), []);

  return (
    <>
      <Header />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
