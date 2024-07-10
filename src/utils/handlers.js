export const handleInputChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

export const handleImageChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({
    ...prevForm,
    image: { ...prevForm.image, [name]: value },
  }));
};

export const handleImageClassChange = (e, setForm, imageClassOptions) => {
  const { value } = e.target;
  setForm((prevForm) => ({
    ...prevForm,
    image: { ...prevForm.image, picClass: imageClassOptions[value] },
  }));
};

export const handleAddLink = (setForm) => {
  setForm((prevForm) => ({
    ...prevForm,
    links: [
      ...prevForm.links,
      { href: "", style: "", icon: { name: "", class: "" }, text: "" },
    ],
  }));
};

export const handleLinkChange = (e, index, setForm) => {
  const { name, value } = e.target;
  setForm((prevForm) => {
    const newLinks = prevForm.links.map((link, i) =>
      i === index ? { ...link, [name]: value } : link,
    );
    return { ...prevForm, links: newLinks };
  });
};

export const handleSave = (e, form, setForm, setBlocks) => {
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

export const handleDelete = (index, setBlocks) => {
  setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
};

export const handleEdit = (index, blocks, setForm, setBlocks) => {
  setForm(blocks[index]);
  handleDelete(index, setBlocks);
};
