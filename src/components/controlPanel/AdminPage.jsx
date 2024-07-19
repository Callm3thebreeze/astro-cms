import { useState, useEffect } from "react";
import Form from "./infoblockForm/Form";
import BlockList from "./BlockList";
import {
  handleInputChange,
  handleSave,
  handleDelete,
  handleEdit,
  fetchBlocks,
} from "@utils/handlers";
import { storage, databases, ID } from "@lib/appwrite";

const AdminPage = ({ DATABASE_ID, COLLECTION_ID, BUCKET_ID }) => {
  const [blocks, setBlocks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    titleSize: "text-4xl font-bold lg:tracking-tight",
    imagePosition: "md:order-1 md:flex",
    imageStyle: "flex justify-center w-full",
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
  const [showLink1, setShowLink1] = useState(false);
  const [showLink2, setShowLink2] = useState(false);

  useEffect(() => {
    fetchBlocks(DATABASE_ID, COLLECTION_ID, setBlocks);
  }, [DATABASE_ID, COLLECTION_ID]);

  const handleFormSave = (e) => {
    console.log("Saving form...");
    handleSave(e, form, setForm, setBlocks, DATABASE_ID, COLLECTION_ID);
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

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>
      <Form
        form={form}
        setForm={setForm}
        handleInputChange={handleInputChange}
        handleSave={handleFormSave}
        showLink1={showLink1}
        showLink2={showLink2}
        setShowLink1={setShowLink1}
        setShowLink2={setShowLink2}
        handleFileChange={handleFileChange}
      />
      <BlockList
        blocks={blocks}
        handleEdit={(index) => handleEdit(index, blocks, setForm)}
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
    </main>
  );
};

export default AdminPage;
