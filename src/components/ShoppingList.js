import React from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  function handleItemClick() {
    const newItemArray = items.filter((item) => item.category !== category);
  setItems(newItemArray);
  }
  
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onClick={handleItemClick}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
