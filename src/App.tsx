import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import NewPizza from "./containers/Admin/NewPizza.tsx/NewPizza";
import EditPizza from "./containers/Admin/EditPizza/EditPizza";
import Pizzas from "./components/PizzaList/Pizzas";
import Order from "./containers/Order/Order";
import Orders from "./containers/Orders/Orders";
import Admin from "./containers/Admin/Admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/order" element={<Order />} />
      <Route path="/admin/orders" element={<Orders />} />
      <Route path="/admin/dishes" element={<Pizzas isAdmin />} />
      <Route path="/new-pizza" element={<NewPizza />} />
      <Route path="/edit-pizza/:id" element={<EditPizza />} />
      <Route path="*" element={<h1>Not Found!</h1>} />
    </Routes>
  );
}

export default App;
