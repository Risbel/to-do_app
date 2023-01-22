//1
// aqui pondre las funciones que se van a ejecutar al ser visitadas las rutas de la appTask
//adicionalmente a estas funciones necesito un archivo config para poder guardaar las variables de entorno o
//la cadena de conexion hacia la base de datos

const pool = require("../db");

const getAllTasks = async (req, res, next) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");

    res.json(allTasks.rows);
  } catch (err) {
    next(err);
  }
};

const getTask = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await pool.query("SELECT * FROM task WHERE id = $1", [id]);

    if (result.rows.length === 0)
      return res.status(404).json({
        message: "task not found",
      });

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  const { title, description } = req.body; // con req.body voy a recibir la informacion que se esta mandando del frontend

  try {
    const result = await pool.query(
      "INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *", //returning * es pa poder obtener .rows
      [title, description]
    );

    res.json(result.rows[0]);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const resp = await pool.query(
      "DELETE FROM task WHERE id = $1 RETURNING *",
      [id]
    );

    if (resp.rowCount === 0) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    return res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const result = await pool.query(
      "UPDATE task SET title = $1, description = $2 WHERE id = $3 RETURNING *",
      [title, description, id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "task not found",
      });
    }

    return res.json(result.rows[0]);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
};
