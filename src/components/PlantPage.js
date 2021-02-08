import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, onAddPlant, searchInput, setSearchInput }) {
  

  return (
    <main>
      <NewPlantForm onAddPlant={onAddPlant} />
      <Search searchInput={searchInput} onSearchChange={setSearchInput} />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
