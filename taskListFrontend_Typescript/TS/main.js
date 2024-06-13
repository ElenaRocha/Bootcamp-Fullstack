var textBox = document.querySelector(".text-box");
var taskList = document.querySelector(".task-list");
var toDoList = new Array();
var idActual = 1;
addToDo();
/*toDoList = JSON.parse(localStorage.getItem("tareas"));

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
});*/
function addToDo() {
    if (textBox.value !== " ") {
        var task = {
            id: idActual,
            title: textBox.value
        };
        toDoList.push(task);
        localStorage.setItem("tareas", JSON.stringify(toDoList));
        toDoList = JSON.parse(localStorage.getItem("tareas"));
        textBox.value = " ";
        updateList();
        idActual++;
    }
    function updateList() {
        taskList.style.display = "block";
        taskList.innerHTML = "";
        taskList.textContent = "";
        var ul = document.createElement("ul");
        ul.setAttribute("class", "tasks");
        taskList.appendChild(ul);
        toDoList.forEach(function (item) {
            var li = document.createElement("li");
            li.innerHTML = "<p class=\"task\" id=\"" + item.id + "\">" + item.title + " <input type=\"button\" class=\"erase-button\" value=\"Borrar\" onclick=\"eraseTask(" + item.id + ")\"/></p>";
            ul.appendChild(li);
        });
    }
}
function eraseTask(itemId) {
    var liBorrar = document.getElementById(String(itemId));
    liBorrar.parentNode.removeChild(liBorrar);
    var indice = toDoList.findIndex(function (tarea) {
        return tarea.id === itemId;
    });
    toDoList.splice(indice, 1);
    localStorage.setItem("tareas", JSON.stringify(toDoList));
    toDoList = JSON.parse(localStorage.getItem("tareas"));
}
