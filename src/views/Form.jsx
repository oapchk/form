import React from "react";
import Step1 from "./Step1";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
const steps = ["Twoje dane", "Styl życia", "Ankieta", "Wynik"];

function getContent(step) {
  switch (step) {
    case 1:
      return <Step1 />;
    case 2:
      return <Step2 />;
    case 3:
      return <Step3 />;
    default:
      return <Step4 />;
  }
}

const Form = () => {
  const [activeStep, setActiveStep] = useState(0);
  const selectedValidationSchema = validationSchema[activeStep];
  const isLast = activeStep === steps.length - 1;
  return (
    <div>
      {" "}
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </div>
  );
};

export default Form;
