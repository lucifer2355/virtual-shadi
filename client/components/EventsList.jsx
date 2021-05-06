import React from "react";

import CardComp from "./CardComp";

const EventsList = () => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
      <CardComp />
    </div>
  );
};

export default EventsList;
