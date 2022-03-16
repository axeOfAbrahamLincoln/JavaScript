/*Given a number N, followed by N names, print a sentence to say welcome to all users (comma separated, the last one should also have and). 
For example, if there are 4 names, print "Welcome <name1>,<name2>,<name3>, and <name4>". 
If there are only 2 names, use only and to connect the names (no comma). Look at the examples below to understand the output format.

HINT: Break the problem down into multiple small problems. Solve the small individual problem first, then put it all together.
Input format

1 <= N <= 100
name1, English letters 
name2, English letters
name3, English letters
...
nameN, English letters

Example 1
Input

4
Zaid
John
Lisa
Zaynab

Output

Welcome Zaid, John, Lisa, and Zaynab

Example 2
Input

2
Zaid
Zaynab

Output (note no comma for 2)

Welcome Zaid and Zaynab

Example 3
Input

3
Zaid
Zaynab
Alex

Output

Welcome Zaid, Zaynab, and Alex
*/

const { nextLine } = require("@learnly/simple-reader");

let NoN = Number(nextLine()); //Number of Names

let WelcomeNames = "";

if (NoN<=100 && NoN>=1) {
    let CurrentNumber=1;
    if (NoN>=3) {
        while(CurrentNumber<NoN) {
            const givenName = nextLine();
            const Name = givenName.charAt(0).toUpperCase() + givenName.slice(1); //Bonus (this was not included in excercise) 
            WelcomeNames = WelcomeNames + Name + ", ";
            CurrentNumber++;
            if(CurrentNumber == NoN){
                const givenName = nextLine();
                const Name = givenName.charAt(0).toUpperCase() + givenName.slice(1);
                WelcomeNames = WelcomeNames + "and "+ Name;
            }
        }   
    }
    else {
        while(CurrentNumber<=NoN) {
            const givenName = nextLine();
            const Name = givenName.charAt(0).toUpperCase() + givenName.slice(1);
            WelcomeNames = WelcomeNames + Name;
            CurrentNumber++;
            if (CurrentNumber==2 && NoN==2) {
                WelcomeNames = WelcomeNames + " and ";
            }
        }
    } 
    console.log("Welcome " + WelcomeNames);   
}    

else {
    console.log("Not a valid number"); // Bonus (this was not included in excercise)
}