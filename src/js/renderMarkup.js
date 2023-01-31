export const renderMarkup = (todos, ref) => {
  ref.innerHTML = '';

  const markup = todos
    .map(
      ({ poster, title, description, createdAt, id }) => /* html */ `
      <div class="col-md-4 rounded-3 js-card" id=${id}>
        <div class="card mb-3 position-relative" style="max-width: 540px">
          <div class="row g-0">
            <div class="col-md-4 p-3">
            <b class="mb-1">${id}</b>
              <img
                src=${poster}
                class="img-fluid rounded"
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

  ref.insertAdjacentHTML('beforeend', markup);
};
