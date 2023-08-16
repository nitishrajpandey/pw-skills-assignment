const addButton=document.querySelector('[data-add]')
let array1=[]
addButton.addEventListener('click',function(){
    let iteams=document.querySelector('[data-item]').value
    array1.push(iteams);
    addButton.addEventListener('click',function(){
        let iteams=document.querySelector('[data-item]')
        iteams.value=""
    })
    console.log(array1);


    const button=document.querySelector('[data-createButton]')
    button.addEventListener('click',function(){
        let result=document.querySelector('[data-result]')
        let array2=[]
        for (let index = 0; index < array1.length; index++) {
            array2.push(array1[index])
            
            
        }
        console.log(array2);
        // console.log(String(array2));
        result.textContent=array2
        console.log(result)

    })


    
console.log(array1);
})


// const reset=document.querySelector('[data-resetButton]')

// reset.addEventListener('click',function(){
    
//     document.querySelector('[data-items]').value=""
//     document.querySelector('[data-result]').textContent="Items list";
// })
