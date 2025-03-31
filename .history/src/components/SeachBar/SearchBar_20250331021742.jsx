import React, { useState } from "react";
import DropdownButton from "./DropdownButton";
import SearchInput from "./SearchInput";

const languageOptions = [
  { from: "Nhật", to: "Việt", placeholder: "日本, nihon, Nhật Bản" },
  { from: "Việt", to: "Nhật", placeholder: "Nhật Bản, nihon, 日本" },
  { from: "Nhật", to: "Anh", placeholder: "日本, nihon, Japan" },
  { from: "Anh", to: "Nhật", placeholder: "Japan, nihon, 日本" },
];

const SearchBar = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  return (
    <div className="flex items-center space-x-4">
      <DropdownButton
        options={languageOptions}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <SearchInput placeholder={selectedLanguage.placeholder} />
    </div>
  );
};

export default SearchBar;
