import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/tasks/new" element={<TaskForm />} />
        <Route path="/tasks/:id/edit" element={<TaskForm />} />
      </Routes>
    </Router>
  );
};

export default App;
