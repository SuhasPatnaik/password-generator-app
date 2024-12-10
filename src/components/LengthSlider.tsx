import { useState } from "react";

export default function LengthSlider({ charLength, setCharLength }) {
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
