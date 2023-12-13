// import Button from "@mui/material/Button";
// import { useFormikContext } from "formik";

// const ButtonWrapper = ({ children, ...otherProps }) => {
//   const { submitForm } = useFormikContext();

//   const handleSubmit = () => {
//     submitForm();
//   };

//   const configButton = {
//     variant: "contained",
//     color: "primary",
//     fullWidth: false,
//     onClick: handleSubmit,
//     size: "large",
//   };

//   return <Button {...configButton}>{children}</Button>;
// };

// export default ButtonWrapper;
import { useEffect } from "react";
import { Button, CircularProgress } from "@mui/material";
import { useFormikContext } from "formik";

const ButtonWrapper = ({
  maxSteps,
  currentIndex,
  onClickNext,
  onClickBack,
}) => {
  const isFirstStep = currentIndex === 0;
  const isLastStep = currentIndex === maxSteps - 1;

  const { validateForm, handleSubmit, isSubmitting, isValid } =
    useFormikContext();

  useEffect(() => {
    validateForm();
  }, [currentIndex, validateForm]);

  return (
    <div>
      {isLastStep ? (
        <Button disabled={!isValid} onClick={() => handleSubmit()}>
          {isSubmitting ? <CircularProgress size={14} /> : "Submit"}
        </Button>
      ) : (
        <Button disabled={!isValid} onClick={onClickNext}>
          DALEJ
        </Button>
      )}

      {!isFirstStep && <Button onClick={onClickBack}>COFNIJ</Button>}
    </div>
  );
};

export default ButtonWrapper;
