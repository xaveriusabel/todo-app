function TodoItem({ todo }) {
  return (
    <li>
      {todo.title} {todo.completed ? "(Done)" : ""}
    </li>
  );
}

export default TodoItem;
