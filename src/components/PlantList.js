import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, search, API, deletePlant }) {

  const plantElements = plants
  .filter((plant) => plant.name.toLowerCase().includes(search))
  .map((plant) => (
    <PlantCard key={plant.id} plant={plant} image={plant.image} API={API} deletePlant={deletePlant} />
  ))

  return (
    <ul className="cards">{plantElements}</ul>
  );
}

export default PlantList;
