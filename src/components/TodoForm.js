import { MdAddCircle } from "react-icons/md";

import { useContext } from "react";
import { TodoContext } from "../App";

const TodoForm = () => {
  const { todo, setTodo, handleFormSubmit } = useContext(TodoContext);

  return (
    <form className="relative ml-10 grow" onSubmit={handleFormSubmit}>
      <input
        className="w-full rounded-full border border-zinc-200 py-1 pl-3 pr-10 outline-none placeholder:text-zinc-200 focus:border-zinc-600"
        type="text"
        name="txtTodo"
        id="txtTodo"
        placeholder="What have to done?"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="absolute right-[2px] top-[2px] text-3xl text-zinc-200 hover:text-sky-500 focus:text-sky-500"
        type="submit"
      >
        <MdAddCircle />
      </button>
    </form>
  );
};

export default TodoForm;
