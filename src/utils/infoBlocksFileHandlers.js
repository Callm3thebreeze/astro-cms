const saveContentToFile = async (head, blocks) => {
  try {
    const response = await fetch("/api/saveInfoBlockContent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ head, blocks }),
    });
    if (!response.ok) {
      throw new Error("Error saving content");
    }
    console.log("Content saved successfully");
  } catch (error) {
    console.error("Error saving content:", error);
  }
};

export const updateContentFile = async (updatedBlocks) => {
  const head = updatedBlocks.length > 0 ? updatedBlocks[0] : {};
  const cleanedHead = {
    title: head.title,
    content: head.content,
    image: {
      class: head.imagePosition,
      picClass: head.imageStyle,
      src: head.imageSrc,
      alt: head.imageAlt,
    },
    titleClass: head.titleSize,
    links: [
      {
        href: head.button1Href,
        style: head.button1Style,
        icon: {
          name: head.button1Icon,
          class: head.button1IconStyle,
        },
        text: head.button1Text,
      },
      {
        href: head.button2Href,
        style: head.button2Style,
        icon: {
          name: head.button2Icon,
          class: head.button2IconStyle,
        },
        text: head.button2Text,
      },
    ].filter((link) => link.text),
  };

  const cleanedBlocks = updatedBlocks.slice(1).map((block) => ({
    title: block.title,
    content: block.content,
    image: {
      class: block.imagePosition,
      picClass: block.imageStyle,
      src: block.imageSrc,
      alt: block.imageAlt,
    },
    titleClass: block.titleSize,
    links: [
      {
        href: block.button1Href,
        style: block.button1Style,
        icon: {
          name: block.button1Icon,
          class: block.button1IconStyle,
        },
        text: block.button1Text,
      },
      {
        href: block.button2Href,
        style: block.button2Style,
        icon: {
          name: block.button2Icon,
          class: block.button2IconStyle,
        },
        text: block.button2Text,
      },
    ].filter((link) => link.text),
  }));

  await saveContentToFile(cleanedHead, cleanedBlocks);
};
