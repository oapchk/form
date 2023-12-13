import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
// import Stepper from "@mui/material/Stepper";
// import Step from "@mui/material/Step";
// import StepButton from "@mui/material/StepButton";
import Button from "../components/Button/ButtonWrapper";
import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

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

const Questionnaire = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  // const [steps] = useState(generateSteps());
  // const [initialValues] = useState(generateInitialValues(steps));
  const handleNext = () => {
    setActiveStep((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setActiveStep((prevIndex) => prevIndex - 1);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Box>{getContent(activeStep + 1)}</Box>
      {/* <Box>
        <Button
          // maxSteps={steps.length}
          // currentIndex={currentIndex}
          // onClick={handleNext}
          // onClick={handleBack}
        ></Button>
      </Box> */}
    </>
  );
};

export default Questionnaire;
