import { useState } from "react";

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
      widths: "",
    },
    links: [],
  });

  console.log(blocks);

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
    e.preventDefault(); // Evitar el comportamiento por defecto del formulario
    setBlocks((prevBlocks) => [...prevBlocks, form]);
    setForm({
      title: "",
      description: "",
      image: {
        class: "",
        picClass: "",
        src: "",
        alt: "",
        widths: "",
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

      <form className="space-y-4" onSubmit={handleSave}>
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
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <fieldset>
          <legend className="text-lg font-medium text-gray-900">Imagen</legend>
          <div className="mt-4 space-y-4">
            <div>
              <label
                htmlFor="class"
                className="block text-sm font-medium text-gray-700">
                Clase de imagen
              </label>
              <input
                type="text"
                name="class"
                id="class"
                value={form.image.class}
                onChange={handleImageChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="picClass"
                className="block text-sm font-medium text-gray-700">
                Clase de imagen (picClass)
              </label>
              <input
                type="text"
                name="picClass"
                id="picClass"
                value={form.image.picClass}
                onChange={handleImageChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
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
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
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
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label
                htmlFor="widths"
                className="block text-sm font-medium text-gray-700">
                Anchuras de la imagen (separadas por comas)
              </label>
              <input
                type="text"
                name="widths"
                id="widths"
                value={form.image.widths}
                onChange={handleImageChange}
                className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-lg font-medium text-gray-900">Enlaces</legend>
          {form.links.map((link, index) => (
            <div key={index} className="space-y-4">
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
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor={`linkStyle-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Estilo
                </label>
                <input
                  type="text"
                  name="style"
                  id={`linkStyle-${index}`}
                  value={link.style}
                  onChange={(e) => handleLinkChange(e, index)}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label
                  htmlFor={`linkIconClass-${index}`}
                  className="block text-sm font-medium text-gray-700">
                  Clase del icono
                </label>
                <input
                  type="text"
                  name="icon.class"
                  id={`linkIconClass-${index}`}
                  value={link.icon.class}
                  onChange={(e) => handleLinkChange(e, index)}
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
              </div>
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
                  className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                />
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

        <button
          type="submit"
          value="Submit"
          className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Guardar Elemento
        </button>
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
