import axios from "axios";

const tasksApi = axios.create({
  baseURL: process.env.REACT_APP_TASKS_ACCESS_BASE_URL,
});

export default tasksApi;
