import { useNavigate } from "react-router";
import NewTaskForm from "../components/NewTaskForm";
import type { NewTask } from "../tasks/Task";

type NewTaskPageProps = {
  onAddTask: (newTask: NewTask) => Promise<void>;
};

const NewTaskPage = ({ onAddTask }: NewTaskPageProps) => {
  const navigate = useNavigate();

  const executeOnAddTask = async (newTask: NewTask) => {
    await onAddTask(newTask);

    navigate("/");
  };

  return (
    <main>
      <section>
        <h1>Skapa ny task</h1>
        <NewTaskForm onAddTask={executeOnAddTask}></NewTaskForm>
      </section>
    </main>
  );
};

export default NewTaskPage;