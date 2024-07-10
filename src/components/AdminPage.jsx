import { useState } from "react";
import Form from "./Form";
import BlockList from "./BlockList";
import {
  handleInputChange,
  handleImageChange,
  handleImageClassChange,
  handleAddLink,
  handleLinkChange,
  handleSave,
  handleDelete,
  handleEdit,
} from "../utils/handlers";

const AdminPage = () => {
  const [blocks, setBlocks] = useState([]);
  const [form, setForm] = useState({
    title: "",
    description: "",
    image: {
      class: "",
      picClass: "",
      src: "",
      alt: "",
      widths: [200, 400, 460],
    },
    links: [],
  });

  const handleFormSave = (e) => {
    handleSave(e, form, setForm, setBlocks);
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Panel de Control</h1>
      <h2 className="text-xl mb-2"> Módulo básico</h2>
      <Form
        form={form}
        setForm={setForm}
        handleInputChange={handleInputChange}
        handleImageChange={handleImageChange}
        handleImageClassChange={handleImageClassChange}
        handleAddLink={handleAddLink}
        handleLinkChange={handleLinkChange}
        handleSave={handleFormSave}
      />
      <BlockList
        blocks={blocks}
        handleEdit={(index) => handleEdit(index, blocks, setForm, setBlocks)}
        handleDelete={(index) => handleDelete(index, setBlocks)}
      />
    </main>
  );
};

export default AdminPage;
