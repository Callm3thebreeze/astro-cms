const LinkFields = ({
  form,
  handleInputChange,
  showLink1,
  showLink2,
  setShowLink1,
  setShowLink2,
  buttonStyles,
  iconStyles,
}) => (
  <div className="md:col-span-2 bg-gray-100 rounded-md p-4">
    <fieldset>
      <legend className="text-lg font-bold text-gray-900 mb-4">Enlaces</legend>
      {showLink1 && (
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 mb-4">
          <div>
            <label
              htmlFor="button1Text"
              className="block text-sm font-medium text-gray-700">
              Texto del botón 1
            </label>
            <input
              type="text"
              name="button1Text"
              id="button1Text"
              value={form.button1Text}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="button1Href"
              className="block text-sm font-medium text-gray-700">
              Href del botón 1
            </label>
            <input
              type="text"
              name="button1Href"
              id="button1Href"
              value={form.button1Href}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="button1Style"
              className="block text-sm font-medium text-gray-700">
              Estilo del botón 1
            </label>
            <select
              name="button1Style"
              id="button1Style"
              value={form.button1Style}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              {Object.keys(buttonStyles).map((option) => (
                <option key={option} value={buttonStyles[option]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="button1Icon"
              className="block text-sm font-medium text-gray-700">
              Icono del botón 1
            </label>
            <p className="text-sm font-medium font-small text-sky-600">
              Seleccionar icono de la galería y pegar su nombre detrás de "bx:"
              ej: "bx:bxl-whatsapp"
            </p>
            <a
              className="text-sm font-medium font-small text-sky-600 underline"
              href="https://icon-sets.iconify.design/bxl/?commercial=true">
              Galería de iconos
            </a>
            <input
              type="text"
              name="button1Icon"
              id="button1Icon"
              value={form.button1Icon}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="button1IconStyle"
              className="block text-sm font-medium text-gray-700">
              Estilo del icono del botón 1
            </label>
            <select
              name="button1IconStyle"
              id="button1IconStyle"
              value={form.button1IconStyle}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              {Object.keys(iconStyles).map((option) => (
                <option key={option} value={iconStyles[option]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setShowLink1(false)}
            className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Ocultar Enlace 1
          </button>
        </div>
      )}
      {showLink2 && (
        <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 mb-4">
          <div>
            <label
              htmlFor="button2Text"
              className="block text-sm font-medium text-gray-700">
              Texto del botón 2
            </label>
            <input
              type="text"
              name="button2Text"
              id="button2Text"
              value={form.button2Text}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="button2Href"
              className="block text-sm font-medium text-gray-700">
              Href del botón 2
            </label>
            <input
              type="text"
              name="button2Href"
              id="button2Href"
              value={form.button2Href}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="button2Style"
              className="block text-sm font-medium text-gray-700">
              Estilo del botón 2
            </label>
            <select
              name="button2Style"
              id="button2Style"
              value={form.button2Style}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              {Object.keys(buttonStyles).map((option) => (
                <option key={option} value={buttonStyles[option]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="button2Icon"
              className="block text-sm font-medium text-gray-700">
              Icono del botón 2
            </label>
            <p className="text-sm font-medium font-small text-sky-600">
              Seleccionar icono de la galería y pegar su nombre detrás de "bx:"
              ej: "bx:bxl-whatsapp"
            </p>
            <a
              className="text-sm font-medium font-small text-sky-600 underline"
              href="https://icon-sets.iconify.design/bxl/?commercial=true">
              Galería de iconos
            </a>
            <input
              type="text"
              name="button2Icon"
              id="button2Icon"
              value={form.button2Icon}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="button2IconStyle"
              className="block text-sm font-medium text-gray-700">
              Estilo del icono del botón 2
            </label>
            <select
              name="button2IconStyle"
              id="button2IconStyle"
              value={form.button2IconStyle}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              {Object.keys(iconStyles).map((option) => (
                <option key={option} value={iconStyles[option]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={() => setShowLink2(false)}
            className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
            Ocultar Enlace 2
          </button>
        </div>
      )}
      {!showLink1 && (
        <button
          type="button"
          onClick={() => setShowLink1(true)}
          className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Añadir Botón 1
        </button>
      )}
      {showLink1 && !showLink2 && (
        <button
          type="button"
          onClick={() => setShowLink2(true)}
          className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Añadir Botón 2
        </button>
      )}
    </fieldset>
  </div>
);

export default LinkFields;
