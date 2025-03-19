import React from "react";

const CollectionItem = ({ name, wordCount, createdDate }) => {
  return (
    <div className="p-3 border border-gray-300 shadow-lg bg-white rounded-lg h-[100px] cursor-pointer hover:bg-gray-200 flex flex-col justify-between">
      <div className="font-medium text-lg">{name}</div>
      <div className="text-sm text-gray-600 italic font-light mb-2">{`(${wordCount} từ)`}</div>
      <div className="text-xs text-gray-400">Ngày tạo: {createdDate}</div>
    </div>
  );
};

export default CollectionItem;
