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

export const handleImageSizeChange = (e, setForm) => {
  const { value } = e.target;
  setForm((prevForm) => {
    const newImageStyle =
      prevForm.imageStyle
        .split(" ")
        .filter((cls) => !cls.startsWith("w-"))
        .join(" ") + ` ${value}`;

    return {
      ...prevForm,
      imageSize: value,
      imageStyle: newImageStyle,
    };
  });
};

export const handleImageStyleChange = (e, setForm) => {
  const { value } = e.target;
  setForm((prevForm) => {
    const newImageStyle =
      prevForm.imageStyle
        .split(" ")
        .filter((cls) => cls.startsWith("w-"))
        .join(" ") + ` ${value}`;

    return {
      ...prevForm,
      imageStyle: newImageStyle,
    };
  });
};

const saveContentToFile = async (head, blocks) => {
  try {
    const response = await fetch("/api/saveContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ head, blocks }),
    });
    if (!response.ok) {
      throw new Error("Error saving content");
    }
    console.log("Content saved successfully");
  } catch (error) {
    console.error("Error saving content:", error);
  }
};

const updateContentFile = async (updatedBlocks) => {
  const head = updatedBlocks.length > 0 ? updatedBlocks[0] : {};
  const blocks = updatedBlocks.slice(1).map((block) => ({
    ...block,
    titleClass: block.titleSize,
    image: {
      class: block.imagePosition,
      picClass: block.imageStyle,
      src: block.imageSrc,
      alt: block.imageAlt,
    },
    links: [
      {
        href: block.button1Href,
        style: block.button1Style,
        icon: {
          name: block.button1Icon,
          class: block.button1IconStyle,
        },
        text: block.button1Text,
      },
      {
        href: block.button2Href,
        style: block.button2Style,
        icon: {
          name: block.button2Icon,
          class: block.button2IconStyle,
        },
        text: block.button2Text,
      },
    ].filter((link) => link.text),
  }));

  await saveContentToFile(
    {
      ...head,
      titleClass: head.titleSize,
      image: {
        class: head.imagePosition,
        picClass: head.imageStyle,
        src: head.imageSrc,
        alt: head.imageAlt,
      },
      links: [
        {
          href: head.button1Href,
          style: head.button1Style,
          icon: {
            name: head.button1Icon,
            class: head.button1IconStyle,
          },
          text: head.button1Text,
        },
        {
          href: head.button2Href,
          style: head.button2Style,
          icon: {
            name: head.button2Icon,
            class: head.button2IconStyle,
          },
          text: head.button2Text,
        },
      ].filter((link) => link.text),
    },
    blocks,
  );
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
      imagePosition: "md:order-1 md:flex",
      imageStyle: "flex justify-center w-full",
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
      await updateContentFile(updatedBlocks); // Llama a la API después de actualizar los bloques
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
