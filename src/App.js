import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import data from './data'

function App() {
  let hero = data.map(destination => {
    console.log(destination)
    return(
      <Hero
        description={destination.description}
        googleMapsUrl={destination.googleMapsUrl}
        endDate={destination.endDate}
        url={destination.imageUrl}
        location={destination.location}
        startDate={destination.startDate}
        title={destination.title}
        icon="fa-solid fa-star"
      />
    )
  }) 


  return (
    <div className="App">
      <Nav/>
      <div className="test effect1">
        {hero}
      </div>
      </div>
  );
}

export default App;
