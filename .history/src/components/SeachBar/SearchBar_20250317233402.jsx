import React from "react";
import DropdownButton from "./DropDownButton";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  // Danh sách ngôn ngữ dịch
  const languagePairs = [
    { from: "Nhật", to: "Việt" },
    { from: "Việt", to: "Nhật" },
    { from: "Nhật", to: "Anh" },
    { from: "Anh", to: "Nhật" },
  ];

  return (
    <div className="flex items-center space-x-4">
      {/* Truyền danh sách vào DropdownButton */}
      <DropdownButton
        options={languagePairs}
        defaultSelected={languagePairs[0]}
      />
      <SearchInput />
    </div>
  );
};

export default SearchBar;
