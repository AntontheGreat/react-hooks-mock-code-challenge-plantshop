import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
const API = `http://localhost:6001/plants`

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setPlants);
  }, [])

  // takes in form data as new plant
  function addNewPlant(newPlant) {
    fetch(API, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(newPlant)
  })
  .then(setPlants([...plants, newPlant]))    //post request here
  }

  function handleSearch(newSearch) {
    setSearch(newSearch)
  }

  function deletePlant(id) {
    fetch(`${API}/${id}`, {
      method: 'DELETE',
    })
    .then(setPlants(plants.filter((plant) => plant.id !== id)));
  }

  return (
    <main>
      <NewPlantForm addNewPlant={addNewPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={plants} search={search} API={API} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
