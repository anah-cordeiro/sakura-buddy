let timer;
let timeLeft = 25 * 60;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

function startTimer() {
  timer = setInterval(updateTimer, 1000);
  startBtn.disabled = true;
}

function stopTimer() {
  clearInterval(timer);
  startBtn.disabled = false;
}

function resetTimer() {
  stopTimer();
  timeLeft = 25 * 60;
  updateTimerDisplay();
}

function updateTimer() {
  if (timeLeft > 0) {
    timeLeft--;
    updateTimerDisplay();
    localStorage.setItem('timeLeft', timeLeft);
  } else {
    clearInterval(timer);
    alert('Pomodoro session finished!🌸 Take a break. Maybe eat a snack! 🍒');
    localStorage.removeItem('timeLeft');
  }
}

function updateTimerDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const display = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timerDisplay.textContent = display;
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateTimerDisplay(); //To display initial time