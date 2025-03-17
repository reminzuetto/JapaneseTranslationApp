const LanguageSelector = ({ value, onChange, backgroundColor, textColor }) => {
  const languages = [
    { code: "ja", name: "Japanese" },
    { code: "vi", name: "Vietnamese" },
    { code: "en", name: "English" },
  ];

  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`mb - 2 p-2 border rounded-lg gap-4 ${backgroundColor} ${textColor}`}
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
