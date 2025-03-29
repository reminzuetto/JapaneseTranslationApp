import React, { useState, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Flashcard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const words = useMemo(() => location.state?.words || [], [location.state]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  if (words.length === 0) {
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

  const currentWord = words[currentIndex];

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Flashcard</h1>

      {/* Thẻ chứa hiệu ứng flip */}
      <div
        className="relative w-96 h-72 perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Mặt trước */}
          <div
            className={`absolute w-full h-full bg-white border border-gray-500 shadow-lg rounded-xl p-8 text-2xl font-bold flex flex-col items-center justify-center transition-opacity duration-500 ${
              flipped ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-4xl">{currentWord.word}</p>
            <p className="text-xl text-gray-500 mt-3">
              {currentWord.pronounce}
            </p>
          </div>

          {/* Mặt sau */}
          <div
            className={`absolute w-full h-full bg-white border border-gray-500 shadow-lg rounded-xl p-6 text-lg font-semibold flex flex-col justify-center transition-opacity duration-500 ${
              flipped ? "opacity-100" : "opacity-0"
            }`}
            style={{ transform: "rotateY(180deg)" }}
          ></div>
        </div>
      </div>

      <div className="mt-6 flex gap-6">
        <button
          className="bg-gray-500 text-white px-5 py-3 rounded-lg text-lg hover:bg-gray-600 transition"
          onClick={handlePrevious}
        >
          Trước
        </button>
        <button
          className="bg-blue-500 text-white px-5 py-3 rounded-lg text-lg hover:bg-blue-600 transition"
          onClick={handleNext}
        >
          Tiếp
        </button>
      </div>

      <div className="mt-6">
        <button
          className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg hover:bg-green-600 transition"
          onClick={() => navigate(`/collection/${id}`)}
        >
          Quay về Bộ Sưu Tập
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
