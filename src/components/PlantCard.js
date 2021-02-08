import React, {useState} from "react";

function PlantCard({ plant }) {
  // set state variable to handle in or out of stock value
  const [isInStock, setIsInStock] = useState(true)

  // deconstruct plant object using variable assignment
  const { id, name, image, price } = plant

  // event listener handler function -> on click, change isInStock to opposit boolean value
  function handleToggleStock() {
    setIsInStock(isInStock => !isInStock)
  }

  // set each object key in proper place to display information to DOM
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isInStock ? (
        <button className="primary" onClick={handleToggleStock}>In Stock</button>
      ) : (
        <button className="primary" onClick={handleToggleStock}>Out of Stock</button>
      )}    
    </li>
  );
}

export default PlantCard;
