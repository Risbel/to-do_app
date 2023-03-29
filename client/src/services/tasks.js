import tasksApi from "../config/axios.config";

export const getTasks = async () => {
  const resp = await tasksApi.get("/");
  return resp.data;
};

export const createTask = (task) => tasksApi.post("/", task);
