import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useCallback, useEffect, useState } from "react";
import { clearCart, selectCartPizza } from "../../store/cartSlice";
import { ApiOrder, CartPizza, Customer } from "../../types";
import axiosApi from "../../axiosApi";
import { Spinner } from "react-bootstrap";
import Toolbar from "../../components/Toolbar/Toolbar";

const Order: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartDishes = useAppSelector(selectCartPizza);

  useEffect(() => {
    if (cartDishes.length === 0) {
      navigate("/");
    }
  }, [cartDishes]);

  const [customer, setCustomer] = useState<Customer>({
    name: "",
    address: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const customerChanged = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;

      setCustomer((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    []
  );

  const onFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);

    let newOrder: CartPizza = {};

    cartDishes.forEach((dish) => {
      newOrder[dish.dish.id] = dish.amount;
    });

    const order: ApiOrder = {
      customer,
      dishes: newOrder,
    };

    try {
      await axiosApi.post("orders.json", order);
      dispatch(clearCart());
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  let form = (
    <>
      <Toolbar />
      <div className="container">
        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label htmlFor="name">Client name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              className="form-control"
              value={customer.name}
              onChange={customerChanged}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              name="address"
              required
              className="form-control"
              value={customer.address}
              onChange={customerChanged}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              required
              className="form-control"
              value={customer.phone}
              onChange={customerChanged}
            />
          </div>
          <button disabled={loading} type="submit" className="btn btn-primary">
            Place order
          </button>
        </form>
      </div>
    </>
  );

  if (loading) {
    form = <Spinner />;
  }

  return (
    <div className="row">
      <div className="col">{form}</div>
    </div>
  );
};

export default Order;
