import React from "react";

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center h-20 bg-gray-800 text-white gap-2">
      <DropdownButton />
      <SearchInput />
    </div>
  );
};

export default SearchBar;
