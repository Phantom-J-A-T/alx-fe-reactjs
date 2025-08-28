// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema with explicit string() calls
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        // Simulate async submit
        setTimeout(() => {
          console.log("Form submitted:", values);
          setStatus({ success: "Registration successful!" });
          resetForm();
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field id="username" name="username" type="text" />
            <ErrorMessage name="username" component="span" className="error" />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="span" className="error" />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field id="password" name="password" type="password" />
            <ErrorMessage name="password" component="span" className="error" />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          {status?.success && <p className="success">{status.success}</p>}
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
