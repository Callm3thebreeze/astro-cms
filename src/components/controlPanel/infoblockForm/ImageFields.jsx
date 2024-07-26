const ImageFields = ({
  form,
  handleInputChange,
  handleFileChange,
  imageClassOptions,
  imagePositionOptions,
  imageSizeOptions,
  handleImageSizeChange,
  handleImageStyleChange,
}) => {
  return (
    <fieldset>
      <div className="md:col-span-1 bg-gray-100 rounded-md p-4">
        <legend className="text-lg font-bold text-gray-900 mb-4">Imagen</legend>
        <div className="space-y-4">
          <div className="relative group">
            <label
              htmlFor="imageStyle"
              className="block text-sm font-medium text-gray-700 flex items-center">
              Estilo de imagen
              <i
                data-tooltip-target="tooltip-imageStyle"
                className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer group-hover:visible group-focus:visible"></i>
              <div
                id="tooltip-imageStyle"
                role="tooltip"
                className="absolute z-10 invisible group-hover:visible group-focus:visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Filtro de color de la imagen, color, blanco y negro o transición
                de blanco y negro a color.
              </div>
            </label>
            <select
              name="imageStyle"
              id="imageStyle"
              value={form.imageStyle || ""}
              onChange={handleImageStyleChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              <option value="">Seleccione...</option>
              {Object.keys(imageClassOptions).map((option) => (
                <option key={option} value={imageClassOptions[option]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="relative group">
            <label
              htmlFor="imagePosition"
              className="block text-sm font-medium text-gray-700 flex items-center">
              Posición de imagen
            </label>
            <select
              name="imagePosition"
              id="imagePosition"
              value={form.imagePosition || ""}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              <option value="">Seleccione...</option>
              {Object.keys(imagePositionOptions).map((option) => (
                <option key={option} value={imagePositionOptions[option]}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="relative group">
            <label
              htmlFor="imageSize"
              className="block text-sm font-medium text-gray-700 flex items-center">
              Tamaño de la imagen
            </label>
            <select
              name="imageSize"
              id="imageSize"
              value={form.imageSize || ""}
              onChange={handleImageSizeChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
              <option value="">Seleccione...</option>
              {Object.keys(imageSizeOptions).map((option) => (
                <option key={option} value={imageSizeOptions[option]}>
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="relative group">
            <label
              htmlFor="imageSrc"
              className="block text-sm font-medium text-gray-700 flex items-center">
              URL de la imagen
              <i
                data-tooltip-target="tooltip-imageSrc"
                className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer group-hover:visible group-focus:visible"></i>
              <div
                id="tooltip-imageSrc"
                role="tooltip"
                className="absolute z-10 invisible group-hover:visible group-focus:visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Para imágenes sacadas de internet, copia y pega la URL de la
                misma.
              </div>
            </label>
            <input
              type="text"
              name="imageSrc"
              id="imageSrc"
              value={form.imageSrc}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="relative group">
            <label
              htmlFor="imageFile"
              className="block text-sm font-medium text-gray-700 flex items-center">
              Subir Imagen
              <i
                data-tooltip-target="tooltip-imageFile"
                className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer group-hover:visible group-focus:visible"></i>
              <div
                id="tooltip-imageFile"
                role="tooltip"
                className="absolute z-10 invisible group-hover:visible group-focus:visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Sube una imagen desde tu dispositivo.
              </div>
            </label>
            <input
              type="file"
              name="imageFile"
              id="imageFile"
              onChange={handleFileChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div className="relative group">
            <label
              htmlFor="imageAlt"
              className="block text-sm font-medium text-gray-700 flex items-center">
              Alt de la imagen
              <i
                data-tooltip-target="tooltip-imageAlt"
                className="ml-2 fas fa-info-circle text-gray-400 hover:text-gray-600 cursor-pointer group-hover:visible group-focus:visible"></i>
              <div
                id="tooltip-imageAlt"
                role="tooltip"
                className="absolute z-10 invisible group-hover:visible group-focus:visible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                Introduce un texto descriptivo de la imagen para personas con
                discapacidad visual.
              </div>
            </label>
            <input
              type="text"
              name="imageAlt"
              id="imageAlt"
              value={form.imageAlt}
              onChange={handleInputChange}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
      </div>
    </fieldset>
  );
};

export default ImageFields;
