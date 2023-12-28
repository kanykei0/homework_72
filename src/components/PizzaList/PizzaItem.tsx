import React from "react";
import { PizzaProps } from "../../types";

interface Props {
  pizza: PizzaProps;
}

const PizzaItem: React.FC<Props> = ({ pizza }) => {
  return (
    <div className="card shadow">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div>
          <img className="pizza-image" src={pizza.image} alt={pizza.title} />
        </div>
        <div>
          <h5>{pizza.title}</h5>
        </div>
        <div>
          <b>{pizza.price} KGS</b>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
