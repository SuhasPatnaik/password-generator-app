import { useState } from "react";

interface GenerateBtnProps {
  charLength: number;
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

export default function GenerateBtn({
  charLength,
  onGeneratePassword,
  isUppercaseChecked,
  isLowercaseChecked,
  isNumberChecked,
  isSymbolChecked,
}: GenerateBtnProps) {
  const [noOptionsSelected, setNoOptionsSelected] = useState<boolean>(false);

  const onGenerateBtnClick = () => {
    if (
      !isUppercaseChecked &&
      !isLowercaseChecked &&
      !isNumberChecked &&
      !isSymbolChecked
    ) {
      setNoOptionsSelected(true);
      // Reset the password -> empty
      onGeneratePassword(
        charLength,
        isUppercaseChecked,
        isLowercaseChecked,
        isNumberChecked,
        isSymbolChecked
      );
      return;
    }
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
