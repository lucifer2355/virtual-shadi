import React from "react";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "./Form";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .label("Email")
    .required(),
  password: Yup.string()
    .label("Password")
    .required(),
});

const LoginForm = () => {
  const handleSubmit = () => {
    console.log("login");
  };

  return (
    <div>
      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          label='Email'
          name='email'
          type='email'
          style={{ fontSize: "1.2rem" }}
        />
        <FormField
          label='Password'
          name='password'
          type='password'
          style={{ fontSize: "1.2rem" }}
        />

        <SubmitButton title='Login' isLoading={false} />
      </Form>
    </div>
  );
};

export default LoginForm;
