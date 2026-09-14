import { useState } from "react";
import type{NewTask} from "../tasks/Task"

type NewTaskFormProps = {
    onAddTask: (newTask: NewTask) => void

}

const NewTaskForm = ({onAddTask}:NewTaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [category, setCategory] = useState("");
  const [priority, setPriority] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    onAddTask(
        {title, description, assignee, category, priority}
    );

    // export type NewTask = {
    //     title: string;
    //     description: string;
    //     assignee: string
    //     category: string;
    //     priority: string;
    //     status: TaskStatus
    // }

    console.log("Titel:", title);
    console.log("Beskrivning:", description);
    console.log("Ansvarig:", assignee);
    console.log("Kategori:", category);
    console.log("Prioritet:", priority);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <textarea
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        value={assignee}
        onChange={(event) => setAssignee(event.target.value)}
      />
      <input
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <select
        value={priority}
        onChange={(event) => setPriority(event.target.value)}
      >
        <option value="">Välj prioritet</option>
        <option value="Låg">Låg</option>
        <option value="Medium">Medium</option>
        <option value="Hög">Hög</option>
      </select>

      <button type="submit">Skapa en task</button>
    </form>
  );
};
export default NewTaskForm;
