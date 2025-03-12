import React from "react";

const SignUpForm = () => {
  return (
    <div className="sign-up-container">
      <form className="bg-white p-8 flex flex-col items-center">
        <h1 className="font-bold text-xl mb-4">Sign Up</h1>
        <input
          className="bg-gray-200 p-3 w-full mb-4"
          type="text"
          placeholder="Name"
        />
        <input
          className="bg-gray-200 p-3 w-full mb-4"
          type="email"
          placeholder="Email"
        />
        <input
          className="bg-gray-200 p-3 w-full mb-4"
          type="password"
          placeholder="Password"
        />
        <button className="bg-red-500 text-white py-2 px-6 rounded-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
