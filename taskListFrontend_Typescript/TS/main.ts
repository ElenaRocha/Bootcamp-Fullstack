const textBox: HTMLInputElement = document.querySelector(
  ".text-box"
) as HTMLInputElement;
const taskList: HTMLInputElement = document.querySelector(
  ".task-list"
) as HTMLInputElement;

let toDoList = new Array();
let idActual: number = 1;

toDoList = JSON.parse(localStorage.getItem("tareas"));

taskList.style.display = "block";
taskList.innerHTML = "";
taskList.textContent = "";

const ul = document.createElement("ul");
ul.setAttribute("class", "tasks");
taskList.appendChild(ul);

toDoList.forEach((item) => {
  const li = document.createElement("li");

  li.innerHTML = `<p class="task" id="${item.id}">${item.title} <input type="button" class="erase-button" value="Borrar" onclick="eraseTask(${item.id})"/></p>`;

  ul.appendChild(li);
});

function addToDo(): void {
  if (textBox.value !== " ") {
    const task = {
      id: idActual,
      title: textBox.value,
    };

    toDoList.push(task);

    localStorage.setItem("tareas", JSON.stringify(toDoList));

    toDoList = JSON.parse(localStorage.getItem("tareas"));

    textBox.value = " ";
    updateList();

    idActual++;
  }

  function updateList(): void {
    taskList.style.display = "block";
    taskList.innerHTML = "";
    taskList.textContent = "";

    toDoList.forEach((item) => {
      const li = document.createElement("li");

      li.innerHTML = `<p class="task" id="${item.id}">${item.title} <input type="button" class="erase-button" value="Borrar" onclick="eraseTask(${item.id})"/></p>`;

      ul.appendChild(li);
    });
  }
}

function eraseTask(itemId: number): void {
  let liBorrar = document.getElementById(String(itemId));
  liBorrar.parentNode.removeChild(liBorrar);
  let indice = toDoList.findIndex((tarea) => {
    return tarea.id === itemId;
  });
  toDoList.splice(indice, 1);

  localStorage.setItem("tareas", JSON.stringify(toDoList));

  toDoList = JSON.parse(localStorage.getItem("tareas"));
}
