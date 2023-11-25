function startfighterFormation(arr1, arr2) {
    const data = arr1.map(Number);

    function printData() {
        console.log(data.join(' '));
    }

    for (let i = 0; i < arr2.length; i++) {
        const commandTypes = arr2[i].split(' ');
        const command = commandTypes[0];

        if (command === 'destroy') {
            const removedNumber = Number(commandTypes[1]);
            if (removedNumber >= 0 && removedNumber < data.length) {
                data.splice(removedNumber, 1);
                printData();
            }
        } else if (command === 'swap') {
            const index1 = Number(commandTypes[1]);
            const index2 = Number(commandTypes[2]);

            if (index1 >= 0 && index1 < data.length && index2 >= 0 && index2 < data.length) {
                [data[index1], data[index2]] = [data[index2], data[index1]];
                printData();
            }
        } else if (command === 'add') {
            const numberAdd = Number(commandTypes[1]);
            data.push(numberAdd);
            printData();
        } else if (command === 'insert') {
            const numberToInsert = Number(commandTypes[1]);
            const indexToInsert = Number(commandTypes[2]);
            if (indexToInsert >= 0 && indexToInsert <= data.length) {
                data.splice(indexToInsert, 0, numberToInsert);
                printData();
            }
        } else if (command === 'center') {
            if (data.length % 2 === 0) {
                const middleLeft = data.length / 2 - 1;
                const middleRight = data.length / 2;
                console.log(data[middleLeft] + ' ' + data[middleRight]);
            } else {
                const centerIndex = Math.floor(data.length / 2);
                console.log(data[centerIndex]);
            }
        }
    }
};

// startfighterFormation([1, 2, 3, 4, 5],
//     ["destroy 3",
//         "swap 0 1",
//         "add 6",
//         "center"]);

startfighterFormation([1, 2, 3, 4, 5],
    ["add 6",
        "swap 0 5",
        "swap 1 4",
        "swap 2 3",
        "swap 2 100",
        "swap 2 2",
        "center"]);