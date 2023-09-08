let searchBar=document.querySelector('[data-searchBar]')
let listItem=document.querySelector('[data-listItems]')
let items=Array.from(listItem.getElementsByTagName('li'))

searchBar.addEventListener("input",function(){
    const searchItem=searchBar.value.toLowerCase();
    items.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchItem)) {
            item.style.display = 'block'; 
        } else {
            item.style.display = 'none';
        }
    });
})