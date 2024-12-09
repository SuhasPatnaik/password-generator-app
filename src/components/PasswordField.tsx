export default function PasswordField() {
  return (
    <>
      <div className="bg-dark-grey flex p-4">
        <input
          type="text"
          placeholder="P4$5W0rD"
          className="focus:outline-hidden text-heading-md"
        />
        <img
          src="/images/icon-copy.svg"
          alt="Copy icon"
          className="object-none cursor-pointer"
          onClick={() => alert("Add a handler fn here")}
        />
      </div>
    </>
  );
}
