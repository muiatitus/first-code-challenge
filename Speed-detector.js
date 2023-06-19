function checkSpeed() {
    const speedInput = document.getElementById("speed");
    const speed = parseInt(speedInput.value);
    let demeritPoints = 0;
  
    if (speed < 70) {
      document.getElementById("result").textContent = "OK";
    } else {
      demeritPoints = Math.floor((speed - 70) / 5);
  
      if (demeritPoints > 12) {
        document.getElementById("result").textContent = "License suspended";
      } else {
        document.getElementById("result").textContent = "Points: " + demeritPoints;
      }
    }
  }