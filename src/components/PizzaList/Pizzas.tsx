import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  selectAllPizza,
  selectFetchAllPizzaLoading,
} from "../../store/pizzaSlice";
import { fetchAllPizza } from "../../store/pizzaThunk";
import { Spinner } from "react-bootstrap";
import PizzaItem from "./PizzaItem";

const Pizzas = () => {
  const dispatch = useAppDispatch();
  const pizzaList = useAppSelector(selectAllPizza);
  const pizzasLoading = useAppSelector(selectFetchAllPizzaLoading);

  useEffect(() => {
    dispatch(fetchAllPizza());
  }, [dispatch]);

  return (
    <>
      <h4>Pizza list:</h4>
      <div>
        {pizzasLoading ? (
          <Spinner />
        ) : (
          pizzaList.map((pizza) => <PizzaItem key={pizza.id} pizza={pizza} />)
        )}
      </div>
    </>
  );
};

export default Pizzas;
