import React from "react";

const CollectionInfoItem = ({ word }) => {
  return (
    <li className="bg-gray-100 p-4 rounded-lg shadow w-[500px]">
      <p className="text-lg font-semibold">
        {word.word} ({word.pronounce})
      </p>
      <p className="text-gray-700">
        Nghĩa: {word.word_uses[0].word_means.join(", ")}
      </p>
      <p className="text-gray-600 italic">
        Ví dụ: {word.word_uses[0].example_jp} - {word.word_uses[0].example_vi}
      </p>
    </li>
  );
};

export default CollectionInfoItem;
