import "./App.css";
import NavBar from "../src/components/NavBar/NavBar";
import ItemListContainer from "../src/components/ItemListContainer/ItemListContainer";
import CartWidget from "./components/CartWidget/CartWidget";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Articulos varios de Messi ¡DALE CAMPEÓN! #10" />
    </div>
  );
}

export default App;
