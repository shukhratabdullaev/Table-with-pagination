import Button from "@material-ui/core/Button/Button";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ordersAPI } from "../../api/table-api";
import { OrderType } from "../../api/types/types";
import styles from './OrderDetails.module.scss'



export const OrderDetails = () => {
  const [order, setOrder] = useState<OrderType>()
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    ordersAPI.getOrders()
      .then((res) => {
        const filteredOrder = res.data.find(({ id }: OrderType) => id === Number(params.id))
        setOrder(filteredOrder)
      })
  }, [params.id])


  const handleToHomePage = () => {
    navigate(`/`)
  }

  return (
    <div className={styles.order}>
      <h1 className={styles.order_title}>{order?.account.name}</h1>
      <Button variant="contained" size="large" onClick={handleToHomePage}>На главную</Button>
    </div>
  )
}