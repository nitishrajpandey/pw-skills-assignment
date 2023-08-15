
const convert=document.querySelector('[data-convertButton]');
convert.addEventListener('click',function(){
    let amount=document.querySelector('[data-amount]').value
    console.log(amount);
    let country=document.querySelector('[data-country]').value
    console.log(country);

    if (country=="usa") {
        let calculation=Number(amount*82);
        let result=(`₹ ${calculation} `);
        console.log(result);
        let resulArea=document.querySelector('[data-result]')
        console.log(resulArea)
        resulArea.textContent=result;
        console.log(resulArea)
    }else if(country=="india"){
        let calculation=(Number(amount/82)).toFixed(3)
        let result=(` ${calculation} $`);
        // result=(result.toFixed(2));
        console.log( typeof calculation);
        let resulArea=document.querySelector('[data-result]')
        console.log(resulArea)
        resulArea.textContent=result;
        console.log(resulArea)
    }
})



const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    document.querySelector('[data-amount]').value="";
    document.querySelector('[data-country]').value="select country";
    document.querySelector('[data-result]').textContent="Result Area";
})



