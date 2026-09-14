import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link, Route, Routes } from "react-router";
import TaskBoardPage from "./pages/TaskBoardPage";
import NewTaskPage from "./pages/NewTaskPage";
import type { TaskType, NewTask } from "./tasks/Task";
import "./App.css";
import { useState, useEffect } from "react";

const apiUrl = "http://localhost:3001/api/tasks";

const App = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error("Någonting gick fel");
      }

      const result: TaskType[] = await response.json();
      setTasks(result);
    } catch (error) {
      console.log("Gick ej att hämta inlägg:", error);
    }
  };

  useEffect(() => {
    const executeFetch = async () => {
      await fetchTasks();
    };
    executeFetch();
  }, []);

  const addTask = async (newTask: NewTask) => {
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTask),
      });
      if (!response.ok) {
        throw new Error("Gick ej att hämta task");
      }
      
    } catch (error) {
      console.log(error);
    }

    await fetchTasks();
  };

  return (
    <>
      <Header></Header>
      <nav>
        <Link to="/">Task Board</Link>
        <Link to="/create">Skapa task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskBoardPage tasks={tasks} />} />

        <Route path="/create" element={<NewTaskPage onAddTask={addTask} />} />
      </Routes>
      <Footer></Footer>
    </>
  );
};
export default App;
