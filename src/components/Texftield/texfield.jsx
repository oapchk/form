// import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";
import PropTypes from "prop-types";

const TextfieldWrapper = ({ name, ...otherProps }) => {
  const [field, meta] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
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
