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
      nombre: "Terminar módulo de programación",
      descripcion:
        "Para esta actividad debo de realizar el modulo de navbar para el nuevo sistema",
      fecha: "23/11/2022",
      estatus: "Pendiente"
    },
    {
      id: 2,
      nombre: "Comprar monitores",
      descripcion:
        "Recordatorio para comprar 7 monitores diferentes y 8 piezas de cada uno",
      fecha: "20/10/2022",
      estatus: "Finalizado"
    },
    {
      id: 3,
      nombre: "Facturar compras",
      descripcion:
        "Recordatorio para facturar todas las compras realizadas",
      fecha: "10/11/2022",
      estatus: "Proceso"
    },
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID de Actividad</TableCell>
            <TableCell className="tableCell">Nombre</TableCell>
            <TableCell className="tableCell">Descripcion</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Estatus</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell> {row.id}</TableCell>
              <TableCell className="tableCell">{row.nombre}</TableCell>
              <TableCell className="tableCell">{row.descripcion}</TableCell>
              <TableCell className="tableCell">{row.fecha}</TableCell>
              <TableCell className="tableCell">
              <span className={`status ${row.estatus}`}>{row.estatus}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
