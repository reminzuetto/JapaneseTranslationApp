import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CollectionInfoItem from "../components/CollectionPage/CollectionInfoItem";

const CollectionInfoPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);

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

  if (loading) {
    return <div className="text-center text-gray-500">Đang tải...</div>;
  }

  if (!collection) {
    return (
      <div className="text-center text-red-500">Không tìm thấy bộ sưu tập</div>
    );
  }

  return (
    <div className="p-10 w-full mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {collection.collectionName}
      </h1>
      <p className="text-gray-600">Ngày tạo: {collection.createdDate}</p>
      <p className="text-gray-600">Số từ: {collection.wordCount}</p>

      <div className="mt-4 flex justify-center gap-4">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => navigate(`/flashcard/${id}`)}
        >
          FlashCard
        </button>
        <button
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate(`/quizz/${id}`)}
        >
          Quizz
        </button>
      </div>

      <div className="mt-6 w-full m-8">
        <h2 className="text-2xl font-semibold border-b pb-2">
          Danh sách từ vựng
        </h2>
        <ul className="grid grid-cols-2 gap-8 mt-4 space-y-4 ">
          {collection.words.map((word, index) => (
            <CollectionInfoItem key={index} word={word} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CollectionInfoPage;
