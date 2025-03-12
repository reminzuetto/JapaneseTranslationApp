import React from "react";

const SignInForm = () => {
  return (
    <div className="sign-in-container">
      <form className="bg-white p-8 flex flex-col items-center">
        <h1 className="font-bold text-xl mb-4">Sign In</h1>
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
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
