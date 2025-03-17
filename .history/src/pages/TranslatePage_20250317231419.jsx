import React, { useState } from "react";

const TranslatePage = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("vi");

  const languages = [
    { code: "en", name: "English" },
    { code: "vi", name: "Tiếng Việt" },
    { code: "ja", name: "日本語" },
    { code: "ko", name: "한국어" },
    { code: "zh", name: "中文" },
  ];

  const handleTranslate = async () => {
    if (!text) return;
    // Fake translation for now
    setTranslatedText(`(${targetLang}) ${text}`);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg shadow">
      <h1 className="text-xl font-bold mb-4 text-center">Dịch Ngôn Ngữ</h1>

      <div className="flex gap-2 mb-2">
        <select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
          className="w-1/2 p-2 border rounded"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>

        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
          className="w-1/2 p-2 border rounded"
        >
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name}
            </option>
          ))}
        </select>
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập văn bản..."
        className="w-full p-2 border rounded mb-2"
        rows="3"
      ></textarea>

      <button
        onClick={handleTranslate}
        className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Dịch
      </button>

      {translatedText && (
        <div className="mt-4 p-2 border rounded bg-gray-100">
          <p className="font-semibold">Kết quả:</p>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslatePage;
