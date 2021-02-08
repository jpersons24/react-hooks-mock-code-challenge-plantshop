import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {

  // map through plants array and set key for object ID, pass each plants object to PlantCard component
  const plantCardComponents = plants.map(plant => {
    return  <PlantCard key={plant.id} plant={plant} />
  })

  return (
    <ul className="cards">{plantCardComponents}</ul>
  );
}

export default PlantList;
