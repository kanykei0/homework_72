import Pizzas from "../../components/PizzaList/Pizzas";
import AdminToolbar from "../../components/Toolbar/AdminToolbar";

const Admin = () => {
  return (
    <>
      <AdminToolbar />
      <div>
        <Pizzas isAdmin />
      </div>
    </>
  );
};

export default Admin;
