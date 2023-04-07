import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const CreateTaskPage = lazy(() => import("./pages/CreateTaskPage"));
const EditTaskPage = lazy(() => import("./pages/EditTaskPage"));
const TasksListPage = lazy(() => import("./pages/TasksListPage"));

const App = () => {
  return (
    <Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<TasksListPage />} />
          <Route path="/new" element={<CreateTaskPage />} />
          <Route path="/:id/edit" element={<EditTaskPage />} />
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
