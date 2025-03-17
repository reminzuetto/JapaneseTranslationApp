import React, { useState } from "react";

const TranslatePage = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("ja");
  const [targetLang, setTargetLang] = useState("vi");

  const handleTranslate = async () => {
    if (!text) return;
    // Giả lập dịch thuật
    setTranslatedText(`(${targetLang}) ${text}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-12 gap-4 max-w-4xl w-full">
        {/* Cột bên trái */}
        <div className="col-span-5 flex flex-col items-center">
          <LanguageSelector value={sourceLang} onChange={setSourceLang} />
          <TextBox value={text} onChange={setText} />
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
          <LanguageSelector value={targetLang} onChange={setTargetLang} />
          <TextBox value={translatedText} readOnly />
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;

const LanguageSelector = ({ value, onChange }) => {
  const languages = [
    { code: "ja", name: "Japanese" },
    { code: "vi", name: "Vietnamese" },
    { code: "en", name: "English" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mb-2 p-2 border rounded bg-white"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};
