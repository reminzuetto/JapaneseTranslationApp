import React, { useState } from "react";
import LanguageSelector from "../components/TranslatePage/LanguageSelector";
import TextBox from "../components/TranslatePage/TextBox";

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
