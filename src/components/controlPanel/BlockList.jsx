import InfoBlockItem from "./InfoBlockItem";

const BlockList = ({ blocks, handleEdit, handleDelete }) => {
  return (
    <div className="mt-8">
      {blocks.map((block, index) => (
        <InfoBlockItem
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
