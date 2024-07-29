const FeaturesBlock = ({ features }) => {
  return (
    <div className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
      <h2 className="text-xl font-bold mb-2">{features.title}</h2>
      <p className="text-sm text-slate-600 mb-4">{features.subtitle}</p>
      <ul className="space-y-2">
        {features.items.map((item, index) => (
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
  );
};

export default FeaturesBlock;
