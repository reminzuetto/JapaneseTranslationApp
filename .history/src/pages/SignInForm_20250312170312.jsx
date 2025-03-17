import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const SignInForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-blue-600 font-bold text-4xl">Sign in with</div>
      <Formik
        initialValues={{
          emailAddress: "",
          password: "",
        }}
        validationSchema={Yup.object({
          emailAddress: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),

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
                type="email"
                name="emailAddress"
                placeholder="Enter your email address..."
                id="emailAddress"
              ></MyInput>
              <MyInput
                name="password"
                placeholder="Enter your password..."
                id="password"
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
    </div>
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

MyInput.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default SignInForm;
