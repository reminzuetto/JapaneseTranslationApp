import React from "react";
import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const { show, setShow, nodeRef } = useClickOutside();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">MyApp</div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500">
          Sign in
        </button>
        <button className="px-4 py-2 text-blue bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
          Sign up
        </button>
        <div className="relative" ref={nodeRef}>
          <div
            className="relative p-2 rounded-full  bg-blue-200 hover:bg-blue-400 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            🔔{" "}
          </div>
          {show && (
            <div className="p-5 border-gray-200 rounded-lg absolute top-full right-0 w-full bg-white shadow-lg">
              <div className="py-3 border-b border-b-gray-200 cursor-pointer ">
                JavaScript
              </div>
              <div className="py-3 border-b border-b-gray-200 cursor-pointer">
                ReactJS
              </div>
              <div className="py-3 border-b border-b-gray-200 cursor-pointer">
                VueJS
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
