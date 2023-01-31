import 'material-icons/iconfont/material-icons.css';
import * as API from './js/api';
import { renderMarkup } from './js/renderMarkup';

const todoList = document.querySelector('.js-todo-list');
const modalForm = document.querySelector('.js-modal-form');

// Get all todos
const getAllTodos = async () => {
  try {
    const todos = await API.getAllTodos();
    renderMarkup(todos, todoList);
  } catch (error) {
    console.error('ERROR: ', error);
  }
};

getAllTodos();

// Function for form submit
const handleFormSubmit = async e => {
  e.preventDefault();

  const title = e.currentTarget.elements.title.value.trim();
  const description = e.currentTarget.elements.description.value.trim();

  if (!title || !description) return alert('Please fill all fields!');

  try {
    await API.createTodo({
      title,
      description,
    });

    getAllTodos();
  } catch (error) {
    console.error('ERROR: ', error);
  }
};

// Listen for form submit
modalForm.addEventListener('submit', handleFormSubmit);
