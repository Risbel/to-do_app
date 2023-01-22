import { Navbar } from "./Navbar";
import {
  Button,
  Container,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [editing, setEditing] = useState(false);

  const [loading, setLoading] = useState(false);

  const params = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (editing) {
      const response = await fetch(`http://localhost:4000/tasks/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(task),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
    } else {
      await fetch("http://localhost:4000/tasks", {
        method: "POST",
        body: JSON.stringify(task),
        headers: { "Content-Type": "application/json" },
      });
    }

    setLoading(false);
    navigate("/");
  };

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const loadTask = async (id) => {
    const resp = await fetch(`http://localhost:4000/tasks/${id}`);
    const data = await resp.json();
    setTask({ title: data.title, description: data.description });
    setEditing(true);
  };

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  return (
    <>
      <Navbar editing={editing} />
      <Container>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={3}>
            <Card
              sx={{ mt: 5 }}
              style={{ backgroundColor: "#1e272e", padding: "1rem" }}
            >
              <Typography variant="5" textAlign="center" color="white">
                {editing ? "Update Task" : "Create Task"}
              </Typography>
              <CardContent>
                <form autoComplete="off" onSubmit={handleSubmit}>
                  <TextField
                    variant="filled"
                    label="Write your title"
                    sx={{
                      display: "block",
                      margin: ".5rem 0",
                    }}
                    inputProps={{ style: { color: "white" } }}
                    InputLabelProps={{ style: { color: "white" } }}
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                  />

                  <TextField
                    variant="filled"
                    label="Write your description"
                    multiline
                    rows={4}
                    sx={{
                      display: "block",
                      margin: ".5rem 0",
                    }}
                    inputProps={{ style: { color: "white" } }}
                    InputLabelProps={{ style: { color: "white" } }}
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={!task.title && !task.description}
                  >
                    {loading ? (
                      <CircularProgress color="inherit" size={24} />
                    ) : (
                      `${editing ? "update" : "create"}`
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
