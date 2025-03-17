import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function LanguageSelector({ label, value, onChange, options }) {
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

  return (
    <div className="relative w-auto mx-10" ref={dropdownRef}>
      <label className="block text-gray-700 font-medium mb-1">{label}</label>
      <button
        className="flex items-center justify-between bg-blue-500 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer w-40"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedLabel}</span>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="ml-2"
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-blue-300 text-white text-lg rounded-md shadow-lg z-10">
          {options.map((option) => (
            <li
              key={option.value}
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-400 cursor-pointer transition"
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
