const FeaturesFormContainer = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
  showLink1,
  showLink2,
  setShowLink1,
  setShowLink2,
  handleFileChange,
  handleImageSizeChange,
  handleImageStyleChange,
}) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Formulario de Features</h2>
    <form onSubmit={handleSave}>
      {/* Add your form fields here similar to InfoBlocksFormContainer */}
      <div className="space-y-4">
        <div>
          <label
            htmlFor="featureTitle"
            className="block text-sm font-medium text-gray-700">
            Título de la característica
          </label>
          <input
            type="text"
            name="featureTitle"
            id="featureTitle"
            value={form.featureTitle || ""}
            onChange={handleInputChange}
            className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        {/* Add more fields as needed */}
        <button
          type="submit"
          className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Guardar
        </button>
      </div>
    </form>
  </div>
);

export default FeaturesFormContainer;
