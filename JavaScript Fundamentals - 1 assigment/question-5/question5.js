
const deliveryTime=document.querySelector('[data-timeButton]');
deliveryTime.addEventListener('click',function(){
    let package=document.querySelector('[data-package]').value
    // console.log(package);

    let result=document.querySelector('[data-result]')
    switch (package) {
        case "standard":
            result.textContent="standard might take 3-5 days"
            break;
        case "express":
            result.textContent="express 1-2 days"
            break;
        case "overnight":
            result.textContent="would be delivered the next day"
            break;
    
        default:
            break;
    }

})



const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    document.querySelector('[data-package]').value="";
    document.querySelector('[data-result]').textContent="Estimated delivery time";
})



