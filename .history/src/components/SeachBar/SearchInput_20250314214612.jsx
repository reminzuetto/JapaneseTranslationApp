import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLanguage,
  faPencil,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";

const SearchInput = () => {
  return (
    <div className="flex items-center border border-blue-400 rounded-full px-4 w-full max-w-[800px] shadow-sm">
      <FontAwesomeIcon icon={faSearch} className="text-gray-400 mr-3" />

      {/* Ô nhập liệu */}
      <input
        type="text"
        placeholder="日本, nihon, Nhật Bản"
        className="flex-1 outline-none text-gray-600 text-lg placeholder-gray-400 bg-transparent"
      />

      {/* Nhóm nút chức năng */}
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

export default SearchInput;
