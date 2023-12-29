import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import NewPizza from "./containers/Admin/NewPizza.tsx/NewPizza";
import EditPizza from "./containers/Admin/EditPizza/EditPizza";
import Pizzas from "./components/PizzaList/Pizzas";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/admin/dishes" element={<Pizzas isAdmin />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
