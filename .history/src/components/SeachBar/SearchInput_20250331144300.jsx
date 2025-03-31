import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLanguage,
  faPencil,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const SearchInput = ({ placeholder }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/japanese_search.json")
      .then((response) => response.json())
      .then((json) => setData(json.vocabulary))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
    } else {
      const filtered = data.filter(
        (item) =>
          item.word.includes(query) ||
          item.pronounce.includes(query) ||
          item.meanings.some((meaning) => meaning.includes(query))
      );
      setResults(filtered);
    }
  }, [query, data]);

  return (
    <div className="w-full max-w-[800px]">
      <div className="flex items-center border border-blue-400 rounded-full px-4 shadow-sm">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />
        <input
          type="text"
          placeholder={placeholder}
          className="flex-1 outline-none text-gray-600 text-lg placeholder-gray-400 bg-transparent"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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
      {results.length > 0 && (
        <ul className="mt-2 border border-gray-300 rounded-lg bg-white shadow-md cursor-pointer">
          {results.map((item, index) => (
            <li
              key={index}
              className="p-2 border-b last:border-none hover:bg-gray-100"
            >
              <strong>
                {item.word} ({item.pronounce})
              </strong>
              : {item.meanings.join(", ")}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchInput;
