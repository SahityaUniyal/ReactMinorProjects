import { useEffect, useState } from "react";
import "./App.css";
import { TodoForm, TodoListItem } from "./components";
import { TodoContextProvider } from "./contexts";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { ...todo, id: Date.now() }]);
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const updateTodo = (id, newTodo) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, task: newTodo.task } : todo
      )
    );
  };
  const toggleCompleted = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    if (storageTodos && storageTodos.length > 0) {
      setTodos(storageTodos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <TodoContextProvider
      value={{ todos, addTodo, deleteTodo, updateTodo, toggleCompleted }}
    >
      <h1 className="text-3xl font-bold text-center mt-20 text-[#66fcf1]">
        Todo App
      </h1>
      <TodoForm />
      {todos.map((todo) => (
        <TodoListItem key={todo.id} todo={todo} />
      ))}
    </TodoContextProvider>
  );
}

export default App;
