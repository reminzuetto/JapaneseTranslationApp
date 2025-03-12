import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGooglePlusG,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function SignUpForm() {
  const [state, setState] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    alert(
      `You signed up with name: ${state.name}, email: ${state.email}, and password: ${state.password}`
    );
    setState({ name: "", email: "", password: "" });
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96">
      <form onSubmit={handleOnSubmit} className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-center">Create Account</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={state.name}
          onChange={handleChange}
          className="p-2 border rounded"
        />
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
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          Sign Up
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

export default SignUpForm;
