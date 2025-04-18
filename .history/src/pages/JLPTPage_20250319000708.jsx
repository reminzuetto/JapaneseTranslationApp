import React, { useState, useEffect } from "react";
import JLPTTestItem from "./JLPTPage/JLPTTestItem";

const JLPTPage = () => {
  const [tests, setTests] = useState([]);

  useEffect(() => {
    fetch("/japanese_test.json")
      .then((response) => response.json())
      .then((data) => setTests(data))
      .catch((error) => console.error("Error loading test data:", error));
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="flex space-x-4 mb-4">
        <button className="px-4 py-2 bg-yellow-400 text-white font-bold rounded">
          JLPT
        </button>
        <button className="px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded">
          JLCT
        </button>
      </div>

      <div className="flex justify-between items-center bg-white p-4 rounded shadow">
        <h2 className="text-lg font-bold">Thông tin bài thi N5</h2>
        <div className="text-sm">
          <p>Thời gian: 90 Phút</p>
          <p>Điểm đạt: 80</p>
          <p>Từ vựng: 語彙 (40 分)</p>
          <p>Ngữ pháp - Đọc hiểu: 文法 (80 分)</p>
          <p>Thi nghe: 聞く (60 分)</p>
        </div>
      </div>

      <div className="mt-4 bg-white p-4 rounded shadow">
        {tests.map((test, index) => (
          <JLPTTestItem key={test.id} test={test} index={index + 1} />
        ))}
      </div>
    </div>
  );
};

export default JLPTPage;
