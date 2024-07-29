import React from "react";

const FeatureItem = ({ item, index, handleItemChange, removeItem }) => (
  <div className="space-y-4 mb-4 p-4 border rounded-md">
    <div>
      <label
        htmlFor={`item-title-${index}`}
        className="block text-sm font-medium text-gray-700">
        Item Title
      </label>
      <input
        type="text"
        name={`item-title-${index}`}
        id={`item-title-${index}`}
        value={item.title}
        onChange={(e) => handleItemChange(index, "title", e.target.value)}
        className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <div>
      <label
        htmlFor={`item-description-${index}`}
        className="block text-sm font-medium text-gray-700">
        Item Description
      </label>
      <textarea
        name={`item-description-${index}`}
        id={`item-description-${index}`}
        value={item.description}
        onChange={(e) => handleItemChange(index, "description", e.target.value)}
        className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none"
      />
    </div>
    <div>
      <label
        htmlFor={`item-icon-${index}`}
        className="block text-sm font-medium text-gray-700">
        Item Icon
      </label>
      <input
        type="text"
        name={`item-icon-${index}`}
        id={`item-icon-${index}`}
        value={item.icon}
        onChange={(e) => handleItemChange(index, "icon", e.target.value)}
        className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
      />
    </div>
    <button
      type="button"
      onClick={() => removeItem(index)}
      className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
      Remove Item
    </button>
  </div>
);

export default FeatureItem;
