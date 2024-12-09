export default function GenerateBtn({
  onGeneratePassword,
  isUppercaseChecked,
  isLowercaseChecked,
  isNumberChecked,
  isSymbolChecked,
}) {
  return (
    <>
      <button
        className="flex justify-center items-center gap-4 w-full bg-neon-green py-4 cursor-pointer"
        onClick={() =>
          onGeneratePassword(
            20,
            isUppercaseChecked,
            isLowercaseChecked,
            isNumberChecked,
            isSymbolChecked
          )
        }
      >
        <p className="text-very-dark-grey uppercase ">Generate</p>
        <img src="images/icon-arrow-right.svg" alt="Right arrow" />
      </button>
    </>
  );
}
