function orderProduct(arr) {
    const products = arr.sort();

    products.forEach((product, index) => {
        console.log(`${index + 1}. ${product}`);
    })
};

orderProduct(["Potatoes", "Tomatoes", "Onions", "Apples"])