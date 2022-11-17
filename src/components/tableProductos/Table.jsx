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
      nombre: "Monitor HP EliteDisplay 27",
      categoria: "Monitor",
      existencias: 18
    },
    {
      id: 2,
      nombre: "Laptop Envy 360 HP",
      categoria: "Laptop",
      existencias: 11
    },
    {
      id: 3,
      nombre: "Procesador 12400f",
      categoria: "Componente",
      existencias: 6
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID del producto</TableCell>
            <TableCell className="tableCell">Nombre</TableCell>
            <TableCell className="tableCell">Categoria</TableCell>
            <TableCell className="tableCell">Existencias</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell> {row.id}</TableCell>
              <TableCell className="tableCell">{row.nombre}</TableCell>
              <TableCell className="tableCell">{row.categoria}</TableCell>
              <TableCell className="tableCell">{row.existencias}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
