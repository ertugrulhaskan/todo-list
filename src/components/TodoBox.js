import { MdDelete } from "react-icons/md";

import { useContext } from "react";
import { TodoContext } from "../App";

const TodoBox = ({ todo }) => {
  const { isCompleted, handleDeleteItem } = useContext(TodoContext);

  return (
    <div className="box">
      <div className="mr-3 grow">
        <input
          className="hidden"
          type="checkbox"
          name="reactJS"
          id={todo.id}
          checked={todo.isCompleted}
          onChange={() => isCompleted(todo.id)}
        />
        <label htmlFor={todo.id}>{todo.todo}</label>
      </div>
      <div className="mt-2">
        <button
          className="text-zinc-200 hover:text-rose-600"
          onClick={() => handleDeleteItem(todo.id)}
        >
          <MdDelete className="text-2xl " />
        </button>
      </div>
    </div>
  );
};

export default TodoBox;
