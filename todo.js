let tasks =[];
//getting html elements based on their ID's
const tasklist = document.getElementById('task-list');
const addTaskInput = document.getElementById('input-task');
const taskCOunter = document.getElementById('task-counter');
const addbutton = document.getElementById('add-button');

//This function is used to add tasks to browser page
function addTaskToDOM(task){
    const li = document.createElement('li');

    /*Creating List element to whiich we add task name, 
    checkbox to know whether task is completed and delete option*/
    li.innerHTML=`
    <div>
    <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
    <label for="${task.id}">${task.title}</label>
    </div>
    <i class="delete fa-solid fa-trash" data-id="${task.id}"></i>
    `;
    tasklist.append(li);
}

//This function calls the addTaskToDOM function by passing each tak details as argument
function renderList(){
    tasklist.innerHTML='';
    for(let i=0;i<tasks.length;i++){
        addTaskToDOM(tasks[i]);
    }
    taskCOunter.innerHTML=tasks.length;
};
//This function will add each task to the tasks list
function addTask(task){
    if(task){
        tasks.push(task);
        renderList();
        return;
    }
}

//This function is used to delete task and it will be trggered when users clicks on delee button
function deleteTask(taskId){
    const newTasks = tasks.filter(function(task){
        return task.id != Number(taskId);
    })
    tasks=newTasks;
    renderList();
}

//We can toggle the completed status of task using this function
function toggleTask(taskId){
    const toggleTasks= tasks.filter(function(task){
        return task.id==Number(taskId)
    });
    if(toggleTasks.length>0){
        const currentTask = toggleTasks[0];
        currentTask.completed=!currentTask.completed;
        renderList();
        if(document.getElementById('uncompleted').style.color=='black'){
            renderUncompleteList();
        }
        else if(document.getElementById('completed').style.color=='black'){
            renderCompleteList();
        }
        return;
    }
}

/*This function will hide the add button when there is no content in input section 
and will dislay it only when there is some data*/
function typing(){
    if(addTaskInput.value!=""){
        addbutton.classList.replace('add-btn','add-button-active');
    }else{
        addbutton.classList.replace('add-button-active','add-btn');
    }
}