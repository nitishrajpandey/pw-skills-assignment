
const button=document.querySelector('[data-button]')
button.addEventListener("click",function(){
    
    const inputData=document.querySelector('[data-inputArea]').value
    console.log(inputData);

    setTimeout(() => {
        var reverseString=inputData.split("").reverse().join("");
        let output=document.querySelector('[data-outputArea]')
    
        output.value=reverseString
    }, 2000);

})





