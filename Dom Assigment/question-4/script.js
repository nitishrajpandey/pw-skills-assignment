let form=document.querySelector('[data-form]')

form.addEventListener("submit",function(event){
    event.preventDefault();

    const name=document.getElementById("name").value
    const password=document.getElementById("password").value

    if (name.length>=3 && password.length>=8) {
        alert("Form Validation successful")
    }
    else{
        alert("Form Validation failed")
    }
})