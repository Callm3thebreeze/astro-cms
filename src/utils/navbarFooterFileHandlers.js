// navbarFooterHandlers.js
import { databases } from "@lib/appwrite";

export const fetchNavbarFooterConfig = async (
  DATABASE_ID,
  COLLECTION_ID,
  DOCUMENT_ID,
  setForm,
) => {
  try {
    const response = await databases.getDocument(
      DATABASE_ID,
      COLLECTION_ID,
      DOCUMENT_ID,
    );
    setForm(response);
  } catch (error) {
    console.error("Error fetching navbar and footer config:", error);
  }
};

const saveContentToFile = async (url, data) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Error saving content");
    }
    console.log("Content saved successfully");
  } catch (error) {
    console.error("Error saving content:", error);
  }
};

export const saveNavbarFooterConfig = async (
  DATABASE_ID,
  COLLECTION_ID,
  DOCUMENT_ID,
  configData,
) => {
  try {
    await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      DOCUMENT_ID,
      configData,
    );

    const { logoUrl, logoAlt, mainText, secondaryText, footerText } =
      configData;

    await saveContentToFile("/api/saveNavbarContent", {
      logoUrl,
      logoAlt,
      mainText,
      secondaryText,
    });

    await saveContentToFile("/api/saveFooterContent", {
      footerText,
    });

    console.log("Navbar and footer config saved");
  } catch (error) {
    console.error("Error saving navbar and footer config:", error);
  }
};
