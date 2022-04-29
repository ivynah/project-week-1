//console.log("this is working");

const newTaskInput = document.querySelector(".newTaskInput");
const addTaskBtn = document.querySelector(".addTaskBtn");
const taskList = document.querySelector(".taskList");


addTaskBtn.addEventListener("click", addTask);
taskList.addEventListener("click", deleteTask);

let newTaskInputClicks = 0;
let deleteClicks = 0;

function addTask(event) {
    event.preventDefault();
    if(newTaskInput.value.trim() === "") {
        newTaskInputClicks == 0;
        return;
    } else{
        currentTasks = newTaskInputClicks += 1;
        console.log("Current tasks: ", currentTasks);
    }

    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    const newTask = document.createElement("list");
    newTask.innerText = newTaskInput.value;
    newTask.classList.add("task-item")
    taskDiv.append(newTask);

    const checkedBtn = document.createElement("button");
    checkedBtn.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    checkedBtn.classList.add("checkedBtn");
    taskDiv.append(checkedBtn);

    const trashBtn = document.createElement("button");
    trashBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    trashBtn.classList.add("trashBtn");
    taskDiv.append(trashBtn);

    taskList.append(taskDiv);

    newTaskInput.value="";
}

function deleteTask(e) {
    const item = e.target;
    if(item.classList[0]==='trashBtn') {
        const task = item.parentElement;
        deleteClicks += 1;
        currentTasks = newTaskInputClicks -= 1;
        //console.log("Deleted tasks: ", deleteClicks);
        console.log("Current tasks: ", currentTasks);
        task.remove();
    }
    if (item.classList[0] === "checkedBtn") {
        const task = item.parentElement;
        task.classList.toggle("completed");
    }
}

