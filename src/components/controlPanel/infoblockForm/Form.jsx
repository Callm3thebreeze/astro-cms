import TextFields from "./TextFields";
import ImageFields from "./ImageFields";
import LinkFields from "./LinkFields";

const Form = ({
  form,
  setForm,
  handleInputChange,
  handleSave,
  showLink1,
  showLink2,
  setShowLink1,
  setShowLink2,
  handleFileChange,
  handleImageSizeChange,
  handleImageStyleChange,
}) => {
  const titleSizeOptions = {
    small: "text-4xl font-bold lg:tracking-tight",
    big: "text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight",
  };

  const imageClassOptions = {
    Color: "flex justify-center",
    "Black & White": "filter grayscale flex justify-center",
    Transition:
      "transition-all duration-500 filter grayscale hover:grayscale-0 flex justify-center",
  };

  const imagePositionOptions = {
    right: "md:order-1 flex justify-center",
    left: "md:order-first flex justify-center",
  };

  const imageSizeOptions = {
    small: "w-2/4",
    medium: "w-3/4",
    big: "w-full",
  };

  const buttonStyles = {
    primary: "primary",
    outline: "outline",
    inverted: "inverted",
    muted: "muted",
  };

  const iconStyles = {
    white: "text-white w-5 h-5",
    black: "text-black w-5 h-5",
  };

  return (
    <form
      method="POST"
      className="space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4"
      onSubmit={handleSave}>
      <TextFields
        form={form}
        handleInputChange={(e) => handleInputChange(e, setForm)}
        titleSizeOptions={titleSizeOptions}
      />
      <ImageFields
        form={form}
        handleInputChange={(e) => handleInputChange(e, setForm)}
        handleFileChange={(e) => handleFileChange(e, setForm)}
        handleImageSizeChange={(e) => handleImageSizeChange(e, setForm)}
        handleImageStyleChange={(e) => handleImageStyleChange(e, setForm)}
        imageClassOptions={imageClassOptions}
        imagePositionOptions={imagePositionOptions}
        imageSizeOptions={imageSizeOptions}
      />
      <LinkFields
        form={form}
        handleInputChange={(e) => handleInputChange(e, setForm)}
        showLink1={showLink1}
        showLink2={showLink2}
        setShowLink1={setShowLink1}
        setShowLink2={setShowLink2}
        buttonStyles={buttonStyles}
        iconStyles={iconStyles}
      />
      <div className="md:col-span-2">
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Guardar Elemento
        </button>
      </div>
    </form>
  );
};

export default Form;
