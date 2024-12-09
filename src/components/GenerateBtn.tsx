export default function GenerateBtn() {
  return (
    <>
      <button className="flex justify-center items-center gap-4 w-full bg-neon-green py-4 cursor-pointer">
        <p className="text-very-dark-grey uppercase ">Generate</p>
        <img src="images/icon-arrow-right.svg" alt="Right arrow" />
      </button>
    </>
  );
}
