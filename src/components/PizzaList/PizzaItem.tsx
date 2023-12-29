import React from "react";
import { PizzaProps } from "../../types";
import ButtonSpinner from "../Spinners/ButtonSpinner";
import { Link } from "react-router-dom";

interface Props {
  pizza: PizzaProps;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
}

const PizzaItem: React.FC<Props> = ({ pizza, deleteLoading, onDelete }) => {
  return (
    <div className="card shadow col-6 mx-auto mb-2">
      <div className="card-body d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img className="pizza-image" src={pizza.image} alt={pizza.title} />
          <h5 className="ms-4">{pizza.title}</h5>
        </div>
        <div className="d-flex align-items-center">
          <b>{pizza.price} KGS</b>
          <Link to={"/edit-pizza/" + pizza.id} className="btn btn-primary ms-3">
            Edit
          </Link>
          <button
            className="btn btn-danger mx-3"
            onClick={onDelete}
            disabled={deleteLoading ? deleteLoading === pizza.id : false}
          >
            {deleteLoading && deleteLoading === pizza.id && <ButtonSpinner />}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaItem;
