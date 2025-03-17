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
          .max(20, "First name must be at most 20 characters long")
          .required("First name is required"),

        password: Yup.string()
          .max(10, "Last name must be at most 10 characters long")
          .required("Last name is required"),
      })}
      onSubmit={(values, actions) => {
        setTimeout(() => {
          actions.resetForm(
            {
              username: "",
              password: "",
              emailAddress: "",
              intro: "",
              job: "",
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
              label="First name"
              name="username"
              placeholder="Enter your first name..."
              id="username"
            ></MyInput>
            <MyInput
              label="Last name"
              name="password"
              placeholder="Enter your last name..."
              id="password"
            ></MyInput>
            <MyInput
              type="email"
              label="Email address"
              name="emailAddress"
              placeholder="Enter your email address..."
              id="emailAddress"
            ></MyInput>
            <MyTextarea
              label="Intro"
              name="intro"
              placeholder="Introducing yourself..."
              id="intro"
            ></MyTextarea>
            <MySelect label="Job" name="job" id="job">
              <option value="">Select your job</option>
              <option value="frontend">Frontend developer</option>
              <option value="backend">Backend developer</option>
              <option value="fullstack">Fullstack developer</option>
            </MySelect>
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

// destructuring props: { label, ...props }
// rest parameter: ...props
// useField hook: const field = useField(props)
// spread operator: {...field[0]}

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

const MyTextarea = ({ label, ...props }) => {
  const field = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 border border-gray-300 rounded-md h-[150px] resize-none"
        {...field[0]}
        {...props}
      />
      {field[1].touched && field[1].error ? (
        <div className="text-sm text-red-500">{field[1].error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const field = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
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

MyTextarea.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

MySelect.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

MyCheckbox.propTypes = {
  children: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default SignInForm;
