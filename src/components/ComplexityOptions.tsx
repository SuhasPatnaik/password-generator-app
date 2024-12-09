import { useState } from "react";

const complexityOptions = [
  { id: "uppercase", name: "Include Uppercase Letters" },
  { id: "lowercase", name: "Include Lowercase Letters" },
  { id: "number", name: "Include Numbers" },
  { id: "symbol", name: "Include Symbols" },
];

export default function ComplexityOptions() {
  const [isUppercaseChecked, setIsUppercaseChecked] = useState(false);
  const [isLowercaseChecked, setIsLowercaseChecked] = useState(false);
  const [isNumberChecked, setIsNumberChecked] = useState(false);
  const [isSymbolChecked, setIsSymbolsChecked] = useState(false);

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

  return (
    <>
      <li className="list-none flex flex-col gap-2">
        {complexityOptions.map((option) => {
          return (
            <>
              <div key={option.id} className="flex gap-4 items-center">
                <input
                  type="checkbox"
                  name={option.name}
                  id={option.id}
                  onChange={(e) => handleCheckboxSelection(e, option.id)}
                  className="accent-neon-green h-5 w-5"
                />
                <ul>{option.name}</ul>
              </div>
            </>
          );
        })}
      </li>
    </>
  );
}
