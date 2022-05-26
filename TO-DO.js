//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

console.log('hello world!')

//event listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)
// filterTodo()

//functions
function addTodo(event) {

    //prevent form from submitting
    event.preventDefault();

    //todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create LI 
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    
    //CHECK MARK
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 
    '<img src="/todo icons/add-round-button.svg" width="12px" height="12px" class="add"/>';
    completedButton.classList.add('completed-button');
    todoDiv.appendChild(completedButton);

    //CHECK trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = 
    '<img src="/todo icons/delete.svg" width="12px" height="12px" class="delete" />';
    trashButton.classList.add('trash-button');
    todoDiv.appendChild(trashButton);

    //APPEND TODO
    todoList.appendChild(todoDiv)
    //clear todo input
    todoInput.value = '';    
}

function deleteCheck(e){
    e.stopPropagation;
    const item = e.target;
    //DELETE TODO
    if (item.classList[0] === 'trash-button'){
        const todo = item.parentElement;

        //ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }
    
    //CHECK MARK
    if (item.classList[0] === 'completed-button'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                    todo.style.color = 'green';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if (!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}