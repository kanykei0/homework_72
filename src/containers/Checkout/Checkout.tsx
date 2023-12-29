import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { DELIVERY_PRICE } from "../../constants";
import { deleteCartPizza, selectCartPizza } from "../../store/cartSlice";
import { useEffect } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartDishes = useAppSelector(selectCartPizza);

  useEffect(() => {
    if (cartDishes.length === 0) {
      navigate("/");
    }
  }, [cartDishes]);

  return (
    <div>
      <h4 className="mb-5">Your order:</h4>
      {cartDishes.map((pizza, index) => (
        <div key={index} className="d-flex justify-content-between mb-3">
          <span>{pizza.dish.title}</span>
          <div>
            <span>{pizza.amount ? pizza.amount : 1} x</span>
            <span>{pizza.dish.price * pizza.amount} KGS</span>
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteCartPizza(pizza.dish))}
            >
              delete
            </button>
          </div>
        </div>
      ))}

      <div>
        <div className="d-flex justify-content-between">
          <span>Delivery:</span>
          <b>{DELIVERY_PRICE} KGS</b>
        </div>
        <div className="d-flex justify-content-between">
          <span>Total:</span>
          <b>
            {cartDishes.reduce(
              (sum, cartDish) => sum + cartDish.amount * cartDish.dish.price,
              DELIVERY_PRICE
            )}{" "}
            KGS
          </b>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
