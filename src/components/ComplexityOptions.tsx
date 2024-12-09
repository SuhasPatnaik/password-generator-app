const complexityOptions = [
  { id: "uppercase", name: "Include Uppercase Letters" },
  { id: "lowercase", name: "Include Lowercase Letters" },
  { id: "number", name: "Include Numbers" },
  { id: "symbol", name: "Include Symbols" },
];

export default function ComplexityOptions({ onCheckboxSelection }) {
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
                  onChange={(e) => onCheckboxSelection(e, option.id)}
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
