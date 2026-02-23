import Anchor from "../../task-1/components/Anchor";

const TheHeader = () => {
  return (
    <header>
      <div className="flex space-x-2 items-center container p-5 px-20 border-b border-gray-200">
        <p className="text-2xl text-blue-600 font-bold">360 Articles</p>
      </div>
      <Anchor path={"./index.html"} link={"Home"} />
    </header>
  );
};

export default TheHeader;
