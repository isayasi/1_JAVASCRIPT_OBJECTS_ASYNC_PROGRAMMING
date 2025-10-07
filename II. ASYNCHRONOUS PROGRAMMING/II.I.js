//I.	We first have an input field asking the user to input a number. 
Create a Promise that rejects if the inputted value is not between 1 and 10 and 
resolves by printing the string “Yes <number inputted> is between 1 and 10” on the DOM.
If the user fails three times to give a number between 1 and 10, we’ll just print “You already failed three times, so no chances anymore”. 

let failCount = 0;

function validateNumber(num) {
    return new Promise((resolve, reject) => {
        if (num >= 1 && num <= 10) {
            resolve(`Yes ${num} is between 1 and 10`);
        } else {
            failCount++;
            if (failCount >= 3) {
                reject("You already failed three times, so no chances anymore");
            } else {
                reject("Invalid number, try again!");
            }
        }
    });
}

// --- Simulate tests ---
let testInputs = [11, 3, 0, 4]; 

testInputs.forEach(num => {
    validateNumber(num)
        .then(msg => console.log(msg))
        .catch(err => console.log(err));
});