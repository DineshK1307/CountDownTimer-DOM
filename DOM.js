  const timeDisplay = document.getElementById('time');
  let timeLeft = 600; // 10 minutes in seconds
  let timer;

  function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    // Add leading zero if less than 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    timeDisplay.textContent = minutes + ':' + seconds;
  }

  function startTimer() {
    if (!timer) {
      timer = setInterval(function() {
        if (timeLeft <= 0) {
          clearInterval(timer);
          timeDisplay.textContent = '00:00';
        } else {
          updateTimer();
          timeLeft--;
        }
      }, 1000); // Update every second
    }
  }

  function stopTimer() {
    clearInterval(timer);
    timer = null;
  }