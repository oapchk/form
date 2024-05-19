import { Switch, FormControlLabel } from "@mui/material";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

const SwitchWrapper = ({ name, label, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          {...field}
          {...otherProps}
          onChange={handleChange}
          // sx={{ color: "#fdd835" }}
        />
      }
      label={label}
    />
  );
};
SwitchWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
export default SwitchWrapper;
