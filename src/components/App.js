import React, { useState, useEffect } from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

function App() {
  // set stat variable for all plants
  const [plants, setPlants] = useState([])
  const [searchInput, setSearchInput] = useState("")

  // use Effect to send fetch request (use empty dependencies array)
  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(response => response.json())
    .then(data => {
      // set response data equal to const variable
      const allPlants = data
      // setPlants state variable equal to new updatedPlants variable
      setPlants(allPlants)
    })
  }, [])

  function handleAddPlant(newPlant) {
    // use spread operator to add new project to state variable containing all plants
    const updatedPlants = [...plants, newPlant]
    // must use state to update state variable
    setPlants(updatedPlants)
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchInput.toLowerCase());
  })

  return (
    <div className="app">
      <Header />
      <PlantPage 
        plants={displayedPlants} 
        onAddPlant={handleAddPlant} 
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
    </div>
  );
}

export default App;
