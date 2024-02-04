import { useState, useCallback, useRef, useEffect } from "react";

import "./App.css";

function App() {
  // State variable that will be used
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // Refs used later to show select effect on password and copy effect
  const passwordRef = useRef(null);
  const copyRef = useRef(null);

  // Function to generate a random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";
    for (let i = 0; i < length; i++) {
      let c = Math.floor(Math.random() * str.length);
      pass += str.charAt(c);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  // Effect to regenerate password when any relevant field changes
  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);

  // Function to copy the password to the user's clipboard
  const copyToClipBoard = () => {
    // Show the effect of password being selected
    passwordRef.current?.select();
    let tempClass = copyRef.current.className;
    // Show the copied text effect
    copyRef.current.className =
      "before:content-['Copied'] before:block before:bg-white before:text-black before:absolute before:rounded-lg before:p-1 before:right-0 before:top-5 " +
      tempClass;
    // Reset all the changes after 500ms
    setTimeout(() => {
      passwordRef.current?.setSelectionRange(0, 0);
      copyRef.current.className = tempClass;
    }, 500);
    window.navigator.clipboard.writeText(password);
  };

  return (
    <>
      <div className="relative max-w-md mx-auto my-20 rounded-lg p-4 shadow-md bg-gray-800 text-orange-400">
        <h1 className="text-white text-center text-3xl mb-4">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            className="outline-none w-full py-1 px-3"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            className="outline-none px-3 py-0.5 shrink-0 bg-blue-700 text-white"
            onClick={copyToClipBoard}
            ref={copyRef}
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <input
            type="range"
            id="length"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="length">Length:{length}</label>
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numAllowed"
            onChange={() => {
              setNumAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numAllowed">Number</label>
          <input
            id="charAllowed"
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="charAllowed">Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
