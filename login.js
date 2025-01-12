const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const greeting = document.querySelector('#greeting');

function handleLogin(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem('name', username);
  loginForm.classList.add('hidden');
  greeting.innerText = `Hello, ${username}!`;
}

loginForm.addEventListener('submit', handleLogin);

const savedUser = localStorage.getItem('name');

if (savedUser) {
  greeting.innerText = `Hello, ${savedUser}!`;
  loginForm.classList.add('hidden');
}
