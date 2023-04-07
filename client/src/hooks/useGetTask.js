import { useQuery } from "@tanstack/react-query";

import { getTask } from "../services/tasks";

const useGetTask = (id, options) => useQuery(["get-task", id], () => getTask(id), options);

export default useGetTask;
