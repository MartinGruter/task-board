import TaskCard from "../components/TaskCard";
import Column from "../components/Column";
import type { TaskType } from "../tasks/Task";

type TaskBoardPageProps = {
  tasks: TaskType[];
};

const TaskBoardPage = ({ tasks }: TaskBoardPageProps) => {
  const todoTasks: TaskType[] = tasks.filter(
    (task) => task.status === "todo",
  );

  const doingTasks: TaskType[] = tasks.filter(
    (task) => task.status === "doing",
  );

  const doneTasks: TaskType[] = tasks.filter(
    (task) => task.status === "done",
  );

  return (
    <main>
      <div className="column-container">
        <Column title="Todo">
          {todoTasks.map((task) => (
            <TaskCard
              title={task.title}
              id={task.id}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              key={task.id}
            />
          ))}
        </Column>

        <Column title="Doing">
          {doingTasks.map((task) => (
            <TaskCard
              title={task.title}
              id={task.id}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              key={task.id}
            />
          ))}
        </Column>

        <Column title="Done">
          {doneTasks.map((task) => (
            <TaskCard
              title={task.title}
              id={task.id}
              description={task.description}
              assignee={task.assignee}
              category={task.category}
              priority={task.priority}
              key={task.id}
            />
          ))}
        </Column>
      </div>
    </main>
  );
};

export default TaskBoardPage;