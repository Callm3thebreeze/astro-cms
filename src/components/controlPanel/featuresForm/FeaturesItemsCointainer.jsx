const FeaturesItemsCointainer = ({ form, setForm }) => {
  const handleItemChange = (index, e) => {
    const { name, value } = e.target;
    const updatedItems = form.items.map((item, i) =>
      i === index ? { ...item, [name]: value } : item,
    );
    setForm({ ...form, items: updatedItems });
  };

  const handleAddItem = () => {
    setForm({
      ...form,
      items: [...form.items, { title: "", description: "", icon: "" }],
    });
  };

  const handleRemoveItem = (index) => {
    const updatedItems = form.items.filter((_, i) => i !== index);
    setForm({ ...form, items: updatedItems });
  };

  return (
    <div className="md:col-span-2 bg-gray-100 rounded-md p-4">
      <legend className="text-lg font-bold text-gray-900 mb-4">Items</legend>
      {form.items.map((item, index) => (
        <div key={index} className="space-y-4 mb-4 border-b pb-4">
          <div className="relative group">
            <label
              htmlFor={`item-title-${index}`}
              className="block text-sm font-medium text-gray-700 flex items-center">
              Título
            </label>
            <input
              type="text"
              name="title"
              id={`item-title-${index}`}
              value={item.title}
              onChange={(e) => handleItemChange(index, e)}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="relative group">
            <label
              htmlFor={`item-description-${index}`}
              className="block text-sm font-medium text-gray-700 flex items-center">
              Descripción
            </label>
            <input
              type="text"
              name="description"
              id={`item-description-${index}`}
              value={item.description}
              onChange={(e) => handleItemChange(index, e)}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="relative group">
            <label
              htmlFor={`item-icon-${index}`}
              className="block text-sm font-medium text-gray-700 flex items-center">
              Icono
            </label>
            <input
              type="text"
              name="icon"
              id={`item-icon-${index}`}
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
      <button
        type="button"
        onClick={handleAddItem}
        className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Añadir Item
      </button>
    </div>
  );
};

export default FeaturesItemsCointainer;
