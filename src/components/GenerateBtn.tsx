import { useState } from "react";

export default function GenerateBtn({
  charLength,
  onGeneratePassword,
  isUppercaseChecked,
  isLowercaseChecked,
  isNumberChecked,
  isSymbolChecked,
}) {
  const [noOptionsSelected, setNoOptionsSelected] = useState(false);

  const onGenerateBtnClick = () => {
    if (
      !isUppercaseChecked &&
      !isLowercaseChecked &&
      !isNumberChecked &&
      !isSymbolChecked
    ) {
      setNoOptionsSelected(true);
      onGeneratePassword(
        charLength,
        isUppercaseChecked,
        isLowercaseChecked,
        isNumberChecked,
        isSymbolChecked
      );
      return;
    }
    setNoOptionsSelected(false);
    onGeneratePassword(
      charLength,
      isUppercaseChecked,
      isLowercaseChecked,
      isNumberChecked,
      isSymbolChecked
    );
  };

  return (
    <>
      <button
        className="flex justify-center items-center gap-4 w-full bg-neon-green py-4 cursor-pointer"
        onClick={onGenerateBtnClick}
      >
        <p className="text-very-dark-grey uppercase ">Generate</p>
        <img src="images/icon-arrow-right.svg" alt="Right arrow" />
      </button>
      {noOptionsSelected && (
        <p className="text-red text-sm text-center">
          Please select atleast 1 option!
        </p>
      )}
    </>
  );
}
