import React from "react";

const Form = ({
  form,
  setForm,
  handleInputChange,
  handleImageChange,
  handleImageClassChange,
  handleAddLink,
  handleLinkChange,
  handleSave,
}) => {
  const imageClassOptions = {
    "Black & White": "filter grayscale",
    Color: "flex justify-center w-full",
    Transition:
      "transition-all duration-500 filter grayscale hover:grayscale-0 flex justify-center w-full",
  };

  const buttonStyles = {
    outline: "outline",
    primary: "primary",
    inverted: "inverted",
    muted: "muted",
  };

  const iconStyles = {
    white: "text-white w-5 h-5",
    black: "text-black w-5 h-5",
  };

  return (
    <form
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
              htmlFor="description"
              className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              name="description"
              id="description"
              value={form.description}
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
                htmlFor="class"
                className="block text-sm font-medium text-gray-700">
                Clase de imagen
              </label>
              <select
                name="picClass"
                id="picClass"
                value={Object.keys(imageClassOptions).find(
                  (key) => imageClassOptions[key] === form.image.picClass,
                )}
                onChange={(e) =>
                  handleImageClassChange(e, setForm, imageClassOptions)
                }
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                {Object.keys(imageClassOptions).map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="src"
                className="block text-sm font-medium text-gray-700">
                URL de la imagen
              </label>
              <input
                type="text"
                name="src"
                id="src"
                value={form.image.src}
                onChange={(e) => handleImageChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="alt"
                className="block text-sm font-medium text-gray-700">
                Alt de la imagen
              </label>
              <input
                type="text"
                name="alt"
                id="alt"
                value={form.image.alt}
                onChange={(e) => handleImageChange(e, setForm)}
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
          {form.links.map((link, index) => (
            <div
              key={index}
              className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 mb-4">
              <div>
                <label
                  htmlFor={`linkText-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Texto
                </label>
                <input
                  type="text"
                  name="text"
                  id={`linkText-${index}`}
                  value={link.text}
                  onChange={(e) => handleLinkChange(e, index, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor={`linkHref-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Href
                </label>
                <input
                  type="text"
                  name="href"
                  id={`linkHref-${index}`}
                  value={link.href}
                  onChange={(e) => handleLinkChange(e, index, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor={`linkStyle-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Estilo
                </label>
                <select
                  name="style"
                  id={`linkStyle-${index}`}
                  value={link.style}
                  onChange={(e) => handleLinkChange(e, index, setForm)}
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
                  htmlFor={`linkIconName-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Nombre del icono
                </label>
                <input
                  type="text"
                  name="icon.name"
                  id={`linkIconName-${index}`}
                  value={link.icon.name}
                  onChange={(e) => handleLinkChange(e, index, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor={`linkIconClass-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Color del icono
                </label>
                <select
                  name="icon.class"
                  id={`linkIconClass-${index}`}
                  value={link.icon.class}
                  onChange={(e) => handleLinkChange(e, index, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  {Object.keys(iconStyles).map((option) => (
                    <option key={option} value={iconStyles[option]}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddLink(setForm)}
            className="mt-2 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Añadir Enlace
          </button>
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
