import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST({ request }) {
  const data = await request.json();
  const filePath = join(process.cwd(), "src", "content", "infoBlocks.js");

  const blocks = data.blocks;

  const content = `
    export const head = ${JSON.stringify(data.head, null, 2)};
    export const blocks = ${JSON.stringify(blocks, null, 2)};
  `;

  try {
    await writeFile(filePath, content);
    return new Response("Content saved", { status: 200 });
  } catch (error) {
    return new Response("Error saving content", { status: 500 });
  }
}
