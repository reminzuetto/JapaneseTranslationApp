import React from "react";
import DropdownButton from "./DropDownButton";
import SearchInput from "./SearchInput";

const SearchBar = () => {
  return (
    <div className="flex ">
      <DropdownButton></DropdownButton>
      <SearchInput></SearchInput>
    </div>
  );
};

export default SearchBar;
