// Spread Operator

const oldArr = [1, 2, 3];

const newArr = [...oldArr, 4, 5, 6];

console.log(newArr); // [ 1, 2, 3, 4, 5, 6 ]

const oldObj = { name: 'Max', age: 30 };

const newObj = { ...oldObj, hobbie: 'videogames' };

console.log(newObj); // { name: 'Max', age: 30, hobbie: 'videogames' }

// Rest Operator

const filter = (...args) => args.filter((el) => el == 1);

console.log(filter(1, 2, 3)); // [1]
