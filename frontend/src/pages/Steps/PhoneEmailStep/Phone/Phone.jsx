import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import TextInput from "../../../../components/shared/TextInput/TextInput";

import styles from "../PhoneEmailStep.module.css";

const Phone = ({ onClickHandler }) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const onChangeHandler = (e) => {
    setPhoneNumber(e.target.value);
  };

  return (
    <>
      <Card title={"☎️ Enter your phone number"}>
        <TextInput
          type="text"
          value={phoneNumber}
          onChange={onChangeHandler}
          placeholder="+91 9876543210"
        />
        <div>
          <div className={styles.actionButtonWrapper}>
            <Button onClick={onClickHandler}>Next</Button>
          </div>
          <div>
            <p className={styles.termsConditionsParagrah}>
              By entering your credentials, you're agreeing to our{" "}
              <span>
                <a href="">Terms of Service </a>
              </span>
              and{" "}
              <span>
                <a href="">Privacy Policy</a>
              </span>
              . Thank you!
            </p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Phone;
