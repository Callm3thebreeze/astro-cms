const FeaturesBlockItem = ({ block, handleEdit, handleDelete }) => {
  const items = [
    {
      title: block.item1title,
      description: block.item1description,
      icon: block.item1icon,
    },
    {
      title: block.item2title,
      description: block.item2description,
      icon: block.item2icon,
    },
    {
      title: block.item3title,
      description: block.item3description,
      icon: block.item3icon,
    },
    {
      title: block.item4title,
      description: block.item4description,
      icon: block.item4icon,
    },
    {
      title: block.item5title,
      description: block.item5description,
      icon: block.item5icon,
    },
    {
      title: block.item6title,
      description: block.item6description,
      icon: block.item6icon,
    },
  ].filter((item) => item.title || item.description || item.icon);

  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-2">{block.title}</h2>
      <p className="text-sm text-slate-600 mb-4">{block.subtitle}</p>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <i className={`text-xl ${item.icon}`} />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
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

export default FeaturesBlockItem;
