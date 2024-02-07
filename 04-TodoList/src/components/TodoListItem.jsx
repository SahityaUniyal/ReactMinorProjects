import { useRef, useState } from "react";
import { useTodo } from "../contexts";

/* eslint-disable react/prop-types */
function TodoListItem({ todo }) {
  const [checked, setChecked] = useState(todo.completed);
  const [isEditable, setIsEditable] = useState(false);
  const [task, setTask] = useState(todo.task);
  const { deleteTodo, updateTodo, toggleCompleted } = useTodo();
  const editRef = useRef();
  const handleCheck = (e) => {
    setChecked(e.currentTarget.checked);
    toggleCompleted(todo.id);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    if (!isEditable) {
      editRef.current.focus();
      setIsEditable(!isEditable);
      return;
    } else {
      setIsEditable(!isEditable);
      updateTodo(todo.id, { task });
    }
  };
  return (
    <div className="w-1/3  my-2 flex p-3 gap-5 m-auto bg-[#1f2833] text-[#c5c6c7]">
      <div className="ml-4">
        <input
          className="w-4 h-4"
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
        />
      </div>
      <div className="w-full ml-4">
        <input
          className={`bg-inherit w-full outline-none ${
            todo.completed ? "line-through" : ""
          } ${isEditable ? "border border-white px-2" : "border-transparent"}`}
          type="text"
          value={task}
          readOnly={!isEditable}
          onChange={(e) => {
            setTask(e.target.value);
          }}
          ref={editRef}
        />
      </div>
      <div className="flex justify-end mr-6">
        <button type="button" className="" onClick={handleEdit}>
          {!isEditable ? "📝" : "📁"}
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            deleteTodo(todo.id);
          }}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default TodoListItem;
