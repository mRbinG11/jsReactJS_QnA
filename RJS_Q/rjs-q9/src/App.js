// App.js
import React from "react";
import CardList from "./components/CardList";
import "./App.css";
const App = () => {
  return (
    <div className="app-container">
      <h2>Efficiently Render 1000 Cards</h2>
      <CardList />
    </div>
  );
};

export default App;
