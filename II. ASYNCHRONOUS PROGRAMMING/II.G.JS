//G.	We first have an input field asking the user to input a number. 
Create a Promise that rejects if the inputted value is not an integer and 
resolves with the integer input being squared, printing the string “<number inputted> is <squared number> when doubled ” on the DOM. 

function squareNumber(num) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(num)) reject("Not an integer!");
        else resolve(`${num} is ${num * num} when doubled`);
    });
}

// Simulate input
let inputNum = "abc"; // try 6.5 or "abc" to test rejection

squareNumber(inputNum)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));