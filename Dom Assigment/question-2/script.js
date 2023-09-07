const button=document.querySelector('[data-button]')
console.log(button);

button.addEventListener('click',function(){
    let container=document.querySelector('[data-container]')
    console.log(container.classList)
    let heading=document.querySelector('[data-heading]')


    if (container.classList.contains('dark-mode')) {
        container.classList.remove('dark-mode')
        heading.textContent="this is light mode"
    }
    else{
        container.classList.add('dark-mode');
        heading.textContent="this is dark mode"
        button.classList.add('button-style')
    }
})