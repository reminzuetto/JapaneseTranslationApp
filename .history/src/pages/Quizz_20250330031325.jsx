import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const Quizz = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const words = useMemo(
    () => location.state?.words || [],
    [location.state?.words]
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [shuffledOptions, setShuffledOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const generateOptions = useCallback(() => {
    if (words.length === 0) return;

    const correctAnswer = words[currentIndex].pronounce;
    let incorrectAnswers = words
      .map((word) => word.pronounce)
      .filter((pronounce) => pronounce !== correctAnswer);

    incorrectAnswers = incorrectAnswers
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [...incorrectAnswers, correctAnswer].sort(
      () => Math.random() - 0.5
    );
    setShuffledOptions(options);
  }, [currentIndex, words]);

  useEffect(() => {
    generateOptions();
  }, [generateOptions]);

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    if (answer === words[currentIndex].pronounce) {
      setScore((prevScore) => prevScore + 1);
    }
    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentIndex + 1 >= words.length) {
        setFinished(true);
      } else {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 1000);
  };

  if (words.length === 0) {
    return <div className="text-center text-red-500">Không có từ vựng</div>;
  }

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-3xl font-medium italic text-zinc-700 mb-6">Quizz</h1>
      {finished ? (
        <p className="text-xl font-bold text-green-500">Finished</p>
      ) : (
        <>
          <p className=" text-xl italic text-gray-800">
            Câu {currentIndex + 1} / {words.length}
          </p>
          <p className="text-5xl text-blue-500 font-semibold pt-4">
            {words[currentIndex].word}
          </p>
        </>
      )}
      <div className="mt-4 grid grid-cols-2 gap-4">
        {!finished &&
          shuffledOptions.map((option, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-lg text-white transition ${
                selectedAnswer === option
                  ? option === words[currentIndex].pronounce
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
      <p className="mt-4 text-lg">
        Điểm: {score} / {words.length}
      </p>
      <div className="mt-4 flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          onClick={() => navigate(`/collection/${id}`)}
        >
          Return
        </button>
      </div>
    </div>
  );
};

export default Quizz;
