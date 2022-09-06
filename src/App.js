import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import TodoBox from "./components/TodoBox";

function App() {
  return (
    <div className="container mx-auto max-w-lg px-4">
      <Header />
      <section className="my-4 pb-4">
        <TodoBox />
      </section>
      <ProgressBar />
    </div>
  );
}

export default App;
