const TranslateButton = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export { TranslateButton };
