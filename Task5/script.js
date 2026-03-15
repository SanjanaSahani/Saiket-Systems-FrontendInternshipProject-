function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
<span>${taskText}</span>

<div class="actions">
<button class="complete" onclick="toggleComplete(this)">✓</button>
<button class="edit" onclick="editTask(this)">Edit</button>
<button class="delete" onclick="deleteTask(this)">Delete</button>
</div>
`;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}

function deleteTask(btn) {
    btn.parentElement.parentElement.remove();
}

function editTask(btn) {

    const taskSpan = btn.parentElement.previousElementSibling;

    const newTask = prompt("Edit task:", taskSpan.innerText);

    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.innerText = newTask;
    }

}

function toggleComplete(btn) {

    const taskSpan = btn.parentElement.previousElementSibling;

    taskSpan.classList.toggle("completed");

}
