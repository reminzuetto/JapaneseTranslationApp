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
            .oneOf([Yup.ref('password'), null], "Passwords must match")
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
          <Form className="p-10 w-full max-w-[600px] mx-auto" autoComplete="off">
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
