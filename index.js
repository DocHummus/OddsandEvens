// TODO: this file! :)
const numberBank = [];
const title = document.getElementsByTagName("form");
// const numberBank = document.getElementById("numberBank");
const addBttn = document.getElementById("addBttn");
const numberInput = document.querySelector('input [name="number"]');
const addOutput = document.getElementById("addOutput");
const sortOne = document.getElementById("sortOne");
const sortAll = document.getElementById("sortAll");
const sortedNumbers = document.getElementById("sortedNumbers");
const odds = document.getElementById("odds");
const evens = document.getElementById("evens");

const form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  const addNum = input.value;
  if (!isNaN(addNum)) {
    numberBank.push(addNum);
    input.value = "";
    renderNumberBank();
  }
});

//Render the number bank
function renderNumberBank() {
  const output = document.getElementById("numberBank").querySelector("output");
  output.textContent = numberBank.join(", ");
}

//Sort 1 button click event
sortAll.addEventListener("click", () => {
  for (const num of numberBank) {
    if (num % 2 === 0) {
      evens.textContent += `${num}`;
    } else {
      odds.textContent += `${num}, `;
    }
  }
  numberBank.length = 0;
  renderNumberBank();
});
