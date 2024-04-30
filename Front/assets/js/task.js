import { addTask } from "./fetch.js";

const url = new URLSearchParams(window.location.search);
const username = url.get("username");

const taskForm = document.getElementById('task-form');
taskForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    var name = document.querySelector("#username").value
    name = username;
    console.log(name);
    // Récupérer les valeurs du formulaire
    const taskName = document.getElementById('task').value;
    const taskStatus = document.getElementById('status').value;

    // Ajouter la tâche au tableau
    const tableBody = document.getElementById('task-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    cell1.textContent = taskName;
    cell2.textContent = taskStatus;

    const taskData = {
        taskName,
        name,
    }

    const response = await addTask(taskData);
    //Réinitialiser le formulaire
    //document.getElementById('task-form').reset();
});
