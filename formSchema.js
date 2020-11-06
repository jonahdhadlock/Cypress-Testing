import React from "react";
import * as Yup from 'yup';
import Form from './Form';

let schema = yup.object().shape({
  name: yup.string().required("Name is a required field."),
  email: yup.string().required("Email is a required field.").email(),
  password: yup.string().required("Please enter your password")
    ),
  checkbox: yup.boolean()
});

export default formSchema