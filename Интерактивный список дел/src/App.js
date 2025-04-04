document.getElementById("taskInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") return;

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        li.classList.toggle("completed");
    });

    let taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "×";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = function () {
        taskList.removeChild(li);
    };

    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = "";
}
