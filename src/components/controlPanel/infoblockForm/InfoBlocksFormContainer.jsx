import TextFields from "./TextFields";
import ImageFields from "./ImageFields";
import LinkFields from "./LinkFields";

const InfoBlocksFormContainer = ({
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
    Pequeño: "text-4xl font-bold lg:tracking-tight",
    Grande: "text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight",
  };

  const imageClassOptions = {
    Color: "rounded-md",
    "Blanco y negro": "filter grayscale  rounded-md",
    Transición:
      "transition-all duration-500 filter grayscale hover:grayscale-0 rounded-md",
  };

  const imagePositionOptions = {
    Derecha: "md:order-1 flex justify-center",
    Izquierda: "md:order-first flex justify-center",
  };

  const imageSizeOptions = {
    Pequeña: "w-2/4",
    Mediana: "w-3/4",
    Grande: "w-full",
  };

  const buttonStyles = {
    Negro: "primary",
    "Blanco con borde negro": "outline",
    Blanco: "inverted",
    Gris: "muted",
  };

  const iconStyles = {
    Blanco: "text-white w-5 h-5",
    Negro: "text-black w-5 h-5",
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

export default InfoBlocksFormContainer;
