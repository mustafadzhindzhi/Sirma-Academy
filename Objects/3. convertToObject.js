function convertToObj(data) {

    for (let key in data) {
        console.log(`${key}: ${data[key]}`);
    }
};
const data = {
    "name": "Ivan",
    "age": 40,
    "town": "Sofia"
}

convertToObj(data)