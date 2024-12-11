import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PropTypes from 'prop-types';

BasicInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default function BasicInput({label, value, onChange, disabled, color}) {
  return (
    <Box
      component="form"
      sx={{ 
        width: '100%',
        "& > :not(style)": { 
          width: "100%",
          m: 0,
        } 
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label={label}
        variant="outlined"
        size="normal"
        value={value}
        onChange={onChange}
        disabled={disabled}
        sx={{
          width: "100%",
          "& .MuiInputLabel-root": { color: color },
          "& .MuiInputBase-input": { color: color },
          "& .MuiOutlinedInput-notchedOutline": { borderColor: color },
          "& .MuiOutlinedInput-root:not(.Mui-disabled):hover .MuiOutlinedInput-notchedOutline": {
            borderColor: color,
            borderWidth: "2px",
          },
          "& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgba(255, 255, 255, 0.3)",
          },
          "& .Mui-disabled .MuiInputBase-input": {
            color: "rgba(255, 255, 255, 0.3)",
          },
          "& .Mui-disabled .MuiInputLabel-root": {
            color: "rgba(255, 255, 255, 0.3)",
          },
        }}
      />
    </Box>
  );
}
