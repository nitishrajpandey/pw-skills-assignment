const startButton=document.querySelector('[data-startButton]')
startButton.addEventListener('click',function(){
    let endpoint=Number(document.querySelector('[data-endpoint]').value)
    // console.log(endpoint);
    let startPoint=Number(document.querySelector('[data-startpoint]').value)
    // console.log(startPoint);
    let array1=[]
    while (endpoint>startPoint) {
        array1.push(endpoint)
        endpoint--;
    }
    // console.log(array1);
    let result=document.querySelector('[data-result]')
    result.textContent=array1
    

})


const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    
    document.querySelector('[data-endpoint]').value=""
    document.querySelector('[data-startpoint]').value=""
    document.querySelector('[data-result]').textContent="Countdown";
})



