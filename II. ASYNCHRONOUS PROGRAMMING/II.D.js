// D.	We first have an input field asking for the user’s name. 
Create a Promise that rejects if that input field is empty, and 
resolves with the input being in uppercase format, greeting the user with “good day, <name of user here>!” on the DOM. 

function greetUserD(name) {
    return new Promise((resolve, reject) => {
        if (!name) reject("Input is empty!");
        else resolve(`Good day, ${name.toUpperCase()}!`);
    });
}

// Simulate input
let inputName = "Quenzzy"; // change this to "" to test rejection

greetUserD(inputName)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));