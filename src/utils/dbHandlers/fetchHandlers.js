import { databases } from "@lib/appwrite";

export const fetchBlocks = async (
  DATABASE_ID,
  INFOBLOCK_COLLECTION_ID,
  FEATURES_COLLECTION_ID,
  setBlocks,
) => {
  try {
    const [infoBlocksResponse, featuresResponse] = await Promise.all([
      databases.listDocuments(DATABASE_ID, INFOBLOCK_COLLECTION_ID),
      databases.listDocuments(DATABASE_ID, FEATURES_COLLECTION_ID),
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

    setBlocks([...infoBlocks, ...featuresBlocks]);
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
};
