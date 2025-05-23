import React from "react";
import CollectionItem from "../components/CollectionPage/CollectionItem";

const CollectionPage = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-4 gap-8">
        <div className=" bg-blue-600 rounded-lg flex justify-center items-center">
          Add new collection
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
