import CooksPreparing from "./../CooksPreparing/CooksPreparing";

const Cooks = ({ preparings }) => {
  return (
    <div>
      <div className="w-[21.875rem] mx-auto mt-8 border-b border-[rgba(40, 40, 40, 0.15)]">
        <h1 className="text-center mb-4 text-2xl font-semibold">
          Want to Cook:{preparings.length}
        </h1>
      </div>
      <CooksPreparing preparings={preparings}></CooksPreparing>
    </div>
  );
};

export default Cooks;
