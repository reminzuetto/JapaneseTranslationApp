import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import Popup from "../components/CollectionPage/Popup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CollectionPage = ({ user }) => {
  const [collections, setCollections] = useState([]);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [newCollectionName, setNewCollectionName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Nếu chưa đăng nhập thì chuyển hướng
    if (!user) {
      navigate("/signin");
    }
  }, [user, navigate]);

  // Load dữ liệu từ file JSON hoặc localStorage khi mở trang
  useEffect(() => {
    const storedCollections = localStorage.getItem("collections");
    if (storedCollections) {
      setCollections(JSON.parse(storedCollections));
    } else {
      fetch("/japanese_vocab.json")
        .then((response) => response.json())
        .then((data) => setCollections(data.collections))
        .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
    }
  }, []);

  // Hàm xử lý khi click vào một collection
  const handleCollectionClick = (collection) => {
    navigate(`/collection/${collection.collectionID}`, {
      state: { collection },
    });
  };

  // Hàm thêm collection mới
  const handleNewCollection = () => {
    if (!newCollectionName.trim()) return;

    const newCollection = {
      collectionID: Date.now(),
      collectionName: newCollectionName,
      wordCount: 0,
      createdDate: new Date().toISOString().split("T")[0],
    };

    const updatedCollections = [...collections, newCollection];
    setCollections(updatedCollections);
    localStorage.setItem("collections", JSON.stringify(updatedCollections)); // Lưu vào localStorage

    setNewCollectionName("");
    setIsOpenPopup(false);
  };

  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-8">
        {/* Button mở popup */}
        <button
          onClick={() => setIsOpenPopup(true)}
          className="bg-blue-500 rounded-lg flex justify-center items-center text-white hover:bg-blue-600 cursor-pointer shadow-lg p-3 h-[100px]"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New collection
        </button>

        {/* Popup tạo collection */}
        {isOpenPopup && (
          <Popup setIsOpenPopup={setIsOpenPopup} title="New Collection">
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
        )}

        {/* Hiển thị danh sách collections */}
        {collections.length > 0 ? (
          collections.map((collection) => (
            <div
              key={collection.collectionID}
              onClick={() => handleCollectionClick(collection)}
              className="cursor-pointer"
            >
              <CollectionItem
                name={collection.collectionName}
                wordCount={collection.wordCount}
                createdDate={collection.createdDate}
              />
            </div>
          ))
        ) : (
          <p className="col-span-4 text-gray-500 mt-4">
            No collections found. Create a new one!
          </p>
        )}
      </div>
    </div>
  );
};

export default CollectionPage;
