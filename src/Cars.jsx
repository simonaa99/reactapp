import React from 'react';
import OneCar from './OneCar';

const Cars = ({cars}) => {
const name = "New Car Name";
const description ="New Car description that we got from Car component using props.";
  return (<div className="all-cars">
  <OneCar car={cars[0]}  />
  <OneCar car={cars[1]} />
  <OneCar car={cars[2]} />

</div>
);
};

export default Cars;
