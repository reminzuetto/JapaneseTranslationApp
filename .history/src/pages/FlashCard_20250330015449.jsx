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
      <h1 className="text-2xl font-bold mb-4">Flashcard</h1>

      {/* Thẻ chứa hiệu ứng flip */}
      <div
        className="relative w-80 h-48 perspective-1000"
        onClick={() => setFlipped(!flipped)}
      >
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Mặt trước */}
          <div className="absolute w-full h-full bg-white border border-gray-500 shadow-lg rounded-lg p-6 text-xl font-semibold flex flex-col items-center justify-center backface-hidden">
            <p className="text-3xl font-bold">{currentWord.word}</p>
            <p className="text-lg text-gray-500 mt-2">
              {currentWord.pronounce}
            </p>
          </div>

          {/* Mặt sau */}
          <div className="absolute w-full h-full bg-white border border-gray-500 shadow-lg rounded-lg p-6 text-xl font-semibold flex flex-col items-center justify-center rotate-y-180 backface-hidden">
            <p className="text-xl font-bold text-gray-700">Nghĩa:</p>
            <ul className="mt-2">
              {currentWord.word_uses[0].word_means.map((mean, index) => (
                <li key={index} className="text-lg text-gray-800">
                  {mean}
                </li>
              ))}
            </ul>
            <p className="mt-2 text-sm text-gray-600">
              📖 {currentWord.word_uses[0].example_jp}
            </p>
            <p className="text-sm text-gray-600">
              👉 {currentWord.word_uses[0].example_vi}
            </p>
          </div>
        </div>
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

      <div className="mt-4">
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
