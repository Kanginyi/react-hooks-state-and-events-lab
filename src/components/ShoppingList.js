import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  function samLee (event) {
    setSelectedCategory(event.target.value);
  }

  const renderAll = items.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  const filterThings = renderAll.filter(item => item.props.category === selectedCategory);

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={samLee} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {selectedCategory === "All" ? renderAll : filterThings}
      </ul>
    </div>
  );
}

export default ShoppingList;