interface StrengthLevel {
  [key: string]: {
    label: string;
    filledBars: number;
    color: string;
  };
}

interface StrengthGaugeProps {
  isUppercaseChecked: boolean;
  isLowercaseChecked: boolean;
  isNumberChecked: boolean;
  isSymbolChecked: boolean;
}

const strengthLevels: StrengthLevel = {
  tooWeak: { label: "Too Weak!", filledBars: 1, color: "bg-red" },
  weak: { label: "Weak", filledBars: 2, color: "bg-orange" },
  medium: { label: "Medium", filledBars: 3, color: "bg-yellow" },
  strong: { label: "Strong", filledBars: 4, color: "bg-neon-green" },
};

export default function StrengthGauge({
  isUppercaseChecked,
  isLowercaseChecked,
  isNumberChecked,
  isSymbolChecked,
}: StrengthGaugeProps) {
  const numberOfCheckedOptions: number =
    Number(isUppercaseChecked) +
    Number(isLowercaseChecked) +
    Number(isNumberChecked) +
    Number(isSymbolChecked);

  const strengthLevelKey: keyof StrengthLevel =
    numberOfCheckedOptions <= 1
      ? "tooWeak"
      : numberOfCheckedOptions === 2
      ? "weak"
      : numberOfCheckedOptions === 3
      ? "medium"
      : "strong";

  return (
    <>
      <div className="flex bg-very-dark-grey items-center p-4 justify-between">
        <p className="text-grey">STRENGTH</p>
        <div className="flex gap-2 items-center">
          <p className="text-body-md uppercase">
            {strengthLevels[strengthLevelKey].label}
          </p>
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-7 ${
                index < strengthLevels[strengthLevelKey].filledBars
                  ? strengthLevels[strengthLevelKey].color
                  : "border-2 border-white"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
