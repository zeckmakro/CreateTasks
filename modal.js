const modal = document.getElementById('modal');
const inputDescription = document.getElementById('description');
const inputDate = document.getElementById('date');
const btnCreateTask = document.getElementById('btn-create-task');
const alertElement = document.getElementById('alert');

/* ================= CRIANDO MODAL =====================*/


function createTask(e) {
e.preventDefault();                 // ========== CANCELA A ATUALIZAÇÃO DA PAGINA ===========
 if(!inputDescription.value || !inputDate.value){
    alertElement.style.display = 'block';
    closeAlert();
    return;
 }
console.log('Date: ', new Date(inputDate.value).toLocaleDateString());

 const newTask = {
    description: inputDescription.value,
    date: new Date(inputDate.value).toLocaleDateString('pt-BR',{timeZone: 'UTC'} ) ,   // padronizando o modelo de data BR
    id: Math.floor(Math.random() * 1000)   // Math.floor == arredondamento do numero
 }

 const allTasks = getTasks();

//localStorage.setItem('@PROJETO2',JSON.stringify([...allTasks,newTask]));  // banco de dados
setTasks([...allTasks,newTask]);
reload();
toggleModal();
clearFIelds();

}

function toggleModal() {
   modal.classList.toggle('modal-visible');

}
function clearFIelds(){ /* FUNÇÃO PRA LIMPAR OS CAMPOS*/
inputDate.value = '';
inputDescription.value = '';


}

function closeAlert(){

   setTimeout(() => {
      alertElement.style.display = 'none';
   }, 3000); // passar 3 seg ele fecha o chamado recebido no caso a caixa de alerta 
}

btnCreateTask.addEventListener('click',createTask); //= CRIANDO EVNTO QUE QUANDO ELE CLICAR VAI ACONTER A A FUNÇÃO CHAMADA 
