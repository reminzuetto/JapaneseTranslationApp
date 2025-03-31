import { useState, useEffect } from "react";

const VocabularySearch = ({ id, searchQuery, searchType }) => {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("/japanese_vocab.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedCollection = data.collections.find(
          (col) => col.collectionID === id
        );
        setCollection(selectedCollection);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải dữ liệu:", error);
        setLoading(false);
      });
  }, [id]);

  useEffect(() => {
    if (!collection) return;

    let filteredWords = collection.words.filter((wordObj) => {
      if (searchType === "jp-vi") {
        return (
          wordObj.word.includes(searchQuery) ||
          wordObj.pronounce.includes(searchQuery)
        );
      } else if (searchType === "vi-jp") {
        return wordObj.word_uses.some((use) =>
          use.word_means.some((mean) => mean.includes(searchQuery))
        );
      }
      return false;
    });

    setResults(filteredWords);
  }, [searchQuery, searchType, collection]);

  if (loading) return <p>Đang tải...</p>;

  return (
    <div>
      <h2>{collection?.collectionName}</h2>
      <ul>
        {results.map((wordObj, index) => (
          <li key={index}>
            <strong>
              {wordObj.word} ({wordObj.pronounce})
            </strong>
            <p>
              Nghĩa:{" "}
              {wordObj.word_uses
                .map((use) => use.word_means.join(", "))
                .join("; ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default VocabularySearch;
