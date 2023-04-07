import { Container } from "@mui/material";
import Layout from "../layouts/Layout";
import TasksList from "../components/TasksList";

const TasksListPage = () => {
  return (
    <Layout>
      <Container>
        <h1 className="text-xl my-4 text-center">TasksListPage</h1>
        <TasksList />
      </Container>
    </Layout>
  );
};

export default TasksListPage;
