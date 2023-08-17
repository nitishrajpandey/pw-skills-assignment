// console.log(dataCollection);
// dataCollection.forEach(data => {
//     if (typeof(data) === typeof("str")) {
//         console.log(`Found the First String : ${data}`)

//     }

// });

const dataCollection = [1, 2, 543, 21, 74, 1234, 123, 543, "nitish", 32, 763, "raj", 412];
for (let index = 0; index < dataCollection.length; index++) {
    if (typeof (dataCollection[index]) === typeof ("string")) {
        console.log(`Found the First String : ${dataCollection[index]}`)
        break
    }

}