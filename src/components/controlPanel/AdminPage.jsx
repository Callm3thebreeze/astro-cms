import { useState, useEffect } from "react";
import InfoBlocksFormContainer from "./infoBlockForm/InfoBlocksFormContainer";
import FeaturesFormContainer from "./featuresForm/FeaturesFormContainer";
import BlockList from "./BlockList";
import {
  handleInputChange,
  handleImageSizeChange,
  handleImageStyleChange,
} from "@utils/formHandlers";
import { fetchBlocks } from "@utils/dbHandlers/fetchHandlers";
import {
  handleSaveInfoBlock,
  handleEditInfoBlock,
} from "@utils/dbHandlers/infoBlockHandlers";
import {
  handleSaveFeatures,
  handleEditFeature,
} from "@utils/dbHandlers/featuresHandlers";
import { handleDelete } from "@utils/dbHandlers/deleteHandler";
import { storage, ID } from "@lib/appwrite";

const AdminPage = ({
  DATABASE_ID,
  INFOBLOCK_COLLECTION_ID,
  FEATURES_COLLECTION_ID,
  BUCKET_ID,
}) => {
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
    id: null,
  });

  const [showLink1, setShowLink1] = useState(false);
  const [showLink2, setShowLink2] = useState(false);
  const [selectedForm, setSelectedForm] = useState("infoBlocks");

  useEffect(() => {
    fetchBlocks(
      DATABASE_ID,
      INFOBLOCK_COLLECTION_ID,
      FEATURES_COLLECTION_ID,
      setBlocks,
    );
  }, [DATABASE_ID, INFOBLOCK_COLLECTION_ID, FEATURES_COLLECTION_ID]);

  const handleSaveInfoBlockForm = (e) => {
    handleSaveInfoBlock(
      e,
      infoBlockForm,
      setInfoBlockForm,
      setBlocks,
      DATABASE_ID,
      INFOBLOCK_COLLECTION_ID,
    );
  };

  const handleSaveFeaturesForm = (e) => {
    handleSaveFeatures(
      e,
      featuresForm,
      setFeaturesForm,
      setBlocks,
      DATABASE_ID,
      FEATURES_COLLECTION_ID,
    );
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
            handleSave={handleSaveInfoBlockForm}
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
            handleSave={handleSaveFeaturesForm}
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
          handleEdit={(index) => {
            const block = blocks[index];
            if (block.type === "features") {
              handleEditFeature(index, blocks, setFeaturesForm);
            } else {
              handleEditInfoBlock(index, blocks, setInfoBlockForm);
            }
          }}
          handleDelete={(index) => {
            const block = blocks[index];
            if (block.type === "features") {
              handleDelete(
                index,
                blocks,
                setBlocks,
                DATABASE_ID,
                FEATURES_COLLECTION_ID,
                BUCKET_ID,
              );
            } else {
              handleDelete(
                index,
                blocks,
                setBlocks,
                DATABASE_ID,
                INFOBLOCK_COLLECTION_ID,
                BUCKET_ID,
              );
            }
          }}
        />
      </section>
    </main>
  );
};

export default AdminPage;
