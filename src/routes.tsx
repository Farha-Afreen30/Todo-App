import TodoList from "./TodoList";
import TodoDetails from "./TodoDetails";
import ProtectedRoute from "./ProtectedRoute";
import { Navigate } from "react-router-dom";

const routes = (todos: any[], setTodos: any) => [
  { path: "/", element: <Navigate to="/todo" /> },
  { path: "/todo", element: <TodoList todos={todos} setTodos={setTodos} /> },
  { 
    path: "/todo/:id", 
    element: <ProtectedRoute element={<TodoDetails todos={todos} />} />
  },
];

export default routes;
