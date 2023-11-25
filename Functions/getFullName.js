function fullName(fName, lName) {
    return (`${fName} ${lName}`)
};

let fName = fullName('Ivan', 'Ivanov');
console.log(fName);

function greetUser(name) {
    console.log(`Welcome, ${name}`);
};
greetUser(fName)