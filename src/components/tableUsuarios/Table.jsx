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
      nombre: "Santiago",
      apellidoPaterno: "Ramirez",
      apellidoMaterno: "Munguia",
      email: "santiagorm257@gmail.com",
      telefono: "4271503373",
      cargo: "Programador"
    },
    {
      id: 2,
      nombre: "Emilio",
      apellidoPaterno: "Ramirez",
      apellidoMaterno: "Munguia",
      email: "emiliorm257@gmail.com",
      telefono: "4271503372",
      cargo: "Editor"
    },
    {
      id: 3,
      nombre: "Jenifer",
      apellidoPaterno: "Reyes",
      apellidoMaterno: "Sanchez",
      email: "jeniferrs@gmail.com",
      telefono: "427195645",
      cargo: "Diseñador"
    }
  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">ID de usuario</TableCell>
            <TableCell className="tableCell">Nombre</TableCell>
            <TableCell className="tableCell">Apellido Paterno</TableCell>
            <TableCell className="tableCell">Apellido Materno</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Telefono</TableCell>
            <TableCell className="tableCell">Cargo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell> {row.id}</TableCell>
              <TableCell className="tableCell">{row.nombre}</TableCell>
              <TableCell className="tableCell">{row.apellidoPaterno}</TableCell>
              <TableCell className="tableCell">{row.apellidoMaterno}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.telefono}</TableCell>
              <TableCell className="tableCell">{row.cargo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
