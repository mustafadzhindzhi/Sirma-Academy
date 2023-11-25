function changeName(names) {
    names[0] = 'Gosho';
};

function resolve() {
    let names = ['Ivan', 'Dimitar'];
    let namesCopy = names;
    changeName[namesCopy];
    console.log(names);
    console.log(names[0]);
}
resolve()