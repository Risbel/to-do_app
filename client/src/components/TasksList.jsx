import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getTasks } from "../services/tasks";
import useDeleteTaskMutation from "../hooks/useDeleteTaskMutation";

import { Button, Card, CardContent, Typography } from "@mui/material";

const TasksList = () => {
  const navigate = useNavigate();

  const deleteTaskMutation = useDeleteTaskMutation();

  const {
    isLoading,
    data: tasks,
    isError,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  if (isLoading) return <div>Loading...</div>;
  else if (isError) return <div>Error: {error.message}</div>;

  return (
    <>
      {tasks.map((task) => (
        <Card
          style={{
            marginBottom: "10px",
            backgroundColor: "#1e272e",
          }}
          key={task.id}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ color: "white" }}>
              <Typography>{task.title}</Typography>
              <Typography>{task.description}</Typography>
            </div>
            <div>
              <Button
                style={{ margin: "3px" }}
                variant="contained"
                color="inherit"
                onClick={() => navigate(`/${task.id}/edit`)}
              >
                Edit
              </Button>

              <Button
                style={{ margin: "3px" }}
                variant="contained"
                color="warning"
                onClick={() => deleteTaskMutation.mutate(task.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default TasksList;
