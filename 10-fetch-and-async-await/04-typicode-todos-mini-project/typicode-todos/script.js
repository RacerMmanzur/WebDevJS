const apiURL = 'https://jsonplaceholder.typicode.com/todos';

const getTodos = () => {
  fetch(apiURL + '?_limit=5')
    .then((res) => res.json())
    .then((data) => {
      data.forEach((todo) => addTodoToDOM(todo));
    });
};

const addTodoToDOM = (todo) => {
  const div = document.createElement('div');
  div.appendChild(document.createTextNode(todo.title));
  div.setAttribute('data-id', todo.id);

  if (todo.completed) {
    div.classList.add('done');
  }

  div.addEventListener('click', () => markAsCompleted(todo.id));

  div.addEventListener('dblclick', () => deleteFinishedTodoElement(todo.id));

  document.getElementById('todo-list').appendChild(div);
};

const createTodo = (e) => {
  e.preventDefault();

  const newTodo = {
    title: e.target.firstElementChild.value,
    completed: false,
  };

  fetch(apiURL, {
    method: 'POST',
    body: JSON.stringify(newTodo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .then((data) => addTodoToDOM(data));

  e.target.firstElementChild.value = '';
};

const markAsCompleted = (todoId) => {
  const todoElement = document.querySelector(`[data-id ='${todoId}']`);
  todoElement.classList.toggle('done');
};

const deleteFinishedTodoElement = (todoId) => {
  const todoElement = document.querySelector(`[data-id='${todoId}']`);
  if (todoElement.classList.contains('done')) {
    todoElement.remove();
  }
};

const init = () => {
  document.addEventListener('DOMContentLoaded', getTodos);
  document.querySelector('#todo-form').addEventListener('submit', createTodo);
};

init();
