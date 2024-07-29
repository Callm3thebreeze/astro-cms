import InfoBlockItem from "./InfoBlockItem";
import FeaturesBlockItem from "./FeaturesBlockItem";

const BlockList = ({ blocks, handleEdit, handleDelete }) => {
  return (
    <div className="mt-8">
      {blocks.map((block, index) =>
        block.type === "infoBlock" ? (
          <InfoBlockItem
            key={index}
            block={block}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        ) : (
          <FeaturesBlockItem
            key={index}
            block={block}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        ),
      )}
    </div>
  );
};

export default BlockList;
