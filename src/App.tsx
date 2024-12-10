import { useState } from "react";
import "./App.css";

import PasswordField from "./components/PasswordField";
import LengthSlider from "./components/LengthSlider";
import ComplexityOptions from "./components/ComplexityOptions";
import StrengthGauge from "./components/StrengthGauge";
import GenerateBtn from "./components/GenerateBtn";

const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbols = "!@#$%^&*()-_+=[]{}|;':\",./<>?";

function App() {
  const [isUppercaseChecked, setIsUppercaseChecked] = useState(false);
  const [isLowercaseChecked, setIsLowercaseChecked] = useState(false);
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isSymbolChecked, setIsSymbolsChecked] = useState(false);
  const [password, setPassword] = useState("");

  const handleCheckboxSelection = (e, optionId) => {
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
    length,
    isUppercaseChecked,
    isLowercaseChecked,
    isNumberChecked,
    isSymbolChecked
  ) => {
    console.log("generate password fn. invoked");
    console.log("isUppercaseChecked::: ", isUppercaseChecked);
    console.log("isLowercaseChecked::: ", isLowercaseChecked);
    console.log("isNumberChecked::: ", isNumberChecked);
    console.log("isSymbolChecked::: ", isSymbolChecked);

    let superString = "";

    if (isUppercaseChecked) superString += uppercaseChars;
    if (isLowercaseChecked) superString += lowercaseChars;
    if (isNumberChecked) superString += numberChars;
    if (isSymbolChecked) superString += symbols;

    console.log("superString::: ", superString);

    let genPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * superString.length);
      genPassword += superString[randomIndex];
    }

    console.log("genPassword::: ", genPassword);

    setPassword(genPassword);
  };

  return (
    <>
      <div className="py-16">
        <h1 className="text-grey text-center">Password Generator</h1>
        <PasswordField password={password} />
        <PasswordSettings
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
  onCheckboxSelection,
  onGeneratePassword,
  isUppercaseChecked,
  isLowercaseChecked,
  isNumberChecked,
  isSymbolChecked,
}) {
  return (
    <>
      <div className="flex flex-col gap-8 bg-dark-grey mt-4 p-4">
        <LengthSlider />
        <ComplexityOptions onCheckboxSelection={onCheckboxSelection} />
        <div className="flex flex-col gap-4">
          <StrengthGauge
            isUppercaseChecked={isUppercaseChecked}
            isLowercaseChecked={isLowercaseChecked}
            isNumberChecked={isNumberChecked}
            isSymbolChecked={isSymbolChecked}
          />
          <GenerateBtn
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
