let enterTask = document.querySelector('.enterTask');
let addTask = document.querySelector('.addTask');
let resetTasks = document.querySelector('.resetTasks');
let tasks = document.querySelector('.tasks');
let form = document.querySelector("form");
let taskWrite = document.querySelector('.task');
// let 

form.addEventListener('submit', (e) => {
    e.preventDefault();
})




localStorage.setItem("tasks", "task");
addTask.addEventListener('click', () => {
    let task = document.createElement("p");
    task.classList.add('task');
    task.innerText = enterTask.value;
    tasks.appendChild(task);
    enterTask.value = '';

    task.addEventListener('click', () => {
        if(task.classList.contains('finished')){
            task.classList.remove('finished');
        } else {
            task.classList.add('finished');
        }
    })
});



resetTasks.addEventListener('click', () => { // suprimer les taches
    let taskWrite = document.querySelectorAll('.task');
    for (let i = 0; i < taskWrite.length; i++) {
        taskWrite[i].remove();
    }
});
