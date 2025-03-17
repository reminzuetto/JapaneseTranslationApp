import { Formik, Form, useField } from "formik";
import PropTypes from "prop-types";
import * as Yup from "yup";

const SignInForm = () => {
  return <div></div>;
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
