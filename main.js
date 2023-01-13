let button = document.getElementById("addition");
let taskAdd = button.getElementsByClassName("kanbanBoardCard").getElementById('taskAddition');

button.addEventListener("click", kanbanAdd);
taskAdd = document.attachEvent("click", task)

function kanbanAdd() {
    document.getElementById("target").innerHTML += "<div class='kanbanBoardCard'><h3 contenteditable='true'>SomeTitle</h3><button id='taskAddition' class='taskAdd'>&#43;</button><div class='tasks'></div></div>";
}


function task() {
    taskAdd.innerHTML += "<div class='taskCard'><p contenteditable='true'></p></div>";
}
    


    
    


    


