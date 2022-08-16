import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./table.scss"


const List = () => {

    const rows = [
        {
            id:114568,
            product: "Acer Nitro 5",
            img: "https://www.notebookcheck.org/uploads/tx_nbc2/4zu3_Acer_Nitro_5_AN517_52.jpg",
            customer: "John Smith",
            date: "1 March",
            amount: 785,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id:114569,
            product: "Playstation 5",
            img: "https://mxsonyb2c.vtexassets.com/arquivos/ids/263350/PS5_Fisica_DS.jpg?v=637358724586630000",
            customer: "John Wick",
            date: "15 March",
            amount: 1284,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id:114570,
            product: "Xbox Series X",
            img: "https://images.stockx.com/images/Microsoft-Xbox-Series-X-Console-EU-Plug-Black.jpg?fit=fill&bg=FFFFFF&w=480&h=320&fm=webp&auto=compress&dpr=2&trim=color&updated_at=1618597422&q=75",
            customer: "Kanye West",
            date: "22 April",
            amount: 954,
            method: "Online Payment",
            status: "Denied",
        }
    ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Tracking ID</TableCell>
            <TableCell className='tableCell'>Product</TableCell>
            <TableCell className='tableCell'>Customer</TableCell>
            <TableCell className='tableCell'>Date</TableCell>
            <TableCell className='tableCell'>Amount</TableCell>
            <TableCell className='tableCell'>Payment Method</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell> {row.id}</TableCell>
              <TableCell className='tableCell'>
                <div className="cellWrapper">
                    <img src={row.img} alt="" className='image' />
                    {row.product}    
                </div>  
              </TableCell>
              <TableCell className='tableCell'>{row.customer}</TableCell>
              <TableCell className='tableCell'>{row.date}</TableCell>
              <TableCell className='tableCell'>{row.amount}</TableCell>
              <TableCell className='tableCell'>{row.method}</TableCell>
              <TableCell className='tableCell'>
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List