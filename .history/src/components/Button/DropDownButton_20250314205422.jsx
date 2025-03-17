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
      {/* Nút chọn dropdown */}
      <button
        className="w-full flex items-center justify-between bg-red-500 text-white text-lg font-semibold px-4 py-3 rounded-md hover:bg-red-600 transition"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected}</span>
        <i className={`fa ${isOpen ? "fa-caret-up" : "fa-caret-down"}`} />
      </button>

      {/* Danh sách dropdown */}
      {isOpen && (
        <ul className="absolute left-0 right-0 mt-2 bg-red-500 text-white text-lg rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-4 py-3 hover:bg-red-600 cursor-pointer transition"
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
};

export default DropdownButton;
