import React from "react";

const NavbarFooterFormContainer = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
  handleFileChange,
}) => {
  return (
    <div className="bg-gray-100 rounded-md p-4">
      <h2 className="text-xl font-bold mb-4">Navbar</h2>
      <form onSubmit={handleSave}>
        <div className="space-y-4">
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="logoUrl"
                className="block text-sm font-medium text-gray-700">
                Logo URL
              </label>
              <input
                type="text"
                name="logoUrl"
                id="logoUrl"
                value={form.logoUrl || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />

              <label
                htmlFor="logoFile"
                className="block text-sm font-medium text-gray-700 mt-4">
                Subir Logo
              </label>
              <input
                type="file"
                name="logoFile"
                id="logoFile"
                onChange={(e) => handleFileChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />

              <label
                htmlFor="logoAlt"
                className="block text-sm font-medium text-gray-700 mt-4">
                Alt del Logo
              </label>
              <input
                type="text"
                name="logoAlt"
                id="logoAlt"
                value={form.logoAlt || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>

            <div className="flex-1">
              <label
                htmlFor="mainText"
                className="block text-sm font-medium text-gray-700">
                Texto Principal
              </label>
              <input
                type="text"
                name="mainText"
                id="mainText"
                value={form.mainText || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />

              <label
                htmlFor="secondaryText"
                className="block text-sm font-medium text-gray-700 mt-4">
                Texto Secundario
              </label>
              <input
                type="text"
                name="secondaryText"
                id="secondaryText"
                value={form.secondaryText || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">Footer</h2>
          <div className="mt-4">
            <label
              htmlFor="footerText"
              className="block text-sm font-medium text-gray-700">
              Texto del Footer
            </label>
            <input
              type="text"
              name="footerText"
              id="footerText"
              value={form.footerText || ""}
              onChange={(e) => handleInputChange(e, setForm)}
              className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavbarFooterFormContainer;
