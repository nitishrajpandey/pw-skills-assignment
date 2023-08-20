const productDetails={
    name:"realme 453module",
    price:9500,
    color:"gray",
    hardDisk:"500 GB"
}

function detailsPrint() {
    console.log("OUTPUT :");
    console.log("Below are the product details : ");
    console.log(`name : ${productDetails.name}`)
    console.log(`price : ${productDetails.price}`)
    console.log(`color : ${productDetails.color}`)
    console.log(`hard Disk : ${productDetails.hardDisk}`)
}
detailsPrint();