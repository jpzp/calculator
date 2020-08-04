//Event Listeners
const btn0 = document.querySelector('#b0');
btn0.onclick = () => numClick(0);
                                                                          
const btn1 = document.querySelector('#b1');
btn1.onclick = () => numClick(1);
                                                                          
const btn2 = document.querySelector('#b2');
btn2.onclick = () => numClick(2);
                                                                          
const btn3 = document.querySelector('#b3');
btn3.onclick = () => numClick(3);
                                                                          
const btn4 = document.querySelector('#b4');
btn4.onclick = () => numClick(4);
                                                                          
const btn5 = document.querySelector('#b5');
btn5.onclick = () => numClick(5);
                                                                          
const btn6 = document.querySelector('#b6');
btn6.onclick = () => numClick(6);
                                                                          
const btn7 = document.querySelector('#b7');
btn7.onclick = () => numClick(7);
                                                                          
const btn8 = document.querySelector('#b8');
btn8.onclick = () => numClick(8);
                                                                          
const btn9 = document.querySelector('#b9');
btn9.onclick = () => numClick(9);
                                                                          
const equals = document.querySelector('#equals');
equals.onclick = () => opComp();
                                                                          
const bAdd = document.querySelector('#add');
bAdd.onclick = () => opClick('+');
                                                                          
const bDiv = document.querySelector('#divide');
bDiv.onclick = () => opClick('/');
                                                                          
const bSub =  document.querySelector('#subtract');
bSub.onclick = () => opClick('-');
                                                                          
const bMult =  document.querySelector('#multiply');
bMult.onclick = () => opClick('*');
                                                                          
                                                                          
//Variables
let displayValue = 0;
const display = document.querySelector('#displayTxt');
var inputArr = [];
let md_count = 0
let output = false;
                                                                          
                                                                          
//Clear
const btnClear = document.querySelector('#bClear');
btnClear.addEventListener('click', () => {
displayValue = 0;
display.innerHTML = "";
inputArr = [];
});
                                                                          
//Number Click Funct
function numClick(num){
    if(output == true){
        displayValue = 0;
        display.innerHTML = "";
        inputArr = [];
        output = false;
    }
    if(displayValue == 0){
        displayValue = num;
    }
    else{
        displayValue *= 10;
        displayValue += num;
    }
    if(inputArr.length > 1){
        display.innerHTML += num;
    }
    else{
        display.innerHTML = displayValue;
    }
}
                                                                          
//Operator Click Funct
function opClick(op){
    output = false;
    if(op == '/' || op == '*'){
        md_count += 1;
    }
    if((typeof inputArr[inputArr.length -1]) != "number"){
        inputArr.push(displayValue);
    }
    inputArr.push(op);
    if( op == '*'){
        display.innerHTML += " " + 'x' + " ";    
    }
    else
    {
        display.innerHTML += " " + op + " ";
    }
    displayValue = 0;
}
                                                                          
                                                                          
function opComp(){
    inputArr.push(displayValue);
    console.log(inputArr);
    if(md_count > 0){
        //loop with MD search
        let i = 1;
        while(md_count > 0){
            if(inputArr[i] == '*' || inputArr[i] == '/'){
                c = operate(inputArr[i], inputArr[i-1], inputArr[i+1]);
                console.log(c);
                inputArr[i-1] = c;
                console.log(inputArr);
                inputArr.splice(i,2);
                console.log(inputArr);
                md_count-=1;
            }
            else{
                i+=2;
            }
        
        } 
    }
    //L2R loop
    let i = 0;
    while(inputArr.length > 1){
        c = operate(inputArr[i+1], inputArr[i], inputArr[i+2]);
        console.log(c);
        inputArr[i] = c;
        inputArr.splice(i+1,2);
        console.log(inputArr);
    }
    num = inputArr[0]
    display.innerHTML = Math.round((num + Number.EPSILON) * 10000) / 10000
    output = true;
}
                                                  
function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a/b;
}
                                                  
function operate(operator, a, b){
    if(operator == '+')      return add(a,b);
    else if(operator == '-') return subtract(a,b);
    else if(operator == '*') return multiply(a,b);
    else if(operator == '/') return divide(a,b);
}
