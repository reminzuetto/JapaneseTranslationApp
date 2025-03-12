import React from "react";
import useClickOutside from "../../hooks/useClickOutside";

const Header = () => {
  const { show, setShow, nodeRef } = useClickOutside();

  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      <div className="text-xl font-bold">MyApp</div>

      <div className="flex items-center gap-4">
        <button className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500 cursor-pointer">
          Sign in
        </button>
        <button className="px-4 py-2 text-blue bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white cursor-pointer">
          Sign up
        </button>
        <div className="relative" ref={nodeRef}>
          {/* Icon thông báo */}
          <button
            className="relative p-2 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            🔔
          </button>

          {show && (
            <div className="absolute top-full min-w-[200px] translate-x-[-90%] mt-2 bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-blue-300 hover:text-white hover:shadow-lg hover:rounded-lg">
                JavaScript
              </div>
              <div className="py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-blue-300 hover:text-white hover:shadow-lg hover:rounded-lg">
                ReactJS
              </div>
              <div className="py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-blue-300 hover:text-white hover:shadow-lg hover:rounded-lg">
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
