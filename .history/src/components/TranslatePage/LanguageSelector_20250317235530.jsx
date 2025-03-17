import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function LanguageSelector({ type, value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLabel =
    options.find((option) => option.value === value)?.label || "Chọn ngôn ngữ";

  // Xác định màu nền theo loại (From/To)
  const bgColor = type === "from" ? "bg-blue-500" : "bg-white";
  const hoverColor =
    type === "from" ? "hover:bg-blue-600" : "hover:bg-green-600";

  return (
    <div className="relative w-auto mx-10" ref={dropdownRef}>
      {/* <label className="block text-gray-700 font-medium mb-1">
        {type === "from" ? "From" : "To"}
      </label> */}
      <button
        className={`flex items-center justify-between ${bgColor} text-white font-medium px-4 py-3 rounded-lg ${hoverColor} ${textColor} transition cursor-pointer w-40`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="ml-2"
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-gray-200 text-gray-900 text-lg rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center justify-between px-4 py-3 hover:bg-gray-300 cursor-pointer transition"
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              <span>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
