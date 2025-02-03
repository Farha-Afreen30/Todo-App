import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import withRoutes from "./withRoutes";
import routes from "./routes";
import "./App.css";

type Todo = {
  id: number;
  task: string;
  addedAt: string;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  const RoutesComponent = withRoutes(routes(todos, setTodos));

  return (
    <div className="container">
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </div>
  );
};

export default App;











// import { useState, useEffect, useRef, useMemo } from "react";
// import TodoList from "./TodoList";

// type Todo = {
//   task: string;
//   addedAt: string;
// };

// function App() {
//   const [task, setTask] = useState<string>(""); 
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const inputRef = useRef<any>()

//   const addTodo = () => {
//     const newTodo: Todo = {
//       task,
//       addedAt: new Date().toLocaleTimeString(), 
//     };
//     setTodos([...todos, newTodo]);
//     setTask("");

//     inputRef.current?.focus()

//   };

//   useEffect(() => {
//     if (todos.length > 0) {
//       alert(`Task "${todos[todos.length - 1].task}" added successfully!`);
//     }
//   }, [todos]);

//   // const totalTasks = useMemo(() => {
//   //   console.log("Calculating total tasks...");
//   //   return todos.length;
//   // }, [todos]);

//   return (
//     <div>
//       <h1>To-Do List</h1>
//       <div>
//         <input
//         ref={inputRef}
//           type="text"
//           placeholder="Enter a task"
//           value={task}
//           onChange={(e) => setTask(e.target.value)} 
//         />
//         <button disabled={!task} onClick={addTodo}>Add Task</button>
//       </div>
//       {/* <p>Total Tasks: {totalTasks}</p> */}
//       <TodoList todos={todos} />
//     </div>
//   );
// }

// export default App;
