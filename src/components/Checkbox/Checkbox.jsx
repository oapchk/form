import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { useField, useFormikContext } from "formik";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";

const CheckboxWrapper = ({ name, label, legend }) => {
  const { setFieldValue } = useFormikContext();
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };

  const configCheckbox = {
    ...field,
    onChange: handleChange,
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
    configFormControl.helperText = meta.error;
  }

  return (
    <FormControl {...configFormControl}>
      <FormLabel component="legend">{legend}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox {...configCheckbox} />}
          label={label}
        />
        {meta.touched && meta.error ? (
          <Typography variant="caption" style={{ color: "#cddc39" }}>
            {meta.error}
          </Typography>
        ) : null}
      </FormGroup>
    </FormControl>
  );
};

CheckboxWrapper.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // legend: PropTypes.string.isRequired,
};
export default CheckboxWrapper;
