import React, { useState } from "react";

function NewPlantForm({ addNewPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, 
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price,
    };
    addNewPlant(newPlant);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Plant name" />
        <input type="text" name="image" onChange={handleChange} value={formData.image} placeholder="Image URL" />
        <input type="number" name="price" onChange={handleChange} value={formData.price} step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
