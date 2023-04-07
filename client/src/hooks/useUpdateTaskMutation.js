import { useNavigate } from "react-router-dom";
import { updateTask } from "../services/tasks";
import { useMutation } from "@tanstack/react-query";
import queryClient from "../config/queryClient.config";

const useUpdateTaskMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries();
      navigate("/");
    },
  });
};

export default useUpdateTaskMutation;
