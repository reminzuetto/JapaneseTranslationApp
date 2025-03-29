import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({ setIsOpenPopup, title, children }) => {
  return (
    <div
      onClick={() => setIsOpenPopup(false)}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg w-[300px] p-5 shadow-lg animate-fadeIn"
      >
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={() => setIsOpenPopup(false)}
            className="text-gray-500 hover:text-gray-800"
          >
            <AiOutlineClose size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="py-4">{children}</div>

        {/* Footer */}
        <div className="border-t pt-2 text-right">
          <button
            onClick={() => setIsOpenPopup(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
