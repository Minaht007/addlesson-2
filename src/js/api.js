const BASE_URL = 'https://626645cf63e0f382567f1db9.mockapi.io';

// Get all todos, method: GET
export const getAllTodos = async () => {
  const response = await fetch(`${BASE_URL}/todos`);

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return await response.json();
};
