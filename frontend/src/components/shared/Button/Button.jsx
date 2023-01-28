import React from "react";
import styles from "./Button.module.css";
const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick} className={styles.button}>
        <span>{children}</span>
        <img
          className={styles.arrow}
          src="/images/arrow-forward.png"
          alt="arrow-forward"
        />
      </button>
    </>
  );
};
export default Button;
