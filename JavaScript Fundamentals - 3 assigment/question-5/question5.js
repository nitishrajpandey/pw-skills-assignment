function findAreaOfCircle(radius) {
    let pi=Math.PI
    let square=Math.pow(radius,2)
    const result=pi*square
    return result.toFixed(3)
}
let outPut=findAreaOfCircle(12);
console.log(outPut);