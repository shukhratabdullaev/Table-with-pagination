import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ordersAPI } from "../../api/table-api";
import { OrderType } from "../../api/types/types";



export const OrderDetails = () => {
  const [order, setOrder] = useState<OrderType>()
  const params = useParams();

  useEffect(() => {
    ordersAPI.getOrders()
      .then((res) => {
        const filteredOrder = res.data.find(({ id }: OrderType) => id === Number(params.id))
        setOrder(filteredOrder)
      })
  }, [params.id])


  return <h1>{order?.account.name}</h1>
}