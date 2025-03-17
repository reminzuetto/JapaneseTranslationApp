import React from "react";

const TranslatePage = () => {
  onst[(inputText, setInputText)] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLang, setSourceLang] = useState("en");
  const [targetLang, setTargetLang] = useState("vi");

  const languages = [
    { code: "en", name: "English" },
    { code: "vi", name: "Vietnamese" },
    { code: "ja", name: "Japanese" },
    { code: "fr", name: "French" },
    { code: "es", name: "Spanish" },
  ];

  const translateText = async () => {
    if (!inputText.trim()) return;
    try {
      const response = await fetch("https://libretranslate.com/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          q: inputText,
          source: sourceLang,
          target: targetLang,
          format: "text",
        }),
      });
      const data = await response.json();
      setTranslatedText(data.translatedText || "Error translating text");
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return <div> </div>;
};

export default TranslatePage;
