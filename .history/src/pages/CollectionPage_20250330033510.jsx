import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import useClickOutside from "../hooks/useClickOutside";

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [newCollectionName, setNewCollectionName] = useState("");
  const navigate = useNavigate();
  const { show, setShow, nodeRef } = useClickOutside("button");

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
    setShow(false);
  };

  return (
    <div className="p-10 relative">
      <div className="grid grid-cols-4 gap-8">
        <button
          onClick={() => setShow(true)}
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

      {/* Overlay mờ nền */}
      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
      )}

      {/* Popup nhập tên collection */}
      {show && (
        <div
          ref={nodeRef}
          className="fixed inset-0 flex items-center justify-center z-20"
        >
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">New Collection</h2>
              <button onClick={() => setShow(false)}>
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
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
