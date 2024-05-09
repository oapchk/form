import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import * as React from "react";
import { Box, Container, Paper } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import Summary from "./Summary";

const InitialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  voivodeship: "",
  postalCode: "",
  address1: "",
  address2: "",
  address3: "",
  city: "",
  message: "",
  termsOfService: "false",
};
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Imię powinno być dłuższe niż 2 litery")
    .max(50, "Imię powinno być krótsze niż 50 liter")
    .required("Pole obowiązkowe"),
  lastName: Yup.string()
    .min(2, "Nazwisko powinno być dłuższe niż 2 litery")
    .max(50, "Nazwisko powinno być dłuższe niż 2 litery")
    .required("Pole obowiązkowe"),
  email: Yup.string().email("Błędny mail.").required("Pole obowiązkowe"),
  phone: Yup.string()
    .min(9)
    .max(9)
    .nullable()
    .matches(phoneRegExp, "Phone number is not valid")
    // .typeError("Podaj prawidłowy numer telefonu")
    .required("Pole obowiązkowe"),
  address1: Yup.string().required("Pole obowiązkowe"),
  address2: Yup.number()
    .min(1)
    // .typeError("Please enter a valid phone number")
    .required("Pole obowiązkowe"),
  address3: Yup.number().typeError("Please enter a valid phone number"),
  city: Yup.string()
    .min(3, "Miasto musi zawierać co najmniej 3 litery.")
    .required("Pole obowiązkowe"),
  voivodeship: Yup.string().required("Pole obowiązkowe"),
  postalCode: Yup.number().min(5).integer().required("Pole obowiązkowe"),
  message: Yup.string(),
  termsOfService: Yup.boolean()
    .oneOf([true], "The terms and conditions must be accepted.")
    .required("The terms and conditions must be accepted."),
});

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
  const isLastStep = activeStep === steps.length - 1;

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function submitForm(values, actions) {
    await sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  async function handleSubmit(values, actions) {
    console.log("Form values:", values);
    console.log("Actions:", actions);
    console.log("isLastStep:", isLastStep);

    if (isLastStep) {
      await submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setSubmitting(false);
    }
  }

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Box sx={{ width: "100%", pb: 7 }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <Container maxWidth="md" sx={{ pb: 5 }}>
        <Paper elevation={7}>
          {activeStep === steps.length ? (
            <Summary />
          ) : (
            <Formik
              initialValues={InitialFormState}
              validationSchema={formValidation}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Typography>{getContent(activeStep + 1)}</Typography>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      pb: 2,
                      paddingInline: 2,
                    }}
                  >
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    <Box sx={{ flex: "1 1 auto" }} />
                    <Button type="submit" disabled={isSubmitting}>
                      {isLastStep ? "Submit" : "Next"}
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default Questionnaire;
