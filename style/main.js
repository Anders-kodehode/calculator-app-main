let calculator = document.querySelector('.calculator')
const resultContainer = document.querySelector('.result-container')

let main = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

let keys = document.querySelector('.input-container');
keys.addEventListener('click', (event) => {
let target = event.target;

if (!target.matches('button')) {
    return;
}

if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
}

if (target.classList.contains('decimal')) {
    inputDecimal(target.value);
    updateDisplay();
        return;
}

if (target.classList.contains('reset')) {
    console.log('clear', target.value);
    return;
}

function updateDisplay() {
    let display = document.querySelector('.result-screen');
    display.value = main.displayValue;
}

updateDisplay();

inputDigit(target.value);
updateDisplay();
});

let num1 = 0

function inputDigit(digit) {
    if (num1 == 0) {
        num1 = digit
    } else {
        num1 += digit
    }
    main.displayValue = num1
}

function inputDecimal(dot) {
    console.log(calculator.displayValue)
    console.log(dot)
    if (calculator.displayValue.includes(dot)) {
      calculator.displayValue += dot;
    }
}
