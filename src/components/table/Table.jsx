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
      id: 114528,
      empresa: "VASS",
      piezas: 6,
      producto: "Monitor HP EliteDisplay 27",
    },
    {
      id: 114528,
      empresa: "VASS",
      piezas: 3,
      producto: "Laptop Envy 360 HP",
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Id del pedido</TableCell>
            <TableCell className="tableCell">Empresa</TableCell>
            <TableCell className="tableCell">Piezas</TableCell>
            <TableCell className="tableCell">Producto</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell> {row.id}</TableCell>
              <TableCell className="tableCell">{row.empresa}</TableCell>
              <TableCell className="tableCell">{row.piezas}</TableCell>
              <TableCell className="tableCell">{row.producto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
