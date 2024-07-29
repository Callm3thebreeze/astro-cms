// src/utils/dbHandlers/featuresHandlers.js

import { databases, ID } from "@lib/appwrite";
import { updateFeaturesContentFile } from "../featuresFileHandlers";

export const handleSaveFeatures = async (
  e,
  featuresForm,
  setFeaturesForm,
  setBlocks,
  DATABASE_ID,
  FEATURES_COLLECTION_ID,
) => {
  e.preventDefault();
  console.log("Features form data before save:", featuresForm);

  const { id, ...formData } = featuresForm;

  const featureData = {
    title: formData.featureTitle,
    subtitle: formData.featureSubtitle,
    item1title: formData.items[0]?.title || "",
    item1description: formData.items[0]?.description || "",
    item1icon: formData.items[0]?.icon || "",
    item2title: formData.items[1]?.title || "",
    item2description: formData.items[1]?.description || "",
    item2icon: formData.items[1]?.icon || "",
    item3title: formData.items[2]?.title || "",
    item3description: formData.items[2]?.description || "",
    item3icon: formData.items[2]?.icon || "",
    item4title: formData.items[3]?.title || "",
    item4description: formData.items[3]?.description || "",
    item4icon: formData.items[3]?.icon || "",
    item5title: formData.items[4]?.title || "",
    item5description: formData.items[4]?.description || "",
    item5icon: formData.items[4]?.icon || "",
    item6title: formData.items[5]?.title || "",
    item6description: formData.items[5]?.description || "",
    item6icon: formData.items[5]?.icon || "",
    type: "features",
  };

  try {
    let response;
    if (id) {
      response = await databases.updateDocument(
        DATABASE_ID,
        FEATURES_COLLECTION_ID,
        id,
        featureData,
      );
      console.log("Feature document updated:", response);
    } else {
      response = await databases.createDocument(
        DATABASE_ID,
        FEATURES_COLLECTION_ID,
        ID.unique(),
        featureData,
      );
      console.log("Feature document created:", response);
    }

    const newBlocksResponse = await databases.listDocuments(
      DATABASE_ID,
      FEATURES_COLLECTION_ID,
    );
    const updatedBlocks = newBlocksResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
      type: "features",
    }));

    setBlocks((prevBlocks) => [
      ...prevBlocks.filter((block) => block.type !== "features"),
      ...updatedBlocks,
    ]);

    await updateFeaturesContentFile(updatedBlocks);

    setFeaturesForm({
      featureTitle: "",
      featureSubtitle: "",
      items: [{ title: "", description: "", icon: "" }],
      id: null,
    });
  } catch (error) {
    console.error("Error saving feature document:", error);
  }
};
export const handleEditFeature = (index, blocks, setFeaturesForm) => {
  const block = blocks[index];
  console.log(`Editing feature document with ID: ${block.id}`);

  setFeaturesForm({
    featureTitle: block.title,
    featureSubtitle: block.subtitle,
    items: [
      {
        title: block.item1title,
        description: block.item1description,
        icon: block.item1icon,
      },
      {
        title: block.item2title,
        description: block.item2description,
        icon: block.item2icon,
      },
      {
        title: block.item3title,
        description: block.item3description,
        icon: block.item3icon,
      },
      {
        title: block.item4title,
        description: block.item4description,
        icon: block.item4icon,
      },
      {
        title: block.item5title,
        description: block.item5description,
        icon: block.item5icon,
      },
      {
        title: block.item6title,
        description: block.item6description,
        icon: block.item6icon,
      },
    ].filter((item) => item.title || item.description || item.icon),
    id: block.id,
  });
};
