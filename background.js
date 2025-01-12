const images = [
  '1.jpg',
  '2.jpg',
  '3.jpg',
];

const body = document.querySelector('body');

function paintColor() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  body.style.background = `url(${chosenImage})`;
}

paintColor();


