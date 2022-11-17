import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./table.scss";

const List = () => {
  const rows = [
    {
      id: 1,
      idPedido: 14156456,
      precio: 45656656
    },
    {
      id: 2,
      idPedido: 245456454,
      precio: 787454464
    },
    {
      id: 3,
      idPedido: 2345678656,
      precio: 1231129848
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID de la venta</TableCell>
            <TableCell className="tableCell">Id del pedido</TableCell>
            <TableCell className="tableCell">Precio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell> {row.id}</TableCell>
              <TableCell className="tableCell">{row.idPedido}</TableCell>
              <TableCell className="tableCell">{"$ " + row.precio.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
