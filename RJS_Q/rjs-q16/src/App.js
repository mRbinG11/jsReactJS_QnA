// App.js
import React from "react";
import ItemList from "./components/ItemList"; // Import the child component
import "./App.css"; // Import styles
const App = () => {
  // Define a static array of learning goal items
  const items = [
    {
      id: 1,
      title: "Learn React",
      description: "Understand components and hooks.",
    },
    {
      id: 2,
      title: "Build UI",
      description: "Use React to build user interfaces.",
    },
    {
      id: 3,
      title: "Deploy App",
      description: "Host React apps on Netlify or Vercel.",
    },
  ];
  return (
    <div className="app-container">
      <h1>Learning Goals</h1>
      {/* Pass items array as props to ItemList component */}
      <ItemList items={items} />
    </div>
  );
};

export default App;
