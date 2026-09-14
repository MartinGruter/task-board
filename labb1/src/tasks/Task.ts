export type TaskStatus = "todo" | "doing" | "done";

export type TaskType = {
    id: number;
    title: string;
    description: string;
    assignee: string
    category: string;
    priority: string;
    status: TaskStatus;
}

export type NewTask = {
    title: string;
    description: string;
    assignee: string
    category: string;
    priority: string;
}