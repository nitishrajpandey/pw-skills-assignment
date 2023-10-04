// // Define the regular expression pattern
// const urlPattern =  /(http|ftp|https):\/\/([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?/;

// // Function to validate a URL
// function validateURL(input) {
//   if (urlPattern.test(input)) {
//     console.log("Valid URL");
//   } else {
//     console.log("Invalid URL");
//   }
// }

// // Test cases
// validateURL("http://www.example.com");   // Valid URL
// validateURL("www.youtube.com/@PWSkillsTech/videos");   // Valid URL
// validateURL("https://subdomain.example.co.uk"); // Valid URL
// validateURL("ftp://invalid-url.com");     // Invalid URL
// validateURL("https://invalid");           // Invalid URL




const urlLink = 'https://www.youtube.com/watch?v=_tUNvxA9UV4&t=243s&ab_channel=GorkCoder'; //Valid Url
// const urlLink = 'www.youtube.com/watch?v=_tUNvxA9UV4&t=243s&ab_channel=GorkCoder';      //Not a Valid Url


const pattern = /(http|ftp|https):\/\/([\w+?\.\w+])+([a-zA-Z0-9\~\!\@\#\$\%\^\&\*\(\)_\-\=\+\\\/\?\.\:\;\'\,]*)?/;


const regExOne = new RegExp(pattern,'gi');

if(regExOne.test(urlLink)){
    console.log("It's Valid Url");
}
else{
    console.log("It's not a Valid Url");
}