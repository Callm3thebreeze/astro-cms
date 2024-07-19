import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST({ request }) {
  console.log(request);
  const data = await request.json();
  const filePath = join(process.cwd(), "src", "content", "infoBlocks.js");

  const blocks = data.blocks.reduce((acc, block, index) => {
    acc[`block${index + 1}`] = block;
    return acc;
  }, {});

  const content = `
    export const head = ${JSON.stringify(data.head, null, 2)};
    ${Object.entries(blocks)
      .map(
        ([key, value]) =>
          `export const ${key} = ${JSON.stringify(value, null, 2)};`,
      )
      .join("\n")}
  `;

  try {
    await writeFile(filePath, content);
    return new Response("Content saved", { status: 200 });
  } catch (error) {
    return new Response("Error saving content", { status: 500 });
  }
}
