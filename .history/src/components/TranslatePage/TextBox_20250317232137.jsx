const TextBox = ({ value, onChange, readOnly = false }) => {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange && onChange(e.target.value)}
      placeholder={readOnly ? "Kết quả..." : "Nhập văn bản..."}
      readOnly={readOnly}
      className={`w-full p-2 border rounded h-40 ${
        readOnly ? "bg-gray-200" : "bg-white"
      }`}
    />
  );
};

export default TextBox;
