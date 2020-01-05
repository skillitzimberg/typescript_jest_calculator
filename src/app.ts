function sum(): void {
  currentResult = currentResult + parseInt(userInput.value);
  console.log(result.innerHTML.length);
  console.log(result.innerHTML);
  if (result.innerHTML.length === 0) {
    outputResult(currentResult, `${userInput.value}`);
    console.log(result.innerHTML.length);
  } else {
    outputResult(currentResult, `${result.innerHTML} + ${userInput.value}`);
  }
}

function diff(): void {
  currentResult = currentResult - parseInt(userInput.value);
  outputResult(currentResult, ``);
}

const product = (factor1: number, factor2: number) => factor1 * factor2;

const quotient = (dividend: number, divisor: number) => dividend / divisor;

let currentExpression: string = '';
let currentResult: number = 0;

btnPlus.addEventListener('click', sum);
btnMinus.addEventListener('click', diff);
