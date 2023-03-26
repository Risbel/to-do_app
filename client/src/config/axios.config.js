import axios from "axios";

const tasksApi = axios.create({
  baseURL: process.env.TASKS_ACCESS_BASE_URL,
});

export default tasksApi;
