import React from "react";
import CollectionItem from "../components/CollectionPage/CollectionItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const CollectionPage = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-8">
        <div className=" bg-blue-600 rounded-lg flex justify-center items-center">
          <FontAwesomeIcon icon="fa-solid fa-plus" />
          Add new Collection
        </div>
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
