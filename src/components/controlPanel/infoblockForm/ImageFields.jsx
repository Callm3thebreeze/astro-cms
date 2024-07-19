const ImageFields = ({
  form,
  handleInputChange,
  handleFileChange,
  imageClassOptions,
  imagePositionOptions,
  imageSizeOptions,
  handleImageSizeChange,
}) => (
  <div className="md:col-span-1 bg-gray-100 rounded-md p-4">
    <fieldset>
      <legend className="text-lg font-bold text-gray-900 mb-4">Imagen</legend>
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
            onChange={handleInputChange}
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
            htmlFor="imageSize"
            className="block text-sm font-medium text-gray-700">
            Tamaño de imagen
          </label>
          <select
            name="imageSize"
            id="imageSize"
            value={form.imageSize}
            onChange={handleImageSizeChange}
            className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
            {Object.keys(imageSizeOptions).map((option) => (
              <option key={option} value={option}>
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleFileChange}
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
            onChange={handleInputChange}
            className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
      </div>
    </fieldset>
  </div>
);

export default ImageFields;
