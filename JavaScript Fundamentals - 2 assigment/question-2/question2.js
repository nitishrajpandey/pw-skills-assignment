function totalPrice(item1=0,item2=0,...item3){
    let total=0 
    total=item1+item2;

    for (let index = 0; index < item3.length; index++) {
        total+=item3[index]
        // console.log(total);
    }
    console.log(total);
}

totalPrice(10,78,54,15,24,35,14,21)
totalPrice(10,78,5,14,21)