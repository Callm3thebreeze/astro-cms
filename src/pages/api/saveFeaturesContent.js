// src/pages/api/saveFeaturesContent.js

import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST({ request }) {
  const data = await request.json();
  const filePath = join(process.cwd(), "src", "content", "features.js");

  const features = data.features;

  if (!features) {
    return res.status(400).json({ message: "No features data provided" });
  }

  const content = `
    export const features = ${JSON.stringify(features[0], null, 2)};
  `;

  try {
    await writeFile(filePath, content);
    return new Response("Content saved", { status: 200 });
  } catch (error) {
    return new Response("Error saving content", { status: 500 });
  }
}
