import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Flashcard = ({ words, option }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  if (!words || words.length === 0) {
    return <div className="text-center text-red-500">Không có từ vựng</div>;
  }

  const handleNext = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrevious = () => {
    setFlipped(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? words.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">
        {option === "flashcard" ? "Flashcard" : "Quizz"}
      </h1>
      <div
        className="w-80 h-48 flex items-center justify-center bg-white shadow-lg rounded-lg p-6 text-xl font-semibold cursor-pointer transition-transform transform"
        onClick={() => setFlipped(!flipped)}
      >
        {flipped ? words[currentIndex].meaning : words[currentIndex].word}
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          onClick={handlePrevious}
        >
          Trước
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={handleNext}
        >
          Tiếp
        </button>
      </div>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          onClick={() => navigate(-1)}
        >
          Quay lại
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate(`/collection/${id}`)}
        >
          Quay về Bộ Sưu Tập
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
