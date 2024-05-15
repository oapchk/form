import { TextField, MenuItem } from "@mui/material";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

const Select = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  // const handleChange = (e) => {
  //   const { value } = e.target;
  //   setFieldValue(name, value);
  // };
  const handleChange = (e) => {
    const { value } = e.target;
    setFieldValue(name, value);
  };

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: "outlined",
    fullWidth: true,
    onChange: handleChange,
  };

  if (meta && meta.touched && meta.error) {
    configSelect.error = true;
    configSelect.helpertext = meta.error;
  }

  return (
    <TextField {...configSelect}>
      {options.map((option, id) => (
        <MenuItem key={id} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.string.isRequired,
};

export default Select;
