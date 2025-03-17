import React from "react";

const SearchInput = () => {
  return (
    <div className="flex items-center border border-blue-400 rounded-full px-4 py-2 w-full max-w-lg shadow-sm">
      {/* Icon tìm kiếm */}
      <i className="fa fa-search text-gray-400 mr-3" />

      {/* Ô nhập liệu */}
      <input
        type="text"
        placeholder="日本, nihon, Nhật Bản"
        className="flex-1 outline-none text-gray-600 text-lg placeholder-gray-400 bg-transparent"
      />

      {/* Nhóm nút chức năng */}
      <div className="flex space-x-2 bg-gray-100 p-1 rounded-lg">
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <i className="fa fa-language text-blue-500" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <i className="fa fa-pencil text-blue-500" />
        </button>
        <button className="p-2 hover:bg-gray-200 rounded-md">
          <i className="fa fa-microphone text-blue-500" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
