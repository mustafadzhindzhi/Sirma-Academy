function printCityData(data) {
    for(let key in data) {  // ако ни трябват ключовете и стойността
        console.log(`${key} => ${data[key]}`);
    };

    // for (let entry of Object.entries(data)) { // ако ни трябват ключовете и стойността
    //     // console.log(entry);
    //     console.log(`${entry[0]} => ${entry[1]}`);
    // }

    // for (let key of Object.keys(data)) { // ако ни трябват ключовете и стойността
    //     console.log(`${key} => ${data[key]}`);
    // }

    // for(let value of Object.values(data)) { // подходящ само застойностите 
    //     console.log(value);
    // }
};

const cityData = {
    name: 'Varna', 
    area: 'Varna',
    population: '542000',
    country:'Bulgaria',
    postcode:'9000'
};

printCityData(cityData)