import { useState } from "react";
import Form from "./Form";
import BlockList from "./BlockList";
import {
  handleInputChange,
  handleSave,
  handleDelete,
  handleEdit,
} from "../utils/handlers";

const AdminPage = ({ DATABASE_ID, COLLECTION_ID }) => {
  const [blocks, setBlocks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    content: "",
    titleSize: "small", // Valor predeterminado
    imagePosition: "",
    imageStyle: "",
    imageSrc: "",
    imageAlt: "",
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

  const handleFormSave = (e) => {
    console.log("Saving form...");
    handleSave(e, form, setForm, setBlocks, DATABASE_ID, COLLECTION_ID);
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
      />
      <BlockList
        blocks={blocks}
        handleEdit={(index) =>
          handleEdit(
            index,
            blocks,
            setForm,
            setBlocks,
            DATABASE_ID,
            COLLECTION_ID,
          )
        }
        handleDelete={(index) =>
          handleDelete(index, blocks, setBlocks, DATABASE_ID, COLLECTION_ID)
        }
      />
    </main>
  );
};

export default AdminPage;
