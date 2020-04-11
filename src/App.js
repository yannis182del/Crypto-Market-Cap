import React from "react";
import Table from "./Components/Table.js/Table";
import Header from './Components/Header/Header'
import Routing from './Components/Router/Router'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
