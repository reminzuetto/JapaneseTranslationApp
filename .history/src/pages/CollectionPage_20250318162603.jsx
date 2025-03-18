import React from "react";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CollectionPage = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-8">
        <button className=" bg-blue-500 rounded-lg flex justify-center items-center text-white hover:bg-blue-600 cursor-pointer shadow-2xl shadow-blue-200">
          <FontAwesomeIcon
            icon={faPlus}
            className="m-3 p-1 bg-white rounded-full text-blue-500 "
          />
          New collection
        </button>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
      </div>
    </div>
  );
};

export default CollectionPage;
