export const handleInputChange = (e, setForm) => {
  const { name, value } = e.target;
  setForm((prevForm) => ({ ...prevForm, [name]: value }));
};

export const handleImageSizeChange = (e, setForm) => {
  const { value } = e.target;
  setForm((prevForm) => {
    const newImageStyle =
      prevForm.imageStyle
        .split(" ")
        .filter((cls) => !cls.startsWith("w-"))
        .join(" ") + ` ${value}`;

    return {
      ...prevForm,
      imageSize: value,
      imageStyle: newImageStyle,
    };
  });
};

export const handleImageStyleChange = (e, setForm) => {
  const { value } = e.target;
  setForm((prevForm) => {
    const newImageStyle =
      prevForm.imageStyle
        .split(" ")
        .filter((cls) => cls.startsWith("w-"))
        .join(" ") + ` ${value}`;

    return {
      ...prevForm,
      imageStyle: newImageStyle,
    };
  });
};
