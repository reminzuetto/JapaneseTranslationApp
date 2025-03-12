import React from "react";
import { Link } from "react-router-dom";
import useClickOutside from "../../hooks/useClickOutside";
import notifications from "/src/Data.js";

const Header = () => {
  const { show, setShow, nodeRef } = useClickOutside();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>

      <div className="flex items-center gap-4">
        <Link to="/login">
          <button className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500">
            Sign in
          </button>
        </Link>

        <Link to="/signup">
          <button className="px-4 py-2 text-blue bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
            Sign up
          </button>
        </Link>

        <div className="relative" ref={nodeRef}>
          <div
            className="relative p-2 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            🔔
          </div>

          {show && (
            <div className="absolute top-full -left-2 min-w-[200px] translate-x-[-100%] mt-2 bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="p-4 text-gray-400 text-center">
                Không có thông báo mới
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
