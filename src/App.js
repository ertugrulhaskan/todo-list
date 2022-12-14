import { v4 as uuidv4 } from "uuid";

import { createContext, useEffect, useState } from "react";

import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TodoBox from "./components/TodoBox";

export const TodoContext = createContext(null);

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  // onUpdated
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const validation = () => {
    return todo.length === 0 ? false : true;
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validation()) {
      setTodos((prevStateTodos) => {
        return [{ id: uuidv4(), todo, isCompleted: false }, ...prevStateTodos];
      });
      setTodo(""); // Cleaning Input
      console.log("render");
    }
  };

  const handleDeleteItem = (todoID) => {
    const newTodosList = todos.filter((todo) => todo.id !== todoID);
    setTodos(newTodosList);
  };

  const isCompleted = (todoID) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoID) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todo,
        setTodo,
        handleFormSubmit,
        todos,
        isCompleted,
        handleDeleteItem,
      }}
    >
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
