import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  selectOnePizzaLoading,
  selectPizza,
  selectUpdatePizzaLoading,
} from "../../../store/pizzaSlice";
import { useEffect } from "react";
import { fetchOnePizza, updatePizza } from "../../../store/pizzaThunk";
import { PizzaApi } from "../../../types";
import { Spinner } from "react-bootstrap";
import PizzaForm from "../../../components/PizzaForm/PizzaForm";
import AdminToolbar from "../../../components/Toolbar/AdminToolbar";

const EditPizza = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const pizza = useAppSelector(selectPizza);
  const onePizzaLoading = useAppSelector(selectOnePizzaLoading);
  const updatePizzaLoading = useAppSelector(selectUpdatePizzaLoading);

  useEffect(() => {
    dispatch(fetchOnePizza(id));
  }, [dispatch, id]);

  const onSubmit = async (pizza: PizzaApi) => {
    await dispatch(updatePizza({ id, pizza }));
    navigate("/admin");
  };

  const existingPizza = pizza
    ? {
        ...pizza,
        price: pizza.price.toString(),
      }
    : undefined;

  let formSection = <Spinner />;

  if (!onePizzaLoading) {
    if (pizza) {
      formSection = (
        <PizzaForm
          onSubmit={onSubmit}
          isLoading={updatePizzaLoading}
          existingPizza={existingPizza}
          isEdit
        />
      );
    } else {
      formSection = <h4>Not found</h4>;
    }
  }
  return (
    <>
      <AdminToolbar />
      {formSection}
    </>
  );
};

export default EditPizza;
