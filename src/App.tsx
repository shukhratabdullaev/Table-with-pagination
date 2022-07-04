import { useEffect, useState } from 'react';
import { ordersAPI } from './api/table-api';
import { OrderType } from './api/types/types';
import styles from './App.module.scss';
import { CustomPaginationTable } from './Components/Table/Table';





export const App = () => {
  const [orders, setOrders] = useState<OrderType[]>([])


  useEffect(() => {
    ordersAPI.getOrders()
      .then((res) => {
        setOrders(res.data)
      })
  }, [])


  return (
    <>
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <CustomPaginationTable data={orders} />
        </div>
      </main>
    </>
  );
}





