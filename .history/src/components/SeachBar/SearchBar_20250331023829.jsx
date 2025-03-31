import { useState, useEffect } from "react";
import DropdownButton from "./DropDownButton";
import SearchInput from "./SearchInput";

const languageOptions = [
  { from: "Nhật", to: "Việt", placeholder: "日本, nihon, Nhật Bản" },
  { from: "Việt", to: "Nhật", placeholder: "Nhật Bản, nihon, 日本" },
];

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);

  useEffect(() => {
    fetch("/api/data") // Thay thế URL này bằng API thật
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (value) => {
    setQuery(value);

    if (!data || value.trim() === "") {
      setResults([]);
      return;
    }

    const filteredWords = data.collections.flatMap((collection) =>
      collection.words.filter(
        (word) =>
          word.word.toLowerCase().includes(value.toLowerCase()) ||
          word.pronounce.toLowerCase().includes(value.toLowerCase()) ||
          word.relevants.some((rel) =>
            rel.toLowerCase().includes(value.toLowerCase())
          )
      )
    );

    setResults(filteredWords);
  };

  return (
    <div className="flex items-center space-x-4 w-full max-w-lg mx-auto">
      <DropdownButton
        options={languageOptions}
        selectedLanguage={selectedLanguage}
        setSelectedLanguage={setSelectedLanguage}
      />
      <SearchInput
        placeholder={selectedLanguage.placeholder}
        query={query}
        setQuery={handleSearch}
      />
      <div className="space-y-2 w-full">
        {results.length > 0 ? (
          results.map((word, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h3 className="font-bold text-lg">
                {word.word} ({word.pronounce})
              </h3>
              <p className="text-sm">
                {word.word_uses[0].word_means.join(", ")}
              </p>
              <p className="text-xs text-gray-500">
                {word.word_uses[0].example_jp} - {word.word_uses[0].example_vi}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Không tìm thấy kết quả.</p>
        )}
      </div>
    </div>
  );
}
