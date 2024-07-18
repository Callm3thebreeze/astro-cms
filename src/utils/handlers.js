import { databases, storage, ID } from "@lib/appwrite";

export const fetchBlocks = async (DATABASE_ID, COLLECTION_ID, setBlocks) => {
  try {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    const blocks = response.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
    }));
    setBlocks(blocks);
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};

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
  console.log("Form data before save:", form);

  // Crear una copia del objeto form sin el campo id y sin las propiedades adicionales
  const { id, ...formData } = form;

  // Filtrar solo las propiedades esperadas
  const allowedFields = [
    "title",
    "content",
    "titleSize",
    "imagePosition",
    "imageStyle",
    "imageSrc",
    "imageAlt",
    "imageFileId",
    "button1Text",
    "button1Href",
    "button1Style",
    "button1Icon",
    "button1IconStyle",
    "button2Text",
    "button2Href",
    "button2Style",
    "button2Icon",
    "button2IconStyle",
  ];

  const filteredData = Object.keys(formData)
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = formData[key];
      return obj;
    }, {});

  try {
    let response;
    if (id) {
      response = await databases.updateDocument(
        DATABASE_ID,
        COLLECTION_ID,
        id,
        filteredData,
      );
      console.log("Document updated:", response);
    } else {
      response = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        filteredData,
      );
      console.log("Document created:", response);
    }

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

    setForm({
      title: "",
      content: "",
      titleSize: "small",
      imagePosition: "",
      imageStyle: "",
      imageSrc: "",
      imageAlt: "",
      imageFileId: null, // Restablecer el campo
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
      id: null,
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
  BUCKET_ID,
) => {
  const block = blocks[index];
  if (!block.id) {
    console.error("No document ID found for block:", block);
    return;
  }
  console.log(`Deleting document with ID: ${block.id}`);
  try {
    // Eliminar el documento
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, block.id);

    // Eliminar el archivo de imagen asociado si existe
    if (block.imageFileId) {
      await storage.deleteFile(BUCKET_ID, block.imageFileId);
    }

    // Actualizar el estado
    setBlocks((prevBlocks) => prevBlocks.filter((_, i) => i !== index));
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

export const handleEdit = (index, blocks, setForm) => {
  const block = blocks[index];
  console.log(`Editing document with ID: ${block.id}`);
  setForm(block);
};
