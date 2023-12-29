import React from "react";
import { PizzaProps } from "../../types";
import ButtonSpinner from "../Spinners/ButtonSpinner";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks";
import { addPizza } from "../../store/cartSlice";

interface Props {
  pizza: PizzaProps;
  deleteLoading: boolean | string;
  onDelete: React.MouseEventHandler;
  isAdmin?: boolean;
}

const PizzaItem: React.FC<Props> = ({
  pizza,
  deleteLoading,
  onDelete,
  isAdmin,
}) => {
  const dispatch = useAppDispatch();

  const onCardClick = async () => {
    dispatch(addPizza(pizza));
  };

  const card = (
    <div className="card-body d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center">
        <img className="pizza-image" src={pizza.image} alt={pizza.title} />
        <h5 className="ms-4">{pizza.title}</h5>
      </div>
      <div className="d-flex align-items-center">
        <b className="me-5">{pizza.price} KGS</b>
        {isAdmin ? (
          <div>
            <Link
              to={"/edit-pizza/" + pizza.id}
              className="btn btn-primary ms-3"
            >
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
        ) : (
          ""
        )}
      </div>
    </div>
  );

  return (
    <>
      {!isAdmin ? (
        <div
          className="cur-point card shadow col-6 mx-auto mb-2"
          onClick={onCardClick}
        >
          {card}
        </div>
      ) : (
        <div className="card shadow col-6 mx-auto mb-2">{card}</div>
      )}
    </>
  );
};

export default PizzaItem;
