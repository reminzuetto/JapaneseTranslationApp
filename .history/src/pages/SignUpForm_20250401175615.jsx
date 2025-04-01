import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import {
  signInWithProvider,
  GoogleAuthProvider,
  GithubAuthProvider,
  FacebookAuthProvider,
} from "/src/config/firebaseConfig.js";

// Providers array with social icons
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
      <h1 className="text-blue-600 font-bold text-4xl">Sign up with</h1>

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
          retypepassword: "",
          emailAddress: "",
          firstname: "",
          lastname: "",
          terms: false,
        }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(6, "Username must be at least 6 characters long")
            .required("Username is required"),

          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),

          retypepassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Password confirmation is required"),

          emailAddress: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),

          terms: Yup.boolean()
            .oneOf([true], "You must accept the terms and conditions")
            .required("Accepting terms is required"),
        })}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.resetForm();
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(formik) => (
          <Form
            className="p-10 w-full max-w-[600px] mx-auto"
            autoComplete="off"
          >
            <MyInput
              label="Email Address"
              type="email"
              name="emailAddress"
              placeholder="Enter your email address..."
            />
            <MyInput
              label="Username"
              name="username"
              placeholder="Enter your username..."
            />
            <MyInput
              label="Password"
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
            <MyInput
              label="Re-type Password"
              type="password"
              name="retypepassword"
              placeholder="Re-type your password..."
            />
            <div className="flex gap-4 w-full">
              <div className="w-1/3">
                <MyInput
                  label="First Name"
                  name="firstname"
                  placeholder="First name"
                />
              </div>
              <div className="w-2/3">
                <MyInput
                  label="Last Name"
                  name="lastname"
                  placeholder="Last name"
                />
              </div>
            </div>

            <MyCheckbox name="terms">
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
        )}
      </Formik>
    </div>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mt-2">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input
        className="p-4 border border-gray-300 rounded-md"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 mt-4">
      <label className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="text-sm text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

MyInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

MyCheckbox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
};

export default SignUpForm;
