// Q1 - Write a program to print the Fibonacci series for a given value of N.

const fibonacci = (n) => {

    let previousNum = 0;
    let currentNum = 1;

    for (i = 0; i < n; i++) {
        console.log(previousNum);

        let nextNum = previousNum + currentNum;
        previousNum = currentNum;
        currentNum = nextNum;
    }

}

fibonacci(9) // OUTPUT - 0 1 1 2 3 5 8 13 21
 
// ---------------------------------------------------------------------------------------------------


