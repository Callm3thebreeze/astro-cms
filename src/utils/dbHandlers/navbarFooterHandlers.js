import { databases } from "@lib/appwrite";

const allowedFields = [
  "logoUrl",
  "logoAlt",
  "mainText",
  "secondaryText",
  "footerText",
];

const filterFormData = (formData) =>
  Object.keys(formData)
    .filter((key) => allowedFields.includes(key))
    .reduce((obj, key) => {
      obj[key] = formData[key];
      return obj;
    }, {});

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

export const saveNavbarFooterConfig = async (
  DATABASE_ID,
  COLLECTION_ID,
  DOCUMENT_ID,
  configData,
) => {
  const filteredData = filterFormData(configData);

  const navbarData = {
    logoUrl: filteredData.logoUrl,
    logoAlt: filteredData.logoAlt,
    mainText: filteredData.mainText,
    secondaryText: filteredData.secondaryText,
  };

  const footerData = {
    footerText: filteredData.footerText,
  };

  try {
    await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      DOCUMENT_ID,
      filteredData,
    );

    await saveNavbarContentToFile(navbarData);
    await saveFooterContentToFile(footerData);

    console.log("Navbar and footer config saved");
  } catch (error) {
    console.error("Error saving navbar and footer config:", error);
  }
};

const saveNavbarContentToFile = async (navbarData) => {
  try {
    const response = await fetch("/api/saveNavbarFooterContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "navbar", data: navbarData }),
    });
    if (!response.ok) {
      throw new Error("Error saving navbar content");
    }
    console.log("Navbar content saved successfully");
  } catch (error) {
    console.error("Error saving navbar content:", error);
  }
};

const saveFooterContentToFile = async (footerData) => {
  try {
    const response = await fetch("/api/saveNavbarFooterContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ type: "footer", data: footerData }),
    });
    if (!response.ok) {
      throw new Error("Error saving footer content");
    }
    console.log("Footer content saved successfully");
  } catch (error) {
    console.error("Error saving footer content:", error);
  }
};
