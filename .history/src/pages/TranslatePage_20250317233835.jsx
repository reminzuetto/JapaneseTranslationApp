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
        {/* Ô nhập ngôn ngữ gốc */}
        <div className="col-span-5 flex flex-col items-center">
          <LanguageSelector
            value={state.sourceLang}
            onChange={(lang) =>
              setState((prev) => ({ ...prev, sourceLang: lang }))
            }
            backgroundColor="bg-blue-500"
            textColor="text-white"
          />
          <TextBox
            value={state.text}
            onChange={(text) => setState((prev) => ({ ...prev, text }))}
          />
        </div>

        {/* Khu vực nút chuyển đổi */}
        <div className="col-span-2 flex flex-col justify-center items-center space-y-4">
          <button
            onClick={swapLanguages}
            className="p-2 bg-gray-500 text-white rounded-full shadow-md hover:bg-gray-600 transition"
          >
            <FontAwesomeIcon icon={faArrowsAltH} />
          </button>

          <button
            onClick={handleTranslate}
            className="px-4 py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600"
          >
            Dịch
          </button>
        </div>

        {/* Ô hiển thị kết quả dịch */}
        <div className="col-span-5 flex flex-col items-center">
          <LanguageSelector
            value={state.targetLang}
            onChange={(lang) =>
              setState((prev) => ({ ...prev, targetLang: lang }))
            }
            backgroundColor="bg-green-500"
            textColor="text-white"
          />
          <TextBox value={state.translatedText} readOnly />
        </div>
      </div>
    </div>
  );
};

export default TranslatePage;
