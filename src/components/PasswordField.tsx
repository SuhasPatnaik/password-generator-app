import { useState } from "react";

export default function PasswordField({ password }) {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <>
      <div className="bg-dark-grey flex p-4 items-center max-w-[25rem]">
        <input
          disabled
          type="text"
          placeholder="P4$5W0rD"
          className="focus:outline-hidden text-heading-md w-full w-[16rem] pr-4"
          value={password}
        />
        {isCopied && <p className="text-neon-green pr-4">COPIED</p>}
        <img
          src="/images/icon-copy.svg"
          alt="Copy icon"
          className="object-none cursor-pointer justify-self-end"
          onClick={() => {
            navigator.clipboard.writeText(password);
            setIsCopied(true);
          }}
        />
      </div>
    </>
  );
}
