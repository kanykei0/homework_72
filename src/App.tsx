import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home/Home";
import Layout from "./components/Layout/Layout";
import NewPizza from "./containers/Admin/NewPizza.tsx/NewPizza";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="*" element={<h1>Not Found!</h1>} />
      </Routes>
    </Layout>
  );
}

export default App;
