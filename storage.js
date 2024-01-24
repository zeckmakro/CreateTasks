function getTasks(){
 return JSON.parse(localStorage.getItem('@PROJETO2')) || []; //
}

function setTasks(tasks) {
  localStorage.setItem('@PROJETO2', JSON.stringify(tasks));

}