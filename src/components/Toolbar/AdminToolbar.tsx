import { NavLink } from "react-router-dom";

const AdminToolbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand">Pizza</span>
        <ul className="navbar-nav mr-auto flex-row gap-2 flex-nowrap">
          <li className="nav-item">
            <NavLink to="/admin" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/admin/orders" className="nav-link">
              Orders
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default AdminToolbar;
