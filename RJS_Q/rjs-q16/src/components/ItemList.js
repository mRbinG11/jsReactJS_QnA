// components/ItemList.js
import React from "react";
const ItemList = ({ items }) => {
  return (
    <div className="list-container">
      {/* Loop through the items array and render each one in a styled card */}
      {items.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.title}</h3> {/* Display the item title */}
          <p>{item.description}</p> {/* Display the item description */}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
