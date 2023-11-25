//write a program that receives a positive integer 'n' and calculates its factorial
function solve(n) {
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    };
    console.log(factorial);
}
solve(5)