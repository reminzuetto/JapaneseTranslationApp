import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const SignUpForm = () => {
  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
        emailAddress: "",
        terms: false,
      }}
      validationSchema={Yup.object({
        username: Yup.string()
          .min(6, "Username must be at lest 6 characters long")
          .required("Username is required"),

        password: Yup.string()
          .min(8, "Password must be at most 8 characters long")
          .required("Password is required"),
        emailAddress: Yup.string()
          .email("Invalid email address")
          .required("Email address is required"),
        terms: Yup.boolean().oneOf(
          [true],
          "You must accept the terms and conditions"
        ),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm(
            {
              username: "",
              password: "",
              emailAddress: "",
              terms: false,
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
              type="email"
              name="emailAddress"
              placeholder="Enter your email address..."
              id="emailAddress"
            ></MyInput>
            <MyInput
              label="Password"
              name="password"
              placeholder="Enter your password..."
              id="password"
            ></MyInput>
            <MyInput
              label="Re-type password"
              name="retypepassword"
              placeholder="Enter your password..."
              id="password"
            ></MyInput>
            <MyInput
              label="Username"
              name="username"
              placeholder="Enter your username..."
              id="username"
            ></MyInput>

            <MyCheckbox name="terms" id="terms">
              I accept the terms and conditions
            </MyCheckbox>
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

const MyCheckbox = ({ children, ...props }) => {
  const field = useField(props);
  return (
    <div className="flex flex-col gap-2 mt-4 h">
      <label className="flex items-center gap-2 mt-4 h">
        <input type="checkbox" {...field[0]} {...props}></input>
        {children}
      </label>
      {field[1].touched && field[1].error ? (
        <div className="text-sm text-red-500">{field[1].error}</div>
      ) : null}
    </div>
  );
};

MyInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

MyCheckbox.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default SignUpForm;
