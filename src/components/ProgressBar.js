import { useContext } from "react";
import { TodoContext } from "../App";

function ProgressBar() {
  const { todos } = useContext(TodoContext);

  const completedTodos = todos.filter((item) => item.isCompleted === true);

  const progress = () => {
    return parseFloat(completedTodos.length / todos.length) * 100 || 1;
  };

  return (
    <footer className="fixed left-0 right-0 bottom-0 bg-white p-4">
      <div className="mx-auto flex max-w-lg flex-row items-center justify-between">
        <div className="mr-3 font-semibold">Accomplishment</div>
        <div className="relative h-2 grow border border-zinc-100 bg-white">
          <div
            className="absolute left-0 top-0 h-[6px] bg-green-600"
            style={{ width: `${progress()}%` }}
          ></div>
        </div>
        <div className="ml-5 text-2xl font-semibold">
          {completedTodos.length}/{todos.length}
        </div>
      </div>
    </footer>
  );
}

export default ProgressBar;
