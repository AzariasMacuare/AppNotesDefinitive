document.getElementById('formTask').addEventListener('submit', saveTask);

function saveTask(e) {

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task = {
        title, //title: title
        description, //description: description
    };

    if (localStorage.getItem('tasks') === null) {    
        let tasks = [];
        tasks.push(task);

        localStorage.setItem('tasks', JSON.stringify(tasks));
    } else {
         let tasks = JSON.parse(localStorage.getItem('tasks'));
         tasks.push(task);
         localStorage.setItem('tasks', JSON.stringify(tasks))
    }
    

    getTasks()
    document.getElementById('formTask').reset();
    e.preventDefault();
}

// Contiene el div en el que se pintan las tareas

var tasksView = document.getElementById('tasks');

///////////////////////////////////////////////

//Esta es la funcion que pinta las tareas

function getTasks() {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    
    console.log(tasks)
    tasksView.innerHTML = '';
    
    for(let i = 0; i < tasks.length; i++) {
        let title = tasks[i].title;
        let description = tasks[i].description;

        tasksView.innerHTML += `<div class="card mb-3">
          <div class="card-body">
                <p>${title} - ${description}</p>
                <a class="btn btn-danger" onclick="deleteTask('${title}')">Eliminar</a>
                <a class="btn btn-primary" onclick="editTask('${title}')">Editar</a>
            </div>  
        </div>`
    }

}

function deleteTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            tasks.splice(i, 1)
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
    getTasks()
}

var tal;

function editTask(title) {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == title) {
            let taskNow = tasks[i];
            tal = taskNow;
            document.getElementById('description').value = taskNow.description;
            document.getElementById('title').value = taskNow.title;
            document.getElementById('botonDeGuardado').style.display='none';
            document.getElementById('botonDeActualizar').style.display='block';
            //document.getElementById('botonDeActualizar').onclick='actualizar(taskNow)';
            // EN PLENO FUNCIONAMIENTO
            
            console.log(taskNow)
            let btnDescription = document.getElementById('description').value;
            
            //tasks.splice(i, 1, "")
        }
        
    }
}

//AQUI VOY...INTENTADO HABILITAR LA FUNCTION EDIT NOTE

function actualizar() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))
    for(let i = 0; i < tasks.length; i++) {
        if (tasks[i].title == tal.title) {
            console.log(tasks)            
        let title = document.getElementById('title').value;
        let description = document.getElementById('description').value;

        const tareaParaActualizar = {
            title, //title: title
            description, //description: description
        };

        
                tasks.splice(i, 1, tareaParaActualizar);
                localStorage.setItem('tasks', JSON.stringify(tasks));
                    getTasks();
                    //tasks.splice(i, 1)
                console.log(tasks)
                document.getElementById('formTask').reset();
        }
    
}
}
getTasks();

// editTask()

document.getElementById('title');