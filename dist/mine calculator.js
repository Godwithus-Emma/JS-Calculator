var computed = false;
function TakeValue(val) {
    var input = document.getElementById('result');
    if (computed) {
        input.value = "";
        computed = false;
    }
    input.value += val;
}
function BackSpace(del) {
    var input = document.getElementById('result');
    var b_space = input.value;
    b_space = b_space.substring(0, b_space.length - 1);
    input.value = b_space;
}
function ClearValue(clear) {
    var input = document.getElementById('result');
    input.value = clear;
}
function CalculateValue() {
    var input = document.getElementById('result');
    input.value = MyMath(input.value) + "";
}
function MyMath(equation) {
    var operator;
    var leftop = "";
    var rightop = "";
    var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var operators = ['+', '-', '/', '*', '^', '%'];
    var characters = [];
    computed = true;
    var i;
    for (i = 0; i < equation.length; i++) {
        var v = equation.charAt(i);
        if (numbers.includes(v)) {
            if (!operator) {
                leftop += v;
            }
            else {
                rightop += v;
            }
        }
        else if (operators.includes(v)) {
            operator = v;
        }
        else {
            var input = document.getElementById('result');
            input.value = "E";
            throw new Error(v + ' is invalid');
        }
    }
    var leftNumber = parseFloat(leftop);
    var rightNumber = parseFloat(rightop);
    switch (operator) {
        case '+':
            return leftNumber + rightNumber;
            break;
        case '-':
            return leftNumber - rightNumber;
            break;
        case '/':
            return leftNumber / rightNumber;
            break;
        case '*':
            return leftNumber * rightNumber;
            break;
        case '^':
            if (!rightNumber) {
                return leftNumber * leftNumber;
            }
            else {
                throw new Error('Syntax Error');
            }
            break;
        case '%':
            if (!rightNumber) {
                return leftNumber / 100;
            }
            else {
                throw new Error('Error');
            }
        default:
            throw new Error(operator + " is invalid");
    }
}
var cell = {
    row: column,
    "function": draw()
}, _a = void 0, console = _a.console, log = _a.log;
("Hello World");
