import { useEffect, useState } from "react";

interface PasswordFieldProps {
  password: string;
}

export default function PasswordField({ password }: PasswordFieldProps) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    let timeout: number;
    if (isCopied) {
      timeout = setTimeout(() => {
        setIsCopied(false);
      }, 1500);
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
        <button
          className={`copy-icon cursor-pointer object-none ${
            isCopied || !password ? "opacity-50 pointer-events-none" : ""
          }`}
          onClick={() => {
            navigator.clipboard
              .writeText(password)
              .then(() => setIsCopied(true))
              .catch(() => alert("Failed to copy password!"));
          }}
        ></button>
      </div>
    </>
  );
}
