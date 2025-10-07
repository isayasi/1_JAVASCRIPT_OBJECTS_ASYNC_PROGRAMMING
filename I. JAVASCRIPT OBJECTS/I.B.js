// A. Make an array containing at least 5 JavaScript objects.
const users = [
    { id: 1, name: "Venti", age: 20, city: "Mondstadt", active: true },
    { id: 2, name: "Zhongli", age: 30, city: "Liyue", active: false },
    { id: 3, name: "Raiden Ei", age: 27, city: "Inazuma", active: true },
    { id: 4, name: "Nahida", age: 11, city: "Sumeru", active: true },
    { id: 5, name: "Furina", age: 19, city: "Fontaine", active: false }
];

// B.	Use the same array and use the forEach() method to print each object in the array. 
users.forEach(users => console.log(users));