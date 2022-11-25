const questionE1 = document.getElementById("question");
const scoreE1 = document.getElementById("score");
const inputE1 = document.getElementById("input");
const formE1 = document.getElementById("form");
let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);
let score = localStorage.getItem("score");
if (!score) {
  score = 0;
}
scoreE1.innerHTML = `Score: ${score}`;
questionE1.innerHTML = `What is ${num1} multiply by ${num2}?`;
let correctAns = num1 * num2;
formE1.addEventListener("submit", () => {
  let userAns;

  userAns = +inputE1.value;
  if (userAns == correctAns) {
    score++;
    updateLocalStorage();
    console.log(score);
  } else {
    score--;
    updateLocalStorage();
  }
});
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score));
}
