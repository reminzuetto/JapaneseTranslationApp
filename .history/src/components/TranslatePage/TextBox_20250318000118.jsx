const TextBox = ({ value, onChange, readOnly = false }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={readOnly ? "Kết quả..." : "Nhập văn bản..."}
      readOnly={readOnly}
      className={`w-full p-3 border border-gray-300 rounded-lg h-40 resize-none shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
        readOnly ? "bg-gray-100 text-gray-700" : "bg-white"
      }`}
    />
  );
};

export default TextBox;
