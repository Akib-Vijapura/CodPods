import React, { useState } from "react";
import styles from "./PhoneEmailStep.module.css";

import Email from "./Email/Email";
import Phone from "./Phone/Phone";

const phoneEmailMap = {
  phone: Phone,
  email: Email,
};

const PhoneEmailStep = ({ onClickHandler }) => {
  const [type, setType] = useState("phone");
  const Type = phoneEmailMap[type];

  

  return (
    <>
      <div className={styles.cardWrapper}>
        <div>
          <div className={styles.buttonWrapper}>
            <button
              className={`${styles.tabButton} ${
                type === "phone" ? styles.activeTab : ""
              }`}
              onClick={() => {
                setType("phone");
              }}
            >
              <img src="/images/phone.png" alt="phoneIcon" />
            </button>
            <button
              className={`${styles.tabButton} ${
                type === "email" ? styles.activeTab : " "
              }`}
              onClick={() => {
                setType("email");
              }}
            >
              <img src="/images/email.png" alt="emailIcon" />
            </button>
          </div>
          <Type onClickHandler={onClickHandler} />
        </div>
      </div>
    </>
  );
};

export default PhoneEmailStep;
