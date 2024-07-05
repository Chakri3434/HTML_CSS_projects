let myarray=JSON.parse(localStorage.getItem('myarray')) || [];

renderTOdoList();

function renderTOdoList() {
  let todoListHTML=''
  for (let i=0;i<myarray.length;i++) {
    let currobject=myarray[i];
    let name = currobject.name;
    let dueDate = currobject.dueDate;
    let html=`
      <div>${name}</div>
      <div>${dueDate} </div>
      <button class="del-button" onclick="myarray.splice(${i},1);
      renderTOdoList();
      savetoStorage();">Delete</button>`;
    todoListHTML+=html
  }
  document.querySelector('.text').innerHTML=todoListHTML

}

document.querySelector('.add-button')
  .addEventListener('click',()=>{
    addtask();
  })

function addtask() {
  let c=document.querySelector('.task');
  let date=document.querySelector('.task-date');

  myarray.push({name : c.value, dueDate : date.value});
  console.log(myarray);
  c.value=''; 
  date.value='';
  renderTOdoList();
  savetoStorage();
}

function addTaskEnter (event) {
  if (event.key==='Enter') {
    addtask();
  }
}

function savetoStorage() {
  localStorage.setItem('myarray',JSON.stringify(myarray));
}