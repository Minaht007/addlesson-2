const BASE_URL = 'https://626645cf63e0f382567f1db9.mockapi.io';

// Get all todos, method: GET
export const getAllTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
};

// Create todo, method: POST
export const createTodo = async todo => {
  const response = await fetch(`${BASE_URL}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(todo),
  });

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
};
