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
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-12 gap-4 max-w-4xl w-full">
        {/* Ô nhập ngôn ngữ gốc */}
        <div className="col-span-5 flex flex-col items-center gap-5">
          <LanguageSelector
            type="from"
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
        </div>

        {/* Khu vực nút chuyển đổi */}
        <div className="col-span-2 flex justify-between justify-center items-center space-y-4">
          <button
            onClick={swapLanguages}
            className="p-2 bg-white w-[100px] text-black rounded-lg shadow-md border border-gray-300 hover:bg-gray-200 transition"
          >
            <FontAwesomeIcon icon={faArrowsAltH} />
          </button>

          <button
            onClick={handleTranslate}
            className="px-4 py-2 flex item-center w-[100px] bg-indigo-500 text-white rounded shadow hover:bg-indigo-600"
          >
            Translate
          </button>
        </div>

        {/* Ô hiển thị kết quả dịch */}
        <div className="col-span-5 flex flex-col items-center gap-5">
          <LanguageSelector
            type="to"
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
