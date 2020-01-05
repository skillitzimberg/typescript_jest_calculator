const userInput = document.getElementById('user-input') as HTMLInputElement;

const btnPlus = document.getElementById('btn-plus') as HTMLButtonElement;
const btnMinus = document.getElementById('btn-minus') as HTMLButtonElement;
const btnMultiply = document.getElementById(
  'btn-multiply',
) as HTMLButtonElement;
const btnDivide = document.getElementById('btn-divide') as HTMLButtonElement;

const one: HTMLElement = document.getElementById('1') as HTMLElement;
const two: HTMLElement = document.getElementById('2') as HTMLElement;
const three: HTMLElement = document.getElementById('3') as HTMLElement;
const four: HTMLElement = document.getElementById('4') as HTMLElement;
const five: HTMLElement = document.getElementById('5') as HTMLElement;
const six: HTMLElement = document.getElementById('6') as HTMLElement;
const seven: HTMLElement = document.getElementById('7') as HTMLElement;
const eight: HTMLElement = document.getElementById('8') as HTMLElement;
const nine: HTMLElement = document.getElementById('9') as HTMLElement;
const zero: HTMLElement = document.getElementById('0') as HTMLElement;

const calculation: HTMLElement = document.getElementById(
  'calculation',
) as HTMLElement;
const result = document.getElementById('result') as HTMLParagraphElement;

function outputResult(calcResult: number, text: string): void {
  if (calculation) calculation.textContent = text;
  if (result) result.textContent = calcResult.toString();
}
