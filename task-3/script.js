const header = document.getElementById("header");
const changeText = document.getElementById("changeText");
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const reset = document.querySelector(".reset");
const displayCount = document.querySelector(".count");

let count = 0;
changeText.addEventListener("click", () => {
  header.textContent = "I am the header";
});

addition.addEventListener("click", () => {
  count++;
  displayCount.textContent = count;
});

subtraction.addEventListener("click", () => {
  count--;
  displayCount.textContent = count;
});

reset.addEventListener("click", () => {
  count = 0;
  displayCount.textContent = count;
});
