import React from "react";

const SearchInfo = ({ selectedWord, onClose }) => {
  if (!selectedWord) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold mb-2">
          {selectedWord.word} ({selectedWord.pronounce})
        </h2>
        <p className="text-gray-600">
          Nghĩa: {selectedWord.meanings.join(", ")}
        </p>

        {selectedWord.relevants && selectedWord.relevants.length > 0 && (
          <p className="mt-2">
            <strong>Từ liên quan:</strong> {selectedWord.relevants.join(", ")}
          </p>
        )}

        {selectedWord.word_uses && selectedWord.word_uses.length > 0 && (
          <div className="mt-2">
            <strong>Cách dùng:</strong>
            {selectedWord.word_uses.map((use, index) => (
              <div key={index} className="mt-1">
                <p>
                  <strong>Loại từ:</strong> {use.word_type}
                </p>
                <p>
                  <strong>Nghĩa:</strong> {use.word_means.join(", ")}
                </p>
                <p>
                  <strong>Ví dụ:</strong> {use.example_jp} - {use.example_vi}
                </p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default SearchInfo;
