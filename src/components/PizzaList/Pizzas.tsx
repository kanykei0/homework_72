import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAllPizza,
  selectDeleteLoading,
  selectFetchAllPizzaLoading,
} from "../../store/pizzaSlice";
import { deletePizza, fetchAllPizza } from "../../store/pizzaThunk";
import { Spinner } from "react-bootstrap";
import PizzaItem from "./PizzaItem";

interface Props {
  isAdmin?: boolean;
}

const Pizzas: React.FC<Props> = ({ isAdmin }) => {
  const dispatch = useAppDispatch();
  const pizzaList = useAppSelector(selectAllPizza);
  const pizzasLoading = useAppSelector(selectFetchAllPizzaLoading);
  const deleteLoading = useAppSelector(selectDeleteLoading);

  useEffect(() => {
    dispatch(fetchAllPizza());
  }, [dispatch]);

  const removePizza = async (id: string) => {
    await dispatch(deletePizza(id));
    await dispatch(fetchAllPizza());
  };

  return (
    <>
      <h4>Pizza list:</h4>
      <div>
        {pizzasLoading ? (
          <Spinner />
        ) : (
          pizzaList.map((pizza) => (
            <PizzaItem
              key={pizza.id}
              pizza={pizza}
              deleteLoading={deleteLoading}
              onDelete={() => removePizza(pizza.id)}
              isAdmin={isAdmin}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Pizzas;
