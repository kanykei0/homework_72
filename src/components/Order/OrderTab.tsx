import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { selectCartPizza } from "../../store/cartSlice";

const OrderTab = () => {
  const cartDishes = useAppSelector(selectCartPizza);
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * cartDish.dish.price;
  }, 0);

  return (
    <div className="order-tab bg-dark text-white">
      <div className="container d-flex align-items-center justify-content-between">
        <h6 className="m-0">Order total: {total} KGS</h6>
        <Link to="/checkout" className="btn btn-dark px-5">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderTab;
