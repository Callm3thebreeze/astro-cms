import React from "react";

const NavbarFooterForm = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
  handleFileChange,
}) => {
  const handleLogoUrlChange = (e) => {
    handleInputChange(e, setForm);
  };

  return (
    <div className="space-y-4 md:col-span-1 bg-gray-100 rounded-md p-4">
      <form onSubmit={handleSave}>
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl font-bold mb-4">Navbar Settings</h2>

          <div className="flex flex-row space-x-4">
            <div className="flex flex-col w-1/2 space-y-4">
              <div>
                <label
                  htmlFor="logoUrl"
                  className="block text-sm font-medium text-gray-700">
                  Navbar Logo URL
                </label>
                <input
                  type="text"
                  name="logoUrl"
                  id="logoUrl"
                  value={form.logoUrl || ""}
                  onChange={handleLogoUrlChange}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {form.logoUrl && (
                  <img
                    src={form.logoUrl}
                    alt="Current Navbar Logo"
                    className="mt-2 w-32 h-auto"
                  />
                )}
              </div>
              <div>
                <label
                  htmlFor="logoFile"
                  className="block text-sm font-medium text-gray-700">
                  Navbar Logo File
                </label>
                <input
                  type="file"
                  name="logoFile"
                  id="logoFile"
                  onChange={(e) => handleFileChange(e, setForm, "logoUrl")}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div>
                <label
                  htmlFor="logoAlt"
                  className="block text-sm font-medium text-gray-700">
                  Navbar Logo Alt
                </label>
                <input
                  type="text"
                  name="logoAlt"
                  id="logoAlt"
                  value={form.logoAlt || ""}
                  onChange={(e) => handleInputChange(e, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {form.logoAlt && (
                  <p className="mt-2 text-gray-500">{form.logoAlt}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="mainText"
                  className="block text-sm font-medium text-gray-700">
                  Navbar Main Text
                </label>
                <input
                  type="text"
                  name="mainText"
                  id="mainText"
                  value={form.mainText || ""}
                  onChange={(e) => handleInputChange(e, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {form.mainText && (
                  <p className="mt-2 text-gray-500">{form.mainText}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="secondaryText"
                  className="block text-sm font-medium text-gray-700">
                  Navbar Secondary Text
                </label>
                <input
                  type="text"
                  name="secondaryText"
                  id="secondaryText"
                  value={form.secondaryText || ""}
                  onChange={(e) => handleInputChange(e, setForm)}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
                {form.secondaryText && (
                  <p className="mt-2 text-gray-500">{form.secondaryText}</p>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4 mt-4">
            <h2 className="text-xl font-bold mb-4">Footer Settings</h2>
            <div>
              <label
                htmlFor="footerText"
                className="block text-sm font-medium text-gray-700">
                Footer Text
              </label>
              <textarea
                name="footerText"
                id="footerText"
                value={form.footerText || ""}
                onChange={(e) => handleInputChange(e, setForm)}
                className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md resize-none min-h-[8rem] max-h-[12rem]"></textarea>
              {form.footerText && (
                <p className="mt-2 text-gray-500">{form.footerText}</p>
              )}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="mt-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
              Guardar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NavbarFooterForm;
