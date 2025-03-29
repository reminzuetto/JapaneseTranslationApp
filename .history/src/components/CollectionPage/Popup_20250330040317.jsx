import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({ setIsOpenPopup, title, children }) => {
  return (
    <div
      onClick={() => setIsOpenPopup(false)}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg w-80 p-5 shadow-lg animate-fade-in"
      >
        {/* Header */}
        <div className="border-b pb-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={() => setIsOpenPopup(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <AiOutlineClose size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
