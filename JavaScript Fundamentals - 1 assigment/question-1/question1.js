const result=document.querySelector('[data-resultButton]')


result.addEventListener('click',function(){
    let amount=document.querySelector('[data-amount]').value
    let discount=document.querySelector('[data-discount]').value
    let result=(amount*((100-discount)/100))
    let resultArea=document.querySelector('[data-result]')
    resultArea.textContent=result

    
})




const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    document.querySelector('[data-discount]').value="0";
    document.querySelector('[data-amount]').value="0";
    document.querySelector('[data-result]').textContent="Result Area";
})



