import { useState, useEffect } from "react";
import InfoBlocksFormContainer from "./infoBlockForm/InfoBlocksFormContainer";
import FeaturesFormContainer from "./featuresForm/FeaturesFormContainer";
import BlockList from "./BlockList";
import {
  handleInputChange,
  handleImageSizeChange,
  handleImageStyleChange,
} from "@utils/formHandlers";
import {
  handleSave,
  handleDelete,
  handleEdit,
  fetchBlocks,
} from "@utils/dbInfoBlockHandlers";
import { storage, ID } from "@lib/appwrite";

const AdminPage = ({ DATABASE_ID, COLLECTION_ID, BUCKET_ID }) => {
  const [blocks, setBlocks] = useState([]);
  const [infoBlockForm, setInfoBlockForm] = useState({
    title: "",
    content: "",
    titleSize: "text-4xl font-bold lg:tracking-tight",
    imagePosition: "md:order-1 flex justify-center",
    imageStyle: "rounded-md",
    imageSrc: "",
    imageAlt: "",
    imageFileId: null,
    button1Text: "",
    button1Href: "",
    button1Style: "primary",
    button1Icon: "",
    button1IconStyle: "",
    button2Text: "",
    button2Href: "",
    button2Style: "primary",
    button2Icon: "",
    button2IconStyle: "",
    id: null,
  });

  const [featuresForm, setFeaturesForm] = useState({
    featureTitle: "",
    featureSubtitle: "",
    items: [{ title: "", description: "", icon: "" }],
  });

  const [showLink1, setShowLink1] = useState(false);
  const [showLink2, setShowLink2] = useState(false);
  const [selectedForm, setSelectedForm] = useState("infoBlocks");

  useEffect(() => {
    fetchBlocks(DATABASE_ID, COLLECTION_ID, setBlocks);
  }, [DATABASE_ID, COLLECTION_ID]);

  const handleFormSave = (e) => {
    e.preventDefault();
    console.log("Saving form...");
    if (selectedForm === "infoBlocks") {
      handleSave(
        e,
        infoBlockForm,
        setInfoBlockForm,
        setBlocks,
        DATABASE_ID,
        COLLECTION_ID,
      );
    } else {
      console.log("Features form data:", featuresForm);
      // Aquí puedes agregar la lógica para guardar featuresForm
    }
  };

  const handleFileChange = async (e, setForm) => {
    const file = e.target.files[0];
    if (!file) return;

    try {
      const response = await storage.createFile(BUCKET_ID, ID.unique(), file);
      const fileUrl = storage.getFileDownload(BUCKET_ID, response.$id);
      setForm((prevForm) => ({
        ...prevForm,
        imageSrc: fileUrl,
        imageFileId: response.$id,
      }));
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  const renderForm = () => {
    switch (selectedForm) {
      case "infoBlocks":
        return (
          <InfoBlocksFormContainer
            form={infoBlockForm}
            setForm={setInfoBlockForm}
            handleInputChange={handleInputChange}
            handleSave={handleFormSave}
            showLink1={showLink1}
            showLink2={showLink2}
            setShowLink1={setShowLink1}
            setShowLink2={setShowLink2}
            handleFileChange={handleFileChange}
            handleImageSizeChange={handleImageSizeChange}
            handleImageStyleChange={handleImageStyleChange}
          />
        );
      case "features":
        return (
          <FeaturesFormContainer
            form={featuresForm}
            setForm={setFeaturesForm}
            handleInputChange={handleInputChange}
            handleSave={handleFormSave}
          />
        );
      default:
        return null;
    }
  };

  return (
    <main className="container mx-auto py-8 flex flex-col lg:flex-row">
      <aside className="lg:w-1/4 pr-4 mb-4 lg:mb-0">
        <ul className="space-y-4 text-sm font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <button
              onClick={() => setSelectedForm("infoBlocks")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                selectedForm === "infoBlocks"
                  ? "bg-blue-700 text-white dark:bg-blue-600"
                  : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}>
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
              Info Blocks
            </button>
          </li>
          <li>
            <button
              onClick={() => setSelectedForm("features")}
              className={`inline-flex items-center px-4 py-3 w-full rounded-lg ${
                selectedForm === "features"
                  ? "bg-blue-700 text-white dark:bg-blue-600"
                  : "bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}>
              <svg
                className="w-4 h-4 me-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 18 18">
                <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
              </svg>
              Features
            </button>
          </li>
        </ul>
      </aside>
      <section className="lg:w-3/4">
        <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>
        {renderForm()}
        <BlockList
          blocks={blocks}
          handleEdit={(index) => handleEdit(index, blocks, setInfoBlockForm)}
          handleDelete={(index) =>
            handleDelete(
              index,
              blocks,
              setBlocks,
              DATABASE_ID,
              COLLECTION_ID,
              BUCKET_ID,
            )
          }
        />
      </section>
    </main>
  );
};

export default AdminPage;
