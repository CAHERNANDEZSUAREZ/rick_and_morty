import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
 import { useState } from "react";

function App() {
   const [characters, setUsers] = useState([]);
  return (
    <div className="App" style={{ padding: "25px" }}>
      <div>
      <Nav onSearch={(characterID) => window.alert(characterID)} />
      </div>
      <div>
        <Cards characters={characters} />
      </div>
    </div>
  );
}

export default App;
