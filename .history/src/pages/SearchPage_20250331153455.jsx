import React from "react";
import SearchBar from "../components/SeachBar/SearchBar";

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mt-10 ">
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default SearchPage;
