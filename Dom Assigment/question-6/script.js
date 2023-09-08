let languageDropdown=document.querySelector('[data-languageDropdown]');

let options=["javascript","C++","C","python","DSA","Java"]

options.forEach((optionText)=>{
    const option=document.createElement("option");
    option.textContent=optionText

    languageDropdown.appendChild(option);
})