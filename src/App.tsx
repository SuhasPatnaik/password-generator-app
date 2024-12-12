import { useState } from "react";
import "./App.css";

import PasswordField from "./components/PasswordField";
import LengthSlider from "./components/LengthSlider";
import ComplexityOptions from "./components/ComplexityOptions";
import StrengthGauge from "./components/StrengthGauge";
import GenerateBtn from "./components/GenerateBtn";

const lowercaseChars: string = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars: string = "0123456789";
const symbols: string = "!@#$%^&*()-_+=[]{}|;':\",./<>?";

interface PasswordSettingsProps {
  charLength: number;
  setCharLength: React.Dispatch<React.SetStateAction<number>>;
  onCheckboxSelection: (
    e: React.ChangeEvent<HTMLInputElement>,
    optionId: string
  ) => void;
  onGeneratePassword: (
    charLength: number,
    isUppercaseChecked: boolean,
    isLowercaseChecked: boolean,
    isNumberChecked: boolean,
    isSymbolChecked: boolean
  ) => void;
  isUppercaseChecked: boolean;
  isLowercaseChecked: boolean;
  isNumberChecked: boolean;
  isSymbolChecked: boolean;
}

function App() {
  const [charLength, setCharLength] = useState<number>(0);
  const [isUppercaseChecked, setIsUppercaseChecked] = useState<boolean>(false);
  const [isLowercaseChecked, setIsLowercaseChecked] = useState<boolean>(false);
  const [isNumberChecked, setIsNumberChecked] = useState<boolean>(false);
  const [isSymbolChecked, setIsSymbolsChecked] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  const handleCheckboxSelection = (
    e: React.ChangeEvent<HTMLInputElement>,
    optionId: string
  ) => {
    const value = e.target.checked;

    if (optionId === "uppercase") {
      setIsUppercaseChecked(value);
    } else if (optionId === "lowercase") {
      setIsLowercaseChecked(value);
    } else if (optionId === "number") {
      setIsNumberChecked(value);
    } else {
      setIsSymbolsChecked(value);
    }
  };

  const handleGeneratePassword = (
    charLength: number,
    isUppercaseChecked: boolean,
    isLowercaseChecked: boolean,
    isNumberChecked: boolean,
    isSymbolChecked: boolean
  ) => {
    let superString: string = "";

    if (isUppercaseChecked) superString += uppercaseChars;
    if (isLowercaseChecked) superString += lowercaseChars;
    if (isNumberChecked) superString += numberChars;
    if (isSymbolChecked) superString += symbols;

    if (superString === "") {
      setPassword(superString);
      return;
    }

    let genPassword: string = "";
    for (let i = 0; i < charLength; i++) {
      const randomIndex = Math.floor(Math.random() * superString.length);
      genPassword += superString[randomIndex];
    }

    setPassword(genPassword);
  };

  return (
    <>
      <div className="py-16">
        <h1 className="text-grey text-center mb-6">Password Generator</h1>
        <PasswordField password={password} />
        <PasswordSettings
          charLength={charLength}
          setCharLength={setCharLength}
          onCheckboxSelection={handleCheckboxSelection}
          onGeneratePassword={handleGeneratePassword}
          isUppercaseChecked={isUppercaseChecked}
          isLowercaseChecked={isLowercaseChecked}
          isNumberChecked={isNumberChecked}
          isSymbolChecked={isSymbolChecked}
        />
      </div>
    </>
  );
}

function PasswordSettings({
  charLength,
  setCharLength,
  onCheckboxSelection,
  onGeneratePassword,
  isUppercaseChecked,
  isLowercaseChecked,
  isNumberChecked,
  isSymbolChecked,
}: PasswordSettingsProps) {
  return (
    <>
      <div className="flex flex-col gap-8 bg-dark-grey mt-4 p-4">
        <LengthSlider charLength={charLength} setCharLength={setCharLength} />
        <ComplexityOptions onCheckboxSelection={onCheckboxSelection} />
        <div className="flex flex-col gap-4">
          <StrengthGauge
            isUppercaseChecked={isUppercaseChecked}
            isLowercaseChecked={isLowercaseChecked}
            isNumberChecked={isNumberChecked}
            isSymbolChecked={isSymbolChecked}
          />
          <GenerateBtn
            charLength={charLength}
            onGeneratePassword={onGeneratePassword}
            isUppercaseChecked={isUppercaseChecked}
            isLowercaseChecked={isLowercaseChecked}
            isNumberChecked={isNumberChecked}
            isSymbolChecked={isSymbolChecked}
          />
        </div>
      </div>
    </>
  );
}

export default App;
