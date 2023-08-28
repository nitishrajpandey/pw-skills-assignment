
const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");

imageInput.addEventListener("change", function() {
    const selectedImage = imageInput.files[0];

    if (selectedImage) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagePreview.src = e.target.result;
        };

        reader.readAsDataURL(selectedImage);
    } 
    else {
        imagePreview.src = "";
    }
});

