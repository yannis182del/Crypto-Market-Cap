import React from "react";
import Table from "./Components/Table.js/Table";
import Header from './Components/Header/Header'
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Crypto market cap</h1>
      <Table />
    </div>
  );
}

export default App;
