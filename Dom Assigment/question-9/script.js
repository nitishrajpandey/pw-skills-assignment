const loginButton=document.querySelector('[data-login]')
loginButton.addEventListener("click",function(){
    const outputText=document.querySelector('[data-outputText]')
    outputText.textContent="you are login."
})

const logoutButton=document.querySelector('[data-logout]')

logoutButton.addEventListener("click",function(){
    const outputText=document.querySelector('[data-outputText]')
    outputText.textContent="you are  logout."
})