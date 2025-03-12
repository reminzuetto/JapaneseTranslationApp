import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignInForm from "../login/SignIn";
import SignUpForm from "../login/SignUp";

const Header = () => {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  return (
    <Router>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-xl font-bold">MyApp</div>

        <div className="flex items-center gap-4">
          {/* Điều hướng Sign In / Sign Up */}
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-700">
              Sign Up
            </button>
          </Link>

          {/* Icon Thông báo */}
          <div className="relative">
            <div className="relative p-2 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer">
              🔔
            </div>
          </div>
        </div>
      </header>

      {/* Routes để hiển thị Sign In / Sign Up */}
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignInForm from "../login/SignIn";
import SignUpForm from "../login/SignUp";

const Header = () => {
  const [type, setType] = useState("signIn");

  const handleOnClick = (text) => {
    if (text !== type) {
      setType(text);
    }
  };

  return (
    <Router>
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-xl font-bold">MyApp</div>

        <div className="flex items-center gap-4">
          {/* Điều hướng Sign In / Sign Up */}
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="px-4 py-2 text-white bg-gray-500 rounded-lg hover:bg-gray-700">
              Sign Up
            </button>
          </Link>

          {/* Icon Thông báo */}
          <div className="relative">
            <div className="relative p-2 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer">
              🔔
            </div>
          </div>
        </div>
      </header>

      {/* Routes để hiển thị Sign In / Sign Up */}
      <div className="container mt-4">
        <Routes>
          <Route path="/login" element={<SignInForm />} />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Header;
