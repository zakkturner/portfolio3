import React from "react";
import styles from "./layout.module.scss";
import Nav from "../nav/nav";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
