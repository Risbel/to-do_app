import { useParams } from "react-router-dom";

import Layout from "../layouts/Layout";
import EditTaskForm from "../components/EditTaskForm";
import useGetTask from "../hooks/useGetTask";

const EditTaskPage = () => {
  const params = useParams();

  const { data: task, isLoading: isLoadingTask } = useGetTask(params.id, {
    enabled: !!params.id,
  });

  return <Layout>{!isLoadingTask && <EditTaskForm taskId={task.id} defaultValues={task} />}</Layout>;
};

export default EditTaskPage;
