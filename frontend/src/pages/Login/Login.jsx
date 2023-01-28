import React, { useState } from "react";

// imporing all Steps components
import PhoneEmailStep from "../Steps/PhoneEmailStep/PhoneEmailStep";
import OtpStep from "../Steps/OtpStep/OtpStep";

// Rendering all registration steps using hashMap
const steps = {
  1: PhoneEmailStep,
  2: OtpStep,
};

const Login = () => {
  const [step, useStep] = useState(1);
  const Step = steps[step];

  const onClickHandler = () => {
    useStep(step + 1);
  };

  return (
    <>
      <Step onClickHandler={onClickHandler} />
    </>
  );
};

export default Login;
