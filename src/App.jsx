import Header from "./components/Header";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <div className="bg-sky-500 min-h-screen py-20 px-4 flex flex-col justify-center gap-y-6">
        <Header />
        <Quiz />
      </div>
    </>
  );
}

export default App;
