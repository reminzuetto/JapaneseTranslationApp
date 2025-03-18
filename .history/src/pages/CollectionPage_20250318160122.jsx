import React from "react";
import CollectionItem from "../components/CollectionPage/CollectionItem";

const CollectionPage = () => {
  return (
    <div className="flex flex-row ">
      <div className="flex flex-col w-1/4">
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
      </div>
      <div className="flex flex-col w-1/4">
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
        <CollectionItem></CollectionItem>
      </div>
    </div>
  );
};

export default CollectionPage;
