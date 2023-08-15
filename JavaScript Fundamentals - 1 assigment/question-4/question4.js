const totalBill=document.querySelector('[data-billButton]');
totalBill.addEventListener('click',function(){
    let childSeat=Number(document.querySelector('[data-child]').value)
    // console.log(childSeat);
    let adultSeat=Number(document.querySelector('[data-adult]').value)
    // console.log(adultSeat);
    let seniorSeat=Number(document.querySelector('[data-senior]').value)
    // console.log(seniorSeat);
    let total=((childSeat*100)+(adultSeat*150)+(seniorSeat*120))
    console.log(total);

    let result=document.querySelector('[data-result]')
    result.textContent=(`₹ ${total} `);
    
})



const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    
    document.querySelector('[data-child]').value=""
    document.querySelector('[data-adult]').value=""
    document.querySelector('[data-senior]').value=""
    document.querySelector('[data-result]').textContent="Total Ticket Price";
})



