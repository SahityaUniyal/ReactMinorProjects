import { useState } from "react";
import ColorPicker from "./components/ColorPicker";

function App() {
  const [color, setColor] = useState("white");
  function colorSetter(color) {
    setColor(color);
  }
  // Colors array of object that will be displayed
  // text color is optional field (default:white);
  let colors = [
    { colorName: "violet" },
    { colorName: "indigo" },
    { colorName: "blue" },
    { colorName: "green" },
    { colorName: "yellow", textColor: "black" },
    { colorName: "orange" },
    { colorName: "red" },
    { colorName: "black" },
    { colorName: "purple" },
    { colorName: "white", textColor: "black" },
  ];
  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <ColorPicker colors={colors} colorSetter={colorSetter} />
      </div>
    </>
  );
}

export default App;
