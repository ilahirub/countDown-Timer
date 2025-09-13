const startCountDown = () => {
  const timeInput = document.getElementById("countDownTxt").value;
  const timerDisplay = document.getElementById("timer");
  const timeRemaining = parseInt(timeInput);
  // console.log(typeof timeRemaining);

  if (isNaN(timeRemaining) || timeRemaining <= 0) {
    timerDisplay.textContent = "plz enter valid number";
    return;
  }
  //clear previouc count down text
  timerDisplay.textContent = `time left ${timeRemaining} seconds`;

  for (let i = timeRemaining; i >= 0; i--) {
    (function (count) {
      setTimeout(() => {
        if (count > 0) {
          timerDisplay.textContent = `time left: ${count} seconds`;
        } else {
          timerDisplay.textContent = `times up`;
        }
      }, (timeRemaining - count) * 1000);
    })(i);
  }
};

document.getElementById("startBtn").addEventListener("click", startCountDown);
