import Button from "@mui/material/Button";
import { useFormikContext } from "formik";

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    color: "primary",
    fullWidth: false,
    onClick: handleSubmit,
    size: "large",
  };

  return <Button {...configButton}>{children}</Button>;
};

export default ButtonWrapper;
