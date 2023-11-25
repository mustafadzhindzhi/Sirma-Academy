let data = ['Peter 08888 888', 'Bob 058573 8383', 'Peter 47579 29394'];

function createPhonebook(arr) {
    let phonebook = {};

    for (let value of arr) {
        let key = value.substring(0, value.indexOf(" ")); 
        let val = value.substring(value.indexOf(" ") + 1);
        phonebook[key] = val; 
    };
    return phonebook;
};

console.log(createPhonebook(data));