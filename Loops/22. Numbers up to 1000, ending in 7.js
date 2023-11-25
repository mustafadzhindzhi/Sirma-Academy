// Write a program that prints the numbers in the range [1... 1000], which end in 7.

function solve() {
    for (let i = 1; i <= 1000; i++) {
        if (i % 10 == 7) {
            console.log(i);
        }
    }
};
solve()