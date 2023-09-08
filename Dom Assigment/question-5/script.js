let button=document.querySelector('[data-button]')
button.addEventListener("click",function(){
    let imageContainer=document.querySelector('[data-imageContainer]')
    let textShow=document.querySelector('[data-textShow]')
   if (imageContainer.style.display === "none") {
        // If the image is hidden, make it visible
        imageContainer.style.display = "block";
        // Update the message
        textShow.textContent = "Image is visible";
    } else {
        // If the image is visible, hide it
        imageContainer.style.display = "none";
        // Update the message
        textShow.textContent = "Image is hidden";
    }
})