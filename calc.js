const display = document.querySelector(".displayContainer");
const numbersContainer = document.querySelector(".numbersContainer");
const addBtn = document.querySelector(".add");
const subtractBtn = document.querySelector(".subtract");
const multiplyBtn = document.querySelector(".multiply");
const divideBtn = document.querySelector(".divide");
const equalBtn = document.querySelector(".equal");
const clearBtn = document.querySelector(".clear");
const decimalsBtn = document.querySelector(".decimals");
const backspaceBtn = document.querySelector(".backspace");
const percentageBtn = document.querySelector(".percentage");

let firstNumbertext = "";
let secondNumbertext = "";
let operator = "";
let firstNumber = Number(firstNumbertext);
let secondNumber = Number(secondNumbertext);
let isclicked = false;

/*creating functions with the basic math operators*/
const add = (firstNumber, secondNumber) => {
  let result = firstNumber + secondNumber;
  return result;
};
const subtract = (firstNumber, secondNumber) => {
  let result = firstNumber - secondNumber;
  return result;
};
const multiply = (firstNumber, secondNumber) => {
  let result = firstNumber * secondNumber;
  return result;
};
const divide = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    display.textContent = "ERROR: Division by 0";
  } else {
    let result = firstNumber / secondNumber;
    return result;
  }
};

const percentage = (firstNumber) => {
  let result = firstNumber / 100;
  return result;
};

/*takes an operator and 2 numbers and calls the math functions above*/
const operate = (firstNumber, secondNumber, operator) => {
  let result;
  if (operator === "+") {
    result = add(firstNumber, secondNumber);
  } else if (operator === "-") {
    subtract(firstNumber, secondNumber);
    result = subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    multiply(firstNumber, secondNumber);
    result = multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    divide(firstNumber, secondNumber);
    result = divide(firstNumber, secondNumber);
  } else if (operator === "%") {
    percentage(firstNumber);
  } else {
    return "Invalid Operator";
  }
  return result;
};

/*creates buttons for numbers*/
const numberButtons = () => {
  for (let i = 9; i >= 0; i--) {
    const numberBtn = document.createElement("button");
    numberBtn.classList.add("numberBtn");
    numbersContainer.appendChild(numberBtn);
    numberBtn.textContent = i;

    /*when a number button is clicked, display its value*/
    numberBtn.addEventListener("click", () => {
      display.textContent += i;
    });
  }
};

numberButtons();

/*updates the display*/
const updateFields = (operator) => {
  const arrayResult = display.textContent.split(operator);

  if (arrayResult[1] !== "" && isclicked === true) {
    const result = operate(
      Number(arrayResult[0]),
      Number(arrayResult[1]),
      operator
    );
    display.textContent = String(result);
    firstNumber = result;
    secondNumber = 0;
  } else if (arrayResult[1] !== "") {
    const result = operate(
      Number(arrayResult[0]),
      Number(arrayResult[1]),
      operator
    );
    display.textContent = String(result);
    firstNumber = result;
    secondNumber = 0;
  } else if (operator === "%" && isclicked === true) {
    const result = percentage(Number(arrayResult[0]));
    display.textContent = String(result);
  } else {
    return;
  }
};

/*display of calculator*/
const calcDisplay = () => {
  addBtn.addEventListener("click", () => {
    display.textContent += "+";
    operator = "+";
    updateFields(operator);
  });

  subtractBtn.addEventListener("click", () => {
    display.textContent += "-";
    operator = "-";
    updateFields(operator);
  });

  multiplyBtn.addEventListener("click", () => {
    display.textContent += "*";
    operator = "*";
    updateFields(operator);
  });

  divideBtn.addEventListener("click", () => {
    display.textContent += "/";
    operator = "/";
    updateFields(operator);
  });

  percentageBtn.addEventListener("click", () => {
    display.textContent += "%";
    operator = "%";
    updateFields(operator);
  });

  equalBtn.addEventListener("click", () => {
    isclicked = true;
    updateFields(operator);
  });

  clearBtn.addEventListener("click", () => {
    display.textContent = "";
    decimalsBtn.disabled = false;
  });

  decimalsBtn.addEventListener("click", () => {
    display.textContent += ".";
    document.querySelector(".decimals").disabled = true;
  });

  backspaceBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
  });
};

calcDisplay();
