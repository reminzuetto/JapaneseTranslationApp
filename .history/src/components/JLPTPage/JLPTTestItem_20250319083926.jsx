import React from "react";

const JLPTTestItem = ({ test, index, onStart }) => {
  return (
    <div className="flex justify-between items-center p-4 rounded-lg shadow-lg bg-white">
      <span className="text-lg font-semibold">
        Test {index}: {test.topic} - {test.level}
      </span>
      <button
        onClick={() => onStart(test.id)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Bắt đầu
      </button>
    </div>
  );
};

export default JLPTTestItem;
