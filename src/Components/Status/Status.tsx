import { OrderStatusType } from "../../api/types/types"
import styles from './Status.module.scss'

export const Status = ({ status }: { status: OrderStatusType }) => {
  switch (status) {
    case 'new':
      return <div className={`${styles.tableCell_inner} ${styles.status} ${styles.status__new}`}>Новое</div>
    case 'assigned_to':
      return <div className={`${styles.tableCell_inner} ${styles.status} ${styles.status__assigned_to}`}>Назначено</div>
    case 'completed':
      return <div className={`${styles.tableCell_inner} ${styles.status} ${styles.status__completed}`}>Выполнено</div>
    case 'started':
      return <div className={`${styles.tableCell_inner} ${styles.status} ${styles.status__started}`}>Начато</div>
    case 'declined':
      return <div className={`${styles.tableCell_inner} ${styles.status} ${styles.status__declined}`}>Отменено</div>
    default:
      return null
  }

}