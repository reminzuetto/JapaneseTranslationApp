import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(6, "Username must be at lest 6 characters long")
          .required("Username is required"),

        password: Yup.string()
          .min(8, "Password must be at most 8 characters long")
          .required("Password is required"),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm(
            {
              username: "",
              password: "",
            },
            { isSubmitting: false }
          );
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }, 1000);
      }}
    >
      {(formik) => {
        console.log(formik);
        return (
          <Form
            className="p-10 w-full max-w-[500px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="Username"
              name="username"
              placeholder="Enter your Username..."
              id="username"
            ></MyInput>
            <MyInput
              label="Password"
              name="password"
              placeholder="Enter your Password..."
              id="password"
            ></MyInput>
            <MyInput
              type="email"
              label="Email address"
              name="emailAddress"
              placeholder="Enter your email address..."
              id="emailAddress"
            ></MyInput>
            <div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full p-4 bg-blue-500 font-semibold rounded-lg text-white mt-4"
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const field = useField(props);

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        className="p-4 border border-gray-300 rounded-md"
        {...field[0]}
        {...props}
      />
      {field[1].touched && field[1].error ? (
        <div className="text-sm text-red-500">{field[1].error}</div>
      ) : null}
    </div>
  );
};

//useField hook

MyInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default SignInForm;
