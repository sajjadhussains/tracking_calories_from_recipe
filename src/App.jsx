import Header from "./components/Header/Header";
import Recipes from "./components/Recipes/Recipes";

function App() {
  return (
    <div className="md:max-w-7xl mx-auto">
      <Header></Header>
      <Recipes></Recipes>
    </div>
  );
}

export default App;
