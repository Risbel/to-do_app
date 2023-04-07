import tasksApi from "../config/axios.config";

export const createTask = (task) => tasksApi.post("/", task);

export const getTasks = async () => {
  const resp = await tasksApi.get("/");
  return resp.data;
};

export const getTask = async (id) => {
  const resp = await tasksApi.get(`/${id}`);
  return resp.data;
};

export const updateTask = (task) => tasksApi.put(`/${task.id}`, task);

export const deleteTask = (id) => tasksApi.delete(`/${id}`);
