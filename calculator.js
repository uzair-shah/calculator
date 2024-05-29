// Creating HTML for calculator buttons
const display = document.querySelector('.display');

const container = document.querySelector('.container');
let count = 0;
for (let j = 0; j < 3; j++){
    
    subContainer = document.createElement('div');
    subContainer.setAttribute('class','subcontainer');
    
    for (let i = 0; i < 3; i++){
        count+=1;
        const button = document.createElement('button');
        button.setAttribute('class','number-button');
        button.textContent = count;
        subContainer.appendChild(button);
    };
    
    container.appendChild(subContainer);

}

const operatorButtons = document.querySelectorAll('.operator-buttons');
const numberButtons = document.querySelectorAll('.number-button');



// Creating functions for basic operations
const add = function(a,b) {
    a = parseInt(a);
    b = parseInt(b);
	return a + b;
};

const subtract = function(a,b) {
    a = parseInt(a);
    b = parseInt(b);
	return a - b;
};

const multiply = function(a,b) {
    a = parseInt(a);
    b = parseInt(b);
	return a * b;
};

const divide = function(a,b) {
    a = parseInt(a);
    b = parseInt(b);
	return a / b;
};

let firstNumber = '' ;
let secondNumber = '';
let operator ;

function operate(a,operator,b){
    
    switch(operator) {
        case '+':
            return add(a,b)
            break;
        case '-':
            return subtract(a,b);
            break;
        case 'x':
            return multiply(a,b);
        case '/':
            return divide(a,b)
        default:
            return 'Please add valid operator';
      };
};

// When the user presses a number, the following code runs
numberButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", function(e){
        targetValue = e.target.textContent
        display.textContent += targetValue;
        // If the operator has been entered, the next number will be recorded as the secondNumber variable
        if (operator){
            secondNumber += targetValue;
        }
        // If operator is not entered, the number will be the firstNumber
        else{
            firstNumber += targetValue;
        }
        
    });
});


operatorButtons.forEach((button) => {
    // and for each one we add a 'click' listener
    button.addEventListener("click", function(e){
        if (!(e.target.id == 'equals' || e.target.id == 'clear')){
            operator = e.target.textContent.trim();
            display.textContent += operator;
            
        }
        
        // display.textContent = e.target.textContent;
        
    });
});

equalsButton = document.querySelector('#equals')
equalsButton.addEventListener('click', function(e){
    let answer = operate(firstNumber,operator,secondNumber);
    display.textContent = answer.toFixed(2);
    // resetting the operator 
    operator = null;
    firstNumber = answer;
    secondNumber = ''

})

clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function(e){
    display.textContent = '';
    operator = null;
    firstNumber = '';
    secondNumber = '';
});