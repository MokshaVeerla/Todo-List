// Select elements
const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Add event listener to the 'Add Task' button
addBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
  // Get input value
  const taskText = todoInput.value;

  // Check if input is not empty
  if (taskText.trim() !== '') {
    // Create a new list item
    const li = document.createElement('li');
    
    // Add task text to the list item
    li.textContent = taskText;
    
    // Create a delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    // Append the delete button to the list item
    li.appendChild(deleteBtn);
    
    // Append the list item to the todo list
    todoList.appendChild(li);
    
    // Clear the input field
    todoInput.value = '';
    
    // Add event listener to the delete button to remove task
    deleteBtn.addEventListener('click', () => {
      todoList.removeChild(li);
    });
  }
}
