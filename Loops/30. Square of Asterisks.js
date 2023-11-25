// Write a function that takes a number n and draws a square of n*n asterisks. Between each two asterisks there is a whitespace
function asterisks(n) {
    if (n <= 0) {
        console.log(`Invalid number`);
    }

    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += '* ';
        }
        console.log(str);
    }
};
asterisks(2)