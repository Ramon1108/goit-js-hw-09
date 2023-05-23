const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
startBtn.addEventListener('click', startChangeColor);
stopBtn.addEventListener('click', stopChangeColor);
let intervalId = null;
const DELAY_TIME = 1000;

function startChangeColor() {
  intervalId = setInterval(changeBackgroundColor, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
}

function stopChangeColor() {
  clearInterval(intervalId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function changeBackgroundColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
