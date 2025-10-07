// A.	We first have an input field asking for the user’s name. 
Create a Promise that rejects if that input field is empty, and 
resolves with the input, greeting the user with “good day, <name of user here>!” on the DOM

function greetUserA(name) {
    return new Promise((resolve, reject) => {
        if (!name) reject("Input is empty!");
        else resolve(`Good day, ${name}!`);
    });
}

// Simulate input
let inputName = "Quenzzy"; // to test rejection, change into ""

greetUserA(inputName)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));