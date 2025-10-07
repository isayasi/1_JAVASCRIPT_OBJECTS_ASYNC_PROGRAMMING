// A. Make an array containing at least 5 JavaScript objects.
const users = [
    { id: 1, name: "Venti", age: 20, city: "Mondstadt", active: true },
    { id: 2, name: "Zhongli", age: 30, city: "Liyue", active: false },
    { id: 3, name: "Raiden Ei", age: 27, city: "Inazuma", active: true },
    { id: 4, name: "Nahida", age: 11, city: "Sumeru", active: true },
    { id: 5, name: "Furina", age: 19, city: "Fontaine", active: false }
];

// I.	Use the same array and demonstrate a sample code using the every() method on the array.

// to check if all users have names
const allHaveNames = users.every(user => user.name && user.name.length > 0);
console.log("All users have names?", allHaveNames);

// to check if all users are above 18
const allAdults = users.every(user => user.age >= 18);
console.log("All users are adults?", allAdults);