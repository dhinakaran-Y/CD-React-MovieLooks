import AsideDiv from "./components-4/AsideDiv";
import CardDiv from "./components-4/CardDiv";
import Anchor from "../task-1/components/Anchor";


const App = () => {
  return (
    <div className="container mx-auto">
      <Anchor link={"home"} path={"../index.html"}/>
      <header className="text-3xl font-bold py-5 text-orange-600 text-center border-b border-white/50">Movie Buffer</header>
      <main className="grid grid-cols-12 gap-5 h-[90vh]">
         {/* <AsideDiv/> */}
         <CardDiv/>
      </main>
    </div>
  );
}

export default App;