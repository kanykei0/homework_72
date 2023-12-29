import { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import { selectCartPizza } from "../../store/cartSlice";
import { Modal } from "react-bootstrap";
import Checkout from "../../containers/Checkout/Checkout";
import { useNavigate } from "react-router-dom";

const OrderTab = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const cartDishes = useAppSelector(selectCartPizza);
  const total = cartDishes.reduce((sum, cartDish) => {
    return sum + cartDish.amount * cartDish.dish.price;
  }, 0);

  return (
    <>
      <div className="order-tab bg-dark text-white">
        <div className="container d-flex align-items-center justify-content-between">
          <h6 className="m-0">Order total: {total} KGS</h6>
          <button
            className="btn btn-dark px-5"
            onClick={() => setShowModal(true)}
          >
            Checkout
          </button>
        </div>
      </div>
      <Modal
        show={showModal}
        title="Order confirmation"
        onClose={() => setShowModal(false)}
      >
        <div className="p-4">
          <Checkout />
          <div className="d-flex justify-content-lg-evenly mt-5">
            <button
              className="btn btn-warning checkout_button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className="btn btn-success checkout_button"
              onClick={() => navigate("/order")}
            >
              Order
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default OrderTab;
