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

// Q2 -  Write a function largestNumber which takes aan array of numbers and returns the  largest number in that array. 


const largestNumber = (arr) => {
    let number = arr[0]

    for (i = 1; i < arr.length; i++) {

        if (arr[i] > number) {
            number = arr[i]
        }
    }

    return `largest number --> ${number}`
}

console.log(
    largestNumber([2, 3, 4, 56, 7, 100, 5]) //OUTPUT --> largest number --> 100
);


// ---------------------------------------------------------------------------------------------------

// Q3 -  Write a function factorial which takes a number and prints the factorial of it. 

const factorial = (num) => {

    let fac = 1;
    const originalNum = num;

    while (num > 0) {
        fac = fac * num;
        num--
    }
    return `Factorial of ${originalNum} is ${fac}`
}

console.log(
    factorial(8)
);

// OUTPUT - Factorial of 8 is 40320

//-------------------------------------------------------------------------------------------------------------------

// Write a function which takes an a number and returns the sum of the number.

const sumOFNumber = (num) => {

    let sum = 0;
    let originalNum = num;

    while (num > 0) {

        sum += num % 10;
        num = Math.floor(num / 10);

    }

    return `The sum of (${originalNum}) --> "${sum}"`

}

console.log(
    sumOFNumber(999999933) //OUTPUT - The sum of (999999933) --> "69"
);
