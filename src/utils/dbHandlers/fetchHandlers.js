import { databases } from "@lib/appwrite";

export const fetchBlocks = async (
  DATABASE_ID,
  INFOBLOCK_COLLECTION_ID,
  FEATURES_COLLECTION_ID,
  ICONSBLOCK_COLLECTION_ID,
  setBlocks,
) => {
  try {
    const [infoBlocksResponse, featuresResponse, iconsResponse] =
      await Promise.all([
        databases.listDocuments(DATABASE_ID, INFOBLOCK_COLLECTION_ID),
        databases.listDocuments(DATABASE_ID, FEATURES_COLLECTION_ID),
        databases.listDocuments(DATABASE_ID, ICONSBLOCK_COLLECTION_ID),
      ]);

    const infoBlocks = infoBlocksResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
      type: "infoBlock",
    }));

    const featuresBlocks = featuresResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
      type: "features",
    }));

    const iconsBlocks = iconsResponse.documents.map((doc) => ({
      ...doc,
      id: doc.$id,
      type: "icons",
    }));

    setBlocks([...infoBlocks, ...featuresBlocks, ...iconsBlocks]);
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};
