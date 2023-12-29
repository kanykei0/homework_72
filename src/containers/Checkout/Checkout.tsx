import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { DELIVERY_PRICE } from "../../constants";
import { selectCartPizza } from "../../store/cartSlice";
import { useEffect } from "react";

const Checkout = () => {
  const navigate = useNavigate();
  const cartDishes = useAppSelector(selectCartPizza);

  useEffect(() => {
    if (cartDishes.length === 0) {
      navigate("/");
    }
  }, [cartDishes]);

  return (
    <div className="container pt-4">
      <div className="card mt-5 shadow p-5">
        <div className="card-body col-6 mx-auto">
          <h4 className="mb-5">Your order:</h4>
          {cartDishes.map((pizza, index) => (
            <div key={index} className="d-flex justify-content-between mb-3">
              <span>{pizza.dish.title}</span>
              <div>
                <span>{pizza.amount ? pizza.amount : 1} x</span>
                <span>{pizza.dish.price * pizza.amount} KGS</span>
                <button className="btn btn-danger">delete</button>
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
                  (sum, cartDish) =>
                    sum + cartDish.amount * cartDish.dish.price,
                  0
                )}{" "}
                KGS
              </b>
            </div>
          </div>
          <div className="d-flex justify-content-lg-evenly mt-5">
            <button className="btn btn-warning checkout_button">Cancel</button>
            <button className="btn btn-success checkout_button">Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
