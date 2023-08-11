import Todo from "./components/todo/Todo";

export default function App() {
  return (
    <div className="container">
      <h1>new topic</h1>
      {true && <Todo />}
    </div>
  )
}