/* ==========  CRIANDO OS getElementById =====================*/

const table = document.getElementById('table-body');
const loadingMessage = document.getElementById('loading-message');
const countTasks = document.getElementById('count-tasks');


/* ================= CRIANDO AS FUÇÕES =====================*/



function updateCountTasks(){ // conta as tarefas em numeros
    const allTasks = getTasks();
countTasks.innerHTML = allTasks.length;
}

function fillTable(){// descrição caso não tenha tarefas criadas

    const allTasks = getTasks();
allTasks.forEach(addTask);


    if(allTasks.length === 0){
        loadingMessage.innerHTML = "Você não possui tarefas disponiveis!";

    }else{
        loadingMessage.innerHTML = "";

    }
    updateCountTasks();
}

function addTask(task){ // adiciona a task criada no body com dados funcção innerhtmltasks tr = linha
 const tr = document.createElement('tr');
    tr.innerHTML = innerHTMLTasks(task);

    table.appendChild(tr);

}


function innerHTMLTasks(task){

    const html=`
    <td>${task.description}</td>
    <td>${task.date}</td>
    <td> 
    <a href="#" onclick="removeTask(${task.id})"> 
    <i class="fa-solid fa-trash"></i>
    </a>
    </td> 
    `;
    return html;

}

function removeTask(id){

    const allTasks = getTasks(); // pega todas as tarefas
    const tasksFiltered = allTasks.filter(task => task.id !== id);// todas as tarefas

   setTasks(tasksFiltered);
    reload();
  
}

function reload(){
    table.innerHTML= '';
    fillTable();


}

