const Form = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
  showLink1,
  showLink2,
  setShowLink1,
  setShowLink2,
  handleFileChange,
}) => {
  const titleSizeOptions = {
    small: "text-4xl font-bold lg:tracking-tight",
    big: "text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight",
  };

  const imageClassOptions = {
    Color: "flex justify-center w-full",
    "Black & White": "filter grayscale",
    Transition:
      "transition-all duration-500 filter grayscale hover:grayscale-0 flex justify-center w-full",
  };

  const imagePositionOptions = {
    right: "md:order-1 md:flex",
    left: "md:order-first md:flex",
  };

  const buttonStyles = {
    primary: "primary",
    outline: "outline",
    inverted: "inverted",
    muted: "muted",
  };

  const iconStyles = {
    white: "text-white w-5 h-5",
    black: "text-black w-5 h-5",
  };

  return (
    <form
      method="POST"
      className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4"
      onSubmit={handleSave}>
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
              onChange={(e) => handleInputChange(e, setForm)}
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
              onChange={(e) => handleInputChange(e, setForm)}
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
              onChange={(e) => handleInputChange(e, setForm)}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
      <div className="md:col-span-1 bg-gray-100 rounded-md p-4">
        <fieldset>
          <legend className="text-lg font-bold text-gray-900 mb-4">
            Imagen
          </legend>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="imageStyle"
                className="block text-sm font-medium text-gray-700">
                Estilo de imagen
              </label>
              <select
                name="imageStyle"
                id="imageStyle"
                value={form.imageStyle}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                {Object.keys(imageClassOptions).map((option) => (
                  <option key={option} value={imageClassOptions[option]}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="imagePosition"
                className="block text-sm font-medium text-gray-700">
                Posición de imagen
              </label>
              <select
                name="imagePosition"
                id="imagePosition"
                value={form.imagePosition}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                {Object.keys(imagePositionOptions).map((option) => (
                  <option key={option} value={imagePositionOptions[option]}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="imageSrc"
                className="block text-sm font-medium text-gray-700">
                URL de la imagen
              </label>
              <input
                type="text"
                name="imageSrc"
                id="imageSrc"
                value={form.imageSrc}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="imageFile"
                className="block text-sm font-medium text-gray-700">
                Subir Imagen
              </label>
              <input
                type="file"
                name="imageFile"
                id="imageFile"
                onChange={(e) => handleFileChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="imageAlt"
                className="block text-sm font-medium text-gray-700">
                Alt de la imagen
              </label>
              <input
                type="text"
                name="imageAlt"
                id="imageAlt"
                value={form.imageAlt}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </fieldset>
      </div>

      <div className="md:col-span-2 bg-gray-100 rounded-md p-4">
        <fieldset>
          <legend className="text-lg font-bold text-gray-900 mb-4">
            Enlaces
          </legend>
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                <input
                  type="text"
                  name="button1Icon"
                  id="button1Icon"
                  value={form.button1Icon}
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
                <input
                  type="text"
                  name="button2Icon"
                  id="button2Icon"
                  value={form.button2Icon}
                  onChange={(e) => handleInputChange(e, setForm)}
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
                  onChange={(e) => handleInputChange(e, setForm)}
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
              Añadir Enlace 1
            </button>
          )}
          {showLink1 && !showLink2 && (
            <button
              type="button"
              onClick={() => setShowLink2(true)}
              className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Añadir Enlace 2
            </button>
          )}
        </fieldset>
      </div>

      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Guardar Elemento
        </button>
      </div>
    </form>
  );
};

export default Form;
