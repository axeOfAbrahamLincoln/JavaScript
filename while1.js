/* Given a number X, create a program for displaying numbers X to 1.
Input format

1 <= X <= 5000, this statement is read X is greater than or equal to 1 and X is less than or equal to 5000
Example 1
Input

5
Output

5
4
3
2
1

*/


const { nextLine } = require("@learnly/simple-reader");

const num1 = Number(nextLine());

let currentNumber = num1;

if (num1>0 && num1<=5000) {
    while(currentNumber > 0) {
        console.log(currentNumber);
        currentNumber = currentNumber-1;
    }
}
