//Input a positive integer 'n' representing the height of the three
function treePatern(n) {
    let str = '';
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n - i; j++) {
            str += ' '
        }
        for (let k = 0; k < 2 * i - 1; k++) {
            str += '*'
        };
        str += '\n'
    };

    // Add the last star in the middle of the line
    for (let i = 1; i < n; i++) {
        str += ' ';
    }
    str += '*';

    console.log(str);
}

treePatern(6);

//   *
//  ***
// *****
//   *