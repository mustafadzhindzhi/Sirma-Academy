// Write a program that prints the numbers in the range [1... 1000], which end in n.

function solve(n) {
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 == n) {
            console.log(i);
        }
    }
}
solve(6)