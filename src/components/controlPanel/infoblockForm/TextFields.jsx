const TextFields = ({ form, handleInputChange, titleSizeOptions }) => (
  <div className="md:col-span-1 bg-gray-100 rounded-md p-4">
    <legend className="text-lg font-bold text-gray-900 mb-4">Texto</legend>
    <div className="space-y-4">
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700">
          Título
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
      <div>
        <label
          htmlFor="titleSize"
          className="block text-sm font-medium text-gray-700">
          Tamaño del título
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
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700">
          Contenido
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
