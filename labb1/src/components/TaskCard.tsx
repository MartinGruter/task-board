type TaskCardProps = {
    title: string;
    id: number;
    description: string;
    assignee: string;
    category: string;
    priority: string;
};
const TaskCard = ({id, title, description, assignee, category, priority}: TaskCardProps) => {
    return (
        <article>
            <p>ID: {id}</p>
            <p>Kategori: {category}</p>
            <p>Titel: {title}</p>
            <p>Beskrivning: {description}</p>
            <p>Ansvarig: {assignee}</p>
            <p>Prioritet: {priority}</p>
        </article>
    )
}
export default TaskCard;