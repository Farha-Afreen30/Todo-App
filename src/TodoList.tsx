import { useState, useRef } from "react";
import { Link } from "react-router-dom";

type Todo = {
  id: number;
  task: string;
  addedAt: string;
};

type TodoInputProps = {
  todos: Todo[];
  setTodos: any;
};

const generateId = (() => {
  let id = 0;
  return () => ++id;
})();

const TodoList = ({ todos, setTodos }: TodoInputProps) => {
  const [task, setTask] = useState<string>("");
  const inputRef = useRef<any>();

  const addTodo = () => {
    const newTodo: Todo = {
      id: generateId(),
      task,
      addedAt: new Date().toLocaleTimeString(),
    };

    setTodos([...todos, newTodo]);
    setTask("");
    inputRef.current?.focus();
  };

  return (
    <div className="todo-box">
      <h1>To-Do List</h1>
      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button disabled={!task} onClick={addTodo}>
          Add Task
        </button>
      </div>

      <h2>Tasks</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link to={`/todo/${todo.id}`}>{todo.task}</Link> - Added at: {todo.addedAt}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
