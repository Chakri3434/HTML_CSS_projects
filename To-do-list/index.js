let myarray=[]

function renderTodoList() {
  let s=''
  for (let i=0; i<myarray.length;i++) {
    const Object=myarray[i]
    const name=Object.name
    const date=Object.date

    const html=`<div>${name}</div>
                <div>${date}</div>
                <button class="delete-button" onclick="
                  myarray.splice(${i},1);
                  renderTodoList();
                  ">Delete</button>`
    s+=html;
  }
  document.querySelector('.task-list').innerHTML = s;
}



function addTodo() {
  let name=document.querySelector('.task-name');
  let date=document.querySelector('.task-date');
  myarray.push({name:name.value, date:date.value})
  name.value=''
  renderTodoList();
}