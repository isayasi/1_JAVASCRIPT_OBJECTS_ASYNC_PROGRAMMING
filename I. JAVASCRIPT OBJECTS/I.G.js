// A. Make an array containing at least 5 JavaScript objects.
const users = [
    { id: 1, name: "Venti", age: 20, city: "Mondstadt", active: true },
    { id: 2, name: "Zhongli", age: 30, city: "Liyue", active: false },
    { id: 3, name: "Raiden Ei", age: 27, city: "Inazuma", active: true },
    { id: 4, name: "Nahida", age: 11, city: "Sumeru", active: true },
    { id: 5, name: "Furina", age: 19, city: "Fontaine", active: false }
];

// G.	Use the same array and demonstrate a sample code using the reduce() method on the array.

// calculate total ages
const totalAge = users.reduce((accumulator, user) => accumulator + user.age, 0);
console.log("Total age of all users:", totalAge);
console.log("Average age:", totalAge / users.length);