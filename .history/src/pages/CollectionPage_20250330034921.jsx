import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import Popup from "../components/Popup/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/japanese_vocab.json")
      .then((response) => response.json())
      .then((data) => setCollections(data.collections))
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  const handleCollectionClick = (collection) => {
    navigate(`/collection/${collection.collectionID}`, {
      state: { collection },
    });
  };

  const handleNewCollection = () => {
    if (!newCollectionName.trim()) return;

    const newCollection = {
      collectionID: Date.now(),
      collectionName: newCollectionName,
      wordCount: 0,
      createdDate: new Date().toISOString().split("T")[0],
    };

    setCollections([...collections, newCollection]);
    setNewCollectionName("");
    setIsPopupOpen(false);
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-8">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="bg-blue-500 rounded-lg flex justify-center items-center text-white hover:bg-blue-600 cursor-pointer shadow-lg p-3 h-[100px]"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New collection
        </button>

        {collections.map((collection) => (
          <div
            key={collection.collectionID}
            onClick={() => handleCollectionClick(collection)}
          >
            <CollectionItem
              name={collection.collectionName}
              wordCount={collection.wordCount}
              createdDate={collection.createdDate}
            />
          </div>
        ))}
      </div>

      {/* Popup thêm Collection */}
      <Popup
        isOpen={isPopupOpen}
        setIsOpen={setIsPopupOpen}
        title="New Collection"
      >
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter collection name"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleNewCollection}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </Popup>
    </div>
  );
};

export default CollectionPage;
