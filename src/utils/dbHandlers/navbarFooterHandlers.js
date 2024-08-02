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

  try {
    const response = await databases.updateDocument(
      DATABASE_ID,
      COLLECTION_ID,
      DOCUMENT_ID,
      filteredData,
    );
    console.log("Navbar and footer config saved:", response);
  } catch (error) {
    console.error("Error saving navbar and footer config:", error);
  }
};
