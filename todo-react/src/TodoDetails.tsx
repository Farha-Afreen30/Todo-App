import { useParams, Link } from "react-router-dom";

type Todo = {
  id: number;
  task: string;
  addedAt: string;
};

type TodoDetailsProps = {
  todos: Todo[];
};

const TodoDetails = ({ todos }: TodoDetailsProps) => {
  const { id } = useParams();
  const todo = todos.find((task) => task.id === Number(id));

  if (!todo) return <h2>Task not found!</h2>;

  return (
    <div className="todo-box">
      <h1>Task Details</h1>
      <p><strong>Task ID:</strong> {todo.id}</p>
      <p><strong>Task:</strong> {todo.task}</p>
      <p><strong>Added At:</strong> {todo.addedAt}</p>
      <br />
      <Link to="/todo">Back to To-Do List</Link>
    </div>
  );
};

export default TodoDetails;

