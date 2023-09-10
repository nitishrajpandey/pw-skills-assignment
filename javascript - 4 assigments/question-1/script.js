const firstNumber=document.getElementById("first")
const secondNumber=document.getElementById("second")


const button=document.querySelector('[data-button]')
button.addEventListener("click",function(){
    let first=firstNumber.value
    let second=secondNumber.value
    let total=Number(first)+Number(second)
    let totalValue=document.getElementById("total")
    totalValue.value=total
})