import TheHero from "./components-4/TheHero/TheHero";
// import Anchor from "../task-1/components/Anchor";

const App = () => {
  return (
    <div className="mx-auto">
      {/* <Anchor link={"home"} path={"../index.html"}/> */}
      <header className="text-3xl font-bold py-5 text-orange-600 text-center border-b border-white/50">
        Movie Buffer
      </header>
        {/* <CardDiv/> */}
        <TheHero/>
    </div>
  );
};

export default App;