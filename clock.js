const clock = document.querySelector('#clock');

function getClock() {
  const today = new Date();
  const hour = String(today.getHours()).padStart(2, '0');
  const minute = String(today.getMinutes()).padStart(2, '0');
  const second = String(today.getSeconds()).padStart(2, '0');
  clock.innerText = `${hour}:${minute}:${second}`;
}

getClock();
setInterval(getClock, 1000);
