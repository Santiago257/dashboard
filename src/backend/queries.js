//Importamos el paquete para conectarnos al cliente de Postgres
const { Client } = require("pg");
//Ingresamos lo valores para conectarnos a nuestra base de datos
const connectionData = {
  user: "admin",
  host: "localhost",
  database: "dashboard",
  password: "2389702013",
  port: 5432,
};
const client = new Client(connectionData);


client.connect();
//Consulta para mostrar todos los productos
client
  .query("SELECT * FROM productos")
  .then((response) => {
    console.log("Consulta exitosa")
    console.log(response.rows);
    client.end();
  })
  .catch((err) => {
    console.log(err.message)
    client.end()    
  });

//Consulta para mostrar todas las actividades
/*client
  .query("SELECT * FROM actividades")
  .then((response) => {
    console.log("Consulta exitosa")
    console.log(response.rows);
    client.end()
  })
  .catch((err) =>{
    console.log(err.message)
    client.end()
  })

//Consulta para mostrar todas las compras  
/*client
  .query("SELECT * FROM compras")
  .then((response) => {
    console.log("Consulta exitosa")
    console.log(response.rows);
    client.end()
  })
  .catch((err) =>{
    console.log(err.message)
    client.end()
  })

//Consulta para mostrar todos los pedidos
/*client
  .query("SELECT * FROM pedidos")
  .then((response) => {
    console.log("Consulta exitosa")
    console.log(response.rows);
    client.end()
  })
  .catch((err) =>{
    console.log(err.message)
    client.end()
  })

//Consulta para mostrar todo el personal
/*client
  .query("SELECT * FROM personal")
  .then((response) => {
    console.log("Consulta exitosa")
    console.log(response.rows);
    client.end()
  })
  .catch((err) =>{
    console.log(err.message)
    client.end()
  })

//Consulta para mostrar todas las ventas
/*client
  .query("SELECT * FROM ventas")
  .then((response) => {
    console.log("Consulta exitosa")
    console.log(response.rows);
    client.end()
  })
  .catch((err) =>{
    console.log(err.message)
    client.end()
  })  

/*client
  .query("INSERT INTO productos VALUES ('2','Laptop Envy 360 HP', 'Laptop',7)")
  .then((response) => {
    console.log(response.rows);
    client.end();
  })
  .catch((err) => {
    client.end();
  });
*/  
