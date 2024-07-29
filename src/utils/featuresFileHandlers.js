// src/utils/featuresFileHandlers.js

const saveFeaturesContentToFile = async (features) => {
  try {
    const response = await fetch("/api/saveFeaturesContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ features }),
    });
    if (!response.ok) {
      throw new Error("Error saving features content");
    }
    console.log("Features content saved successfully");
  } catch (error) {
    console.error("Error saving features content:", error);
  }
};

export const updateFeaturesContentFile = async (updatedBlocks) => {
  // Solo mantenemos los campos necesarios para el archivo
  const features = updatedBlocks.map((block) => ({
    title: block.title,
    subtitle: block.subtitle,
    items: [
      {
        title: block.item1title,
        description: block.item1description,
        icon: block.item1icon,
      },
      {
        title: block.item2title,
        description: block.item2description,
        icon: block.item2icon,
      },
      {
        title: block.item3title,
        description: block.item3description,
        icon: block.item3icon,
      },
      {
        title: block.item4title,
        description: block.item4description,
        icon: block.item4icon,
      },
      {
        title: block.item5title,
        description: block.item5description,
        icon: block.item5icon,
      },
      {
        title: block.item6title,
        description: block.item6description,
        icon: block.item6icon,
      },
    ].filter((item) => item.title || item.description || item.icon),
  }));

  await saveFeaturesContentToFile(features);
};
