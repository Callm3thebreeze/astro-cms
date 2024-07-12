import { databases, ID } from "@lib/appwrite";

export const handleInputChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

export const handleSave = async (
  e,
  form,
  setForm,
  setBlocks,
  DATABASE_ID,
  COLLECTION_ID,
) => {
  e.preventDefault();

  try {
    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      form,
    );
    console.log(response);

    // Agrega el nuevo bloque a la lista
    setBlocks((prevBlocks) => [...prevBlocks, form]);

    // Reinicia el formulario
    setForm({
      title: "",
      titleSize: "text-4xl font-bold lg:tracking-tight",
      content: "",
      imagePosition: "",
      imageStyle: "",
      imageSrc: "",
      imageAlt: "",
      button1Text: "",
      button1Href: "",
      button1Style: "primary",
      button1Icon: "",
      button1IconStyle: "",
      button2Text: "",
      button2Href: "",
      button2Style: "primary",
      button2Icon: "",
      button2IconStyle: "",
    });
  } catch (error) {
    console.error(error);
  }
};
export const handleDelete = (index, setBlocks) => {
  setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
};

export const handleEdit = (index, blocks, setForm, setBlocks) => {
  setForm(blocks[index]);
  handleDelete(index, setBlocks);
};
