let counterNum = 0;
const counterValue = document.getElementById("value");
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
const resetBtn = document.querySelector(".reset");

document.body.addEventListener("click", (e) => {
  switch (e.target.classList[1]) {
    case "increase":
      counterNum++;
      counterValue.style.color = "green";
      break;
    case "decrease":
      counterNum = counterNum - 1;
      counterValue.style.color = "red";
      break;
    case "reset":
      counterNum = 0;
      counterValue.style.color = "#102A42";
    default:
      break;
  }
  counterValue.textContent = counterNum;
});
