import { register_user, addTask } from "./fetch.js";

// const form_register = document.getElementById('register');

// form_register.addEventListener('submit', async (e) => {
//     e.preventDefault();
    
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('pass').value;

//     const userData = {
//         username,
//         password,
//     };
//     const response = await register_user(userData);
//     window.location.href = './task.html';
// });

document.getElementById('task-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Empêcher l'envoi par défaut du formulaire

    // Récupérer les valeurs du formulaire
    var taskName = document.getElementById('task').value;
    var taskStatus = document.getElementById('status').value;

    // Ajouter la tâche au tableau
    var tableBody = document.getElementById('task-table').getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.textContent = taskName;
    cell2.textContent = taskStatus;

    const taskData = {
        taskName,
        taskStatus,
    }

    const response = await addTask(taskData);
    // Réinitialiser le formulaire
    // document.getElementById('task-form').reset();
});