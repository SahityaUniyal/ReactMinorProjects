/* eslint-disable react/prop-types */
const ColorBtn = (props) => {
  const textColor = props?.textColor || "white";
  return (
    <>
      <button
        className="outline-none px-4 py-2   rounded-full text-white shadow-lg"
        style={{
          backgroundColor: props.colorName,
          color: textColor,
        }}
        onClick={() => props.setColor(props.colorName)}
      >
        {props.colorName}
      </button>
    </>
  );
};

export default ColorBtn;
