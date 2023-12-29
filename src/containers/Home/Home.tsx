import OrderTab from "../../components/Order/OrderTab";
import Pizzas from "../../components/PizzaList/Pizzas";

const Home = () => {
  return (
    <>
      <div className="container mt-5">
        <Pizzas />
      </div>
      <OrderTab />
    </>
  );
};

export default Home;
