/* Given a number X, print number 1 and all the numbers up to X that are multiples of 5. 
If X is not a multiple of 5, then print the last multiple of 5 before X. For example, if the X is 52, then the last number to be printed should be 50.
Input Format

    1 <= X <= 50,000

Example 1
Input

3
Output

1
Example 2
Input

15
Output

1
5
10
15

Example 3

X is not a multiple of 5.
Input

21
Output

1
5
10
15
20

Note how 21 is not printed
*/

const { nextLine } = require("@learnly/simple-reader");

const num = Number(nextLine());

let numValid = num>0 && num<=500;

let CurrentNum = 1;

if (numValid) {
    console.log(CurrentNum);
    while (CurrentNum <= num) {
        if (CurrentNum % 5 == 0) {
            console.log(CurrentNum);
            CurrentNum = CurrentNum + 1;
        }
        else {
            CurrentNum = CurrentNum + 1;
        }
    }
}