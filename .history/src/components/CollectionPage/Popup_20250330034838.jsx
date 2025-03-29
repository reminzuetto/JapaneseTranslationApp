import { AiOutlineCloseSquare } from "react-icons/ai";

const Popup = ({ isOpen, setIsOpen, title, children }) => {
  if (!isOpen) return null; // Nếu popup đóng thì không render gì cả

  return (
    <div
      onClick={() => setIsOpen(false)}
      className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-lg w-64 sm:w-72 md:w-80 p-4 shadow-lg animate-dropTop"
      >
        {/* Header */}
        <div className="border-b pb-2 flex justify-between items-center">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <AiOutlineCloseSquare size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="py-3 text-sm text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Popup;
