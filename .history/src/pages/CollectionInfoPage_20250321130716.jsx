import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CollectionInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    fetch("/japanese_vocab.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedCollection = data.collections.find(
          (col) => col.collectionID === id
        );
        setCollection(selectedCollection);
      })
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, [id]);

  if (!collection) {
    return <div>Đang tải...</div>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">{collection.collectionName}</h1>
      <p className="text-gray-600">Ngày tạo: {collection.createdDate}</p>
      <p className="text-gray-600">Số từ: {collection.wordCount}</p>

      <div className="mt-4 flex gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => navigate(`/flashcard/${id}`)}
        >
          FlashCard
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => navigate(`/quizz/${id}`)}
        >
          Quizz
        </button>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold">Danh sách từ vựng</h2>
        <ul className="mt-2 list-disc pl-6">
          {collection.words.map((word, index) => (
            <li key={index} className="mt-2">
              <strong>{word.word}</strong> ({word.pronounce}) -{" "}
              {word.word_uses[0].word_means.join(", ")}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionInfoPage;
