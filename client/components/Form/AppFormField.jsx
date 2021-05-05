import React from "react";
import { useFormikContext } from "formik";

import AppTextField from "../AppTextField";

const AppFormField = ({
  label,
  name,
  width,
  type,
  variant,
  rows,
  multiline,
  style,
  ...otherProps
}) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <>
      <AppTextField
        label={label}
        name={name}
        type={type}
        variant={variant}
        multiline={multiline}
        rows={4}
        style={style}
        onChange={(text) => setFieldValue(name, text.target.value)}
        value={values[name]}
        {...otherProps}
      />
    </>
  );
};

export default AppFormField;
