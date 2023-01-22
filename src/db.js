//1
// aqui es donde voy a tener la conexion a la bd
const { Pool } = require("pg"); // pg es la libreria que nos va a conectar con postgres y hacer las querys
// pg me brinda una clase (Pool) que me permite crear una conexion
const { db } = require("./config");

const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  port: db.port,
  database: db.database, // aqui va el nombre de la base de datos creada que esta en la carpeta database
});

module.exports = pool;
