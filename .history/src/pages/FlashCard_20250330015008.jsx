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

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Flashcard</h1>
      <div
        className="w-80 h-48 flex items-center justify-center bg-white border border-gray-500 shadow-lg rounded-lg p-6 text-xl font-semibold cursor-pointer transition-transform transform"
        onClick={() => setFlipped(!flipped)}
      >
        {!flipped ? (
          <div className="text-center">
            <p className="text-3xl font-bold">{words[currentIndex].word}</p>
            <p className="text-lg text-gray-500 mt-2">
              {words[currentIndex].pronounce}
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-xl font-bold text-gray-700">Nghĩa:</p>
            <ul className="mt-2">
              {words[currentIndex].word_means.map((mean, index) => (
                <li key={index} className="text-lg text-gray-800">
                  {mean}
                </li>
              ))}
            </ul>
          </div>
        )}
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
