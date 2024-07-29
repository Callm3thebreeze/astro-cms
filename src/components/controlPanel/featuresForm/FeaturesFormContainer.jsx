import { useState, useEffect } from "react";

const FeaturesFormContainer = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
}) => {
  const [items, setItems] = useState([
    { title: "", description: "", icon: "" },
  ]);

  useEffect(() => {
    if (form.items) {
      setItems(form.items);
    }
  }, [form]);

  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, [name]: value } : item,
    );
    setItems(updatedItems);
    setForm((prevForm) => ({
      ...prevForm,
      items: updatedItems,
    }));
  };

  const handleAddItem = () => {
    if (items.length < 6) {
      const newItems = [...items, { title: "", description: "", icon: "" }];
      setItems(newItems);
      setForm((prevForm) => ({
        ...prevForm,
        items: newItems,
      }));
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
    setForm((prevForm) => ({
      ...prevForm,
      items: updatedItems,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSave}>
        <div>
          <div className="space-y-4 md:col-span-1 bg-gray-100 rounded-md p-4">
            <legend className="text-lg font-bold text-gray-900 mb-4">
              Features
            </legend>
            <div>
              <label
                htmlFor="featureTitle"
                className="block text-sm font-medium text-gray-700">
                Título
              </label>
              <input
                type="text"
                name="featureTitle"
                id="featureTitle"
                value={form.featureTitle || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="featureSubtitle"
                className="block text-sm font-medium text-gray-700">
                Subtítulo
              </label>
              <textarea
                name="featureSubtitle"
                id="featureSubtitle"
                value={form.featureSubtitle || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none min-h-[8rem] max-h-[12rem]"></textarea>
            </div>

            {items.map((item, index) => (
              <div key={index} className="space-y-4 border-b pb-4">
                <div>
                  <label
                    htmlFor={`item${index + 1}title`}
                    className="block text-sm font-medium text-gray-700">
                    Título del Item
                  </label>
                  <input
                    type="text"
                    name="title"
                    id={`item${index + 1}title`}
                    value={item.title}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`item${index + 1}description`}
                    className="block text-sm font-medium text-gray-700">
                    Descripción del Item
                  </label>
                  <textarea
                    name="description"
                    id={`item${index + 1}description`}
                    value={item.description}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor={`item${index + 1}icon`}
                    className="block text-sm font-medium text-gray-700">
                    Icono del Item
                  </label>
                  <input
                    type="text"
                    name="icon"
                    id={`item${index + 1}icon`}
                    value={item.icon}
                    onChange={(e) => handleItemChange(index, e)}
                    className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Eliminar Item
                </button>
              </div>
            ))}

            {items.length < 6 && (
              <button
                type="button"
                onClick={handleAddItem}
                className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Añadir Item
              </button>
            )}
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FeaturesFormContainer;
