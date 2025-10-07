// A. Make an array containing at least 5 JavaScript objects.
const users = [
    { id: 1, name: "Venti", age: 20, city: "Mondstadt", active: true },
    { id: 2, name: "Zhongli", age: 30, city: "Liyue", active: false },
    { id: 3, name: "Raiden Ei", age: 27, city: "Inazuma", active: true },
    { id: 4, name: "Nahida", age: 11, city: "Sumeru", active: true },
    { id: 5, name: "Furina", age: 19, city: "Fontaine", active: false }
];

// E.	Use the same array and demonstrate a sample code using the filter() method on the array.

// to get active 
const activeUsers = users.filter(user => user.active);
console.log("Active users:", activeUsers);

// older than 30
const usersOver30 = users.filter(user => user.age > 20);
console.log("Users over 20:", usersOver30);