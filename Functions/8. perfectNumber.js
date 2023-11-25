function perfetNum(number) {

    let temp = 0;
    let newArr = [];
    for (let i = 1; i <= number / 2; i++) { 
        if(number % i === 0) { 
            temp += i;
            newArr.push(i);
       }
    };

    if (temp === number || temp !== 0) {
        console.log('Perfect number!');
        console.log(newArr.join(' + ')); 
    } else {
        console.log("It's not so perfect.");
    }
};
perfetNum(28);