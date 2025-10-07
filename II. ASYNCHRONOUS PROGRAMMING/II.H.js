// H.	We first have an input field asking the user to input a number. 
Create a Promise that rejects if the inputted value is not an integer and 
resolves after 5 seconds with the integer input being cubed, printing the string “<number inputted> is <cubed number> when cubed” on the DOM. 

function cubeNumber(num) {
    return new Promise((resolve, reject) => {
        if (!Number.isInteger(num)) reject("Not an integer!");
        else setTimeout(() => resolve(`${num} is ${num ** 3} when cubed`), 5000);
    });
}

// Simulate input
let inputNum = "abc"; // try 3.5 or "abc" to test rejection

cubeNumber(inputNum)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));