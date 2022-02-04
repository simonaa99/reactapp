import React from 'react';
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";

const OneCar = ({car}) => {
  return (<div className="card" style={{ margin: 10, borderStyle: "dashed" }}>
  <img className="card-img-top" src={car.image} alt="Neka slika" style={{ height:'400px', width:'450px' }}/>
  <div className="card-body">
    <h3 className="card-title">{car.title}</h3>
    <p className="card-text">
    {car.description}
    </p>
    <button className="btn">
          <AiFillPlusCircle />
        </button>
        <button className="btn">
          <AiFillMinusCircle />
        </button>

  </div>
</div>
);
};

export default OneCar;
