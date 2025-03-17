import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

function DropdownButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Call to action");
  const dropdownRef = useRef(null);

  const options = [
    { text: "New project", icon: "fa-plus-circle" },
    { text: "View profile", icon: "fa-user" },
    { text: "Settings", icon: "fa-cog" },
    { text: "Logout", icon: "fa-sign-out-alt" },
  ];

  // Đóng dropdown khi click ngoài vùng dropdown
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

  return (
    <div className="relative w-40 mx-10 fixed" ref={dropdownRef}>
      <button
        className="flex items-center justify-between bg-blue-500 text-white text-lg font-semibold px-4 py-3 rounded-md hover:bg-blue-600 transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <FontAwesomeIcon
          icon={isOpen ? faCaretUp : faCaretDown}
          className="ml-2"
        />
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-blue-300 text-white text-lg rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-3 hover:bg-blue-400 cursor-pointer transition"
              onClick={() => {
                setSelected(option.text);
                setIsOpen(false);
              }}
            >
              <span>{option.text}</span>
              <i className={`fa ${option.icon}`} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default DropdownButton;
