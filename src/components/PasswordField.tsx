import { useEffect, useState } from "react";

export default function PasswordField({ password }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 10000);
    }

    return () => clearTimeout(timeout);
  }, [isCopied]);

  return (
    <>
      <div className="bg-dark-grey flex p-4 items-center max-w-[25rem]">
        <input
          disabled
          type="text"
          placeholder="P4$5W0rD"
          className="focus:outline-hidden text-heading-md w-full pr-4"
          value={password}
        />
        {isCopied && <p className="text-neon-green pr-2">COPIED!</p>}
        {/* <img
          src="/images/icon-copy.svg"
          alt="Copy icon"
          className={`object-none cursor-pointer justify-self-end ${
            isCopied ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => {
            navigator.clipboard.writeText(password);
            setIsCopied(true);
          }}
        /> */}
        <div
          className={`copy-icon cursor-pointer object-none ${
            isCopied || !password ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => {
            navigator.clipboard.writeText(password);
            setIsCopied(true);
          }}
        ></div>
      </div>
    </>
  );
}
