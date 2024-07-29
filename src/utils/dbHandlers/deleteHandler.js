import { databases, storage } from "@lib/appwrite";
import { updateContentFile } from "../infoBlocksFileHandlers";

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
