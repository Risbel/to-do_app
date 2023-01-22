//1
// este archivo es el que arranca el servidor, es mi archivo principal
// lo siguiente a crear son las rutas
//2 *importante*
// Cada vez que yo hago algun cambio en el proyecto este no se va a reflejar al yo guardar con ctrl+s
// para poder ver el cambio debo ir a consola, hacer ctrl+c y luego volver a levantar el programa
// esto es poco practico, por eso usamos nodemon, lo configuramos en los scripts de nuestro p.json y luego volvemos a
//levntar el proyecto con el script alli definido, entonces asi podremos seguir trabajando viendo los cambios sin
//tener que estar cancelandolo y reabriendolo cada vez que querramos probar algun cambio.
const { json } = require("express");
const express = require("express");
const morgan = require("morgan"); //sirve para la captura de solicitudes HTTP para node.js para su posterior registro y seguimiento.
const cors = require("cors");

const tasksRutes = require("./routes/tasks.routes"); //importando la url

const app = express();

app.use(cors()); //esto es para poder ejecutar dos servidores en una sola maquina de manera simple
app.use(morgan("dev")); // esta opcion dev que usa morgan es para que las peticiones que van llegando su muestren por consola
app.use(express.json()); // esto es pa q nuestro servidor de express pueda entender las peticiones post enviadas desde el front

app.use(tasksRutes); //esto va luego d morgan, le dice a la app que use esta ruta

// esto a continuacion es relacionado con express, sirve para manejar los errores de manera global (middleware de error)
//este next me permite saltar a otra funcion
app.use((err, req, res, next) => {
  return res.json({
    message: err.message, //este error se va a lanzar para todos los errores que ocurran en las funciones de controllers
  });
});

app.listen(4000);
console.log(`server on port ${4000}`);
