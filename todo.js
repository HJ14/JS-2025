const toDoForm = document.querySelector('#todo-form');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');
let toDos = [];

const TODOS_KEY = 'todos';

function saveToDo() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  saveToDo();
}

function paintToDo(newToDoObj) {
  const li = document.createElement('li');
  li.id = newToDoObj.id;
  const span = document.createElement('span');
  const button = document.createElement('button');
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newToDoObj.text;
  button.innerText = '❌';
  button.addEventListener('click', deleteToDo);
  toDoList.appendChild(li);
}

function submitToDo(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = '';
  const newToDoObj = {
    id: Date.now(),
    text: newToDo,
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDo();
}

toDoForm.addEventListener('submit', submitToDo);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
