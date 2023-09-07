const addButton=document.querySelector('[data-addButton]')
 const subButton=document.querySelector('[data-subButton]')

let outputValue=(document.querySelector('[data-outputValue]'));
let newOutput=Number(outputValue.value)


addButton.addEventListener("click",function(){
    if (newOutput===0) {
        alert(" number is zero")
        newOutput=newOutput+1
    }
    else{
        newOutput=newOutput+1
    }
     outputValue.value=newOutput
})


subButton.addEventListener("click",function(){

    if (newOutput===0) {
        alert(" number is zero")
        newOutput=newOutput-1
    }
    else{
        newOutput=newOutput-1
    }
     outputValue.value=newOutput
})