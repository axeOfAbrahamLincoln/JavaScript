/* Given X whole numbers, create a program to print the average (round to 2 decimal places) and sum of all X numbers.
Input format

X, 1 <= X <= 1000
numer1, whole number
number2, whole number
...
numberX, whole number

Output format

Average of the <X> numbers: <average>
Total sum of the <X> numbers: <total sum>

Example 1
Input

3
5
5
5

Output

Average of the 3 numbers: 5.00
Total sum of the 3 numbers: 15

*/


const { nextLine } = require("@learnly/simple-reader");

const x = Number(nextLine());

let xValid = x>=1 && x<=1000;

let sum = 0;

let repeat = 1;

if (xValid) {
    while (repeat<=x) {
        let num = Number (nextLine());
        sum = sum + num;
        repeat = repeat +1;
    }
    const avarage = sum/x;
    console.log("Average of the "+x+" numbers: "+average.toFixed(2));
    console.log("Total sum of the "+x+" numbers: "+ sum);
}