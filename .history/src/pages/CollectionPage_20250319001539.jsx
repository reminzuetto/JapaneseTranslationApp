import React, { useEffect, useState } from "react";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    fetch("/japanese_vocab.json")
      .then((response) => response.json())
      .then((data) => setCollections(data.collections))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-8">
        <button className="bg-blue-500 rounded-lg flex justify-center items-center text-white hover:bg-blue-600 cursor-pointer shadow-lg p-3  h-[100px] ">
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New collection
        </button>
        {collections.map((collection) => (
          <CollectionItem
            key={collection.collectionID}
            name={collection.collectionName}
            wordCount={collection.wordCount}
            createdDate={collection.createdDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
