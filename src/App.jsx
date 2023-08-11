import TodoList from "./components/todo/TodoList";
import './style/App.css'

export default function App() {
  return (
    <div className="container">
      <h1>new topic</h1>
      {true && <TodoList />}
    </div>
  )
}