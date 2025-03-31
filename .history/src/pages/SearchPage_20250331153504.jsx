import React from "react";
import SearchBar from "../components/SeachBar/SearchBar";
import SearchInfo from "../components/SearchInfo/SearchInfo";

const SearchPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="mt-10 ">
        <SearchBar></SearchBar>
      </div>
      <SearchInfo></SearchInfo>
    </div>
  );
};

export default SearchPage;
