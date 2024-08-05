import InfoBlockItem from "./InfoBlockItem";
import FeaturesBlockItem from "./FeaturesBlockItem";
import IconsBlockItem from "./IconsBlockItem";

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
        ) : block.type === "features" ? (
          <FeaturesBlockItem
            key={index}
            block={block}
            handleEdit={() => handleEdit(index)}
            handleDelete={() => handleDelete(index)}
          />
        ) : (
          <IconsBlockItem
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
