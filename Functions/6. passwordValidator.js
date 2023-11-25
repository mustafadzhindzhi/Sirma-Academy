function passwordValidator(pass) {
    if (pass.length < 6 || pass.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    };
    if (!/^[a-zA-Z0-9]+$/.test(pass)) {
        console.log('Password must consist only of letters and digits');
    };

    let digitCount = 0;
    for (let i = 0; i < pass.length; i++) {
        const char = pass[i];
        if (!isNaN(parseInt(char))) { 
            digitCount++;
        }
    };
    if (digitCount < 2) {
        console.log('Password must have at least 2 digits');
    } else {
        console.log('Password is valid');
    }
};

passwordValidator('pa1#')
