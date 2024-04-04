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
