import { TextField } from "@mui/material";

const InputOutline = ({ label, value, onChange, color, error }) => {
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      error={error}
      sx={{
        mb: 2,
        width: "100%",
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: error ? "red" : color,
    },
  },
  '& .MuiInputLabel-root': {
    '&.Mui-focused': {
            color: error ? "red" : color,
          },
        },
      }}
    />
  );
};

export default InputOutline;
