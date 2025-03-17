import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import {
  signInWithProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "/src/Firebase.jsx";

const providers = [
  {
    name: "Facebook",
    icon: "/src/assets/FacebookIcon.png",
    provider: new FacebookAuthProvider(),
  },
  {
    name: "Github",
    icon: "/src/assets/GithubIcon.png",
    provider: new GithubAuthProvider(),
  },
  {
    name: "Google",
    icon: "/src/assets/GoogleIcon.png",
    provider: new GoogleAuthProvider(),
  },
];

const SignUpForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-blue-600 font-bold text-4xl">Sign in with</h1>

      <div className="flex justify-between gap-4 mt-8">
        {providers.map((p) => (
          <button
            key={p.name}
            className="w-10 h-10 mx-3 cursor-pointer"
            onClick={() => signInWithProvider(p.provider)}
          >
            <img src={p.icon} alt={p.name} />
          </button>
        ))}
      </div>

      <div className="flex items-center mt-8 w-full max-w-[500px]">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 font-semibold text-xl">Or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>
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
                firstName: "",
                lastName: "",
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
              className="p-10 w-full max-w-[600px] mx-auto"
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
              <MyInput
                name="retypepassword"
                placeholder="Re-type your password..."
                id="password"
              ></MyInput>
              <div className="flex gap-4 w-full">
                <div className="w-1/3">
                  <MyInput
                    name="firstname"
                    placeholder="First name"
                    id="firstname"
                  />
                </div>
                <div className="w-2/3">
                  <MyInput
                    name="lastname"
                    placeholder="Last name"
                    id="lastname"
                  />
                </div>
              </div>

              <MyCheckbox name="terms" id="terms">
                By signing up, you agree to our terms of service and privacy
                policy
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
    </div>
  );
};

const MyInput = ({ label, ...props }) => {
  const field = useField(props);
  return (
    <div className="flex flex-col gap-2 mt-2">
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
