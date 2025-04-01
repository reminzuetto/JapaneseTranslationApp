import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";
import { useState } from "react";
import axios from "axios";

const SignInForm = () => {
  const [user, setUser] = useState(null);

  const handleSignIn = async (values, actions) => {
    try {
      // Gửi yêu cầu đăng nhập đến backend
      const response = await axios.post("/api/login", {
        email: values.emailAddress,
        password: values.password,
      });

      // Nếu đăng nhập thành công, lưu thông tin người dùng vào state
      if (response.status === 200) {
        setUser(response.data); // Lưu thông tin người dùng, ví dụ: { avatar, username }
      }
      actions.setSubmitting(false);
    } catch (error) {
      console.error("Login error:", error);
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-blue-600 font-bold text-4xl">Sign in with</h1>
      {/* Giữ lại phần đăng nhập qua các provider */}
      <div className="flex justify-between gap-4 mt-8">
        {/* Các provider như Facebook, Google, Github */}
      </div>

      <div className="flex items-center mt-8 w-full max-w-[500px]">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 font-semibold text-xl">Or</span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <Formik
        initialValues={{ emailAddress: "", password: "" }}
        validationSchema={Yup.object({
          emailAddress: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
        })}
        onSubmit={handleSignIn}
      >
        {({ isSubmitting }) => (
          <Form className="p-4 w-full max-w-[600px] mx-auto" autoComplete="off">
            <InputArea
              type="email"
              name="emailAddress"
              placeholder="Enter your email..."
            />
            <InputArea
              type="password"
              name="password"
              placeholder="Enter your password..."
            />
            <div className="text-right">
              <a
                href="/forgot-password"
                className="text-blue-400 font-normal underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-4 bg-blue-500 font-semibold rounded-lg text-white mt-2 hover:bg-blue-600 disabled:opacity-50"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {user && (
        <div className="mt-4 flex items-center gap-4">
          <img
            src={user.avatar}
            alt="User Avatar"
            className="w-12 h-12 rounded-full"
          />
          <span>{user.username}</span>
        </div>
      )}

      <p className="mt-4">
        Don't have an account?
        <a href="/signup" className="text-blue-400 font-normal underline ml-2">
          Sign up
        </a>
      </p>
    </div>
  );
};

const InputArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="flex flex-col gap-2 pb-1">
      {label && <label htmlFor={props.id || props.name}>{label}</label>}
      <input
        className={`p-4 border rounded-md autofill:none ${
          meta.touched && meta.error ? "border-red-500" : "border-gray-300"
        }`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <div className="text-sm text-red-500">{meta.error}</div>
      )}
    </div>
  );
};

InputArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export default SignInForm;
