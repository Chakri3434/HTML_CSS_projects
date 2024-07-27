var tasklist=[];

function add() {
    let task=document.querySelector('.js-title');
    let description=document.querySelector('.js-description');
    // console.log(task.value);
    // console.log(description.value);
    tasklist.push({task:task.value,description:description.value});
    run();
}

function run() {
    html=''
    let output=document.querySelector('.js-grid');
    output.innerHTML=''
    for (let i=0;i<tasklist.length;i++){
        html+=`<div>${tasklist[i].task}</div>
                <div>${tasklist[i].description}</div>
                <button 
                onclick="tasklist.splice(${i},1);
                        run();" 
                class="delete-button">Delete</button>`
    }
    output.innerHTML=html;
}