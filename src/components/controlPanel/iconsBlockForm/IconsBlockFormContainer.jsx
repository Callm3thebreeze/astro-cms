import React, { useState } from "react";

const IconsFormContainer = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
}) => {
  const handleAddIcon = () => {
    setForm((prevForm) => ({
      ...prevForm,
      icons: [...prevForm.icons, { isAnchor: false, name: "" }],
    }));
  };

  const handleRemoveIcon = (index) => {
    setForm((prevForm) => ({
      ...prevForm,
      icons: prevForm.icons.filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="space-y-4 md:col-span-1 bg-gray-100 rounded-md p-4">
      <form onSubmit={handleSave}>
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold mb-4">Icons Settings</h2>

          <div className="flex flex-col space-y-4">
            <div>
              <label
                htmlFor="text"
                className="block text-sm font-medium text-gray-700">
                Text
              </label>
              <input
                type="text"
                name="text"
                id="text"
                value={form.text}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Icons
              </label>
              {form.icons.map((icon, index) => (
                <div key={index} className="border p-4 rounded-md mb-4">
                  <label
                    htmlFor={`icon-name-${index}`}
                    className="block text-sm font-medium text-gray-700">
                    Icon Name
                  </label>
                  <input
                    type="text"
                    name={`icon-name-${index}`}
                    id={`icon-name-${index}`}
                    value={icon.name}
                    onChange={(e) => {
                      const newIcons = [...form.icons];
                      newIcons[index].name = e.target.value;
                      setForm({ ...form, icons: newIcons });
                    }}
                    className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                  <label
                    htmlFor={`icon-anchor-${index}`}
                    className="block text-sm font-medium text-gray-700 mt-2">
                    Is Anchor
                  </label>
                  <input
                    type="checkbox"
                    name={`icon-anchor-${index}`}
                    id={`icon-anchor-${index}`}
                    checked={icon.isAnchor}
                    onChange={(e) => {
                      const newIcons = [...form.icons];
                      newIcons[index].isAnchor = e.target.checked;
                      setForm({ ...form, icons: newIcons });
                    }}
                    className="mt-1"
                  />
                  <div className="flex space-x-2 mt-4">
                    <button
                      type="button"
                      onClick={handleAddIcon}
                      className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                      Add Icon
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveIcon(index)}
                      className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                      Remove Icon
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default IconsFormContainer;
