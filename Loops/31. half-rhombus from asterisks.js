//write a program that accepts a positive integer n and prints a rhombus of asterisks of size n as in the example

function half(n) {
    if (n < 0) {
        console.log(`greshno chislo`);
    };

    let str = ''
    //upside 
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            str += '* '
        }
        str += '\n'
    };

    //downside
    for (let i = 1; i <= n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            str += '* '
        };
        str += '\n'
    };
    console.log(str);
};
half(3)

// *
// * *
// * * *
// * *
// *