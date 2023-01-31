import 'material-icons/iconfont/material-icons.css';
import * as API from './js/api';
import { renderMarkup } from './js/renderMarkup';

const todoList = document.querySelector('.js-todo-list');

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
