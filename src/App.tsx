import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-grey text-center">Password Generator</h1>
      <PasswordField />
      <PasswordSettings />
    </>
  );
}

function PasswordField() {
  return (
    <>
      <div className="bg-dark-grey flex p-4">
        <input
          type="text"
          placeholder="P4$5W0rD"
          className="focus:outline-hidden text-heading-md"
        />
        <img
          src="/images/icon-copy.svg"
          alt="Copy icon"
          className="object-none"
        />
      </div>
    </>
  );
}

function PasswordSettings() {
  return (
    <>
      <LengthSlider />
      <ComplexityOptions />
      <StrengthGauge />
      <GenerateBtn />
    </>
  );
}

function LengthSlider() {
  const [charLength, setCharLength] = useState<number>(0);

  return (
    <>
      <div className="grid grid-cols-2 items-center bg-dark-grey p-4 gap-4">
        <label>Character Length</label>
        <p className="justify-self-end text-heading-md text-neon-green">
          {charLength}
        </p>
        <div className="col-span-2 h-2 bg-very-dark-grey relative">
          <div
            className="absolute h-full bg-neon-green"
            style={{
              width: `${(charLength / 16) * 100}%`,
            }}
          />
          <input
            type="range"
            min={0}
            max={16}
            value={charLength}
            onChange={(e) => setCharLength(Number(e.target.value))}
            className="absolute w-full h-full appearance-none bg-transparent outline-none 
        [&::-webkit-slider-thumb]:appearance-none 
        [&::-webkit-slider-thumb]:bg-almost-white 
        [&::-webkit-slider-thumb]:h-4 
        [&::-webkit-slider-thumb]:w-4 
        [&::-webkit-slider-thumb]:rounded-full 
        [&::-webkit-slider-thumb]:cursor-pointer 
        [&::-webkit-slider-thumb]:z-20"
          />
        </div>
      </div>
    </>
  );
}

const complexityOptions: string[] = [
  "Include Uppercase Letters",
  "Include Lowercase Letters",
  "Include Numbers",
  "Include Symbols",
];

function ComplexityOptions() {
  return (
    <>
      <li className="list-none">
        <input
          type="checkbox"
          name="uppercase"
          id="uppercase"
          className="accent-neon-green h-4 w-4"
        />
      </li>
    </>
  );
}

function StrengthGauge() {
  return <></>;
}

function GenerateBtn() {
  return <></>;
}

export default App;
