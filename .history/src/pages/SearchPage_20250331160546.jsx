import React, { useState } from "react";
import SearchBar from "../components/SeachBar/SearchBar";
import SearchInfo from "../components/SearchInfo/SearchInfo";

const SearchPage = () => {
  const [selectedWord, setSelectedWord] = useState(null);

  const handleSelectWord = (word) => {
    setSelectedWord(word);
  };

  const handleClose = () => {
    setSelectedWord(null);
  };

  return (
    <div>
      <div className="mt-10">
        <SearchBar onSelectWord={handleSelectWord} />
      </div>
      {selectedWord && (
        <SearchInfo selectedWord={selectedWord} onClose={handleClose} />
      )}
    </div>
  );
};

export default SearchPage;
