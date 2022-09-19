const body = document.querySelector("body");
const button = document.querySelector(".change-color");
const span = document.querySelector(".color");

button.addEventListener("click", changeColor);

function changeColor(event) {
  body.style.backgroundColor = getRandomHexColor();
  span.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
