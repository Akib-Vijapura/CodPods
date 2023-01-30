import React, { useState } from "react";
import Button from "../../../../components/shared/Button/Button";
import Card from "../../../../components/shared/Card/Card";
import TextInput from "../../../../components/shared/TextInput/TextInput";

import styles from "../PhoneEmailStep.module.css";

const Email = ({ onClickHandler }) => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <Card title={"✉️ Enter your email id"}>
        <TextInput
          value={email}
          onChange={onChangeHandler}
          placeholder="demo@mail.com"
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

export default Email;
