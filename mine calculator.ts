let computed:boolean= false;
function TakeValue(val: string) {
    const input:HTMLInputElement = <HTMLInputElement>document.getElementById('result');
    if (computed) {
        input.value="";
        computed = false;
    }
    input.value += val;
}

function BackSpace(del) {
    const input:HTMLInputElement = <HTMLInputElement>document.getElementById('result');
    let b_space = input.value;
    b_space = b_space.substring(0, b_space.length-1);
    input.value = b_space;
}

function ClearValue(clear) {
    const input:HTMLInputElement = <HTMLInputElement>document.getElementById('result');
    input.value = clear;

}
function CalculateValue() {
    const input:HTMLInputElement = <HTMLInputElement>document.getElementById('result');
    input.value = MyMath(input.value) + "";  
}

function MyMath(equation: string): number{
    let operator: string;
    let leftop: string="";
    let rightop: string="";
    const numbers: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const operators: string[] = ['+', '-', '/', '*', '^', '%']
    let characters: string [] = [];
    computed = true;
    let i: number;
    for (i=0; i < equation.length; i++){
        const v = equation.charAt(i);
        if(numbers.includes(v)){
            if (!operator){
                leftop += v;
            }
            else {
                rightop += v;
            }
        }else if(operators.includes(v)){
            operator = v;
        }else{
            const input:HTMLInputElement = <HTMLInputElement>document.getElementById('result');
                 input.value = "E";
            throw new Error(v + ' is invalid');
        }
    }
    let leftNumber: number = parseFloat(leftop);
    let rightNumber: number = parseFloat(rightop);
    switch (operator){
        case '+' :
            return leftNumber + rightNumber;
        break;
        case '-' :
            return leftNumber - rightNumber;
        break;
        case '/' :
            return leftNumber / rightNumber;
        break;
        case '*' :
            return leftNumber * rightNumber;
        break;
        case '^' :
            if (!rightNumber){
                return leftNumber * leftNumber;
            }
            else {
                throw new Error('Syntax Error');
            }
        break;
        case '%' :
            if (!rightNumber){
                return leftNumber/100;
            }
            else {
                throw new Error('Error') 
            }
            
        default:
            throw new Error(operator + " is invalid");
    }
}



