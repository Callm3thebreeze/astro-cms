import React from "react";

const IconsBlockItem = ({ block, handleEdit, handleDelete }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-lg font-semibold mb-2">Icons Block</h3>
          <p className="text-sm text-gray-600">{block.text}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {block.icons.map((icon, index) => (
              <div key={index} className="flex items-center w-1/3">
                {icon.isAnchor ? (
                  <a href="#">
                    <div className="size-8 md:size-12 underline">
                      {icon.name}
                    </div>
                  </a>
                ) : (
                  <div className="size-8 md:size-12">{icon.name}</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="space-x-4">
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
    </div>
  );
};

export default IconsBlockItem;
