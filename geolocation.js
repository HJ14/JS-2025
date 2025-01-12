const geolocation = document.querySelector('#geolocation');
const API_KEY = 'f98c0ff3de4be227a56d93277dc877bb';

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const location = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      console.log(typeof weather);
      geolocation.innerText = `${location}, ${weather}, ${temp}℃`;
    });
}

function onGeoError() {
  alert('first, we need your permission about location');
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
