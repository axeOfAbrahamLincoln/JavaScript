/*
*/
const {nextLine} = require("@learnly/simple-reader");

console.log("Which number you want to know in a Fibonacci Sequence? : ");
const x = Number(nextLine());

let fibArr = [];
let fibN = 0;

function fibNumberAndSequence(num,arr) { // this function is counting the N-th Fibonacci number, and makes an array of Fibonacci sequence until num-th number
    let fibN1 = 0;    
    let fibN2 = 1;

    for (let n = 1; n<=num; n++) {
        if (n==1) {
            fibN = 0; 
        }    
        else {
            fibN = fibN2 + fibN1;
            fibN2 = fibN1;
            fibN1 = fibN;
        }
        arr.push(fibN);
    }
}

function fibOutput(num, fibFunc) {// this function printing out the Fibonacci sequence until a given number, and the num-th Fibonacci Number
    fibFunc(num, fibArr);
    console.log("Fibonacci sequense until "+num+" number: " + fibArr);

    if (num%10==1){
        console.log("The "+num+"st Fibonacci number is: " +fibN);
    }
    else if (num%10==2){
        console.log("The "+num+"nd Fibonacci number is: " +fibN);
    }
    else if (num%10==3){
        console.log("The "+num+"rd Fibonacci number is: " +fibN);
    }
    else {
        console.log("The "+num+"th Fibonacci number is: " +fibN);
    }
}

fibOutput(x,fibNumberAndSequence);