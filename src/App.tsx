import { useState } from "react";
import "./App.css";

import PasswordField from "./components/PasswordField";
import LengthSlider from "./components/LengthSlider";
import ComplexityOptions from "./components/ComplexityOptions";
import StrengthGauge from "./components/StrengthGauge";
import GenerateBtn from "./components/GenerateBtn";

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

export default App;
