import React from "react";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from "./Form";

const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required()
    .label("First Name"),
  lastName: Yup.string()
    .label("Last Name")
    .required(),
  email: Yup.string()
    .email()
    .label("Email")
    .required(),
  password: Yup.string()
    .label("Password")
    .required()
    .min(6),
});

const RegistrationForm = () => {
  const handleSubmit = () => {
    console.log("submit");
  };

  return (
    <div>
      <Form
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormField
          label='Fist Name'
          name='firstName'
          type='text'
          style={{ fontSize: "1.2rem" }}
        />
        <FormField
          label='Last Name'
          name='lastName'
          type='text'
          style={{ fontSize: "1.2rem" }}
        />
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

        <SubmitButton title='Create Account' isLoading={false} />
      </Form>
    </div>
  );
};

export default RegistrationForm;
