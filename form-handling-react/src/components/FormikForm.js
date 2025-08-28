// formikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required"),
  email: Yup.string()
    .email("Email is invalid")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        setTimeout(() => {
          console.log("Form data submitted:", values);
          setStatus({ success: "Registration successful!" });
          resetForm();
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ status, isSubmitting }) => (
        <Form>
          <div>
            <label htmlFor="username">Username:</label>
            <Field type="text" id="username" name="username" />
            <ErrorMessage
              name="username"
              component="span"
              className="error"
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage
              name="email"
              component="span"
              className="error"
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage
              name="password"
              component="span"
              className="error"
            />
          </div>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Registering..." : "Register"}
          </button>

          {status && status.success && (
            <p className="success">{status.success}</p>
          )}
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
