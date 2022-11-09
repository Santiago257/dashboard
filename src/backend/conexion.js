const { Client } = require("pg");

const connectionData = {
  user: "admin",
  host: "localhost",
  database: "dashboard",
  password: "2389702013",
  port: 5432,
};
const client = new Client(connectionData);
