function countNumberOfProperties(obj) {
    count=0;
    for (const key in data) {
       count+=1
    }
    console.log("total properties is : ",count);
}

let data={
    name:"nitish",
    age:"21",
    Date:"8/28/2023",
    course:"bca"
}
countNumberOfProperties(data);