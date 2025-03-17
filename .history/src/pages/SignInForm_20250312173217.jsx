import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const SignInForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="text-blue-600 font-bold text-4xl">Sign in with</div>
      <div className="flex justify-between gap-4 mt-8">
        <button className="w-8 min-w-8 mx-6 cursor-pointer">
          <img src="/src/assets/FacebookIcon.png" alt="" />
        </button>
        <button className="w-8 min-w-8 mx-6 cursor-pointer">
          <img src="/src/assets/GithubIcon.png" alt="" />
        </button>
        <button className="w-8 min-w-8 mx-6 cursor-pointer">
          <img src="/src/assets/GoogleIcon.png" alt="" />
        </button>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div className="flex-1 h-[1px] bg-gray-500"></div>
        <div className="text-gray-500 font-semibold text-xl">Or</div>
        <div className="flex-1 h-[1px] bg-gray-300"></div>
      </div>

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
              className="p-4 w-full max-w-[500px] mx-auto"
              autoComplete="off"
            >
              <InputArea
                type="email"
                name="emailAddress"
                placeholder="Enter your email address..."
                id="emailAddress"
              ></InputArea>
              <InputArea
                name="password"
                placeholder="Enter your password..."
                id="password"
              ></InputArea>
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

const InputArea = ({ label, ...props }) => {
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

InputArea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default SignInForm;
