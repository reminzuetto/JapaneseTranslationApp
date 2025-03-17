import React, { useState } from "react";
import { TranslateArea } from "@/components/ui/TranslateArea";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";

const TranslatePage = () => {
  const [inputText, setInputText] = useState("");
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
          Authorization: "Bearer YOUR_API_KEY", // Thêm API key nếu cần
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

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Translate</h1>
      <div className="flex gap-4 mb-4">
        <Select value={sourceLang} onValueChange={setSourceLang}>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </Select>
        <Select value={targetLang} onValueChange={setTargetLang}>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <TranslateArea
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="mb-4"
      />
      <Button onClick={translateText} className="mb-4 w-full">
        Translate
      </Button>
      <TranslateArea
        placeholder="Translation"
        value={translatedText}
        readOnly
        className="bg-gray-100"
      />
    </div>
  );
};

export default TranslatePage;
