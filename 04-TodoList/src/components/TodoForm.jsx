import { useState } from "react";
import { useTodo } from "../contexts";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ task: todo, completed: false });
    setTodo("");
  };
  return (
    <form action="">
      <div className="w-1/3 shadow-black shadow-md m-auto my-10 bg-[#1f2833] rounded-xl overflow-hidden flex">
        <input
          className="outline-none p-3 bg-[#1f2833] text-white/70 w-4/5"
          placeholder="Enter Task "
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          type="text"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="bg-[#131920] text-white/80 w-1/5"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
