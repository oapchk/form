import { Slider, Box } from "@mui/material";
import { useField, useFormikContext } from "formik";
import PropTypes from "prop-types";

const SliderWrapper = ({ name, ...otherProps }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(name);

  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  return (
    <div>
      <Box width={300}>
        <Slider
          {...field}
          {...otherProps}
          aria-labelledby={name}
          valueLabelDisplay="auto"
          onChange={handleChange}
          sx={{ color: "#3f7cac" }}
        />
      </Box>
    </div>
  );
};
SliderWrapper.propTypes = {
  name: PropTypes.string.isRequired,
};
export default SliderWrapper;
