import { writeFile } from "fs/promises";
import { join } from "path";

export const updateIconsBlockFile = async (iconsBlocks) => {
  const filePath = join(process.cwd(), "src", "content", "iconsBlock.js");
  const content = `
export const iconsBlock = ${JSON.stringify(iconsBlocks, null, 2)};
  `;

  try {
    await writeFile(filePath, content);
    console.log("Icons block content updated successfully.");
  } catch (error) {
    console.error("Error updating icons block content:", error);
  }
};
