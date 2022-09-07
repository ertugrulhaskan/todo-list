import { v4 as uuidv4 } from "uuid";

import { createContext, useEffect, useState } from "react";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TodoBox from "./components/TodoBox";

export const TodoContext = createContext(null);

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setTodos((prevStateTodos) => {
      return [{ id: uuidv4(), todo, isCompleted: false }, ...prevStateTodos];
    });

    setTodo(""); // Cleaning Input
  };

  return (
    <TodoContext.Provider value={{ todo, setTodo, handleFormSubmit, todos }}>
      <div className="container mx-auto max-w-lg px-4">
        <Header />
        {todos && (
          <section className="my-4 pb-4">
            {todos.map((todoItem) => (
              <TodoBox todo={todoItem} key={todoItem.id} />
            ))}
          </section>
        )}
        <ProgressBar />
      </div>
    </TodoContext.Provider>
  );
}

export default App;
