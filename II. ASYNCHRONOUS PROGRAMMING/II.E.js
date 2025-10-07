// E.	We first have an input field asking for the user’s name.
Create a Promise that rejects if that input field is empty and is less than five characters, and 
resolves with the input being in uppercase format, greeting the user with “good day, <name of user here>!” on the DOM. 

function greetUserE(name) {
    return new Promise((resolve, reject) => {
        if (!name || name.length < 5) reject("Invalid input!");
        else resolve(`Good day, ${name.toUpperCase()}!`);
    });
}

// Simulate input
let inputName = "Quenzzy"; // try "Ana" or "" to test rejection

greetUserE(inputName)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));