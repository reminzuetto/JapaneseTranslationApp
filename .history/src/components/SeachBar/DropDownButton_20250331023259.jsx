import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretUp,
  faCaretDown,
  // faArrowsAltH,
} from "@fortawesome/free-solid-svg-icons";

const DropdownButton = ({ options, selectedLanguage, setSelectedLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/japanese_vocab.json") // Thay thế URL này bằng API thật
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (!data || value.trim() === "") {
      setResults([]);
      return;
    }

    const filteredWords = data.collections.flatMap((collection) =>
      collection.words.filter(
        (word) =>
          word.word.includes(value) ||
          word.pronounce.includes(value) ||
          word.relevants.some((rel) => rel.includes(value))
      )
    );

    setResults(filteredWords);
  };

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

export default DropdownButton;
