import { writeFile, access } from "fs/promises";
import { join } from "path";
import { constants } from "fs";

export async function POST({ request }) {
  const data = await request.json();
  const filePath = join(process.cwd(), "src", "content", "infoBlocks.js");

  const head = data.head;
  const blocks = data.blocks;

  const content = `
export const head = ${JSON.stringify(head, null, 2)};
export const blocks = ${JSON.stringify(blocks, null, 2)};
  `;

  try {
    await access(filePath, constants.F_OK);
  } catch (error) {
    // El archivo no existe, así que lo creamos
    await writeFile(filePath, "");
  }

  try {
    await writeFile(filePath, content);
    return new Response("Content saved", { status: 200 });
  } catch (error) {
    return new Response("Error saving content", { status: 500 });
  }
}
