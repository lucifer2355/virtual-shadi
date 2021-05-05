import React from "react";
import { TextField } from "@material-ui/core";

const AppTextField = ({
  label,
  name,
  variant = "outlined",
  type,
  style,
  onChange,
  value,
  rows,
  multiline,
  ...other
}) => {
  return (
    <div className='mt-4'>
      <TextField
        id={label}
        label={label}
        name={name}
        variant={variant}
        type={type}
        onChange={onChange}
        value={value}
        style={{ width: "100%" }}
        InputProps={{ style: style }}
        InputLabelProps={{ style: style }}
        multiline={multiline}
        rows={rows}
        {...other}
      />
    </div>
  );
};

export default AppTextField;
