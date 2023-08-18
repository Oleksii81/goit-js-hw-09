import { getRandomHexColor } from './randomHexColor.js';

document.body.style.backgroundColor = getRandomHexColor();

const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
let intervalId;

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    stopButton.disabled = false;

    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
})

stopButton.addEventListener('click', () => {
    clearInterval(intervalId);
    startButton.disabled = false;
    stopButton.disabled = true;
})
