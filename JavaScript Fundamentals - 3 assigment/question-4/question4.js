let data={
    name:"nitish",
    lastName:"Raj",
    age:21,
    course:"B.C.A"
}

function checkValueInObject(obj,properties) {
    if (Object.keys(obj).includes(properties)) {
        console.log("yes properties found");
    }
    else{
        console.log("no properties not found");
    }
}

checkValueInObject(data,"course");
checkValueInObject(data,"courses");