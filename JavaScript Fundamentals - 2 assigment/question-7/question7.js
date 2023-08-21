function generateOtp(){
    numbers=[0,1,2,3,4,5,6,7,8,9]
    let otp=''
    for (let index = 0; index<4; index++) {
        otp+=numbers[Math.floor((Math.random())*10)]
    }
    return otp;
}

const result=generateOtp()
console.log(`Here is your OTP : ${result}`);