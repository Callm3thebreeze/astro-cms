import InfoBlockItem from "./InfoBlockItem";
import FeaturesBlockItem from "./FeaturesBlockItem";
import IconsBlockItem from "./IconsBlockItem";

const BlockList = ({ blocks, handleEdit, handleDelete }) => {
  return (
    <div className="mt-8">
      {blocks.map((block, index) => {
        if (block.type === "infoBlock") {
          return (
            <InfoBlockItem
              key={index}
              block={block}
              handleEdit={() => handleEdit(index)}
              handleDelete={() => handleDelete(index)}
            />
          );
        } else if (block.type === "features") {
          return (
            <FeaturesBlockItem
              key={index}
              block={block}
              handleEdit={() => handleEdit(index)}
              handleDelete={() => handleDelete(index)}
            />
          );
        } else if (block.type === "icons") {
          return (
            <IconsBlockItem
              key={index}
              block={block}
              handleEdit={() => handleEdit(index)}
              handleDelete={() => handleDelete(index)}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default BlockList;
