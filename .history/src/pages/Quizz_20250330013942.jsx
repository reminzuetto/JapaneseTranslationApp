import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Quizz = ({ words }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (words.length > 0) {
      const correctAnswer = words[currentIndex].meaning;
      const options = words
        .map((word) => word.meaning)
        .filter((meaning) => meaning !== correctAnswer)
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

      options.push(correctAnswer);
      setShuffledOptions(options.sort(() => Math.random() - 0.5));
    }
  }, [currentIndex, words]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === words[currentIndex].meaning) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
  };

  if (!words || words.length === 0) {
    return <div className="text-center text-red-500">Không có từ vựng</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Quizz</h1>
      <p className="text-lg font-semibold">{words[currentIndex].word}</p>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-white transition ${
              selectedAnswer === option
                ? option === words[currentIndex].meaning
                  ? "bg-green-500"
                  : "bg-red-500"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            onClick={() => handleAnswer(option)}
            disabled={selectedAnswer !== null}
          >
            {option}
          </button>
        ))}
      </div>
      <p className="mt-4 text-lg">Điểm: {score}</p>
      <div className="mt-4 flex gap-4">
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

export default Quizz;
