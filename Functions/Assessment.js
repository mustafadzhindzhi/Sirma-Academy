function printGrade(grade) {
    if (grade < 2 || grade > 6) {
        console.log('Invalid grade');
    } else if (grade >= 2 && grade <= 2.99) {
        console.log('Fail');
    } else if (grade <= 3.49) {
        console.log('Poor');
    } else if (grade <= 4.49) {
        console.log('Good');
    } else if (grade <= 5.49) {
        console.log('Very Good');
    } else {
        console.log('Excellent');
    }
};
printGrade(4.53)