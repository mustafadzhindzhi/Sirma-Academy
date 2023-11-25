function convertToJson(name, lastName, eyeColor) {

    const data ={
        name,
        lastName,
        eyeColor
    };

    const jsonPerson = JSON.stringify(data);
    // const objPerson = JSON.parse(jsonPerson); 
    console.log(jsonPerson);
};
convertToJson("Ivan", "Ivanov", "blue")