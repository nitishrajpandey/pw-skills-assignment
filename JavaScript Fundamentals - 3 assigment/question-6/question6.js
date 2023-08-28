/*
function stringReverse(stringValue) {
    const splitString= stringValue.split("")
    const reverseArray=splitString.reverse();
    const newReverseWord=reverseArray.join("");
    return newReverseWord
}
console.log(stringReverse("hello"));

*/


// new method


function stringReverse(stringValue) {
    let newString=""
    for (let index =stringValue.length-1; index>=0; index--) {
        newString+=stringValue[index]
    }
    return newString
}
console.log(stringReverse("hello"));
console.log(stringReverse("my name is nitish"));