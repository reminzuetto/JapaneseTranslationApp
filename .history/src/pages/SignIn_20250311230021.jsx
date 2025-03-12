import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SignInForm() {
  const [state, setState] = React.useState({ email: "", password: "" });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `You are logging in with email: ${state.email} and password: ${state.password}`
    );
    setState({ email: "", password: "" });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-center">Sign In</h1>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={state.email}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={state.password}
          onChange={handleChange}
          className="p-2 border rounded"
        />
        <a href="#" className="text-blue-500 text-sm">
          Forgot your password?
        </a>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          Sign In
        </button>
        <span className="text-center text-gray-600">Or</span>
        <div className="flex justify-center gap-4">
          <a href="#" className="p-2 border rounded-full">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="#" className="p-2 border rounded-full">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" className="p-2 border rounded-full">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
