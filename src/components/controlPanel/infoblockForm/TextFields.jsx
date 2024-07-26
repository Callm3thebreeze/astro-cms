const TextFields = ({ form, handleInputChange, titleSizeOptions }) => (
  <div className="md:col-span-1 bg-gray-100 rounded-md p-4">
    <legend className="text-lg font-bold text-gray-900 mb-4">Texto</legend>
    <div className="space-y-4">
      <div className="relative">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 flex items-center">
          Título
          <i
            data-tooltip-target="tooltip-title"
            className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer"></i>
          <div
            id="tooltip-title"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Título del contenido
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={form.title}
          onChange={handleInputChange}
          className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="relative">
        <label
          htmlFor="titleSize"
          className="block text-sm font-medium text-gray-700 flex items-center">
          Tamaño del título
          <i
            data-tooltip-target="tooltip-titleSize"
            className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer"></i>
          <div
            id="tooltip-titleSize"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Selecciona el tamaño del título
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </label>
        <select
          name="titleSize"
          id="titleSize"
          value={form.titleSize}
          onChange={handleInputChange}
          className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
          {Object.keys(titleSizeOptions).map((option) => (
            <option key={option} value={titleSizeOptions[option]}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 flex items-center">
          Contenido
          <i
            data-tooltip-target="tooltip-content"
            className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer"></i>
          <div
            id="tooltip-content"
            role="tooltip"
            className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
            Contenido del bloque de texto
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </label>
        <textarea
          name="content"
          id="content"
          value={form.content}
          onChange={handleInputChange}
          className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none min-h-[8rem] max-h-[12rem]"
        />
      </div>
    </div>
  </div>
);

export default TextFields;
