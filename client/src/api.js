const API = 'http://localhost:5000/api/todos';

export const getTodos = async () => {
  const res = await fetch(API);
  return res.json();
};

export const addTodo = async (title) => {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title }),
  });
  return res.json();
};
