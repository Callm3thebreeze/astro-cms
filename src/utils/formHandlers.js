const updateFormState = (setForm, key, value) => {
  setForm((prevForm) => ({
    ...prevForm,
    [key]: value,
  }));
};

const updateImageStyle = (setForm, filterFn, newValue) => {
  setForm((prevForm) => {
    const newImageStyle =
      prevForm.imageStyle.split(" ").filter(filterFn).join(" ") +
      ` ${newValue}`;

    return {
      ...prevForm,
      imageStyle: newImageStyle,
    };
  });
};

export const handleInputChange = (e, setForm) => {
  const { name, value } = e.target;
  updateFormState(setForm, name, value);
};

export const handleImageSizeChange = (e, setForm) => {
  const { value } = e.target;
  updateFormState(setForm, "imageSize", value);
  updateImageStyle(setForm, (cls) => !cls.startsWith("w-"), value);
};

export const handleImageStyleChange = (e, setForm) => {
  const { value } = e.target;
  updateImageStyle(setForm, (cls) => cls.startsWith("w-"), value);
};
