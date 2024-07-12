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

  // Crear una copia del objeto form sin el campo id
  const { id, ...formData } = form;

  try {
    let response;
    if (id) {
      // Actualizar el documento existente
      response = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
        formData,
      );
    } else {
      // Crear un nuevo documento
      response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        formData,
      );
    }

    // Agregar o actualizar el bloque en la lista
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      const existingBlockIndex = newBlocks.findIndex(
        (block) => block.id === id,
      );
      if (existingBlockIndex > -1) {
        newBlocks[existingBlockIndex] = { ...form, id: response.$id };
      } else {
        newBlocks.push({ ...form, id: response.$id });
      }
      return newBlocks;
    });

    // Reiniciar el formulario
    setForm({
      title: "",
      content: "",
      titleSize: "small",
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
    console.error("Error saving document:", error);
  }
};

export const handleDelete = async (
  index,
  blocks,
  setBlocks,
  DATABASE_ID,
  COLLECTION_ID,
) => {
  const block = blocks[index];
  console.log(`Deleting document with ID: ${block.id}`);
  try {
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, block.id);
    setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

export const handleEdit = async (index, blocks, setForm, setBlocks) => {
  const block = blocks[index];
  console.log(`Editing document with ID: ${block.id}`);
  try {
    setForm(block);
    setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
  } catch (error) {
    console.error("Error editing document:", error);
  }
};
