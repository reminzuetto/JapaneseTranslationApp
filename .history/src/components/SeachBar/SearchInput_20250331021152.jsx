import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  faSearch,
  faLanguage,
  faPencil,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const languageOptions = [
  { from: "Nhật", to: "Việt", placeholder: "日本, nihon, Nhật Bản" },
  { from: "Việt", to: "Nhật", placeholder: "Nhật Bản, nihon, 日本" },
  { from: "Nhật", to: "Anh", placeholder: "日本, nihon, Japan" },
  { from: "Anh", to: "Nhật", placeholder: "Japan, nihon, 日本" },
];

const SearchBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  return (
    <div className="flex items-center space-x-4">
      <DropdownButton
        options={languageOptions}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <SearchInput placeholder={selectedLanguage.placeholder} />
    </div>
  );
};

const DropdownButton = ({ options, selectedLanguage, setSelectedLanguage }) => {
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

  return (
    <div className="relative w-auto mx-10" ref={dropdownRef}>
      <button
        className="flex items-center justify-between bg-blue-500 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-600 transition cursor-pointer whitespace-nowrap"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {selectedLanguage.from} - {selectedLanguage.to}
        </span>
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
                setSelectedLanguage(option);
                setIsOpen(false);
              }}
            >
              <span>
                {option.from} - {option.to}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const SearchInput = ({ placeholder }) => {
  return (
    <div className="flex items-center border border-blue-400 rounded-full px-4 w-full max-w-[800px] shadow-sm">
      <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 outline-none text-gray-600 text-lg placeholder-gray-400 bg-transparent"
      />
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <FontAwesomeIcon icon={faLanguage} className="text-blue-500" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <FontAwesomeIcon icon={faPencil} className="text-blue-500" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <FontAwesomeIcon icon={faMicrophone} className="text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
