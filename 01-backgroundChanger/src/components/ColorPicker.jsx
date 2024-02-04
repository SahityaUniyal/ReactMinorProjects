/* eslint-disable react/prop-types */
import ColorBtn from "./ColorBtn";

function ColorPicker({ colorSetter, colors }) {
  let btns = [];
  //   creating button for each color
  colors.forEach((element, index) => {
    btns.push(
      <ColorBtn
        key={index}
        colorName={element.colorName}
        textColor={element?.textColor || "white"}
        setColor={colorSetter}
      />
    );
  });
  return (
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-red-100 px-3 py-2 rounded-3xl ">
      {btns}
    </div>
  );
}

export default ColorPicker;
