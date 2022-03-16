/* Given two whole numbers representing weight in pounds, 
create a program to show 
the pounds (lb) to kilogram (kg) table between the two weights going up by 1 lb. 
Round the kg weight to two decimal places.

To convert pounds to kilograms, divide the pounds by 2.2 e.g 10 lb to kg => 10/2.2 => 4.55 kg.
Input format

    1 <= weight1 <= 500
    1 <= weight2 <= 500

Example 1
Input

1
10

Output

1 lb -> 0.45 kg
2 lb -> 0.91 kg
3 lb -> 1.36 kg
4 lb -> 1.82 kg
5 lb -> 2.27 kg
6 lb -> 2.73 kg
7 lb -> 3.18 kg
8 lb -> 3.64 kg
9 lb -> 4.09 kg
10 lb -> 4.55 kg

Example 2
Input

60
50

Output

50 lb -> 22.73 kg
51 lb -> 23.18 kg
52 lb -> 23.64 kg
53 lb -> 24.09 kg
54 lb -> 24.55 kg
55 lb -> 25.00 kg
56 lb -> 25.45 kg
57 lb -> 25.91 kg
58 lb -> 26.36 kg
59 lb -> 26.82 kg
60 lb -> 27.27 kg

*/


/* First Version
const {nextLine} = require("@learnly/simple-reader");

const num1 = Number(nextLine());

const num2 = Number(nextLine());

let lbsValid = (num1>=1 && num1<=500) && (num2>=1 && num2<=500);



if (lbsValid && (num1<num2)) {
    let repeat = num1;
    while (repeat<=num2){
        console.log(repeat+" lb -> "+ (Math.round((repeat/2.2)*100)/100).toFixed(2)+" kg");
        repeat = repeat+1;
    }
} 
else if (lbsValid && (num1 == num2)) {
    console.log(num1+" lb -> "+(Math.round((num1/2.2)*100)/100).toFixed(2)+" kg");
}
else  if (lbsValid) {
    let repeat = num2;
    while (repeat<=num1) {
        console.log(repeat+" lb -> "+ (Math.round((repeat/2.2)*100)/100).toFixed(2)+" kg");
        repeat = repeat+1;
    }
}*/
//Second Version
const {nextLine} = require("@learnly/simple-reader");

const num1 = Number(nextLine());

const num2 = Number(nextLine());

let lbsValid = (num1>=1 && num1<=500) && (num2>=1 && num2<=500);

if (lbsValid) {
    let start = Math.min(num1,num2);
    let end = Math.max(num1,num2);
    while (start<=end){
        console.log(start+" lb -> "+(Math.round((start/2.2)*100)/100).toFixed(2)+" kg");
        start++;
    }
} 
