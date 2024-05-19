// import React from "react";
import { TextField, useTheme } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);
  const theme = useTheme();

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    sx: {
      backgroundColor: theme.palette.mode === "light" ? "#F9F9FB" : "#424769",
    },
  };

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true;
    configTextfield.helpertext = meta.error;
  }

  return (
    <div>
      <TextField {...configTextfield} />
    </div>
  );
};
TextfieldWrapper.propTypes = {
  name: PropTypes.string.isRequired,
};
export default TextfieldWrapper;
