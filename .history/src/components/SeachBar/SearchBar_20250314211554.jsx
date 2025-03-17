import React from "react";
import DropdownButton from "./DropDownButton";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-800 text-white gap-2">
      <DropdownButton></DropdownButton>
      <SearchInput></SearchInput>
    </div>
  );
};

export default SearchBar;
