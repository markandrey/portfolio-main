const timerBlock = document.querySelector(".timer__time");
const deadline = '31 march 2026'

let interval

const updateClock = () => {
  const date = new Date().getTime();
  const dateDeadline = new Date(deadline).getTime();
  const timeRemining = (dateDeadline - date) / 1000;


  const days = Math.floor(timeRemining / 60 / 60 / 24);
  const hours = String(Math.floor((timeRemining / 60 / 60) % 24)).padStart(2, "0");
  const minutes = String(Math.floor((timeRemining / 60) % 60)).padStart(2, "0");
  const seconds = String(Math.floor(timeRemining % 60)).padStart(2, "0");

  timerBlock.textContent = `${days}:${hours}:${minutes}:${seconds}`;

  if (timeRemining <= 0) {
    clearInterval(interval);
    timerBlock.textContent = `00:00:00`;
  }
};

updateClock();

interval = setInterval(updateClock, 500);
