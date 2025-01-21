import { ChangeEvent, KeyboardEvent, ReactNode, useState } from "react";
import { BiEdit, BiMinus } from "react-icons/bi";
import { PiPlus } from "react-icons/pi";
import TextArea from "../../components/textarea";

type TodoListProps = {
  addIcon?: ReactNode;
  removeIcon?: ReactNode;
  textArea?: ReactNode;
  editIcon?: ReactNode;
};

function TodoPage() {
  const [todos, setTodos] = useState<string[]>([]);
  const [text, setText] = useState("");

  function handleTask(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  function addTask() {
    if (text.trim() != "") {
      setTodos((prevTodos) => [...prevTodos, text]);
      setText("");
    }
  }

  function removeTask(index: number) {
    const updatedTask = todos.filter((_, i) => i != index);
    setTodos(updatedTask);
  }

  function AddTaskShortcut(e: KeyboardEvent<HTMLDivElement>) {
    if (e.ctrlKey && e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  }

  function editTask(index: number) {
    const selectedTask = todos.filter((_, i) => i === index);
    setText(selectedTask[0]);
    const updatedTask = todos.filter((todo) => todo !== selectedTask[0]);
    setTodos(updatedTask);
  }

  const todoList: TodoListProps = {
    addIcon: (
      <PiPlus className="cursor-pointer rounded-sm bg-neutral-900 w-6 h-6 p-0.5" />
    ),
    removeIcon: (
      <BiMinus className="cursor-pointer rounded-sm bg-neutral-900 w-6 h-6 p-0.5" />
    ),
    textArea: (
      <TextArea
        onKeyDown={AddTaskShortcut}
        value={text}
        onChange={handleTask}
      />
    ),
    editIcon: (
      <BiEdit className="cursor-pointer rounded-sm bg-neutral-900 w-6 h-6 p-0.5" />
    ),
  };
  return (
    <div className="h-screen w-full flex flex-col gap-7 mt-10">
      <div className="grid grid-cols-[auto_1fr] gap-5 items-center px-5 w-full sm:w-[40em]">
        <button onClick={addTask}>{todoList.addIcon}</button>
        {todoList.textArea}
      </div>
      {todos.map((todo, index) => (
        <div
          className="grid grid-cols-[auto_1fr_auto] gap-5 mb-5 px-5 w-full sm:w-[35em] lg:w-[45em]"
          key={index}
        >
          <button onClick={() => removeTask(index)}>
            {todoList.removeIcon}
          </button>
          {todo}
          <button onClick={() => editTask(index)}>{todoList.editIcon}</button>
        </div>
      ))}
    </div>
  );
}

export default TodoPage;
