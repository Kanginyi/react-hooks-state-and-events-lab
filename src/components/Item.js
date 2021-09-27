import React, {useState} from "react";

function Item({ name, category }) {
  const [toCart, setToCart] = useState(false);

  function asdf () {
    setToCart(toCart => !toCart);
  }

  const addOrRemove = toCart ? "in-cart" : "";

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={asdf} className={addOrRemove}>{addOrRemove ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
