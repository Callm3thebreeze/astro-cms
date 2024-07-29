const FeaturesBlockItem = ({ block, handleEdit, handleDelete }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
      <div>
        <h2 className="text-xl font-bold mb-2">{block.featureTitle}</h2>
        <p className="text-sm text-slate-600 mb-4">{block.featureSubtitle}</p>
        <ul className="space-y-2">
          {block.items.map((item, index) => (
            <li key={index} className="flex items-center space-x-2">
              <i className={`text-xl ${item.icon}`} />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
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

export default FeaturesBlockItem;
