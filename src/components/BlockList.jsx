import React from "react";
import BlockItem from "./BlockItem";

const BlockList = ({ blocks, handleEdit, handleDelete }) => {
  return (
    <div className="mt-8">
      {blocks.map((block, index) => (
        <BlockItem
          key={index}
          block={block}
          handleEdit={() => handleEdit(index)}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
};

export default BlockList;
