
const arrayData = ["mohit", "rohit", "nitish", "navneet", "rahul"];

function searchUser(userName){
    if (arrayData.includes(userName)) {
        console.log(`yes, ${userName} is a valid user.`);
    }
    else{
        console.log(`No, ${userName} is not a valid user.`);
    }
}
searchUser("nitish");
searchUser("ranuk");