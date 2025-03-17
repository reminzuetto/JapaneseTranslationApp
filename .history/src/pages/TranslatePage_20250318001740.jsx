import React, { useState } from "react";
import LanguageSelector from "../components/TranslatePage/LanguageSelector";
import TextBox from "../components/TranslatePage/TextBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAltH } from "@fortawesome/free-solid-svg-icons";

const TranslatePage = () => {
  const [state, setState] = useState({
    text: "",
    translatedText: "",
    sourceLang: "ja",
    targetLang: "vi",
  });

  const languageOptions = [
    { label: "Japanese", value: "ja" },
    { label: "Vietnamese", value: "vi" },
    { label: "English", value: "en" },
  ];

  const handleTranslate = async () => {
    if (!state.text) return;
    setState((prev) => ({
      ...prev,
      translatedText: `(${prev.targetLang}) ${prev.text}`,
    }));
  };

  const swapLanguages = () => {
    setState((prev) => ({
      ...prev,
      sourceLang: prev.targetLang,
      targetLang: prev.sourceLang,
      text: prev.translatedText,
      translatedText: prev.text,
    }));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-12 gap-4 max-w-4xl w-full">
        {/* Phần bên trái - Nhập văn bản */}
        <div className="col-span-5 flex flex-col items-center gap-5">
          <LanguageSelector
            value={state.sourceLang}
            onChange={(lang) =>
              setState((prev) => ({ ...prev, sourceLang: lang }))
            }
            options={languageOptions}
          />
          <TextBox
            value={state.text}
            onChange={(text) => setState((prev) => ({ ...prev, text }))}
          />

          {/* Nút Dịch - Đưa xuống dưới cùng, căn phải */}
          <div className="w-full flex justify-end">
            <button
              onClick={handleTranslate}
              className="px-5 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600 transition"
            >
              Dịch
            </button>
          </div>
        </div>

        {/* Khu vực nút chuyển đổi ngôn ngữ */}
        <div className="col-span-2 flex justify-center items-center">
          <button
            onClick={swapLanguages}
            className="p-3 bg-white text-black w-[100px] border border-gray-500 rounded-full shadow-md hover:bg-gray-200 transition"
          >
            <FontAwesomeIcon icon={faArrowsAltH} />
          </button>
        </div>

        {/* Phần bên phải - Hiển thị kết quả */}
        <div className="col-span-5 flex flex-col items-center gap-5">
          <LanguageSelector
            value={state.targetLang}
            onChange={(lang) =>
              setState((prev) => ({ ...prev, targetLang: lang }))
            }
            options={languageOptions}
          />
          <TextBox value={state.translatedText} readOnly />
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;
