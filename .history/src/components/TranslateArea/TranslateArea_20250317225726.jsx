const TranslateArea = ({ className, ...props }) => {
  return (
    <textarea
      className={`border p-2 w-full rounded-md ${className}`}
      {...props}
    />
  );
};
export { TranslateArea };
