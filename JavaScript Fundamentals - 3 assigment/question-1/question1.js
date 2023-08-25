const cars={
    make:"Audi",
    model:"Audi A6",
    year:2023
}

function showProperty() {
    for (const car in cars) {
        console.log(`${car} : ${cars[car]}`);
        }
        // console.log(Object.values(cars));
}

showProperty();