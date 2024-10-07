
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

addBtn.addEventListener('click', addTask);
function addTask() {
  const taskText = todoInput.value;
  if (taskText.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = taskText;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
    todoInput.value = '';
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(li);
    });
  }
}
