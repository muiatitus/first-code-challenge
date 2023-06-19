
function calculateGrade() {
      const marks = parseInt(document.getElementById("marks").value);

      if (marks > 79) {
       document.getElementById("result").textContent = "Grade: A";
      } else if (marks > 59) {
        document.getElementById("result").textContent = "Grade: B";
      } else if (marks > 49) {
        document.getElementById("result").textContent = "Grade: C";
      } else if (marks > 39) {
        document.getElementById("result").textContent = "Grade: D";
      } else {
        document.getElementById("result").textContent = "Grade: E";
      }
    }
