import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST({ request }) {
  const data = await request.json();
  let filePath;
  let content;

  if (data.type === "navbar") {
    filePath = join(process.cwd(), "src", "content", "navbar.js");
    content = `
      export const navbar = {
        logo: {
          src: "${data.data.logoUrl}",
          alt: "${data.data.logoAlt}",
        },
        mainText: "${data.data.mainText}",
        secondaryText: "${data.data.secondaryText}",
      };
    `;
  } else if (data.type === "footer") {
    filePath = join(process.cwd(), "src", "content", "footer.js");
    content = `
      export const footer = {
        text: "${data.data.footerText}",
      };
    `;
  } else {
    return new Response("Invalid type", { status: 400 });
  }

  try {
    await writeFile(filePath, content);
    return new Response("Content saved", { status: 200 });
  } catch (error) {
    console.error("Error writing file:", error);
    return new Response("Error saving content", { status: 500 });
  }
}
