const check=document.querySelector('[data-checkButton]');
check.addEventListener('click',function(){
    let userName=document.querySelector('[data-username]').textContent
    console.log(userName);
    let email=document.querySelector('[data-email]').textContent
    console.log(email);
    let age=document.querySelector('[data-age]').value
    console.log(age);
    let result=document.querySelector('[data-result]')
    // console.log(typeof age);
    if ( typeof userName != typeof('string') ) {
        result.textContent="Name should be a string."
    }
    if (typeof email != typeof('string')) {
        result.textContent="email should be a string."
    }
    if (typeof age != typeof(45)) {
        
        result.textContent="age should be a number."
    }
    else{
        
        result.textContent="all value is correct"
    }
   

    
})



const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    
    document.querySelector('[data-username]').value=""
    document.querySelector('[data-email]').value=""
    document.querySelector('[data-age]').value=""
    document.querySelector('[data-result]').textContent="form validation checking";
})



