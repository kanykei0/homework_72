import OrderTab from "../../components/Order/OrderTab";
import Pizzas from "../../components/PizzaList/Pizzas";
import Toolbar from "../../components/Toolbar/Toolbar";

const Home = () => {
  return (
    <>
      <Toolbar />
      <div className="container mt-5">
        <Pizzas />
      </div>
      <OrderTab />
    </>
  );
};

export default Home;
