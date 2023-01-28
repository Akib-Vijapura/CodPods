import React, { useState } from "react";
import styles from "./Register.module.css";

// imporing all Steps components
import AvatarStep from "../Steps/AvatarStep/AvatarStep";
import NameStep from "../Steps/NameStep/NameStep";
import OtpStep from "../Steps/OtpStep/OtpStep";
import PhoneEmailStep from "../Steps/PhoneEmailStep/PhoneEmailStep";
import UsernameStep from "../Steps/UsernameStep/UsernameStep";

// Rendering all registration steps using hashMap
const steps = {
  1: PhoneEmailStep,
  2: OtpStep,
  3: NameStep,
  4: AvatarStep,
  5: UsernameStep,
};

const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step];

  const onClickHandler = () => {
    setStep(step + 1);
  };

  return (
    <>
      <Step onClickHandler={onClickHandler}/>
    </>
  );
};

export default Register;
