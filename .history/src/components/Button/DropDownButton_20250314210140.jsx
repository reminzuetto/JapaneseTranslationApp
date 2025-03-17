import { useState, useRef, useEffect } from "react";

const DropdownButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Call to action");
  const dropdownRef = useRef(null);

  const options = [
    { text: "New project", icon: "fa-plus-circle" },
    { text: "View profile", icon: "fa-user" },
    { text: "Settings", icon: "fa-cog" },
    { text: "Logout", icon: "fa-circle" },
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
    <div className="relative w-64 mx-auto" ref={dropdownRef}>
      {/* Nút dropdown */}
      <div
        className="w-full flex items-center justify-between bg-blue-500 text-white text-lg font-semibold px-4 py-3 rounded-md hover:bg-blue-600 transition cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="dropdown__selected">{selected}</span>
        <i
          className={`fa fa-caret-down dropdown__caret ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Danh sách dropdown */}
      <ul
        className={`absolute left-0 right-0 mt-2 bg-blue-200 text-white text-lg rounded-md shadow-lg z-10 transition-all duration-200 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center justify-between px-4 py-3 hover:bg-blue-300 hover:rounded-lg cursor-pointer transition"
            onClick={() => {
              setSelected(option.text);
              setIsOpen(false);
            }}
          >
            <span className="dropdown__text">{option.text}</span>
            <i className={`fa ${option.icon} dropdown__icon`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownButton;
