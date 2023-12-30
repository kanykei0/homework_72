import { useCallback, useEffect, useState } from "react";
import { ApiOrders } from "../../types";
import axiosApi from "../../axiosApi";
import { Spinner } from "react-bootstrap";
import AdminToolbar from "../../components/Toolbar/AdminToolbar";
import { useAppDispatch } from "../../app/hooks";
import { completeOrder, fetchAllPizza } from "../../store/pizzaThunk";

const Orders = () => {
  const [orders, setOrders] = useState<ApiOrders | null>(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useAppDispatch();

  const fetchOrders = useCallback(async () => {
    try {
      setLoading(true);
      const ordersResponse = await axiosApi.get<ApiOrders | null>(
        "orders.json"
      );
      const orders = ordersResponse.data;
      if (orders) {
        setOrders(orders);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const removeOrder = async (id: string) => {
    await dispatch(completeOrder(id));
    await dispatch(fetchAllPizza());
    window.location.reload();
  };

  useEffect(() => {
    void fetchOrders();
  }, [fetchOrders, dispatch]);

  return (
    <>
      <AdminToolbar />
      <div className="container">
        <div className="row mt-2">
          <div className="col">
            <h4 className="mb-2">Orders</h4>
            {loading ? (
              <Spinner />
            ) : (
              orders &&
              Object.keys(orders).map((orderKey, index) => (
                <div className="card mb-2" key={index}>
                  <div className="card-body">
                    <strong>{orders[orderKey].customer.name}</strong>
                    {Object.keys(orders[orderKey]?.dishes).map((dishKey) => (
                      <div key={dishKey}>
                        <span> ordered </span>
                        <strong>{dishKey}</strong>
                      </div>
                    ))}
                    <a onClick={() => removeOrder(orderKey)}>Complete order</a>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
