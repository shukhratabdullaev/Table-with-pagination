import { TableHead } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { OrderType } from "../../api/types/types";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Status } from "../Status/Status";
import styles from './Table.module.scss';

export const CustomPaginationTable = ({ data }: { data: OrderType[] }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const navigate = useNavigate()

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleClickRow = (id: number) => () => {
    navigate(`/order/${id}`)
  }

  return (<>
    <Table className={styles.table}>
      <TableHead className={styles.tableRowHeader}>
        <TableRow>
          <th className={styles.tableHeader}>Номер / Дата</th>
          <th className={styles.tableHeader}>Тип задания / Автор</th>
          <th className={styles.tableHeader}>Аккаунт / Терминал</th>
          <th className={styles.tableHeader}>Статус</th>
        </TableRow>
      </TableHead>
      <TableBody>
        {(rowsPerPage > 0
          ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : data)
          .map((order) => (
            <TableRow onClick={handleClickRow(order.id)} className={styles.tableRowItems} key={order.id}>
              <TableCell className={styles.tableCell}>
                <div className={styles.tableCell_inner} >{`№${order.id}`}</div>
                <div className={`${styles.tableCell_inner} 
                ${styles.tableCell_inner__info} `}>{new Date(order.created_date).toLocaleString('ru-RU').slice(0, -3)}</div>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <div className={styles.tableCell_inner} >{order.order_type.name}</div>
                <div className={`${styles.tableCell_inner} 
                ${styles.tableCell_inner__info} `}>{`${order.created_user.name} ${order.created_user.surname}`} </div>
              </TableCell>
              <TableCell className={styles.tableCell}>
                <div className={styles.tableCell_inner} >{order.account.name}</div>
                <div className={`${styles.tableCell_inner} 
                ${styles.tableCell_inner__info} `}>{order.terminal.name}</div>
              </TableCell>
              <TableCell className={`${styles.tableCell} ${styles.tableCell_status}`}>
                <Status status={order.status} />
              </TableCell>
            </TableRow>

          ))}
        {emptyRows > 0 && (
          <TableRow style={{ height: 53 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
      <TableFooter className={styles.tableFooter}>
        <tr>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            labelDisplayedRows={({ page }) => {
              return `Страница: ${page + 1} `;
            }}
            backIconButtonProps={{
              color: "secondary"
            }}
            nextIconButtonProps={{ color: "secondary" }}
            showFirstButton={true}
            showLastButton={true}
            labelRowsPerPage={<span>Записи от 1 до {rowsPerPage}</span>}
            sx={{
              ".MuiTablePagination-selectLabel, .MuiTablePagination-input": {
                fontWeight: "400",
                color: 'gray',
                fontSize: '14px'
              },
              ".MuiTablePagination-toolbar": {
                paddingRight: '32px'
              },
            }}
          />
        </tr>
      </TableFooter>
    </Table>
  </>
  );
};




