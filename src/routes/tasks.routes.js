//1
// aqui voy a poner las url, a las cuales cuando las visite desde el frontend estas van a ejecutar codigos
// lo que va aqui son los endpoints
// ahora, ese codigo que se va a ejecutar no ira aqui dentro junto con las rutas, lo pondremos en controlers
// entonces para poder utilizar estas funciones al ser visitadas las rutas las importamos

const { Router } = require("express"); //express brinda muchas funciones, esta es para crear las rutas
const {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../controllers/tasks.controllers");

const router = Router(); // metemos la funcion en router para usar la constante como instancia de esta funcion

//esta funcion permite que cuando visitemos /tasks por el navegador se ejecute la funcion inportada a continuacion
router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.delete("/tasks/:id", deleteTask);

router.put("/tasks/:id", updateTask);

module.exports = router; // aqui estamos exportando el enrutador
