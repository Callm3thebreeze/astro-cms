import React from "react";

const BlockItem = ({ block, handleEdit, handleDelete }) => {
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
      <div className="infoblock flex justify-between items-start gap-2">
        <div>
          <h2 className={block.titleClass}>{truncateText(block.title, 30)}</h2>
          <p className="text-sm text-slate-600">
            {truncateText(block.content, 60)}
          </p>
          <div className="mt-2 flex flex-col sm:flex-row gap-2">
            {block.button1Text && (
              <a href={block.button1Href} className={block.button1Style}>
                {block.button1Icon && (
                  <i className={block.button1IconStyle}>{block.button1Icon}</i>
                )}
                {block.button1Text}
              </a>
            )}
            {block.button2Text && (
              <a href={block.button2Href} className={block.button2Style}>
                {block.button2Icon && (
                  <i className={block.button2IconStyle}>{block.button2Icon}</i>
                )}
                {block.button2Text}
              </a>
            )}
          </div>
        </div>
        {block.imageSrc && (
          <div className={`min-w-[100px] max-w-[100px] ${block.imageStyle}`}>
            <img
              className={`object-cover ${block.imageStyle}`}
              src={block.imageSrc}
              alt={block.imageAlt}
            />
          </div>
        )}
      </div>
      <div className="mt-2 flex justify-end gap-2">
        <button
          onClick={handleEdit}
          className="py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
          Editar
        </button>
        <button
          onClick={handleDelete}
          className="py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default BlockItem;
