import { useNavigate, useParams } from "react-router-dom";

const EditPizza = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
};

export default EditPizza;
