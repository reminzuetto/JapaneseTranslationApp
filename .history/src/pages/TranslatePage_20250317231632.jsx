import React, { useState } from "react";

const TranslatePage = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("ja");
  const [targetLang, setTargetLang] = useState("vi");

  const languages = [
    { code: "ja", name: "Japanese" },
    { code: "vi", name: "Vietnamese" },
    { code: "en", name: "English" },
    { code: "ko", name: "Korean" },
    { code: "zh", name: "Chinese" },
  ];

  const handleTranslate = async () => {
    if (!text) return;
    // Giả lập dịch thuật
    setTranslatedText(`(${targetLang}) ${text}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-12 gap-4 max-w-4xl w-full">
        <div className="col-span-5 flex flex-col items-center">
          <select
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="mb-2 p-2 border rounded bg-white"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập văn bản..."
            className="w-full p-2 border rounded h-40"
          />
        </div>

        {/* Nút Dịch */}
        <div className="col-span-2 flex justify-center items-center">
          <button
            onClick={handleTranslate}
            className="px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600"
          >
            Translate
          </button>
        </div>

        {/* Cột bên phải */}
        <div className="col-span-5 flex flex-col items-center">
          <select
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="mb-2 p-2 border rounded bg-white"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
          <textarea
            value={translatedText}
            readOnly
            className="w-full p-2 border rounded h-40 bg-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;
