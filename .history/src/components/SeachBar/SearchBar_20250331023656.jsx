import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/data") // Thay thế URL này bằng API thật
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setQuery(value);

    if (!data || value.trim() === "") {
      setResults([]);
      return;
    }

    const filteredWords = data.collections.flatMap((collection) =>
      collection.words.filter(
        (word) =>
          word.word.toLowerCase().includes(value) ||
          word.pronounce.toLowerCase().includes(value) ||
          word.relevants.some((rel) => rel.toLowerCase().includes(value))
      )
    );

    setResults(filteredWords);
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <Input
        type="text"
        placeholder="Tìm kiếm từ vựng..."
        value={query}
        onChange={handleSearch}
        className="mb-4"
      />
      <div className="space-y-2">
        {results.length > 0 ? (
          results.map((word, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <h3 className="font-bold text-lg">
                  {word.word} ({word.pronounce})
                </h3>
                <p className="text-sm">
                  {word.word_uses[0].word_means.join(", ")}
                </p>
                <p className="text-xs text-gray-500">
                  {word.word_uses[0].example_jp} -{" "}
                  {word.word_uses[0].example_vi}
                </p>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-gray-500">Không tìm thấy kết quả.</p>
        )}
      </div>
    </div>
  );
}
