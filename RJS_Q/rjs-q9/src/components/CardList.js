// components/CardList.js
import React from "react";
import { FixedSizeList as List } from "react-window";
import Card from "./Card";
// Fake data generation: array of 1000 cards
const cards = Array.from({ length: 1000 }, (_, i) => ({
  id: i + 1,
  title: `Card ${i + 1}`,
}));
// Row renderer for react-window
const Row = ({ index, style }) => (
  <div style={style}>
    <Card title={cards[index].title} />
  </div>
);
// Virtualized card list
const CardList = () => {
  return (
    <List
      height={600} // Visible container height
      itemCount={cards.length} // Total items
      itemSize={100} // Height per row
      width={"100%"} // Full width
    >
      {Row}
    </List>
  );
};

export default CardList;
