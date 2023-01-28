import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const mainStyle = {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    display: "flex",
    alignItems : 'center'
  };


  return (
    <>
      <nav className={`${styles.navbar} container`}>
        <Link style={mainStyle} to="/">
          <span>CodePods</span>
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
