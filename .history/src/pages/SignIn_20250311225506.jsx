import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SignInForm() {
  const [state, setState] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const { email, password } = state;
    alert(`You are logged in with email: ${email} and password: ${password}`);
    setState({ email: "", password: "" });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleOnSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-96"
      >
        <h1 className="text-2xl font-bold text-center mb-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={state.email}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="w-full p-2 mb-3 border rounded"
        />
        <a href="#" className="text-sm text-blue-500 mb-3 block">
          Forgot your password?
        </a>
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
          Sign In
        </button>
        <span className="block text-center my-3 text-gray-500">Or</span>
        <div className="flex justify-center space-x-3">
          <a href="#" className="text-gray-600 text-xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="text-gray-600 text-xl">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="text-gray-600 text-xl">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
