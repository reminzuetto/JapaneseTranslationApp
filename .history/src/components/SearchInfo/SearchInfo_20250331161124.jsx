import React from "react";

const SearchInfo = ({ selectedWord, onClose }) => {
  if (!selectedWord) return null;

  return (
    <div className=" inset-0 mt-3">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-5xl font-semibold text-blue-500 size mb-3">
          {selectedWord.word}
        </h2>
        <p className="text-gray-600 text-lg mb-3">
          [ {selectedWord.pronounce} ]
        </p>
        <p className="text-gray-700 text-lg mb-3">
          <strong>Nghĩa:</strong> {selectedWord.meanings.join(", ")}
        </p>

        {selectedWord.relevants?.length > 0 && (
          <p className="mt-3 text-gray-700 text-lg">
            <strong>Từ liên quan:</strong> {selectedWord.relevants.join(", ")}
          </p>
        )}

        {selectedWord.word_uses?.length > 0 && (
          <div className="mt-3 text-gray-700 text-lg">
            {/* <strong>Cách dùng:</strong> */}
            {selectedWord.word_uses.map((use, index) => (
              <div
                key={index}
                className="mt-2 p-3 border rounded-lg bg-gray-100"
              >
                <p>
                  <strong>Loại từ:</strong> {use.word_type}
                </p>
                <p>
                  <strong>Nghĩa:</strong> {use.word_means.join(", ")}
                </p>
                <p>
                  <strong>Ví dụ:</strong>
                </p>
                <p className="italic text-blue-600 ">{use.example_jp}</p>
                <p className="text-gray-800">{use.example_vi}</p>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-4 px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Đóng
        </button>
      </div>
    </div>
  );
};

export default SearchInfo;
