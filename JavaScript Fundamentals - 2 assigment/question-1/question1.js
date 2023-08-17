// const socialMediaData=[
//     {
//         rank:1,
//         userName:"nitish",
//         age:21
//     },
//     {
//         rank:2,
//         userName:"navneet",
//         age:22
//     },
//     {
//         rank:3,
//         userName:"rohit",
//         age:23
//     },
//     {
//         rank:4,
//         userName:"mohit",
//         age:24
//     }
// ]

// function findUser(name,myArray){

//     for (let index = 0; index <myArray.length; index++) {
//         if (myArray[index].userName===name) {
//             // return socialMediaData[index]
//             console.log(`Yes, ${name} is a valid user.`);
//         }


//     }

// }

// findUser("mohit",socialMediaData);






const arrayData = ["mohit", "rohit", "nitish", "navneet", "rahul"];
function searchUser(userName) {
    if (arrayData.includes(userName)) {
        console.log(`Yes, ${userName} is a valid user.`);
    }
    else {

        console.log(`No, ${userName} is not a valid user.`);
    }
};

searchUser("nitish");
searchUser("ranuk");