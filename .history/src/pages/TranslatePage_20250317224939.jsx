import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectItem } from "@/components/ui/select";

export default function TranslatePage() {
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
        <Select value={sourceLang} onChange={setSourceLang}>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </Select>
        <Select value={targetLang} onChange={setTargetLang}>
          {languages.map((lang) => (
            <SelectItem key={lang.code} value={lang.code}>
              {lang.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <Textarea
        placeholder="Enter text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        className="mb-4"
      />
      <Button onClick={translateText} className="mb-4 w-full">
        Translate
      </Button>
      <Textarea
        placeholder="Translation"
        value={translatedText}
        readOnly
        className="bg-gray-100"
      />
    </div>
  );
}
