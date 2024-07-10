import React, { useState } from "react";
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
      widths: [200, 400, 460], // Establecer el valor directamente
    },
    links: [],
  });

  const handleFormSave = (e) => {
    handleSave(e, form, setForm, setBlocks);
  };

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Panel de Control</h1>
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
