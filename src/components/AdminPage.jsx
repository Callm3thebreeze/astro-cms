import React, { useState } from "react";

const AdminPage = () => {
  const [blocks, setBlocks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: {
      class: "",
      picClass: "",
      src: "",
      alt: "",
      widths: [200, 400, 460], // Establecer el valor directamente
    },
    links: [],
  });

  const imageClassOptions = {
    "Black & White": "filter grayscale hover:grayscale-0",
    Color: "filter",
    Transition: "transition-all duration-500",
  };

  const imagePositionOptions = {
    Left: "py-6 md:order-first md:flex",
    Right: "py-6 order-first md:order-1 md:flex",
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleImageChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      image: { ...prevForm.image, [name]: value },
    }));
  };

  const handleImageClassChange = (e) => {
    const { value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      image: { ...prevForm.image, picClass: imageClassOptions[value] },
    }));
  };

  const handleAddLink = () => {
    setForm((prevForm) => ({
      ...prevForm,
      links: [
        ...prevForm.links,
        { href: "", style: "", icon: { name: "", class: "" }, text: "" },
      ],
    }));
  };

  const handleLinkChange = (e, index) => {
    const { name, value } = e.target;
    setForm((prevForm) => {
      const newLinks = prevForm.links.map((link, i) =>
        i === index ? { ...link, [name]: value } : link,
      );
      return { ...prevForm, links: newLinks };
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setBlocks((prevBlocks) => [...prevBlocks, form]);
    setForm({
      title: "",
      description: "",
      image: {
        class: "",
        picClass: "",
        src: "",
        alt: "",
        widths: [200, 400, 460], // Restablecer el valor al reiniciar el formulario
      },
      links: [],
    });
  };

  const handleDelete = (index) => {
    setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setForm(blocks[index]);
    handleDelete(index);
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>

      <form
        className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4"
        onSubmit={handleSave}>
        <div className="md:col-span-1 bg-gray-100 rounded-md p-4">
          <legend className="text-lg font-bold text-gray-900 mb-4">
            Texto
          </legend>
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
                htmlFor="description"
                className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <textarea
                name="description"
                id="description"
                value={form.description}
                onChange={handleInputChange}
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
                  onChange={handleImageClassChange}
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
                  htmlFor="class"
                  className="block text-sm font-medium text-gray-700">
                  Posición
                </label>
                <select
                  name="picClass"
                  id="picClass"
                  value={Object.keys(imageClassOptions).find(
                    (key) => imagePositionOptions[key] === form.image.picClass,
                  )}
                  onChange={handleImageClassChange}
                  className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                  {Object.keys(imagePositionOptions).map((option) => (
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
                  onChange={handleImageChange}
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
                  onChange={handleImageChange}
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
                    onChange={(e) => handleLinkChange(e, index)}
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
                    onChange={(e) => handleLinkChange(e, index)}
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
                    name="buttonStyle"
                    id={`linkStyle-${index}`}
                    value={Object.keys(buttonStyles).find(
                      (key) => buttonStyles[key] === form.image.picClass,
                    )}
                    onChange={handleLinkChange}
                    className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    {Object.keys(buttonStyles).map((option) => (
                      <option key={option} value={option}>
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
                    onChange={(e) => handleLinkChange(e, index)}
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
                    name="iconStyle"
                    id={`linkIconClass-${index}`}
                    value={Object.keys(iconStyles).find(
                      (key) => iconStyles[key] === form.image.picClass,
                    )}
                    onChange={handleLinkChange}
                    className="mt-3 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md">
                    {Object.keys(iconStyles).map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddLink}
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

      <div className="mt-8">
        {blocks.map((block, index) => (
          <div
            key={index}
            className="mb-6 p-4 border border-gray-200 rounded-md shadow-sm">
            <div className="infoblock">
              {block.image && (
                <div className={block.image.class}>
                  <img
                    className={block.image.picClass}
                    src={block.image.src}
                    alt={block.image.alt}
                  />
                </div>
              )}
              <h2>{block.title}</h2>
              <p>{block.description}</p>
              {block.links && block.links.length > 0 && (
                <ul>
                  {block.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href} className={link.style}>
                        {link.icon && (
                          <i className={link.icon.class}>{link.icon.name}</i>
                        )}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              onClick={() => handleEdit(index)}
              className="mt-2 py-1 px-3 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
              Editar
            </button>
            <button
              onClick={() => handleDelete(index)}
              className="mt-2 py-1 px-3 ml-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default AdminPage;
