userNames=["nitish","navneet","mohit","rohit"]
function checkUniqueuser(user) {
    count=0;
    for (let index = 0; index < userNames.length; index++) {
        if (userNames[index]===user) {
            count++
        }
    }
    if (count==2) {
        console.log(`The input string "${user}" contains duplicates`);
    }
    if (count==1) {
        console.log(`The input string "${user}" contains unique characters`);    
    }
    if (count==0) {
        console.log(`The input string "${user}" is a invalid character does not exit in database`);    
        
    }
}
checkUniqueuser("nitish");
checkUniqueuser("sanu");