import React, { useState, useEffect } from "react";
import JLPTTestItem from "/src/components/JLPTPage/JLPTTestItem";

const JLPTPage = () => {
  const [tests, setTests] = useState([]);
  const [level, setLevel] = useState("N5"); // Mặc định là N5

  useEffect(() => {
    fetch("japanese_test.json") // Để file json trong thư mục public
      .then((response) => response.json())
      .then((data) => {
        if (data[level]) {
          setTests(data[level]);
        }
      })
      .catch((error) => console.error("Error loading test data:", error));
  }, [level]);

  const handleStartTest = (testId) => {
    console.log(`Bắt đầu bài kiểm tra với ID: ${testId}`);
    // Có thể điều hướng hoặc thay đổi state ở đây nếu cần
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen ">
      <div className="flex justify-between space-x-4 mb-4">
        <div className="flex justify-start m-2 p-2 gap-2 rounded-3xl shadow-lg">
          <button className="px-4 py-2 bg-yellow-400 text-white font-bold rounded-3xl cursor-pointer">
            JLPT
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 font-bold rounded-3xl cursor-pointer">
            JLCT
          </button>
        </div>
        <div className="flex justify-end gap-4 p-4">
          {["N5", "N4", "N3", "N2", "N1"].map((nLevel) => (
            <button
              key={nLevel}
              className={`text-white p-2 rounded-lg cursor-pointer ${
                level === nLevel
                  ? "bg-blue-500"
                  : "bg-blue-200 hover:bg-blue-500"
              }`}
              onClick={() => setLevel(nLevel)}
            >
              {nLevel}
            </button>
          ))}
        </div>
      </div>
      <div className="flex">
        <div className="mt-4 bg-white p-4 space-y-2 w-full min-w-[300px]">
          {tests.map((test, index) => (
            <JLPTTestItem
              key={test.id}
              test={test}
              index={index + 1}
              onStart={handleStartTest}
            />
          ))}
        </div>
        <div className="flex flex-col justify-center items-center bg-white p-4 rounded gap-2 italic">
          <h2 className="text-lg font-bold text-blue-500 underline">
            Thông tin bài thi {level}
          </h2>
          <div className="text-sm flex flex-col justify-center items-center gap-2 min-w-[250px]">
            <p>
              Thời gian:{" "}
              {level === "N5"
                ? "90 Phút"
                : level === "N4"
                ? "105 Phút"
                : "120 Phút"}
            </p>
            <p>
              Điểm đạt: {level === "N5" ? "80" : level === "N4" ? "90" : "100"}
            </p>
            <p>Từ vựng: 語彙 ({level === "N5" ? "40 分" : "50 分"})</p>
            <p>
              Ngữ pháp - Đọc hiểu: 文法 ({level === "N5" ? "80 分" : "100 分"})
            </p>
            <p>Thi nghe: 聞く ({level === "N5" ? "60 分" : "70 分"})</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JLPTPage;
