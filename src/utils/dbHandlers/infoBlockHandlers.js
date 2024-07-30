import { databases, ID } from "@lib/appwrite";
import { updateContentFile } from "../infoBlocksFileHandlers";

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

const filterFormData = (formData) =>
  Object.keys(formData)
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = formData[key];
      return obj;
    }, {});

export const handleSaveInfoBlock = async (
  e,
  form,
  setForm,
  setBlocks,
  DATABASE_ID,
  INFOBLOCK_COLLECTION_ID,
) => {
  e.preventDefault();
  console.log("Form data before save:", form);

  const { id, ...formData } = form;
  const filteredData = filterFormData(formData);

  try {
    let response;
    if (id) {
      response = await databases.updateDocument(
        DATABASE_ID,
        INFOBLOCK_COLLECTION_ID,
        id,
        filteredData,
      );
      console.log("Document updated:", response);
    } else {
      response = await databases.createDocument(
        DATABASE_ID,
        INFOBLOCK_COLLECTION_ID,
        ID.unique(),
        filteredData,
      );
      console.log("Document created:", response);
    }

    const newBlocksResponse = await databases.listDocuments(
      DATABASE_ID,
      INFOBLOCK_COLLECTION_ID,
    );
    const updatedBlocks = newBlocksResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
      type: "infoBlock",
    }));

    await updateContentFile(updatedBlocks);

    setBlocks((prevBlocks) => [
      ...prevBlocks.filter((block) => block.type !== "infoBlock"),
      ...updatedBlocks,
    ]);

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
    });
  } catch (error) {
    console.error("Error saving document:", error);
  }
};

export const handleEditInfoBlock = (index, blocks, setForm) => {
  const block = blocks[index];
  console.log(`Editing document with ID: ${block.id}`);
  setForm(block);
};
