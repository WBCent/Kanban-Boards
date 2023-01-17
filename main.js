document.addEventListener('DOMContentLoaded', (event) =>{
    var button = document.getElementById("addition");

    button.addEventListener("click", kanbanAdd);

    function kanbanAdd() {
        document.getElementById("target").innerHTML += "<div class='kanbanBoardCard'><h3 contenteditable='true'>SomeTitle</h3><button id='taskAddition' class='taskAdd'>&#43;</button><div id='task' class='task'><br><br></div></div>";
        let number = document.getElementsByClassName('taskAdd');
        console.log(number)
        for (let i=0; i< number.length; i++) {
            number[i].addEventListener("click", tasks);
            let card = document.getElementsByClassName('task');
            function tasks() {
                card[i].innerHTML += "<div class='taskCard' draggable='true'><p contenteditable='true' class='taskText'></p><span class='material-symbols-outlined'>drag_indicator</span></div>";
            }
        }

        function handleDragStart(e) {
            this.style.opacity = '0.4';
            dragSrcEl = this;

            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', this.innerHTML);
          }
        
          function handleDragEnd(e) {
            this.style.opacity = '1';
        
            items.forEach(function (item) {
              item.classList.remove('over');
            });
          }
        
          function handleDragOver(e) {
            e.preventDefault();
            return false;
          }
        
          function handleDragEnter(e) {
            this.classList.add('over');
          }
        
          function handleDragLeave(e) {
            this.classList.remove('over');
          }
          function handleDrop(e) {
            e.stopPropagation();
            if (dragSrcEl !== this) {
                dragSrcEl.innerHTML = this.innerHTML;
                this.innerHTML = e.dataTransfer.getData('text/html');
              }
            
              return false;
          }
        
          let items = document.querySelectorAll('.kanbanBoardCard .task');
          items.forEach(function(item) {
            item.addEventListener('dragstart', handleDragStart);
            item.addEventListener('dragover', handleDragOver);
            item.addEventListener('dragenter', handleDragEnter);
            item.addEventListener('dragleave', handleDragLeave);
            item.addEventListener('dragend', handleDragEnd);
            item.addEventListener('drop', handleDrop);
          });
    }
 })