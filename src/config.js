//1
//aqui es donde voy a poner esas variables o constantes que voy a poder reutilizar luego
//tambien necesito un archivo db
const { config } = require("dotenv"); // dotenv me va a permitir usar config pa tener variables de entorno en .env
config();

module.exports = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
  },
};
