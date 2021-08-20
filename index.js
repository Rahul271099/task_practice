const taskContainer = document.querySelector(".task_container");
let globalTaskData = [];

const addNewCard = () => {
  // get task data
  const taskData = {
    id: `${Date.now()}`,
    title: document.getElementById("taskTital").value,
    image: document.getElementById("imageURL").value,
    type: document.getElementById("taskType").value,
    description: document.getElementById("taskDiscription").value,
  };

  globalTaskData.push(taskData);

  // update the local storage
  localStorage.setItem("taskyCA", JSON.stringify({ card: globalTaskData }));

  //   generate HTML Code

  const newCard = `<div id=${taskData.id} class="col-lg-4 col-md-6 my-4">
<div class="card">
  <div class="card-header d-flex justify-content-end gap-2">
    <button class="btn btn-outline-info">
      <i class="fas fa-pencil-alt"></i>
    </button>
    <button class="btn btn-outline-danger">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <div class="card-body">
    <img
      src=${taskData.image}
      alt="professor"
      class="card-img"
    />
    <h5 class="card-title mt-4">${taskData.title}</h5>
    <p class="card-text">
      ${taskData.description}
    </p>
    <span class="badge bg-primary">${taskData.type}</span>
  </div>
  <div class="card-footer">
    <button class="btn btn-outline-primary">Open Task</button>
  </div>
</div>
</div>`;

  // Inject it To Dom(insert adjusent Html)
  taskContainer.insertAdjacentHTML("beforeend", newCard);

  // Clear the Form
  document.getElementById("taskTital").value = "";
  document.getElementById("imageURL").value = "";
  document.getElementById("taskType").value = "";
  document.getElementById("taskDiscription").value = "";

  return;
};

const loadExistingCards = () => {
  // Check LocalStorage
  const getData = localStorage.getItem("taskyCA");
  // parse JSON data, if exixts
  if (!getData) return;

  const taskCards = JSON.parse(getData);
  globalTaskData = taskCards.card;
  globalTaskData.map((taskData) => {
    // generate HTML Code for those data
    const newCard = `<div id=${taskData.id} class="col-lg-4 col-md-6 my-4">
    <div class="card">
      <div class="card-header d-flex justify-content-end gap-2">
        <button class="btn btn-outline-info">
          <i class="fas fa-pencil-alt"></i>
        </button>
        <button class="btn btn-outline-danger">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <div class="card-body">
        <img
          src=${taskData.image}
          alt="professor"
          class="card-img"
        />
        <h5 class="card-title mt-4">${taskData.title}</h5>
        <p class="card-text">
          ${taskData.description}
        </p>
        <span class="badge bg-primary">${taskData.type}</span>
      </div>
      <div class="card-footer">
        <button class="btn btn-outline-primary">Open Task</button>
      </div>
    </div>
    </div>`;
    // Inject to the DOM
    taskContainer.insertAdjacentHTML("beforeend", newCard);
  });

  return;
};
