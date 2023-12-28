import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { selectCreateLoading } from "../../../store/pizzaSlice";
import { PizzaApi } from "../../../types";
import { createPizza } from "../../../store/pizzaThunk";
import PizzaForm from "../../../components/PizzaForm/PizzaForm";

const NewPizza = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const createPizzaLoading = useAppSelector(selectCreateLoading);

  const onSubmit = async (pizza: PizzaApi) => {
    await dispatch(createPizza(pizza));
    navigate("/");
  };

  return <PizzaForm onSubmit={onSubmit} isLoading={createPizzaLoading} />;
};

export default NewPizza;
