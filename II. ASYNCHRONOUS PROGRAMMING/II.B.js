// B.	We first have an input field asking for the user’s name. 
Create a Promise that rejects if that input field is empty, and 
resolves after 5 seconds with the input, greeting the user with “good day, <name of user here>!” on the DOM. 

function greetUserB(name) {
    return new Promise((resolve, reject) => {
        if (!name) reject("Input is empty!");
        else setTimeout(() => resolve(`Good day, ${name}!`), 5000);
    });
}

// Simulate input
let inputName = "Q"; // change this to "" to test rejection

greetUserB(inputName)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));