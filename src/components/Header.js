import TodoForm from "./TodoForm";

const Header = () => {
  return (
    <header className="flex flex-row items-center justify-between border-b border-zinc-100 pb-4">
      <h1>TODO's</h1>
      <TodoForm />
    </header>
  );
};

export default Header;
