// F.	We first have an input field asking for the user’s name. 
Create a Promise that rejects if that input field is empty and is less than five characters, and 
resolves with the input being in reversed format, greeting the user with “good day, <name of user here>!” on the DOM. 

function greetUserF(name) {
    return new Promise((resolve, reject) => {
        if (!name || name.length < 5) reject("Invalid input!");
        else {
            let reversed = name.split("").reverse().join("");
            resolve(`Good day, ${reversed}!`);
        }
    });
}

// Simulate input
let inputName = "Ana"; // try "Ana" or "" to test rejection

greetUserF(inputName)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));