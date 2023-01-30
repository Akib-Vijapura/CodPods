import React, { useState } from "react";
import Card from "../../../components/shared/Card/Card";
import TextInput from "../../../components/shared/TextInput/TextInput";
import Button from "../../../components/shared/Button/Button";

import styles from "./OtpStep.module.css"

const OtpStep = ({ onClickHandler }) => {
  const [otp, setOtp] = useState("");

  const onChangeHandler = (e) => {
    setOtp(e.target.value);
  };

  return (
    <>
      <div className={styles.cardWrapper}>
        <Card title={"🔒 Enter the code we just sent you"}>
          <TextInput value={otp} onChange={onChangeHandler} />
          <div className={styles.actionButtonWrapper}>
            <Button>Next</Button>
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
        </Card>
      </div>
    </>
  );
};

export default OtpStep;
