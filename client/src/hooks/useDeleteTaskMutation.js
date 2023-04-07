import { useMutation } from "@tanstack/react-query";
import { deleteTask } from "../services/tasks";
import queryClient from "../config/queryClient.config";

const useDeleteTaskMutation = () =>
  useMutation({
    mutationFn: deleteTask,
    onSuccess: () => queryClient.invalidateQueries("tasks"),
  });

export default useDeleteTaskMutation;
