import React, { useState } from "react";

function PlantCard({ plant, image="https://via.placeholder.com/400", API, deletePlant }) {
  const [inStock, setInStock] = useState(true);
  const [price, setPrice] = useState(plant.price);

  function handleClick() {
    setInStock(prev => !prev);
  }

  function handleChange(e) {
    setPrice(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`${API}/${plant.id}`, {
      method: 'PATCH',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ price: `${e.target.price.value}` })
    })
    .then(setPrice(price));
  }

  function handleDelete() {
    deletePlant(plant.id);
  }

  return (
    <li className="card">
      <img src={image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {price}</p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="number"
          step="0.01"
          value={price}
          name="price"
        />
        <input type="submit" />
      </form>
      {inStock ? (
        <button onClick={handleClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleClick}>Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
