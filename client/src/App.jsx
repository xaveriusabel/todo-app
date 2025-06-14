import { useEffect, useState } from 'react';
import TodoItem from './components/TodoItem';
import { getTodos, addTodo } from './api';

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTodos().then(setTodos);
  }, []);

  const handleAdd = async () => {
    if (title.trim()) {
      const newTodo = await addTodo(title);
      setTodos([...todos, newTodo]);
      setTitle("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
      </ul>
    </div>
  );
}

export default App;
