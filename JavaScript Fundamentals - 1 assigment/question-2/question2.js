const login=document.querySelector('[data-loginButton]')


login.addEventListener('click',function(){
    let userName=document.querySelector('[data-userName]').value
    console.log(userName);
    let password=document.querySelector('[data-password]').value
    console.log(password);
    let resultArea=document.querySelector('[data-result]')
    console.log(resultArea);
    if (userName=="admin" && password=="12345") {
        
        resultArea.textContent="Login successful"
    }
    else{
        resultArea.textContent="Login unsuccessful"

    }

    
})




const reset=document.querySelector('[data-resetButton]')

reset.addEventListener('click',function(){
    document.querySelector('[data-password]').value="";
    document.querySelector('[data-userName]').value="";
    document.querySelector('[data-result]').textContent="Result Area";
})



