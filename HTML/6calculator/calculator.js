let currentInput = "";
let calculation = "";

function appendToDisplay(value) {
  currentInput += value;
  document.getElementById("display").value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  document.getElementById("display").value = currentInput;
}

function calculate() {
  try {
    const result = eval(currentInput);
    document.getElementById("display").value = result;
    currentInput = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
    currentInput = "";
  }
}
