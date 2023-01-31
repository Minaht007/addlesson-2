import 'material-icons/iconfont/material-icons.css';

const BASE_URL = 'https://626645cf63e0f382567f1db9.mockapi.io';
const todoList = document.querySelector('.js-todo-list');

const renderMarkup = todos => {
  const markup = todos
    .map(
      ({ poster, title, description, createdAt, id }) => /* html */ `
      <div class="col-md-4 rounded-3 js-card" id=${id}>
        <div class="card mb-3 position-relative" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src=${poster}
                class="img-fluid rounded-start"
                alt=${title}
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-uppercase fw-bolder text-truncate" style="max-width: 150px;">${title}</h5>
                <p class="d-inline-block text-truncate" style="max-width: 150px;">
                  ${description}
                </p>
                <p class="card-text">
                  <small class="text-muted">${createdAt}</small>
                </p>
              </div>
            </div>
          </div>
          <button
            type="button"
            class="btn-close position-absolute top-0 start-100 translate-middle"
            aria-label="Close"
            data-id="${id}"
          ></button>
        </div>
      </div>
  `
    )
    .join('');

  todoList.insertAdjacentHTML('beforeend', markup);
};

// Get all todos, method: GET
const getAllTodos = async () => {
  try {
    const response = await fetch(`${BASE_URL}/todos`);
    if (!response.ok) {
      throw new Error('Something went wrong');
    }
    const todos = await response.json();
    renderMarkup(todos);

    console.log(todos);
  } catch (error) {
    console.error('ERROR: ', error);
  }
};

getAllTodos();
