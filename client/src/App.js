import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TasksList />} />
        <Route path="/new" element={<TaskForm />} />
        <Route path="/:id/edit" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default App;
