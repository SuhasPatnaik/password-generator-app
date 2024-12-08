import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="py-16">
        <h1 className="text-grey text-center">Password Generator</h1>
        <PasswordField />
        <PasswordSettings />
      </div>
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
          className="object-none cursor-pointer"
          onClick={() => alert("Add a handler fn here")}
        />
      </div>
    </>
  );
}

function PasswordSettings() {
  return (
    <>
      <div className="flex flex-col gap-8 bg-dark-grey mt-4 p-4">
        <LengthSlider />
        <ComplexityOptions />
        <div className="flex flex-col gap-4">
          <StrengthGauge />
          <GenerateBtn />
        </div>
      </div>
    </>
  );
}

function LengthSlider() {
  const [charLength, setCharLength] = useState<number>(0);

  return (
    <>
      <div className="grid grid-cols-2 items-center gap-4">
        <label htmlFor="charLength">Character Length</label>
        <p className="justify-self-end text-heading-md text-neon-green">
          {charLength}
        </p>
        {/* slider track — the visual background of the slider */}
        <div className="col-span-2 h-2 bg-very-dark-grey relative">
          {/* "filled" track - dynamically adjusted based on charLength */}
          <div
            className="absolute h-full bg-neon-green"
            style={{
              width: `${(charLength / 16) * 100}%`,
            }}
          />
          {/* Fully unstyled input <=> thumb <=> draggable element */}
          <input
            type="range"
            id="charLength"
            min={0}
            max={16}
            value={charLength}
            onChange={(e) => setCharLength(Number(e.target.value))}
            className="absolute w-full h-full appearance-none outline-none custom-thumb"
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
      <li className="list-none flex flex-col gap-2">
        {complexityOptions.map((option) => {
          return (
            <>
              <div className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name="uppercase"
                  id="uppercase"
                  className="accent-neon-green h-5 w-5"
                />
                <ul>{option}</ul>
              </div>
            </>
          );
        })}
      </li>
    </>
  );
}

const strengthLevels = {
  tooWeak: { label: "Too Weak!", filledBars: 1, color: "bg-red" },
  weak: { label: "Weak", filledBars: 2, color: "bg-orange" },
  medium: { label: "Medium", filledBars: 3, color: "bg-yellow" },
  strong: { label: "Strong", filledBars: 4, color: "bg-neon-green" },
};

function StrengthGauge() {
  return (
    <>
      <div className="flex bg-very-dark-grey items-center p-4 justify-between">
        <p className="text-grey">STRENGTH</p>
        <div className="flex gap-2 items-center">
          <p className="text-body-md uppercase">Medium</p>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-7 ${
                index < strengthLevels.medium.filledBars
                  ? strengthLevels.medium.color
                  : "border-2 border-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}

function GenerateBtn() {
  return (
    <>
      <button className="flex justify-center items-center gap-4 w-full bg-neon-green py-4 cursor-pointer">
        <p className="text-very-dark-grey uppercase ">Generate</p>
        <img src="images/icon-arrow-right.svg" alt="Right arrow" />
      </button>
    </>
  );
}

export default App;
