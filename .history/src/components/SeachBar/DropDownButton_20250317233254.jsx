import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faArrowsAltH,
} from "@fortawesome/free-solid-svg-icons";

function DropdownButton({ options, defaultSelected }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(defaultSelected || options[0]); // Giá trị mặc định
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

  const swapValues = () => {
    if (typeof selected === "object" && selected.from && selected.to) {
      setSelected({ from: selected.to, to: selected.from });
    }
  };

  return (
    <div className="relative w-auto mx-10" ref={dropdownRef}>
      {/* Nút dropdown */}
      <button
        className="flex items-center justify-between bg-blue-500 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {typeof selected === "object" && selected.from && selected.to
            ? `${selected.from} ↔️ ${selected.to}`
            : selected}
        </span>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="ml-2"
        />
      </button>

      {/* Danh sách lựa chọn */}
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-blue-300 text-white text-lg rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-400 cursor-pointer transition"
              onClick={() => {
                setSelected(option);
                setIsOpen(false);
              }}
            >
              <span>
                {typeof option === "object" && option.from && option.to
                  ? `${option.from} ↔️ ${option.to}`
                  : option}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* Nút đổi vị trí (nếu dữ liệu là dạng cặp) */}
      {typeof selected === "object" && selected.from && selected.to && (
        <button
          onClick={swapValues}
          className="mt-2 w-full bg-gray-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-gray-600 transition flex items-center justify-center"
        >
          <FontAwesomeIcon icon={faArrowsAltH} className="mr-2" />
          Đổi chỗ
        </button>
      )}
    </div>
  );
}

export default DropdownButton;
