const url = 'https://www.linkedin.com/in/nitish-raj-a93517238/';        //Valid Profile Url



const pattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}\/?$/;

const regExOne = new RegExp(pattern,'gi');

if(regExOne.test(url,pattern)){
    console.log("Valid Profile");
}
else{
    console.log("Invalid Profile Or Link");
}