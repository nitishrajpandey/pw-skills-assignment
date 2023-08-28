let map=new Map();
// adding the value in map
function addValue(name,age,email) {
    map.set('Name',name);
    map.set('Age',age);
    map.set('Email',email);
}
addValue("nitish",21,"nitish@gmail.com"); //add the value in map

// updating the value
function updateValue(value,newValue) {

    if (map.has(value)) {
        map.set(value,newValue)
    }
}
updateValue("Name","navneet");


//delete value

function deleteValue(value) {
    if (map.has(value)) {
        map.set(value,"")
    }
}
deleteValue("Name");

// updateValue("Name","rohit");

console.log(map);