import { iconsBlock } from "@content/demo";
import { databases, ID } from "@lib/appwrite";

export const saveIconsBlock = async (
  e,
  form,
  setForm,
  setBlocks,
  DATABASE_ID,
  ICONSBLOCK_COLLECTION_ID,
) => {
  e.preventDefault();

  const { id, ...formData } = form;
  console.log(id);

  const iconsData = {
    text: formData.text,
    icon1: formData.icons[0]?.name || "",
    isAnchor1: formData.icons[0]?.isAnchor || false,
    icon2: formData.icons[1]?.name || "",
    isAnchor2: formData.icons[1]?.isAnchor || false,
    icon3: formData.icons[2]?.name || "",
    isAnchor3: formData.icons[2]?.isAnchor || false,
    icon4: formData.icons[3]?.name || "",
    isAnchor4: formData.icons[3]?.isAnchor || false,
    icon5: formData.icons[4]?.name || "",
    isAnchor5: formData.icons[4]?.isAnchor || false,
    icon6: formData.icons[5]?.name || "",
    isAnchor6: formData.icons[5]?.isAnchor || false,
    type: "icons",
  };
  console.log(iconsData);

  try {
    let appwriteResponse;
    if (id) {
      appwriteResponse = await databases.updateDocument(
        DATABASE_ID,
        ICONSBLOCK_COLLECTION_ID,
        id,
        iconsData,
      );
      setBlocks((prevBlocks) =>
        prevBlocks.map((block) => (block.id === id ? appwriteResponse : block)),
      );
    } else {
      appwriteResponse = await databases.createDocument(
        DATABASE_ID,
        ICONSBLOCK_COLLECTION_ID,
        ID.unique(),
        iconsData,
      );
      setBlocks((prevBlocks) => [...prevBlocks, appwriteResponse]);
    }

    setForm({ text: "", icons: [{ isAnchor: false, name: "" }], id: null });
  } catch (error) {
    console.error("Error saving icons block:", error);
  }
};

export const handleEditIconsBlock = (index, blocks, setForm) => {
  const block = blocks[index];
  setForm({
    text: block.text,
    icons: [
      {
        isAnchor: block.isAnchor1,
        name: block.icon1,
      },
      {
        isAnchor: block.isAnchor2,
        name: block.icon2,
      },
      {
        isAnchor: block.isAnchor3,
        name: block.icon3,
      },
      {
        isAnchor: block.isAnchor4,
        name: block.icon4,
      },
      {
        isAnchor: block.isAnchor5,
        name: block.icon5,
      },
      {
        isAnchor: block.isAnchor6,
        name: block.icon6,
      },
    ].filter((icon) => icon.name !== ""),
    id: block.id,
  });
};
