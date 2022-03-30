const calculatorScreen = document.querySelector(".calculator-screen");
const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNum(event.target.value);
        updateScreen(currentNumber);
    });
});

let prevNumber = '';
let currentNumber = '0';
let calculationOperator = '';

const inputNum = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    }else {
    currentNumber += number;
    };
};

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    });
});

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    }
    calculationOperator = operator;
    currentNumber = '0';
};

const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen (currentNumber);
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+" : 
            result = parseFloat (prevNumber) + parseFloat (currentNumber);
            break
        case "-" : 
            result = prevNumber - currentNumber;
            break
        case "/" :
            result = prevNumber / currentNumber;
            break
        case "*" : 
            result = prevNumber * currentNumber;
            break
        default :
            return
    }
    currentNumber = result;
    calculationOperator = '';
};

const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

const clearAll = () => {
    currentNumber = '0';
    prevNumber = '';
    calculationOperator = '';
};

const decimals = document.querySelector(".decimal");

decimals.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return;
    }
    currentNumber += dot;
};
