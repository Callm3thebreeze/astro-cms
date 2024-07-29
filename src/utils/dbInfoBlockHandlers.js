import { databases, storage, ID } from "@lib/appwrite";
import { updateContentFile } from "./infoBlocksContentHandlers";

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

export const handleSaveInfoBlock = async (
  e,
  form,
  setForm,
  setBlocks,
  DATABASE_ID,
  COLLECTION_ID,
) => {
  e.preventDefault();
  console.log("Form data before save:", form);

  const { id, ...formData } = form;

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
    "type",
  ];

  const filteredData = Object.keys(formData)
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = formData[key];
      return obj;
    }, {});

  filteredData.type = "infoBlock";

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

    const newBlocksResponse = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
    );
    const updatedBlocks = newBlocksResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
    }));

    await updateContentFile(updatedBlocks);

    setBlocks(updatedBlocks);

    setForm({
      title: "",
      content: "",
      titleSize: "text-4xl font-bold lg:tracking-tight",
      imagePosition: "md:order-1 flex justify-center",
      imageStyle: "rounded-md",
      imageSrc: "",
      imageAlt: "",
      imageFileId: null,
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
      type: "infoBlock",
    });
  } catch (error) {
    console.error("Error saving document:", error);
  }
};

export const handleSaveFeatures = async (
  e,
  form,
  setForm,
  setBlocks,
  DATABASE_ID,
  COLLECTION_ID,
) => {
  e.preventDefault();
  console.log("Form data before save:", form);

  const { id, ...formData } = form;

  const allowedFields = ["featureTitle", "featureSubtitle", "items", "type"];

  const filteredData = Object.keys(formData)
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = formData[key];
      return obj;
    }, {});

  filteredData.type = "features";

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

    const newBlocksResponse = await databases.listDocuments(
      DATABASE_ID,
      COLLECTION_ID,
    );
    const updatedBlocks = newBlocksResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
    }));

    await updateContentFile(updatedBlocks);

    setBlocks(updatedBlocks);

    setForm({
      featureTitle: "",
      featureSubtitle: "",
      items: [{ title: "", description: "", icon: "" }],
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
    await databases.deleteDocument(DATABASE_ID, COLLECTION_ID, block.id);
    if (block.imageFileId) {
      await storage.deleteFile(BUCKET_ID, block.imageFileId);
    }
    setBlocks(async (prevBlocks) => {
      const updatedBlocks = prevBlocks.filter((_, i) => i !== index);
      await updateContentFile(updatedBlocks);
      return updatedBlocks;
    });
  } catch (error) {
    console.error("Error deleting document:", error);
  }
};

export const handleEdit = (index, blocks, setForm) => {
  const block = blocks[index];
  console.log(`Editing document with ID: ${block.id}`);
  setForm(block);
};
