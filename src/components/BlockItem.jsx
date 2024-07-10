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
          <h2>{block.title}</h2>
          <p>{truncateText(block.description, 60)}</p>
          {block.links && block.links.length > 0 && (
            <ul>
              {block.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className={link.style}>
                    {link.icon && (
                      <i className={link.icon.class}>{link.icon.name}</i>
                    )}
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {block.image.src && (
          <div className={block.image.class}>
            <img
              className={`${block.image.picClass} max-w-[150px]`}
              src={block.image.src}
              alt={block.image.alt}
            />
          </div>
        )}
      </div>
      <button
        onClick={handleEdit}
        className="mt-2 py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
        Editar
      </button>
      <button
        onClick={handleDelete}
        className="mt-2 py-1 px-3 ml-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
        Eliminar
      </button>
    </div>
  );
};

export default BlockItem;
