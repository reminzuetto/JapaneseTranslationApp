import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    if (!newCollectionName.trim()) return; // Không cho phép tên rỗng

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

      {isPopupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-30 backdrop-blur-sm z-10">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h2 className="text-lg font-semibold mb-4">New Collection</h2>
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
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionPage;
