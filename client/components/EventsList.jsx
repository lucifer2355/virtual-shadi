import React from "react";

import CardComp from "./CardComp";

const EventsList = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      <CardComp
        title='Lizard'
        description='
      Lizards are a widespread group of squamate reptiles, with over
      6,000 species, ranging across all continents except Antarctica'
      />
    </div>
  );
};

export default EventsList;
