import { Navbar } from "./Navbar";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  const loadTask = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:4000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    loadTask();
  }, []);

  return (
    <>
      <Navbar />

      <Container>
        <h1>TaskList</h1>

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
                  onClick={() => navigate(`/tasks/${task.id}/edit`)}
                >
                  Edit
                </Button>

                <Button
                  style={{ margin: "3px" }}
                  variant="contained"
                  color="warning"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </Container>
    </>
  );
};
