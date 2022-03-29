let task = document.getElementById('do')
let todoList = document.getElementsByTagName('ul')[0]
let button = document.querySelector('input[type="submit"]')
let arrayTasks = []

reloadTasks()


function showTask() {
    let newLi = ''
    arrayTasks.forEach((task, index) => {

        newLi += `
        <li class=" ${task.completed == true ? 'completed' : ''}">
            <button class="rocket" onclick="completeTask(${index})"><i class="fa-solid fa-rocket"></i></button>

            <p class="${task.completed == true ? 'completed' : ''}">${task.task}</p>

            <button class="trash" onclick="removeTask(${index})"><i class="fa-solid fa-trash"></i></button>
        </li>
        `

    })
    todoList.innerHTML = newLi
    localStorage.setItem('list', JSON.stringify(arrayTasks))
}

function add() {
    if (task.value != '') {
        arrayTasks.push({
            task: task.value,
            completed: false
        })

        showTask()

    } else {
        alert('Escreva a tarefa!')
    }

}

function removeTask(index) {
    arrayTasks.splice(index, 1)

    showTask()
}

function completeTask(index) {
    arrayTasks[index].completed = !arrayTasks[index].completed
    showTask()
}

function reloadTasks() {
    let myTasks = localStorage.getItem('list')
    
    arrayTasks = JSON.parse(myTasks)

    showTask()
}

button.addEventListener('click', add)