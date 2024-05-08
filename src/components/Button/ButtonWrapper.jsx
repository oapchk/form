import { Button } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
    ...otherProps,
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;

// ButtonWrapper.js;
// import { useEffect } from "react";
// import { Button, CircularProgress } from "@mui/material";
// import { useFormikContext } from "formik";

// const ButtonWrapper = ({ maxSteps, currentIndex, handleNext, handleBack }) => {
//   const isFirstStep = currentIndex === 0;
//   const isLastStep = currentIndex === maxSteps - 1;

//   const { validateForm, handleSubmit, isSubmitting, isValid } =
//     useFormikContext();

//   useEffect(() => {
//     validateForm();
//   }, [currentIndex, validateForm]);

//   return (
//     <div>
//       {isLastStep ? (
//         <Button disabled={!isValid || isSubmitting} onClick={handleSubmit}>
//           {isSubmitting ? <CircularProgress size={14} /> : "Submit"}
//         </Button>
//       ) : (
//         <Button disabled={!isValid} onClick={handleNext}>
//           DALEJ
//         </Button>
//       )}

//       {!isFirstStep && <Button onClick={handleBack}>COFNIJ</Button>}
//     </div>
//   );
// };

// export default ButtonWrapper;
