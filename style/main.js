let keypad = document.querySelector('.input-container')
let result = document.querySelector('.result-screen')

let main = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function updateDisplay() {
    let display = document.querySelector('.result-screen');
    display.value = main.displayValue;
}
  
updateDisplay();

let keys = document.querySelector('.input-container');
keys.addEventListener('click', (event) => {
let { target } = event;

if (!target.matches('button')) {
    return;
}

if (target.classList.contains('operator')) {
    console.log('operator', target.value);
    return;
}

if (target.classList.contains('decimal')) {
    console.log('decimal', target.value);
    return;
}

if (target.classList.contains('reset')) {
    console.log('clear', target.value);
    return;
}

inputDigit(target.value);
updateDisplay();
});

function inputDigit(digit) {
    let { displayValue } = '.result-screen';
    main.displayValue = displayValue === '0' ? digit : displayValue + digit;
}
  